// Script para verificar qué páginas existen en WordPress
const fetch = require('node-fetch');

const GRAPHQL_URL = 'https://cms.blixel.es/graphql';

// Query para listar todas las páginas
const LIST_PAGES_QUERY = `
  query ListAllPages {
    pages(first: 100) {
      nodes {
        id
        databaseId
        title
        slug
        uri
        status
        isFrontPage
      }
    }
    # Probar diferentes formas de obtener la página principal
    rootPage: page(id: "/", idType: URI) {
      id
      title
      slug
      uri
    }
    homePage: page(id: "home", idType: URI) {
      id
      title
      slug
      uri
    }
    inicioPage: page(id: "inicio", idType: URI) {
      id
      title
      slug
      uri
    }
    # Configuración de página frontal
    allSettings {
      pageOnFront
    }
  }
`;

async function testPages() {
  console.log('🔍 Verificando páginas en WordPress...\n');

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: LIST_PAGES_QUERY
      })
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data.errors) {
        console.log('❌ GraphQL devolvió errores:');
        data.errors.forEach(error => {
          console.log(`   - ${error.message}`);
        });
      }

      if (data.data) {
        console.log('✅ Conexión exitosa!\n');
        
        // Listar todas las páginas
        if (data.data.pages && data.data.pages.nodes.length > 0) {
          console.log('📄 PÁGINAS ENCONTRADAS:');
          console.log('========================\n');
          
          data.data.pages.nodes.forEach((page, index) => {
            const isFront = page.isFrontPage ? ' 🏠 (PÁGINA PRINCIPAL)' : '';
            const isConfiguredFront = data.data.allSettings?.pageOnFront == page.databaseId ? ' ⭐ (Configurada como principal)' : '';
            console.log(`${index + 1}. ${page.title}${isFront}${isConfiguredFront}`);
            console.log(`   ID: ${page.databaseId}`);
            console.log(`   Slug: ${page.slug || '(vacío)'}`);
            console.log(`   URI: ${page.uri}`);
            console.log(`   Status: ${page.status}`);
            console.log('');
          });
        } else {
          console.log('⚠️  No se encontraron páginas');
        }

        // Verificar búsquedas específicas
        console.log('\n🔎 BÚSQUEDAS ESPECÍFICAS:');
        console.log('========================\n');
        
        if (data.data.rootPage) {
          console.log('✅ Página principal ("/") encontrada:');
          console.log(`   Título: ${data.data.rootPage.title}`);
          console.log(`   URI: ${data.data.rootPage.uri}`);
          console.log(`   Slug: ${data.data.rootPage.slug || '(vacío - es la home)'}`);
        } else {
          console.log('❌ No se encontró página en la raíz "/"');
        }

        if (data.data.homePage) {
          console.log('\n✅ Página "home" encontrada:');
          console.log(`   Título: ${data.data.homePage.title}`);
          console.log(`   URI: ${data.data.homePage.uri}`);
        } else {
          console.log('\n❌ No se encontró página con slug "home"');
        }

        if (data.data.inicioPage) {
          console.log('\n✅ Página "inicio" encontrada:');
          console.log(`   Título: ${data.data.inicioPage.title}`);
          console.log(`   URI: ${data.data.inicioPage.uri}`);
        } else {
          console.log('\n❌ No se encontró página con slug "inicio"');
        }

        // Sugerencias
        console.log('\n💡 PRÓXIMOS PASOS:');
        console.log('==================\n');
        
        if (!data.data.rootPage) {
          console.log('1. En WordPress, edita tu página principal');
          console.log('2. Deja el campo "Slug" vacío o pon "home"');
          console.log('3. O usa el URI de la página marcada como principal arriba');
          console.log('4. En Ajustes → Lectura, configura tu página de inicio');
        } else {
          console.log('✅ Tu página principal está configurada correctamente!');
          console.log('   El código ya está actualizado para buscarla.');
        }
        
        if (data.data.pages.nodes.length === 0) {
          console.log('1. No hay páginas en WordPress');
          console.log('2. Crea al menos una página de inicio');
          console.log('3. Asegúrate de que esté publicada (no en borrador)');
        }
      }
    } else {
      const errorText = await response.text();
      console.log('❌ Error en la respuesta:');
      console.log(errorText);
    }

  } catch (error) {
    console.log('❌ Error de conexión:');
    console.log(`   ${error.message}`);
  }
}

// Ejecutar el test
testPages();
