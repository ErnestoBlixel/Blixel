// astro.config.ts
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // Importa la integración

// https://astro.build/config
export default defineConfig({
  integrations: [
    react() // Añade la integración aquí
    // ...otras integraciones que puedas tener
  ],
  vite: {
    optimizeDeps: {
      include: ['@apollo/client']
    },
    ssr: {
      noExternal: ['@apollo/client']
    }
  }
});