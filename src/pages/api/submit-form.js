// src/pages/api/submit-form.js
// Endpoint simplificado para Gravity Forms

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    console.log('📤 Enviando a WordPress:', formData);
    
    // Crear FormData para WordPress
    const wpForm = new FormData();
    wpForm.append('input_1.3', formData.nombre || '');
    wpForm.append('input_4', formData.email || '');
    wpForm.append('input_6', formData.empresa || '');
    wpForm.append('input_7', formData.trabajadores || '');
    wpForm.append('input_5', formData.telefono || '');
    wpForm.append('input_3', formData.comentarios || '');
    
    // Campos requeridos por Gravity Forms
    wpForm.append('gform_submit', '1');
    wpForm.append('is_submit_1', '1');
    wpForm.append('gform_submit_button_1', 'Enviar');
    wpForm.append('gform_unique_id', '');
    wpForm.append('state_1', '');
    wpForm.append('gform_target_page_number_1', '0');
    wpForm.append('gform_source_page_number_1', '1');
    wpForm.append('gform_field_values', '');
    
    // Enviar a WordPress
    const response = await fetch('https://cms.blixel.es/', {
      method: 'POST',
      body: wpForm,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://cms.blixel.es/'
      }
    });
    
    console.log('📨 WordPress response status:', response.status);
    
    // Si WordPress responde con 200 o 302 (redirect), consideramos éxito
    if (response.ok || response.status === 302) {
      console.log('✅ Formulario enviado correctamente');
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
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Error al enviar formulario'
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
