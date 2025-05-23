# 🎉 CONFIGURACIÓN EXITOSA - Astro + WordPress blixel.es

## ✅ Estado del Proyecto (FUNCIONANDO)
- **Fecha**: 23 Mayo 2025
- **Estado**: ✅ CONECTADO Y FUNCIONANDO
- **WordPress**: blixel.es 
- **Título real**: "Blixel - Automatiza tu empresa con IA"
- **Conexión**: API REST de WordPress

## 🔧 Configuración que FUNCIONA

### Archivos principales:
- `src/components/HomePage.astro` - Componente principal que conecta con WordPress
- `src/pages/index.astro` - Página principal con favicon
- `src/graphql/client.ts` - Cliente Apollo (no usado actualmente)

### Método de conexión:
```typescript
// FUNCIONA: API REST pública de WordPress
const baseResponse = await fetch('https://blixel.es/wp-json/');
const pagesResponse = await fetch('https://blixel.es/wp-json/wp/v2/pages');
```

### Estrategia exitosa:
1. **Endpoint base público**: `/wp-json/` (no requiere auth)
2. **Páginas públicas**: `/wp-json/wp/v2/pages` 
3. **Búsqueda inteligente**: Encuentra página home automáticamente
4. **Decodificación HTML**: Convierte `&#8211;` → `-` etc.

## 🚨 Problemas Resueltos

### ❌ Errores que tuvimos:
1. **Apollo Client SSR** - Incompatible con Astro/Vite
2. **GraphQL plugin** - No instalado/configurado
3. **Error 401 Unauthorized** - Endpoint `/settings` protegido
4. **Caracteres Unicode** - Causaban errores de sintaxis
5. **Named exports** - `import { gql }` no funcionaba con CommonJS

### ✅ Soluciones aplicadas:
1. **Usar `graphql-request`** en lugar de Apollo Client
2. **API REST pública** en lugar de GraphQL
3. **Endpoint público** `/wp-json/` en lugar de `/settings`
4. **Caracteres ASCII** en lugar de Unicode
5. **fetch() nativo** más confiable

## 🔄 Para volver a este punto

Si algo falla, usar estos archivos:

### `src/components/HomePage.astro` (VERSIÓN FUNCIONANDO):
```astro
---
// Función para decodificar HTML entities
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
}

let siteTitle = "Blixel";
let homeTitle = "";
let homeContent = "";

try {
  // Endpoint público básico
  const baseResponse = await fetch('https://blixel.es/wp-json/');
  
  if (baseResponse.ok) {
    const baseData = await baseResponse.json();
    
    if (baseData.name) {
      siteTitle = decodeHtmlEntities(baseData.name);
    }
    
    // Obtener páginas públicas
    const pagesResponse = await fetch('https://blixel.es/wp-json/wp/v2/pages');
    if (pagesResponse.ok) {
      const pages = await pagesResponse.json();
      
      // Buscar página home
      let homePage = pages.find(page => 
        page.slug === 'home' || 
        page.slug === 'inicio' || 
        page.title?.rendered?.toLowerCase().includes('home') ||
        page.title?.rendered?.toLowerCase().includes('inicio')
      );
      
      if (!homePage && pages.length > 0) {
        homePage = pages[0];
      }
      
      if (homePage) {
        homeTitle = decodeHtmlEntities(homePage.title?.rendered || siteTitle);
        homeContent = homePage.content?.rendered || '';
      }
    }
  }
} catch (error) {
  homeTitle = siteTitle;
  homeContent = '';
}

if (!homeTitle) homeTitle = siteTitle;
---

<div class="home-page">
  <header>
    <h1>{homeTitle}</h1>
  </header>
  
  <main>
    {homeContent ? (
      <div class="content" set:html={homeContent}></div>
    ) : (
      <p>Cargando contenido...</p>
    )}
  </main>
</div>

<!-- ESTILOS CSS AQUÍ -->
```

### `src/pages/index.astro`:
```astro
---
let siteTitle = "Blixel";
---
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{siteTitle}</title>
  <meta name="description" content="Blixel - Automatiza tu empresa con IA">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>">
</head>
<body>
  <HomePage />
</body>
</html>
```

## 📦 Dependencias necesarias:
```json
{
  "dependencies": {
    "astro": "^4.0.0",
    "graphql-request": "^6.0.0"
  }
}
```

## 🚀 Comandos:
```bash
npm run dev  # Desarrollar
npm run build  # Construir para producción
```

## 💡 Notas importantes:
- **NO usar Apollo Client** - Problemas con SSR
- **NO usar GraphQL directo** - Requiere plugins 
- **SÍ usar API REST** - Público y confiable
- **SÍ usar fetch()** - Nativo y estable
- **Decodificar HTML entities** - Esencial para caracteres especiales

---
**Estado**: ✅ FUNCIONANDO PERFECTAMENTE
**Última actualización**: 23 Mayo 2025
