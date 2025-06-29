// astro.config.ts
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // Importa la integración
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Modo estático con fallback manual para 404
  output: 'static',
  
  integrations: [
    react(), // Añade la integración aquí
    tailwind() // Integración de Tailwind CSS
    // ...otras integraciones que puedas tener
  ],
  
  // Configuración de internacionalización
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  // Configuración del sitio para SEO
  site: 'https://blixel.es',
  
  vite: {
    optimizeDeps: {
      include: ['@apollo/client']
    },
    ssr: {
      noExternal: ['@apollo/client']
    },
    // Proxy para evitar CORS en desarrollo
    server: {
      proxy: {
        '/wp-graphql': {
          target: 'https://cms.blixel.es',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/wp-graphql/, '/graphql')
        }
      }
    }
  }
});