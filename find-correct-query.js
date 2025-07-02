// Script para explorar las formas correctas de consultar páginas en WPGraphQL
const WORDPRESS_GRAPHQL_URL = 'https://cms.blixel.es/graphql';

async function findCorrectQuery() {
  console.log('🔍 Explorando formas de consultar páginas en WPGraphQL...\n');

  // Query 1: Usando page con id y idType
  const pageBySlugQuery = `
    query GetPageBySlug {
      page(id: "formacion-ia-empresas", idType: SLUG) {
        id
        databaseId
        slug
        uri
        title
        content
        date
        modified
        status
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  // Query 2: Usando page con URI
  const pageByUriQuery = `
    query GetPageByUri {
      page(id: "/formacion-ia-empresas/", idType: URI) {
        id
        databaseId
        slug
        uri
        title
        content
        date
        modified
        status
      }
    }
  `;

  // Query 3: Usando nodeByUri
  const nodeByUriQuery = `
    query GetNodeByUri {
      nodeByUri(uri: "/formacion-ia-empresas/") {
        __typename
        ... on Page {
          id
          databaseId
          slug
          uri
          title
          content
          date
          modified
          status
        }
      }
    }
  `;

  // Query 4: Verificar si tiene SEO habilitado
  const pageWithSeoQuery = `
    query GetPageWithSeo {
      page(id: "formacion-ia-empresas", idType: SLUG) {
        id
        title
        seo {
          title
          metaDesc
          canonical
        }
      }
    }
  `;

  try {
    console.log('1️⃣ Probando: page(id: "formacion-ia-empresas", idType: SLUG)');
    let response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: pageBySlugQuery }),
    });
    let data = await response.json();
    
    if (data.errors) {
      console.log('   ❌ Error:', data.errors[0].message);
    } else if (data.data?.page) {
      console.log('   ✅ ¡FUNCIONA! Esta es la forma correcta.');
      console.log('   📄 Página encontrada:');
      console.log('      - Título:', data.data.page.title);
      console.log('      - Slug:', data.data.page.slug);
      console.log('      - URI:', data.data.page.uri);
      console.log('      - Estado:', data.data.page.status);
      console.log('      - ID de base de datos:', data.data.page.databaseId);
    } else {
      console.log('   ⚠️ No se encontró la página');
    }

    console.log('\n2️⃣ Probando: page(id: "/formacion-ia-empresas/", idType: URI)');
    response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: pageByUriQuery }),
    });
    data = await response.json();
    
    if (data.errors) {
      console.log('   ❌ Error:', data.errors[0].message);
    } else if (data.data?.page) {
      console.log('   ✅ También funciona con URI');
    } else {
      console.log('   ⚠️ No se encontró la página');
    }

    console.log('\n3️⃣ Probando: nodeByUri(uri: "/formacion-ia-empresas/")');
    response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: nodeByUriQuery }),
    });
    data = await response.json();
    
    if (data.errors) {
      console.log('   ❌ Error:', data.errors[0].message);
    } else if (data.data?.nodeByUri) {
      console.log('   ✅ nodeByUri también funciona');
      console.log('      - Tipo:', data.data.nodeByUri.__typename);
    } else {
      console.log('   ⚠️ No se encontró la página');
    }

    console.log('\n4️⃣ Verificando si SEO está disponible...');
    response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: pageWithSeoQuery }),
    });
    data = await response.json();
    
    if (data.errors) {
      console.log('   ❌ SEO no está disponible:', data.errors[0].message);
    } else if (data.data?.page?.seo) {
      console.log('   ✅ SEO está disponible');
      console.log('      - SEO Title:', data.data.page.seo.title);
      console.log('      - Meta Desc:', data.data.page.seo.metaDesc);
    } else {
      console.log('   ⚠️ SEO no configurado para esta página');
    }

  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
  }

  console.log('\n✨ RESUMEN:');
  console.log('La forma correcta de consultar páginas en tu WPGraphQL es:');
  console.log('- page(id: "slug-de-la-pagina", idType: SLUG)');
  console.log('- page(id: "/uri-de-la-pagina/", idType: URI)');
  console.log('- nodeByUri(uri: "/uri-de-la-pagina/")');
}

findCorrectQuery();
