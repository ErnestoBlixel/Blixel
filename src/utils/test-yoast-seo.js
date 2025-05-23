// src/utils/test-yoast-seo.js
// Script para verificar si Yoast SEO está disponible en GraphQL

async function testYoastSEO() {
  console.log('🔍 Verificando disponibilidad de Yoast SEO en GraphQL...\n');

  try {
    // Test 1: Verificar si hay campos SEO disponibles
    const seoTestQuery = `
      query TestSEOFields {
        pages(first: 5) {
          nodes {
            title
            slug
            seo {
              title
              metaDesc
            }
          }
        }
      }
    `;

    const response = await fetch('https://blixel.es/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: seoTestQuery
      })
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data.errors) {
        console.log('❌ Errores al consultar campos SEO:');
        data.errors.forEach(error => {
          console.log(`   - ${error.message}`);
        });
        console.log('\n💡 Esto indica que Yoast SEO no está instalado o no está integrado con GraphQL');
        console.log('📝 Soluciones:');
        console.log('   1. Instalar plugin "Yoast SEO"');
        console.log('   2. Instalar plugin "WPGraphQL Yoast SEO Addon"');
      } else {
        console.log('✅ Campos SEO disponibles en GraphQL');
        
        const pages = data.data?.pages?.nodes || [];
        console.log(`📄 Páginas encontradas: ${pages.length}`);
        
        pages.forEach((page, index) => {
          console.log(`\n${index + 1}. "${page.title}" (${page.slug})`);
          if (page.seo?.title) {
            console.log(`   ✅ SEO Título: ${page.seo.title}`);
          } else {
            console.log(`   ❌ SEO Título: No configurado`);
          }
          
          if (page.seo?.metaDesc) {
            console.log(`   ✅ SEO Descripción: ${page.seo.metaDesc.substring(0, 100)}...`);
          } else {
            console.log(`   ❌ SEO Descripción: No configurado`);
          }
        });

        // Verificar si existe página home específicamente
        const homePage = pages.find(p => p.slug === 'home');
        if (homePage) {
          console.log('\n🏠 PÁGINA HOME ENCONTRADA:');
          console.log(`   Título: ${homePage.title}`);
          console.log(`   SEO Título: ${homePage.seo?.title || 'No configurado'}`);
          console.log(`   SEO Descripción: ${homePage.seo?.metaDesc || 'No configurado'}`);
          
          if (homePage.seo?.title && homePage.seo?.metaDesc) {
            console.log('\n🎉 ¡TODO CONFIGURADO CORRECTAMENTE!');
          } else {
            console.log('\n⚠️ Necesitas configurar el SEO de la página home');
          }
        } else {
          console.log('\n❌ No se encontró página con slug "home"');
        }
      }
    } else {
      console.log('❌ Error al hacer la consulta GraphQL');
    }

  } catch (error) {
    console.error('❌ Error durante la prueba:', error.message);
  }
}

// Ejecutar test
testYoastSEO();