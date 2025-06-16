// src/pages/api/submit-form.js
// Endpoint de Astro que hace de proxy para enviar a WordPress

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    console.log('📤 Recibiendo formulario para enviar a WordPress...');
    console.log('📋 Datos recibidos:', formData);
    
    // Validar campos requeridos
    if (!formData.nombre || !formData.email) {
      console.log('❌ Faltan campos requeridos');
      return new Response(JSON.stringify({
        success: false,
        error: 'Nombre y email son campos requeridos'
      }), {
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    
    // Crear FormData para enviar a WordPress
    const wpFormData = new FormData();
    
    // Mapear campos del formulario
    wpFormData.append('input_1.3', formData.nombre || '');
    wpFormData.append('input_6', formData.empresa || '');
    wpFormData.append('input_7', formData.trabajadores || '');
    wpFormData.append('input_5', formData.telefono || '');
    wpFormData.append('input_4', formData.email || '');
    wpFormData.append('input_3', formData.comentarios || '');
    
    // Campos obligatorios de Gravity Forms
    wpFormData.append('gform_submit', '1');
    wpFormData.append('is_submit_1', '1');
    wpFormData.append('gform_submit_button_1', 'Enviar');
    wpFormData.append('gform_unique_id', '');
    wpFormData.append('state_1', '');
    wpFormData.append('gform_target_page_number_1', '0');
    wpFormData.append('gform_source_page_number_1', '1');
    wpFormData.append('gform_field_values', '');
    
    console.log('🔄 Enviando a WordPress...');
    
    // Enviar a WordPress con más opciones
    const response = await fetch('https://cms.blixel.es/', {
      method: 'POST',
      body: wpFormData,
      headers: {
        'Referer': 'https://cms.blixel.es/',
        'User-Agent': 'Mozilla/5.0 (compatible; AstroForm/1.0)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate'
      },
      // Añadir timeout
      signal: AbortSignal.timeout(10000) // 10 segundos
    });
    
    console.log('📨 Respuesta de WordPress - Status:', response.status);
    console.log('📨 Headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('📄 Respuesta completa:', responseText.substring(0, 500) + '...');
    
    if (response.ok) {
      // Verificar si hay errores de validación en la respuesta
      if (responseText.includes('validation_error') || 
          responseText.includes('gform_validation_errors') ||
          responseText.includes('Please enter a valid') ||
          responseText.includes('This field is required')) {
        console.log('❌ Error de validación en WordPress');
        return new Response(JSON.stringify({
          success: false,
          error: 'Error de validación en el formulario. Verifica que todos los campos estén correctos.'
        }), {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
      
      // Verificar si el formulario fue enviado correctamente
      if (responseText.includes('gform_confirmation_message') || 
          responseText.includes('Thank you') ||
          responseText.includes('Gracias') ||
          response.status === 200) {
        console.log('✅ Formulario enviado a WordPress exitosamente');
        
        return new Response(JSON.stringify({
          success: true,
          message: 'Formulario enviado correctamente'
        }), {
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
      
      // Si llegamos aquí, algo raro pasó
      console.log('⚠️ Respuesta extraña de WordPress');
      return new Response(JSON.stringify({
        success: false,
        error: 'Respuesta inesperada del servidor'
      }), {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      
    } else {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    
  } catch (error) {
    console.error('❌ Error procesando formulario:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Error interno del servidor. Por favor, inténtalo de nuevo.'
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// Manejar preflight requests de CORS
export async function OPTIONS({ request }) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
