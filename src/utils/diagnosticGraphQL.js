// src/utils/diagnosticGraphQL.js
// Script de diagnóstico avanzado para blixel.es

export async function runDiagnostic() {
  console.log('🔍 === DIAGNÓSTICO COMPLETO BLIXEL.ES ===');
  
  const endpoints = [
    'https://cms.blixel.es/cms/graphql',
    'https://cms.blixel.es/cms/wp-json/graphql',
    'https://cms.blixel.es/graphql',
    'https://cms.blixel.es/wp-json/graphql'
  ];
  
  for (const endpoint of endpoints) {
    console.log(`\n📡 Probando: ${endpoint}`);
    
    try {
      // Test básico con fetch
      const fetchResponse = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Accept': 'text/html,application/json'
        }
      });
      
      console.log(`   Status: ${fetchResponse.status} ${fetchResponse.statusText}`);
      console.log(`   Headers: ${fetchResponse.headers.get('content-type')}`);
      
      if (fetchResponse.ok) {
        const text = await fetchResponse.text();
        console.log(`   Respuesta (primeros 200 chars): ${text.substring(0, 200)}...`);
        
        // Si contiene GraphQL, probamos una query
        if (text.toLowerCase().includes('graphql') || text.includes('schema')) {
          console.log('   ✅ GraphQL detectado! Probando query...');
          await testGraphQLQuery(endpoint);
        }
      } else {
        console.log(`   ❌ Error HTTP: ${fetchResponse.status}`);
      }
      
    } catch (error) {
      console.log(`   ❌ Error de red: ${error.message}`);
    }
  }
  
  // Test adicional: verificar si el sitio principal existe
  console.log('\n🌐 Verificando sitio principal...');
  try {
    const siteResponse = await fetch('https://cms.blixel.es', {
      method: 'HEAD'
    });
    console.log(`   Sitio principal: ${siteResponse.status} ${siteResponse.statusText}`);
  } catch (error) {
    console.log(`   ❌ Sitio principal no accesible: ${error.message}`);
  }
}

async function testGraphQLQuery(endpoint) {
  try {
    const query = {
      query: `
        query TestBasic {
          generalSettings {
            title
            url
          }
        }
      `
    };
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(query)
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log(`   🎉 Query exitosa:`, data);
      return true;
    } else {
      console.log(`   ❌ Query falló: ${response.status}`);
      const text = await response.text();
      console.log(`   Respuesta: ${text.substring(0, 200)}`);
    }
  } catch (error) {
    console.log(`   ❌ Error en query: ${error.message}`);
  }
  return false;
}

// Auto-ejecutar si estamos en desarrollo
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  console.log('🚀 Ejecutando diagnóstico automático...');
  setTimeout(() => {
    runDiagnostic();
  }, 2000);
}
