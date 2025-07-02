# 📄 Integración de Páginas de WordPress en Astro

## ✅ Lo que hemos implementado

1. **Cliente GraphQL** (`src/lib/wordpress.ts`)
   - Funciones para obtener páginas de WordPress
   - Queries optimizadas con SEO incluido
   - Manejo de errores robusto

2. **Página dinámica** (`src/pages/[slug].astro`)
   - Renderiza cualquier página de WordPress
   - Mantiene el diseño consistente con tu sitio
   - Incluye header, footer y estilos de Blixel

3. **Sitemap actualizado** (`src/pages/sitemap.xml.ts`)
   - Incluye automáticamente las páginas de WordPress
   - Mantiene las fechas de modificación correctas

4. **Script de prueba** (`scripts/test-wordpress.ts`)
   - Verifica la conexión con WordPress
   - Lista todas las páginas disponibles

## 🚀 Pasos para completar la integración

### 1. Verificar requisitos en WordPress

Asegúrate de tener instalados en tu WordPress:
- **WPGraphQL** - Plugin principal de GraphQL
- **WPGraphQL for ACF** (si usas Advanced Custom Fields)
- **Yoast SEO** o **RankMath** + su extensión para GraphQL (para datos SEO)

### 2. Probar la conexión

```bash
# En la terminal, desde la carpeta del proyecto
npm run dev
# En otra terminal
node --loader tsx scripts/test-wordpress.ts
```

### 3. Construir el sitio

```bash
npm run build
```

### 4. Desplegar en Cloudflare

Si todo funciona correctamente:

```bash
# Desplegar a Cloudflare Pages
npm run deploy
```

o si usas Wrangler:

```bash
wrangler pages deploy dist
```

## 🔧 Personalización

### Cambiar el diseño de las páginas

Edita `src/pages/[slug].astro` para personalizar:
- El hero de la página
- Los estilos del contenido
- La estructura general

### Agregar campos personalizados

Si tienes campos ACF en WordPress, actualiza la query en `src/lib/wordpress.ts`:

```typescript
GET_PAGE_BY_SLUG: `
  query GetPageBySlug($slug: String!) {
    pageBy(slug: $slug) {
      // ... campos existentes
      
      // Agregar campos ACF
      camposPersonalizados {
        miCampo
        otroCampo
      }
    }
  }
`
```

### Excluir páginas específicas

En `src/pages/[slug].astro`, actualiza el array `excludedSlugs`:

```typescript
const excludedSlugs = ['inicio', 'home', 'homepage', 'mi-pagina-excluida'];
```

## 📝 Notas importantes

1. **Rendimiento**: Las páginas se generan estáticamente en tiempo de build, por lo que son muy rápidas.

2. **Actualizaciones**: Cuando actualices contenido en WordPress, necesitas hacer un nuevo build y deploy.

3. **Imágenes**: Las imágenes de WordPress se sirven directamente desde tu servidor WordPress. Considera usar un CDN si tienes muchas imágenes.

4. **SEO**: Los datos SEO de Yoast/RankMath se incluyen automáticamente si están configurados.

## 🐛 Solución de problemas

### Error de CORS
Si ves errores de CORS, agrega esto a tu `.htaccess` en WordPress:

```apache
Header set Access-Control-Allow-Origin "https://blixel.es"
Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
Header set Access-Control-Allow-Headers "Content-Type"
```

### GraphQL no funciona
Verifica en WordPress:
1. WPGraphQL está activo
2. La URL de GraphQL es correcta (normalmente `/graphql`)
3. No hay plugins de seguridad bloqueando el acceso

### Páginas no se generan
1. Ejecuta el script de prueba para ver qué páginas están disponibles
2. Verifica que las páginas estén publicadas (no en borrador)
3. Revisa los logs de build para errores específicos

## 🎉 ¡Listo!

Tu sitio Astro ahora puede renderizar cualquier página creada en WordPress. Simplemente:
1. Crea/edita páginas en WordPress
2. Ejecuta `npm run build`
3. Despliega a Cloudflare

Las páginas estarán disponibles en `https://blixel.es/[slug-de-la-pagina]`
