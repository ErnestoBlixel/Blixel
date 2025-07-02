// Test final para verificar que WordPress funciona correctamente
import fetch from 'node-fetch';

const WORDPRESS_GRAPHQL_URL = 'https://cms.blixel.es/graphql';

async function testWordPressFunctionality() {
  console.log('🧪 Test completo de funcionalidad WordPress + Astro\n');

  // 1. Test de obtener slugs de páginas
  console.log('1️⃣ Obteniendo slugs de páginas...');
  try {
    const slugsResponse = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetPageSlugs {
            pages(first: 10, where: { status: PUBLISH }) {
              nodes {
                slug
                title
                uri
              }
            }
          }
        `
      })
    });

    const slugsData = await slugsResponse.json();
    if (slugsData.data && slugsData.data.pages) {
      console.log('✅ Páginas encontradas:');
      slugsData.data.pages.nodes.forEach(page => {
        console.log(`   - ${page.title} (slug: ${page.slug}, uri: ${page.uri})`);
      });
      console.log('');

      // 2. Test de obtener una página específica con nodeByUri
      if (slugsData.data.pages.nodes.length > 0) {
        const testPage = slugsData.data.pages.nodes[0];
        console.log(`2️⃣ Obteniendo página "${testPage.title}" con nodeByUri...`);
        
        const pageResponse = await fetch(WORDPRESS_GRAPHQL_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query GetPageBySlug($uri: String!) {
                nodeByUri(uri: $uri) {
                  __typename
                  ... on Page {
                    id
                    databaseId
                    slug
                    uri
                    title
                    date
                    modified
                    content
                    status
                    featuredImage {
                      node {
                        sourceUrl
                        altText
                      }
                    }
                  }
                }
              }
            `,
            variables: {
              uri: testPage.uri
            }
          })
        });

        const pageData = await pageResponse.json();
        if (pageData.data && pageData.data.nodeByUri) {
          console.log('✅ Página obtenida correctamente:');
          console.log(`   - Título: ${pageData.data.nodeByUri.title}`);
          console.log(`   - Slug: ${pageData.data.nodeByUri.slug}`);
          console.log(`   - URI: ${pageData.data.nodeByUri.uri}`);
          console.log(`   - Tipo: ${pageData.data.nodeByUri.__typename}`);
          console.log(`   - Contenido: ${pageData.data.nodeByUri.content ? 'Sí' : 'No'}`);
          console.log(`   - Imagen destacada: ${pageData.data.nodeByUri.featuredImage ? 'Sí' : 'No'}`);
        }
      }

      // 3. Test de conversión de slug a URI
      console.log('\n3️⃣ Test de conversión slug → URI:');
      const testSlugs = ['formacion-ia-empresas', 'contacto', 'servicios'];
      testSlugs.forEach(slug => {
        const uri = `/${slug}/`;
        console.log(`   ${slug} → ${uri}`);
      });

    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }

  console.log('\n✨ Test completado. Si todo salió bien, tu integración WordPress + Astro está funcionando correctamente.');
}

testWordPressFunctionality();
