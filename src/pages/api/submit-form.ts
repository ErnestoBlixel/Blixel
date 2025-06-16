export async function POST({ request }) {
  try {
    const formData = await request.json();
    console.log('📤 Enviando a Gravity Forms:', formData);
    
    // Usar la API v1 de Gravity Forms con autenticación básica
    const publicKey = '9c7eb63149';
    const privateKey = '1706bbd5467925a';
    const formId = '1';
    
    // Preparar los datos del formulario
    const submissionData = {
      input_values: {
        input_1_3: formData.nombre || '',
        input_6: formData.empresa || '',
        input_7: formData.trabajadores || '',
        input_5: formData.telefono || '',
        input_4: formData.email || '',
        input_3: formData.comentarios || ''
      }
    };
    
    // Crear autenticación básica usando btoa (compatible con Cloudflare)
    const auth = btoa(`${publicKey}:${privateKey}`);
    
    // Hacer la petición a la API
    const response = await fetch(`https://cms.blixel.es/gravityformsapi/forms/${formId}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
      },
      body: JSON.stringify(submissionData)
    });
    
    const result = await response.json();
    console.log('Respuesta:', result);
    
    if (response.ok && result.status === 200) {
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Formulario enviado correctamente'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(result.response?.validation_messages ? 
        Object.values(result.response.validation_messages).join(', ') : 
        'Error al enviar el formulario');
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
