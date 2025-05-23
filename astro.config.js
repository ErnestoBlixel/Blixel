import { defineConfig } from 'astro/config';
import { WordPressGraphQLClient } from './src/graphql/client';

export default defineConfig({
  integrations: [
    // Configuración de WordPress GraphQL
    {
      name: 'wordpress-graphql',
      hooks: {
        'astro:page:render': async (context) => {
          context.page = {
            ...context.page,
            wordpress: {
              client: WordPressGraphQLClient,
            },
          };
        },
      },
    },
  ],
  build: {
    format: 'file-based',
  },
});
