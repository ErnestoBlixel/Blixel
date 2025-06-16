export async function POST({ request }) {
  try {
    const formData = await request.json();
    console.log('📤 Enviando a WordPress:', formData);
    
    const response = await fetch('https://cms.blixel.es/wp-json/blixel/v1/test-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (response.ok && result.success) {
      return new Response(JSON.stringify({ 
        success: true,
        message: result.message
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(result.message || 'Error al enviar el formulario');
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
