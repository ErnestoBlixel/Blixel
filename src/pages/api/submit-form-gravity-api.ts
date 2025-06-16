// Solución usando la API REST oficial de Gravity Forms
import crypto from 'crypto';

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Configuración de la API de Gravity Forms
    const apiKey = 'TU_API_KEY'; // Reemplaza con tu clave API
    const privateKey = 'TU_PRIVATE_KEY'; // Reemplaza con tu clave privada
    const formId = '1';
    const route = `forms/${formId}/submissions`;
    
    // Crear la firma para autenticación
    const expires = Math.round(new Date().getTime() / 1000) + 3600; // 1 hora
    const stringToSign = `${apiKey}:POST:${route}:${expires}`;
    const signature = crypto
      .createHmac('sha1', privateKey)
      .update(stringToSign)
      .digest('base64');
    
    // Preparar los datos del formulario
    const submissionData = {
      input_1_3: formData.nombre || '',
      input_6: formData.empresa || '',
      input_7: formData.trabajadores || '',
      input_5: formData.telefono || '',
      input_4: formData.email || '',
      input_3: formData.comentarios || ''
    };
    
    // Hacer la petición a la API
    const response = await fetch(
      `https://cms.blixel.es/gravityformsapi/${route}?api_key=${apiKey}&signature=${encodeURIComponent(signature)}&expires=${expires}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      }
    );
    
    const result = await response.json();
    
    if (response.ok && result.is_valid) {
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Formulario enviado correctamente'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(result.validation_messages ? 
        Object.values(result.validation_messages).join(', ') : 
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
