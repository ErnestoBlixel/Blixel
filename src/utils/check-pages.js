// src/utils/check-pages.js
// Script para verificar qué páginas existen en WordPress

async function checkPages() {
  console.log('🔍 Verificando páginas disponibles en WordPress...\n');

  try {
    const pagesQuery = `
      query GetAllPages {
        pages(first: 50) {
          nodes {
            id
            title
            slug
            status
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
        query: pagesQuery
      })
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data.errors) {
        console.log('❌ Errores:', data.errors.map(e => e.message));
        return;
      }

      const pages = data.data?.pages?.nodes || [];
      console.log(`📄 Total de páginas encontradas: ${pages.length}\n`);

      // Mostrar todas las páginas
      pages.forEach((page, index) => {
        console.log(`${index + 1}. "${page.title}"`);
        console.log(`   📎 Slug: ${page.slug}`);
        console.log(`   📋 Estado: ${page.status}`);
        
        if (page.seo?.title) {
          console.log(`   🎯 SEO Título: ${page.seo.title}`);
        } else {
          console.log(`   ❌ SEO Título: No configurado`);
        }
        
        if (page.seo?.metaDesc) {
          console.log(`   📝 SEO Descripción: ${page.seo.metaDesc.substring(0, 80)}...`);
        } else {
          console.log(`   ❌ SEO Descripción: No configurado`);
        }
        
        console.log(''); // Línea en blanco
      });

      // Buscar específicamente páginas que podrían ser "home"
      console.log('🏠 ANÁLISIS DE PÁGINA HOME:');
      
      const homePage = pages.find(p => p.slug === 'home');
      if (homePage) {
        console.log('✅ Se encontró página con slug "home"');
        console.log(`   Título: ${homePage.title}`);
        console.log(`   SEO Título: ${homePage.seo?.title || 'NO CONFIGURADO'}`);
        console.log(`   SEO Descripción: ${homePage.seo?.metaDesc || 'NO CONFIGURADO'}`);
        
        if (homePage.seo?.title && homePage.seo?.metaDesc) {
          console.log('\n🎉 ¡La página home tiene SEO configurado correctamente!');
        } else {
          console.log('\n⚠️ La página home existe pero necesita configurar el SEO');
        }
      } else {
        console.log('❌ NO se encontró página con slug "home"');
        
        // Buscar páginas similares
        const possibleHomePages = pages.filter(p => 
          p.slug.includes('home') || 
          p.slug.includes('inicio') ||
          p.title.toLowerCase().includes('home') ||
          p.title.toLowerCase().includes('inicio')
        );
        
        if (possibleHomePages.length > 0) {
          console.log('\n💡 Páginas que podrían ser "home":');
          possibleHomePages.forEach(page => {
            console.log(`   - "${page.title}" (slug: ${page.slug})`);
          });
        } else {
          console.log('\n💡 No se encontraron páginas similares a "home"');
          console.log('📝 NECESITAS CREAR UNA PÁGINA CON SLUG "home"');
        }
      }

    } else {
      console.log('❌ Error al hacer la consulta');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Ejecutar verificación
checkPages();