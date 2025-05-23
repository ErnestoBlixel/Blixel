// src/utils/debug-wordpress.js
// Script de depuración para ver qué está pasando con WordPress

async function debugWordPress() {
  console.log('🔍 Iniciando diagnóstico de WordPress...');
  
  try {
    // 1. Probar GraphQL básico
    console.log('📡 Probando GraphQL...');
    const graphqlResponse = await fetch('https://blixel.es/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query DebugQuery {
            generalSettings {
              title
              description
              url
            }
            pages(first: 10) {
              nodes {
                id
                title
                slug
                content
                status
              }
            }
            posts(first: 5) {
              nodes {
                id
                title
                slug
                excerpt
                status
              }
            }
          }
        `
      })
    });

    if (graphqlResponse.ok) {
      const graphqlData = await graphqlResponse.json();
      console.log('✅ GraphQL Response:', JSON.stringify(graphqlData, null, 2));
      
      if (graphqlData.data?.pages?.nodes) {
        console.log('📄 Páginas encontradas:');
        graphqlData.data.pages.nodes.forEach(page => {
          console.log(`- ID: ${page.id}, Título: "${page.title}", Slug: "${page.slug}", Estado: ${page.status}`);
        });
      }
      
      if (graphqlData.data?.posts?.nodes) {
        console.log('📝 Posts encontrados:');
        graphqlData.data.posts.nodes.forEach(post => {
          console.log(`- ID: ${post.id}, Título: "${post.title}", Slug: "${post.slug}", Estado: ${post.status}`);
        });
      }
    } else {
      console.error('❌ Error GraphQL:', graphqlResponse.status, graphqlResponse.statusText);
    }

    // 2. Probar REST API
    console.log('🔗 Probando REST API...');
    const restResponse = await fetch('https://blixel.es/wp-json/wp/v2/pages');
    if (restResponse.ok) {
      const restData = await restResponse.json();
      console.log('✅ REST API Pages:', restData.length, 'páginas encontradas');
      restData.forEach(page => {
        console.log(`- ID: ${page.id}, Título: "${page.title.rendered}", Slug: "${page.slug}"`);
      });
    } else {
      console.error('❌ Error REST API:', restResponse.status);
    }

  } catch (error) {
    console.error('💥 Error en diagnóstico:', error);
  }
}

// Ejecutar diagnóstico
debugWordPress();
