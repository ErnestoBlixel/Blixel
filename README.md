# 🚀 Blixel.es - Sitio Web Principal

**Versión:** 1.0.0  
**Última actualización:** 17 de Junio de 2025  
**Estado:** Producción ✅

## 🏢 Sobre el Proyecto

Sitio web principal de **Blixel Group**, especializado en soluciones de inteligencia artificial para empresas. Arquitectura moderna con Astro y WordPress headless, optimizado para conversión y SEO.

- **URL Producción:** https://blixel.es
- **CMS Backend:** https://cms.blixel.es
- **Deploy:** Cloudflare Pages

## ⚡ Stack Tecnológico

### Frontend
- **Astro 4.0** - Framework principal
- **React 19.1** - Componentes interactivos
- **Tailwind CSS 3.4** - Estilos y diseño
- **TypeScript 5.0** - Tipado estático

### Animaciones y UX
- **Framer Motion 11.18** - Animaciones avanzadas
- **Lucide React** - Iconografía
- **Magic UI Components** - Componentes animados personalizados

### Backend y Datos
- **WordPress Headless** - CMS con GraphQL
- **Apollo Client 3.13** - Cliente GraphQL
- **GraphQL Request 6.0** - Consultas optimizadas

### Deploy y CDN
- **Cloudflare Pages** - Hosting y CDN
- **Node.js 18+** - Runtime requerido

## 🌍 Funcionalidades

### ✅ Implementado
- **Multiidioma** - Español (predeterminado) y Catalán
- **SEO Optimizado** - Meta tags, sitemap, robots.txt dinámicos
- **WordPress Headless** - Gestión de contenido con GraphQL
- **Formulario de Contacto** - Nativo con validación
- **Responsive Design** - Optimizado para todos los dispositivos
- **Modo Oscuro/Claro** - Interface adaptable (preparado)
- **Componentes Animados** - Magic UI con efectos avanzados
- **Performance Optimizada** - Core Web Vitals optimizados

### 🔧 Características Técnicas
- **SSG + SSR Híbrido** - Generación estática con hidratación
- **Proxy GraphQL** - Evita CORS en desarrollo
- **Optimización de Imágenes** - Sharp para procesamiento
- **Bundle Splitting** - Carga optimizada por chunks
- **Middleware i18n** - Detección automática de idioma

## 📂 Estructura del Proyecto

```
WEB_ASTRO/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── magic-cards-new/ # Componentes Magic UI
│   │   ├── Hero.astro       # Sección hero principal
│   │   └── ContactForm.astro # Formulario de contacto
│   ├── layouts/             # Layouts base
│   ├── pages/               # Páginas y rutas
│   │   ├── ca/             # Versión en catalán
│   │   ├── api/            # API routes
│   │   └── legal/          # Páginas legales
│   ├── i18n/               # Configuración multiidioma
│   ├── styles/             # Estilos globales
│   └── middleware.ts       # Middleware i18n
├── public/                 # Assets estáticos
├── dist/                   # Build de producción
├── astro.config.mjs        # Configuración Astro
├── tailwind.config.mjs     # Configuración Tailwind
├── wrangler.toml          # Configuración Cloudflare
└── package.json           # Dependencias
```

## 🚀 Comandos de Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo Local
```bash
npm run dev
# Servidor en http://localhost:4321
```

### Build de Producción
```bash
npm run build
```

### Preview del Build
```bash
npm run preview
```

### Deploy a Cloudflare
```bash
# Deploy automático desde Git push a main
# O manual con:
npx wrangler pages publish dist
```

## ⚙️ Configuración

### Variables de Entorno
```bash
# .env
PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/graphql
```

### WordPress Backend
- **URL:** https://cms.blixel.es
- **GraphQL Endpoint:** /graphql
- **Plugins Requeridos:**
  - WPGraphQL
  - WPGraphQL for Advanced Custom Fields
  - WPGraphQL JWT Authentication

### Cloudflare Pages
- **Comando Build:** `npm run build`
- **Directorio Output:** `dist`
- **Node.js:** 18+
- **Variables de Entorno:** Configuradas en Cloudflare Dashboard

## 🔄 Flujo de Trabajo

### Desarrollo
1. **Desarrollo Local** - `npm run dev`
2. **Pruebas** - Verificación manual + validación W3C
3. **Build Test** - `npm run build && npm run preview`
4. **Commit** - Git push a rama de desarrollo

### Deploy a Producción
1. **Merge a Main** - Pull request aprobado
2. **Auto Deploy** - Cloudflare Pages detecta cambios
3. **Verificación** - Tests automáticos + verificación manual
4. **DNS Propagación** - Actualización global CDN

## 📊 Performance

### Métricas Objetivo
- **Lighthouse Score:** 95+ en todas las categorías
- **Core Web Vitals:**
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
- **Bundle Size:** < 200KB gzipped

### Optimizaciones Implementadas
- **Image Optimization** - Sharp con WebP/AVIF
- **Code Splitting** - Componentes lazy-loaded
- **CSS Purging** - Tailwind JIT
- **Font Optimization** - Preload de fuentes críticas
- **Cache Strategy** - Cloudflare CDN + Service Worker

## 🛠️ Scripts Útiles

### Desarrollo
```bash
npm run dev          # Servidor desarrollo
npm run build        # Build producción
npm run preview      # Preview del build
```

### Mantenimiento
```bash
npm audit fix        # Actualizar dependencias seguridad
npm update          # Actualizar dependencias menores
```

### Deploy
```bash
# Deploy manual (si es necesario)
npm run build && npx wrangler pages publish dist
```

## 🔗 Enlaces Importantes

- **Sitio Web:** https://blixel.es
- **CMS Admin:** https://cms.blixel.es/wp-admin
- **Cloudflare Dashboard:** Panel de Cloudflare Pages
- **Repository:** Git repository interno

## 👥 Equipo

- **Desarrollo:** Blixel AI Team
- **Diseño:** Blixel Studio
- **Contenido:** WordPress CMS
- **Infraestructura:** Cloudflare Pages

## 📝 Notas de Versión

### v1.0.0 - Lanzamiento Inicial
- Arquitectura Astro + WordPress Headless
- Sistema multiidioma ES/CA
- Formulario de contacto nativo
- Componentes Magic UI implementados
- SEO y performance optimizados
- Deploy automatizado en Cloudflare Pages

---

> **Mantenido por:** Blixel Group SL  
> **Contacto Técnico:** hola@blixel.es  
> **Documentación actualizada:** Junio 2025