// Cloudflare Pages Function para el formulario
export async function onRequestPost(context) {
  try {
    const { request } = context;
    const formData = await request.json();
    
    console.log('📤 Datos recibidos en Cloudflare Function:', formData);
    
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
    
    console.log('🔄 Enviando a WordPress...');
    
    // Enviar a WordPress
    const response = await fetch('https://cms.blixel.es/', {
      method: 'POST',
      body: wpForm,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://cms.blixel.es/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });
    
    console.log('📨 WordPress status:', response.status);
    
    if (response.ok || response.status === 302) {
      console.log('✅ Enviado correctamente a WordPress');
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Formulario enviado correctamente'
      }), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    } else {
      throw new Error(`WordPress respondió con ${response.status}`);
    }
    
  } catch (error) {
    console.error('❌ Error en Cloudflare Function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// Manejar OPTIONS para CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
