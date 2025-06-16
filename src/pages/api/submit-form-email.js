// src/pages/api/submit-form-email.js
// Versión que envía por email como fallback

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    console.log('📧 Enviando formulario por email...');
    
    // Crear el contenido del email
    const emailContent = `
Nuevo mensaje desde el formulario de contacto:

Nombre: ${formData.nombre || 'No especificado'}
Email: ${formData.email || 'No especificado'}
Empresa: ${formData.empresa || 'No especificado'}
Número de trabajadores: ${formData.trabajadores || 'No especificado'}
Teléfono: ${formData.telefono || 'No especificado'}
Comentarios: ${formData.comentarios || 'No especificado'}

Enviado desde: ${formData.source || 'Formulario web'}
Fecha: ${new Date().toLocaleString('es-ES')}
`;

    // Usar un servicio de email simple (Formspree como ejemplo)
    // Puedes cambiar esto por tu servicio preferido
    const emailResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.nombre,
        message: emailContent,
        _replyto: formData.email,
        _subject: `Nuevo contacto desde la web: ${formData.nombre}`
      })
    });

    if (emailResponse.ok) {
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
      throw new Error('Error enviando email');
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
