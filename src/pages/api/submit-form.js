// src/pages/api/submit-form.js
// Endpoint de Astro que hace de proxy para enviar a WordPress

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    console.log('📤 Recibiendo formulario para enviar a WordPress...');
    
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
    
    // Enviar a WordPress
    const response = await fetch('https://cms.blixel.es/', {
      method: 'POST',
      body: wpFormData,
      headers: {
        'Referer': 'https://cms.blixel.es/',
        'User-Agent': 'Mozilla/5.0 (compatible; AstroForm/1.0)'
      }
    });
    
    if (response.ok) {
      const responseText = await response.text();
      
      // Verificar si hay errores de validación
      if (responseText.includes('validation_error') || responseText.includes('gform_validation_errors')) {
        console.log('❌ Error de validación en WordPress');
        return new Response(JSON.stringify({
          success: false,
          error: 'Error de validación en el formulario'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      console.log('✅ Formulario enviado a WordPress exitosamente');
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Formulario enviado correctamente'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } else {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
  } catch (error) {
    console.error('❌ Error procesando formulario:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Error interno del servidor'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
