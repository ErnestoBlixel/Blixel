// Script para buscar la página principal
const fetch = require('node-fetch');

const GRAPHQL_URL = 'https://cms.blixel.es/graphql';

// Probar diferentes formas de buscar la página principal
const QUERIES = [
  {
    name: 'Por URI vacío',
    query: `{ page(id: "", idType: URI) { id title slug uri } }`
  },
  {
    name: 'Por URI /',
    query: `{ page(id: "/", idType: URI) { id title slug uri } }`
  },
  {
    name: 'Por slug home',
    query: `{ page(id: "home", idType: URI) { id title slug uri } }`
  },
  {
    name: 'Por slug inicio',
    query: `{ page(id: "inicio", idType: URI) { id title slug uri } }`
  },
  {
    name: 'Por ID de página frontal',
    query: `{ 
      generalSettings { 
        title 
        description 
      }
      allSettings {
        pageOnFront
        pageForPosts
      }
    }`
  },
  {
    name: 'Todas las páginas publicadas',
    query: `{ 
      pages(where: {status: PUBLISH}, first: 10) { 
        nodes { 
          id 
          databaseId
          title 
          slug 
          uri 
          isFrontPage
          isPostsPage
        } 
      } 
    }`
  }
];

async function findHomePage() {
  console.log('🔍 BUSCANDO TU PÁGINA PRINCIPAL...\n');

  for (const queryInfo of QUERIES) {
    console.log(`\n📝 Probando: ${queryInfo.name}`);
    console.log('='.repeat(40));
    
    try {
      const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: queryInfo.query
        })
      });

      if (response.ok) {
        const result = await response.json();
        
        if (result.errors) {
          console.log('❌ Error:', result.errors[0].message);
        } else if (result.data) {
          console.log('✅ Respuesta:');
          console.log(JSON.stringify(result.data, null, 2));
          
          // Análisis especial para la búsqueda de todas las páginas
          if (result.data.pages?.nodes) {
            const pages = result.data.pages.nodes;
            const frontPage = pages.find(p => p.isFrontPage);
            
            if (frontPage) {
              console.log('\n🎯 PÁGINA PRINCIPAL ENCONTRADA:');
              console.log(`   Título: ${frontPage.title}`);
              console.log(`   Slug: ${frontPage.slug || '(vacío - es la home)'}`);
              console.log(`   URI: ${frontPage.uri}`);
              console.log(`   ID: ${frontPage.databaseId}`);
              console.log('\n💡 USA ESTE URI EN TU CÓDIGO:', frontPage.uri);
              return;
            }
          }
          
          // Si encontramos configuración de página frontal
          if (result.data.allSettings?.pageOnFront) {
            console.log('\n📌 ID de página frontal configurada:', result.data.allSettings.pageOnFront);
            console.log('   (Busca esta ID en la lista de páginas arriba)');
          }
        }
      }
    } catch (error) {
      console.log('❌ Error de conexión:', error.message);
    }
  }

  console.log('\n\n🚀 RECOMENDACIÓN:');
  console.log('==================');
  console.log('1. En WordPress, ve a Ajustes → Lectura');
  console.log('2. En "Tu página de inicio muestra", selecciona "Una página estática"');
  console.log('3. En "Página de inicio", selecciona tu página principal');
  console.log('4. Guarda los cambios');
  console.log('\n5. Luego, en tu código usa el URI que aparezca en la lista de arriba');
}

// Ejecutar
findHomePage();
