// Solución obteniendo el token dinámicamente
export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Primero, obtener la página con el formulario para extraer el token
    const formPageResponse = await fetch('https://cms.blixel.es/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const html = await formPageResponse.text();
    
    // Extraer el valor de state_1
    const stateMatch = html.match(/name="state_1"\s+value="([^"]+)"/);
    const state1Value = stateMatch ? stateMatch[1] : '';
    
    if (!state1Value) {
      throw new Error('No se pudo obtener el token del formulario');
    }
    
    // Preparar los datos del formulario
    const wpForm = new FormData();
    wpForm.append('input_1.3', formData.nombre || '');
    wpForm.append('input_4', formData.email || '');
    wpForm.append('input_6', formData.empresa || '');
    wpForm.append('input_7', formData.trabajadores || '');
    wpForm.append('input_5', formData.telefono || '');
    wpForm.append('input_3', formData.comentarios || '');
    wpForm.append('gform_submit', '1');
    wpForm.append('is_submit_1', '1');
    wpForm.append('state_1', state1Value);
    wpForm.append('gform_target_page_number_1', '0');
    wpForm.append('gform_source_page_number_1', '1');
    wpForm.append('gform_field_values', '');
    
    // Enviar el formulario
    const response = await fetch('https://cms.blixel.es/', {
      method: 'POST',
      body: wpForm,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://cms.blixel.es/',
        'Origin': 'https://cms.blixel.es'
      },
      redirect: 'manual' // Importante para manejar redirects
    });
    
    // Gravity Forms típicamente responde con redirect 302/303 en éxito
    if (response.status === 302 || response.status === 303 || response.ok) {
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Formulario enviado correctamente'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const responseText = await response.text();
      // Buscar mensajes de error en la respuesta
      const errorMatch = responseText.match(/gform_validation_error[^>]*>(.*?)<\/div>/s);
      const errorMessage = errorMatch ? errorMatch[1].replace(/<[^>]*>/g, '').trim() : 'Error al enviar el formulario';
      
      throw new Error(errorMessage);
    }
    
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
