export async function POST({ request }) {
  try {
    const formData = await request.json();
    console.log('📤 Enviando formulario:', formData);
    
    // Usar tu endpoint personalizado
    const response = await fetch('https://cms.blixel.es/wp-json/blixel/v1/test-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    console.log('🔍 Status:', response.status);
    console.log('🔍 Headers:', Object.fromEntries(response.headers.entries()));
    
    // Si es 403, intentar obtener más información
    if (response.status === 403) {
      const errorText = await response.text();
      console.error('⛔ Error 403:', errorText);
      throw new Error('Acceso denegado. Verifica los permisos CORS en WordPress.');
    }
    
    const responseText = await response.text();
    console.log('📨 Respuesta raw:', responseText);
    
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error('Error parseando respuesta:', responseText);
      throw new Error('Respuesta inválida del servidor');
    }
    
    if (response.ok && result.success) {
      return new Response(JSON.stringify({ 
        success: true,
        message: result.message || 'Formulario enviado correctamente',
        entry_id: result.entry_id
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(result.message || 'Error al enviar el formulario');
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
