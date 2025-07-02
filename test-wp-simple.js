// Script simple para probar GraphQL
const WORDPRESS_GRAPHQL_URL = 'https://cms.blixel.es/graphql';

async function testGraphQL() {
  console.log('🔍 Probando conexión con WordPress GraphQL...\n');
  console.log('URL:', WORDPRESS_GRAPHQL_URL);

  try {
    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetAllPages {
            pages(first: 100, where: { status: PUBLISH }) {
              nodes {
                id
                slug
                title
                status
                date
              }
            }
          }
        `
      }),
    });

    const data = await response.json();
    
    if (data.errors) {
      console.error('❌ Errores GraphQL:', data.errors);
      return;
    }

    if (data.data && data.data.pages) {
      console.log(`✅ Se encontraron ${data.data.pages.nodes.length} páginas:\n`);
      data.data.pages.nodes.forEach(page => {
        console.log(`📄 ${page.title}`);
        console.log(`   - Slug: /${page.slug}`);
        console.log(`   - Estado: ${page.status}`);
        console.log(`   - ID: ${page.id}`);
        console.log('');
      });
      
      // Buscar específicamente la página formacion-ia-empresas
      const formacionPage = data.data.pages.nodes.find(p => p.slug === 'formacion-ia-empresas');
      if (formacionPage) {
        console.log('✅ ¡Página "formacion-ia-empresas" encontrada!');
      } else {
        console.log('⚠️  No se encontró la página "formacion-ia-empresas"');
        console.log('\nPosibles razones:');
        console.log('1. La página no está publicada (está en borrador)');
        console.log('2. El slug es diferente al esperado');
        console.log('3. La página es de un tipo diferente (post, custom post type)');
      }
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n🔧 Verifica:');
    console.log('1. Que WPGraphQL esté instalado y activo');
    console.log('2. Que la URL sea correcta');
    console.log('3. Que no haya restricciones de CORS');
  }
}

testGraphQL();
