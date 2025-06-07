// Script de diagnóstico para verificar la conexión con WordPress GraphQL
const fetch = require('node-fetch');

const GRAPHQL_URL = 'https://cms.blixel.es/graphql';

// Query simple para probar
const TEST_QUERY = `
  query TestConnection {
    generalSettings {
      title
      description
    }
    page(id: "home", idType: URI) {
      title
      seo {
        title
        metaDesc
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

async function testConnection() {
  console.log('🔍 Probando conexión con WordPress GraphQL...');
  console.log(`URL: ${GRAPHQL_URL}\n`);

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: TEST_QUERY
      })
    });

    console.log(`📡 Respuesta HTTP: ${response.status} ${response.statusText}`);

    if (response.ok) {
      const data = await response.json();
      
      if (data.errors) {
        console.log('\n❌ GraphQL devolvió errores:');
        data.errors.forEach(error => {
          console.log(`   - ${error.message}`);
        });
      }

      if (data.data) {
        console.log('\n✅ Conexión exitosa! Datos recibidos:\n');
        
        // Mostrar datos del sitio
        if (data.data.generalSettings) {
          console.log('📌 Configuración General:');
          console.log(`   Título: ${data.data.generalSettings.title}`);
          console.log(`   Descripción: ${data.data.generalSettings.description}`);
        }

        // Mostrar datos de la página home
        if (data.data.page) {
          console.log('\n📄 Página Home:');
          console.log(`   Título: ${data.data.page.title}`);
          
          if (data.data.page.seo) {
            console.log(`   SEO Título: ${data.data.page.seo.title || 'No configurado'}`);
            console.log(`   SEO Meta Desc: ${data.data.page.seo.metaDesc || 'No configurado'}`);
          } else {
            console.log('   ⚠️  No hay datos SEO configurados');
          }

          if (data.data.page.featuredImage?.node) {
            console.log(`   ✅ Imagen destacada: ${data.data.page.featuredImage.node.sourceUrl}`);
          } else {
            console.log('   ❌ No hay imagen destacada');
          }
        } else {
          console.log('\n⚠️  No se encontró la página "home"');
          console.log('   Verifica que exista una página con el slug "home" en WordPress');
        }
      }
    } else {
      const errorText = await response.text();
      console.log('\n❌ Error en la respuesta:');
      console.log(errorText);
    }

  } catch (error) {
    console.log('\n❌ Error de conexión:');
    console.log(`   ${error.message}`);
    
    if (error.code === 'ENOTFOUND') {
      console.log('\n💡 Posibles soluciones:');
      console.log('   1. Verifica que la URL sea correcta');
      console.log('   2. Verifica tu conexión a internet');
    } else if (error.message.includes('CORS')) {
      console.log('\n💡 Problema de CORS detectado:');
      console.log('   1. Verifica que WordPress permita peticiones desde localhost');
      console.log('   2. Instala un plugin de CORS en WordPress si es necesario');
    }
  }
}

// Ejecutar el test
testConnection();
