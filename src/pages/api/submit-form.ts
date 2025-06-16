export async function POST({ request }) {
  try {
    const formData = await request.json();
    console.log('📤 Enviando a Make webhook:', formData);
    
    // URL de tu webhook de Make
    const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/jp4xovo57gnom3guy1urlqnz1h8h3t3m';
    
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: formData.nombre || '',
        empresa: formData.empresa || '',
        trabajadores: formData.trabajadores || '',
        telefono: formData.telefono || '',
        email: formData.email || '',
        comentarios: formData.comentarios || '',
        fecha: new Date().toISOString(),
        origen: 'blixel.es'
      })
    });
    
    // Make siempre responde con 200 si recibe los datos
    if (response.ok) {
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Formulario enviado correctamente'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error('Error al enviar el formulario');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
