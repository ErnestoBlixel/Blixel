// Script para probar la query específica de formacion-ia-empresas
const WORDPRESS_GRAPHQL_URL = 'https://cms.blixel.es/graphql';

async function testPageQuery() {
  console.log('🔍 Probando query para formacion-ia-empresas...\n');

  // Query simplificada sin SEO
  const simpleQuery = `
    query GetPageBySlug($slug: String!) {
      pageBy(slug: $slug) {
        id
        slug
        title
        date
        modified
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: simpleQuery,
        variables: {
          slug: 'formacion-ia-empresas'
        }
      }),
    });

    const json = await response.json();
    
    if (json.errors) {
      console.error('❌ Errores GraphQL:', json.errors);
      json.errors.forEach(error => {
        console.error('   -', error.message);
        if (error.extensions) {
          console.error('     Extensions:', error.extensions);
        }
      });
    } else if (json.data && json.data.pageBy) {
      console.log('✅ Página encontrada exitosamente!');
      console.log('\n📄 Datos de la página:');
      console.log('   - Título:', json.data.pageBy.title);
      console.log('   - Slug:', json.data.pageBy.slug);
      console.log('   - ID:', json.data.pageBy.id);
      console.log('   - Fecha:', json.data.pageBy.date);
      console.log('   - Modificado:', json.data.pageBy.modified);
      console.log('   - Tiene imagen destacada:', json.data.pageBy.featuredImage ? 'Sí' : 'No');
      console.log('   - Longitud del contenido:', json.data.pageBy.content?.length || 0, 'caracteres');
    } else {
      console.log('⚠️ No se encontró la página');
    }

  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
  }
}

testPageQuery();
