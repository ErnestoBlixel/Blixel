// src/utils/diagnose-connection.js
// Script para diagnosticar la conexión con WordPress

async function diagnoseConnection() {
  console.log('🔍 Diagnóstico de conexión con WordPress\n');
  
  // Test 1: Verificar si WordPress está online
  console.log('1️⃣ Verificando si WordPress está accesible...');
  try {
    const response = await fetch('https://blixel.es/');
    if (response.ok) {
      console.log('✅ WordPress está online');
    } else {
      console.log('❌ WordPress no responde correctamente');
      return;
    }
  } catch (error) {
    console.log('❌ No se puede acceder a WordPress:', error.message);
    return;
  }

  // Test 2: Verificar API REST básica
  console.log('\n2️⃣ Verificando API REST de WordPress...');
  try {
    const restResponse = await fetch('https://blixel.es/wp-json/');
    if (restResponse.ok) {
      const restData = await restResponse.json();
      console.log('✅ API REST funciona');
      console.log('   Nombre del sitio:', restData.name || 'No encontrado');
      console.log('   Descripción:', restData.description || 'No encontrado');
    } else {
      console.log('❌ API REST no funciona');
    }
  } catch (error) {
    console.log('❌ Error con API REST:', error.message);
  }

  // Test 3: Verificar endpoint GraphQL
  console.log('\n3️⃣ Verificando endpoint GraphQL...');
  try {
    const graphqlResponse = await fetch('https://blixel.es/graphql');
    if (graphqlResponse.ok) {
      console.log('✅ Endpoint GraphQL responde');
    } else {
      console.log('❌ Endpoint GraphQL no responde');
      console.log('💡 Probablemente WPGraphQL no está instalado/activo');
      return;
    }
  } catch (error) {
    console.log('❌ Error accediendo a GraphQL:', error.message);
    return;
  }

  // Test 4: Query GraphQL básica
  console.log('\n4️⃣ Probando query GraphQL básica...');
  try {
    const queryResponse = await fetch('https://blixel.es/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query TestQuery {
            generalSettings {
              title
              description
            }
          }
        `
      })
    });

    if (queryResponse.ok) {
      const queryData = await queryResponse.json();
      
      if (queryData.errors) {
        console.log('❌ Errores en GraphQL:', queryData.errors);
      } else {
        console.log('✅ Query GraphQL exitosa');
        console.log('   Título:', queryData.data?.generalSettings?.title || 'No encontrado');
        console.log('   Descripción:', queryData.data?.generalSettings?.description || 'No encontrado');
      }
    } else {
      console.log('❌ Query GraphQL falló');
    }
  } catch (error) {
    console.log('❌ Error en query GraphQL:', error.message);
  }

  // Test 5: Verificar páginas
  console.log('\n5️⃣ Verificando páginas disponibles...');
  try {
    const pagesResponse = await fetch('https://blixel.es/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetPages {
            pages(first: 10) {
              nodes {
                title
                slug
                seo {
                  title
                  metaDesc
                }
              }
            }
          }
        `
      })
    });

    if (pagesResponse.ok) {
      const pagesData = await pagesResponse.json();
      
      if (pagesData.errors) {
        console.log('❌ Errores obteniendo páginas:', pagesData.errors);
      } else {
        const pages = pagesData.data?.pages?.nodes || [];
        console.log(`✅ Se encontraron ${pages.length} páginas:`);
        
        pages.forEach((page, index) => {
          console.log(`   ${index + 1}. "${page.title}" (slug: ${page.slug})`);
          if (page.seo?.title) {
            console.log(`      - SEO Título: ${page.seo.title}`);
          }
        });

        // Verificar si existe página "home"
        const homePage = pages.find(p => p.slug === 'home');
        if (homePage) {
          console.log('\n🏠 ¡Página "home" encontrada!');
          console.log('   Título:', homePage.title);
          console.log('   SEO Título:', homePage.seo?.title || 'No configurado');
          console.log('   SEO Descripción:', homePage.seo?.metaDesc || 'No configurado');
        } else {
          console.log('\n❌ No se encontró página con slug "home"');
          console.log('💡 Necesitas crear una página con slug "home"');
        }
      }
    }
  } catch (error) {
    console.log('❌ Error obteniendo páginas:', error.message);
  }

  console.log('\n📋 RESUMEN DEL DIAGNÓSTICO:');
  console.log('1. Si WordPress está online pero GraphQL no funciona → Instalar WPGraphQL');
  console.log('2. Si GraphQL funciona pero no hay páginas → Crear página con slug "home"');
  console.log('3. Si hay páginas pero no datos SEO → Configurar Yoast SEO');
}

// Ejecutar diagnóstico
diagnoseConnection();