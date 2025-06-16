export async function POST({ request }) {
  try {
    const formData = await request.json();
    console.log('📤 Enviando a Gravity Forms:', formData);
    
    // Configuración
    const baseUrl = 'https://cms.blixel.es/wp-json/gf/v2';
    const formId = '1';
    
    // Las claves que ya tienes
    const consumerKey = 'ck_ec839f12f723598633015ff30945fc7fcd34ce1c';
    const consumerSecret = 'cs_37bf63c2011020b4cf04a206861426b6363f9741';
    
    // Preparar datos del formulario
    const submissionData = {
      input_values: {
        '1.3': formData.nombre || '',
        '6': formData.empresa || '', 
        '7': formData.trabajadores || '',
        '5': formData.telefono || '',
        '4': formData.email || '',
        '3': formData.comentarios || ''
      }
    };
    
    // WordPress/WooCommerce REST API usa Basic Auth con consumer key/secret
    const auth = btoa(`${consumerKey}:${consumerSecret}`);
    
    const response = await fetch(`${baseUrl}/forms/${formId}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
      },
      body: JSON.stringify(submissionData)
    });
    
    const responseText = await response.text();
    console.log('Respuesta:', response.status, responseText);
    
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error('Error parseando respuesta:', responseText);
      
      // Si no es JSON, verificar si es un redirect de éxito
      if (response.status === 200 || response.status === 201) {
        return new Response(JSON.stringify({ 
          success: true,
          message: 'Formulario enviado correctamente'
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      throw new Error('Respuesta inválida del servidor');
    }
    
    if ((response.ok || response.status === 201) && result.is_valid !== false) {
      return new Response(JSON.stringify({ 
        success: true,
        message: result.confirmation_message || 'Formulario enviado correctamente'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const errorMsg = result.validation_messages ? 
        Object.values(result.validation_messages).join(', ') : 
        result.message || 'Error al enviar el formulario';
      throw new Error(errorMsg);
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
