// src/utils/test-apollo.js
// Script para probar las importaciones de Apollo Client

console.log('Iniciando prueba de Apollo Client...');

async function testApolloImports() {
  try {
    // Prueba 1: Importación por namespace
    console.log('Probando importación por namespace...');
    const Apollo = await import('@apollo/client');
    console.log('Apollo namespace:', Object.keys(Apollo));
    
    if (Apollo.ApolloClient && Apollo.InMemoryCache && Apollo.gql) {
      console.log('✅ Importación por namespace exitosa');
      return { 
        ApolloClient: Apollo.ApolloClient, 
        InMemoryCache: Apollo.InMemoryCache, 
        gql: Apollo.gql 
      };
    }
    
    // Prueba 2: Importación desde default
    console.log('Probando importación desde default...');
    if (Apollo.default) {
      const { ApolloClient, InMemoryCache, gql } = Apollo.default;
      if (ApolloClient && InMemoryCache && gql) {
        console.log('✅ Importación desde default exitosa');
        return { ApolloClient, InMemoryCache, gql };
      }
    }
    
    throw new Error('No se pudieron importar los componentes necesarios');
    
  } catch (error) {
    console.error('❌ Error en las importaciones:', error);
    throw error;
  }
}

// Ejecutar la prueba
testApolloImports()
  .then(components => {
    console.log('✅ Todas las importaciones funcionan correctamente');
    console.log('Componentes disponibles:', Object.keys(components));
  })
  .catch(error => {
    console.error('❌ Error en las pruebas:', error);
  });
