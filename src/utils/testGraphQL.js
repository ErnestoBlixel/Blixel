// src/utils/testGraphQL.js
// Script de prueba para verificar la conexión con GraphQL

import { graphQLClient } from '../graphql/client.js';

export async function testGraphQLConnection() {
  console.log('🔍 Probando conexión con GraphQL de blixel.es...');
  
  try {
    // Test básico: obtener información del sitio
    const basicQuery = `
      query TestConnection {
        generalSettings {
          title
          description
          url
        }
      }
    `;

    console.log('📡 Enviando query básica...');
    const basicResponse = await graphQLClient.query({ query: basicQuery });
    
    if (basicResponse.data?.generalSettings) {
      console.log('✅ Conexión exitosa!');
      console.log('📊 Datos del sitio:', basicResponse.data.generalSettings);
      
      // Test avanzado: buscar página home
      const homeQuery = `
        query TestHomePage {
          page(id: "home", idType: URI) {
            id
            title
            content
            slug
          }
          pages(where: {name: "home"}, first: 1) {
            nodes {
              id
              title
              content
              slug
            }
          }
        }
      `;
      
      console.log('🏠 Buscando página home...');
      const homeResponse = await graphQLClient.query({ query: homeQuery });
      
      if (homeResponse.data?.page) {
        console.log('✅ Página home encontrada por URI:', homeResponse.data.page.title);
      } else if (homeResponse.data?.pages?.nodes?.[0]) {
        console.log('✅ Página home encontrada por nombre:', homeResponse.data.pages.nodes[0].title);
      } else {
        console.log('⚠️ No se encontró página home. Disponibles:');
        
        // Listar páginas disponibles
        const pagesQuery = `
          query ListPages {
            pages(first: 10) {
              nodes {
                id
                title
                slug
                uri
              }
            }
          }
        `;
        
        const pagesResponse = await graphQLClient.query({ query: pagesQuery });
        if (pagesResponse.data?.pages?.nodes) {
          pagesResponse.data.pages.nodes.forEach(page => {
            console.log(`📄 ${page.title} (slug: ${page.slug}, uri: ${page.uri})`);
          });
        }
      }
      
      return { success: true, data: basicResponse.data };
    } else {
      console.error('❌ Respuesta vacía del servidor');
      return { success: false, error: 'Respuesta vacía' };
    }
    
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    
    // Verificar si es un problema de CORS, network o GraphQL
    if (error.message.includes('fetch')) {
      console.error('🌐 Problema de red o CORS. Verifica:');
      console.error('   1. Que https://cms.blixel.es/graphql esté activo');
      console.error('   2. Que WPGraphQL esté instalado y activado en cms.blixel.es');
      console.error('   3. Configuración de CORS en WordPress');
    } else if (error.message.includes('GraphQL')) {
      console.error('🔧 Problema con GraphQL. Verifica la sintaxis de la query');
    }
    
    return { success: false, error: error.message };
  }
}

// Función para uso en desarrollo
export async function runGraphQLTest() {
  if (typeof window !== 'undefined') {
    console.log('🚀 Iniciando test de GraphQL desde el navegador...');
    const result = await testGraphQLConnection();
    
    if (result.success) {
      console.log('🎉 ¡Todo funciona correctamente!');
    } else {
      console.log('💔 Hay problemas de conexión. Revisa los logs arriba.');
    }
    
    return result;
  }
}

// Auto-ejecutar en desarrollo
if (import.meta.env.DEV && typeof window !== 'undefined') {
  // Esperar un momento para que se cargue todo
  setTimeout(() => {
    runGraphQLTest();
  }, 1000);
}
