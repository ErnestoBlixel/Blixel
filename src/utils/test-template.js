// src/utils/test-template.js
// Script de prueba para verificar que la plantilla funcione correctamente

import { getTemplateData } from '../graphql/template-queries.js';

async function testTemplate() {
  console.log('🧪 Iniciando test de la plantilla...\n');
  
  try {
    // Test 1: Conectividad básica
    console.log('📡 Test 1: Verificando conectividad con WordPress...');
    const response = await fetch('https://blixel.es/wp-json/');
    if (response.ok) {
      console.log('✅ WordPress accesible');
    } else {
      console.log('❌ WordPress no accesible');
      return;
    }

    // Test 2: GraphQL endpoint
    console.log('\n🔍 Test 2: Verificando endpoint GraphQL...');
    const graphqlResponse = await fetch('https://blixel.es/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: '{ generalSettings { title } }'
      })
    });
    
    if (graphqlResponse.ok) {
      console.log('✅ GraphQL endpoint funcional');
    } else {
      console.log('❌ GraphQL endpoint no funcional');
      return;
    }

    // Test 3: Template data
    console.log('\n📄 Test 3: Obteniendo datos de la plantilla...');
    const templateData = await getTemplateData();
    
    console.log('🔹 Título del sitio:', templateData.siteTitle);
    console.log('🔹 Título del hero:', templateData.heroTitle);
    console.log('🔹 Descripción del hero:', templateData.heroDescription.substring(0, 50) + '...');
    console.log('🔹 Tiene icono:', templateData.siteIcon ? 'Sí' : 'No');
    
    if (templateData.siteTitle !== 'Blixel') {
      console.log('✅ Datos obtenidos correctamente desde WordPress');
    } else {
      console.log('⚠️ Usando datos por defecto (revisar configuración WordPress)');
    }

    // Test 4: Verificar página home
    console.log('\n🏠 Test 4: Verificando página home...');
    if (templateData.rawData?.homePage) {
      console.log('✅ Página "home" encontrada');
    } else if (templateData.rawData?.inicioPage) {
      console.log('✅ Página "inicio" encontrada');
    } else {
      console.log('⚠️ No se encontró página home/inicio');
    }

    console.log('\n🎉 Test completado! La plantilla está lista para usar.');
    
  } catch (error) {
    console.error('\n❌ Error durante el test:', error.message);
    console.log('\n🔧 Sugerencias:');
    console.log('   - Verifica que WordPress esté accesible');
    console.log('   - Verifica que GraphQL esté activo');
    console.log('   - Verifica la configuración de red');
  }
}

// Ejecutar test
testTemplate();