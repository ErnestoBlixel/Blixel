// Script para verificar si SEO funciona correctamente
const WORDPRESS_GRAPHQL_URL = 'https://cms.blixel.es/graphql';

async function checkSEO() {
  console.log('🔍 Verificando campos SEO disponibles...\n');

  const seoQuery = `
    query CheckSEOFields {
      page(id: "formacion-ia-empresas", idType: SLUG) {
        id
        title
        seo {
          title
          metaDesc
          canonical
          opengraphTitle
          opengraphDescription
          opengraphImage {
            sourceUrl
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: seoQuery }),
    });
    
    const data = await response.json();
    
    if (data.errors) {
      console.log('❌ Error al consultar SEO:', data.errors[0].message);
      console.log('\nProbablemente el plugin SEO no esté configurado correctamente.');
    } else if (data.data?.page) {
      console.log('✅ Página encontrada');
      if (data.data.page.seo) {
        console.log('✅ SEO está disponible:');
        console.log('   - SEO Title:', data.data.page.seo.title || '(no configurado)');
        console.log('   - Meta Description:', data.data.page.seo.metaDesc || '(no configurado)');
        console.log('   - Canonical:', data.data.page.seo.canonical || '(no configurado)');
      } else {
        console.log('⚠️ SEO no está disponible o no está configurado para esta página');
      }
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkSEO();
