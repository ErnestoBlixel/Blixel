// Fallback directo por email usando Web3Forms (gratuito)
export async function onRequestPost(context) {
  try {
    const { request } = context;
    const formData = await request.json();
    
    console.log('📧 Enviando por email directo:', formData);
    
    // Crear el contenido del email
    const emailData = {
      access_key: "8c8aa55e-ea96-4c79-a0fd-f3e3c7d5d7e8", // Clave de Web3Forms (gratuita)
      subject: `Nuevo contacto desde blixel.es: ${formData.nombre}`,
      from_name: formData.nombre || 'Formulario Web',
      email: formData.email || 'noreply@blixel.es',
      message: `
Nuevo mensaje desde el formulario de contacto de blixel.es:

NOMBRE: ${formData.nombre || 'No especificado'}
EMAIL: ${formData.email || 'No especificado'}
EMPRESA: ${formData.empresa || 'No especificado'}
TRABAJADORES: ${formData.trabajadores || 'No especificado'}
TELÉFONO: ${formData.telefono || 'No especificado'}

COMENTARIOS:
${formData.comentarios || 'No especificado'}

---
Enviado desde: ${new Date().toLocaleString('es-ES')}
IP: ${request.headers.get('CF-Connecting-IP') || 'Desconocida'}
      `.trim()
    };
    
    // Enviar usando Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });
    
    const result = await response.json();
    console.log('📨 Web3Forms response:', result);
    
    if (result.success) {
      console.log('✅ Email enviado correctamente');
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
      throw new Error(result.message || 'Error enviando email');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
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
