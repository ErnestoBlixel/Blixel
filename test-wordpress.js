// Script para probar la conexión con WordPress y ver los datos
const GRAPHQL_URL = 'https://cms.blixel.es/graphql';

const query = `
  query GetHomePage {
    page(id: "/", idType: URI) {
      title
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
      }
    }
  }
`;

async function testWordPress() {
  console.log('🔍 Probando conexión con WordPress...\n');
  console.log('URL:', GRAPHQL_URL);
  console.log('----------------------------------------\n');

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      console.error('❌ Error HTTP:', response.status, response.statusText);
      return;
    }

    const data = await response.json();

    if (data.errors) {
      console.error('❌ Errores GraphQL:', data.errors);
      return;
    }

    if (data.data?.page) {
      const page = data.data.page;
      console.log('✅ CONEXIÓN EXITOSA!\n');
      console.log('📄 DATOS DE LA PÁGINA HOME:\n');
      console.log('Título de la página (H1):', page.title || '(no configurado)');
      console.log('Meta descripción (Yoast):', page.seo?.metaDesc || '(no configurada)');
      console.log('\n📋 DATOS SEO COMPLETOS:');
      console.log('SEO Title:', page.seo?.title || '(no configurado)');
      console.log('OG Title:', page.seo?.opengraphTitle || '(no configurado)');
      console.log('OG Description:', page.seo?.opengraphDescription || '(no configurada)');
      
      console.log('\n----------------------------------------');
      console.log('🎯 RESUMEN:');
      console.log('- H1 del Hero mostrará:', page.title || 'Inteligencia Artificial para Empresas');
      console.log('- Descripción mostrará:', page.seo?.metaDesc || 'Automatización Inteligente para tu Empresa');
    } else {
      console.log('⚠️ No se encontró la página principal');
      console.log('Verifica que exista una página con slug "/" en WordPress');
    }

  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
    console.log('\nPosibles causas:');
    console.log('- El plugin WPGraphQL no está activado');
    console.log('- La URL es incorrecta');
    console.log('- Problemas de CORS');
  }
}

// Ejecutar el test
testWordPress();
