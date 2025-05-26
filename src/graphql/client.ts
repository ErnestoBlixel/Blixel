// src/graphql/client.ts

// Solución simple para problemas de compatibilidad ESM/CommonJS con Apollo Client
import * as Apollo from '@apollo/client';

// Extraer las funciones necesarias del namespace
const { ApolloClient, InMemoryCache, gql } = Apollo;

// Endpoint GraphQL de blixel.es - usar variable de entorno o fallback
const WORDPRESS_GRAPHQL_ENDPOINT = 
  (typeof import !== 'undefined' && import.meta?.env?.PUBLIC_WP_GRAPHQL_URL) ||
  'https://cms.blixel.es/graphql'; // URL correcta del subdominio

// Configuración del cliente Apollo con opciones adicionales
export const graphQLClient = new ApolloClient({
  uri: WORDPRESS_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

// Exporta gql para uso en otros archivos
export { gql };
