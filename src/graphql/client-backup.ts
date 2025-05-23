// src/graphql/client-backup.ts
// Archivo de respaldo con múltiples estrategias de importación

// Estrategia 1: Importación dinámica
export async function createGraphQLClient() {
  try {
    const apolloModule = await import('@apollo/client');
    const { ApolloClient, InMemoryCache, gql } = apolloModule;
    
    const WORDPRESS_GRAPHQL_ENDPOINT = 'https://blixel.es/graphql';
    
    const client = new ApolloClient({
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
    
    return { client, gql };
  } catch (error) {
    console.error('Error creating GraphQL client:', error);
    throw error;
  }
}

// Estrategia 2: Fallback usando graphql-request
import { GraphQLClient } from 'graphql-request';

export const fallbackClient = new GraphQLClient('https://blixel.es/graphql');

export const fallbackQuery = async (query: string) => {
  try {
    return await fallbackClient.request(query);
  } catch (error) {
    console.error('Error with fallback client:', error);
    throw error;
  }
};
