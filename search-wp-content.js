// Script para buscar contenido en WordPress
const WORDPRESS_GRAPHQL_URL = 'https://cms.blixel.es/graphql';

async function searchContent() {
  console.log('🔍 Buscando "formacion-ia-empresas" en WordPress...\n');

  // Query 1: Buscar en páginas
  const pagesQuery = `
    query SearchPages {
      pages(first: 100, where: { search: "formacion" }) {
        nodes {
          id
          slug
          title
          status
        }
      }
    }
  `;

  // Query 2: Buscar en posts
  const postsQuery = `
    query SearchPosts {
      posts(first: 100, where: { search: "formacion" }) {
        nodes {
          id
          slug
          title
          status
        }
      }
    }
  `;

  // Query 3: Buscar específicamente por slug
  const bySlugQuery = `
    query GetPageBySlug {
      pageBy(slug: "formacion-ia-empresas") {
        id
        slug
        title
        status
        date
      }
    }
  `;

  try {
    console.log('1️⃣ Buscando en PÁGINAS con término "formacion"...');
    let response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: pagesQuery }),
    });
    let data = await response.json();
    
    if (data.data?.pages?.nodes?.length > 0) {
      console.log(`   Encontradas ${data.data.pages.nodes.length} páginas:`);
      data.data.pages.nodes.forEach(page => {
        console.log(`   - ${page.title} (/${page.slug}) - Estado: ${page.status}`);
      });
    } else {
      console.log('   No se encontraron páginas con "formacion"');
    }

    console.log('\n2️⃣ Buscando en POSTS con término "formacion"...');
    response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: postsQuery }),
    });
    data = await response.json();
    
    if (data.data?.posts?.nodes?.length > 0) {
      console.log(`   Encontrados ${data.data.posts.nodes.length} posts:`);
      data.data.posts.nodes.forEach(post => {
        console.log(`   - ${post.title} (/${post.slug}) - Estado: ${post.status}`);
      });
    } else {
      console.log('   No se encontraron posts con "formacion"');
    }

    console.log('\n3️⃣ Buscando directamente por slug "formacion-ia-empresas"...');
    response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: bySlugQuery }),
    });
    data = await response.json();
    
    if (data.data?.pageBy) {
      console.log('   ✅ ¡Página encontrada!');
      console.log(`   - Título: ${data.data.pageBy.title}`);
      console.log(`   - Slug: ${data.data.pageBy.slug}`);
      console.log(`   - Estado: ${data.data.pageBy.status}`);
      console.log(`   - ID: ${data.data.pageBy.id}`);
    } else {
      console.log('   ❌ No se encontró página con ese slug exacto');
    }

    // Query 4: Listar TODAS las páginas para ver si está ahí
    console.log('\n4️⃣ Listando TODAS las páginas disponibles...');
    const allPagesQuery = `
      query AllPages {
        pages(first: 200) {
          nodes {
            slug
            title
            status
          }
        }
      }
    `;
    
    response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: allPagesQuery }),
    });
    data = await response.json();
    
    if (data.data?.pages?.nodes) {
      console.log(`   Total de páginas: ${data.data.pages.nodes.length}`);
      const formacionPages = data.data.pages.nodes.filter(p => 
        p.slug.includes('formacion') || p.title.toLowerCase().includes('formacion')
      );
      
      if (formacionPages.length > 0) {
        console.log('\n   Páginas relacionadas con "formacion":');
        formacionPages.forEach(page => {
          console.log(`   - "${page.title}" → /${page.slug} (${page.status})`);
        });
      }
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

searchContent();
