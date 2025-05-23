# WordPress Headless + Astro + Cloudflare

Este es un proyecto base para conectar Astro con WordPress Headless y desplegarlo en Cloudflare Pages.

## 🚀 Configuración del Proyecto

### Prerrequisitos

1. **WordPress con GraphQL:** Instala el plugin WPGraphQL en tu WordPress
2. **Node.js:** Versión 18 o superior
3. **Cuenta de Cloudflare:** Para el despliegue

### Instalación

1. Clona o descarga este proyecto
2. Instala las dependencias:
```bash
npm install
```

3. Copia el archivo de variables de entorno:
```bash
cp .env.example .env
```

4. Edita el archivo `.env` con la URL de tu WordPress:
```
WORDPRESS_GRAPHQL_ENDPOINT=https://tu-wordpress-site.com/graphql
```

### Desarrollo Local

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 📝 Configuración de WordPress

### Instalación del Plugin WPGraphQL

1. Ve a tu panel de WordPress
2. Navega a **Plugins > Añadir nuevo**
3. Busca "WPGraphQL"
4. Instala y activa el plugin
5. Verifica que GraphQL esté disponible en: `https://tu-sitio.com/graphql`

### Configuración CORS (si es necesario)

Si tienes problemas de CORS, añade esto a tu `functions.php` de WordPress:

```php
// Permitir CORS para GraphQL
add_action('graphql_init', function() {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
});
```

## ☁️ Despliegue en Cloudflare Pages

### Método 1: A través del Dashboard de Cloudflare

1. Ve a [Cloudflare Pages](https://pages.cloudflare.com/)
2. Conecta tu repositorio de GitHub/GitLab
3. Configura los ajustes de build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18 o superior

### Método 2: Usando Wrangler CLI

1. Instala Wrangler:
```bash
npm install -g wrangler
```

2. Autentica con Cloudflare:
```bash
wrangler login
```

3. Despliega el proyecto:
```bash
npm run build
wrangler pages deploy dist
```

### Variables de Entorno en Cloudflare

En el dashboard de Cloudflare Pages, ve a:
**Settings > Environment variables** y añade:

- `WORDPRESS_GRAPHQL_ENDPOINT`: `https://tu-wordpress-site.com/graphql`

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── components/
│   │   └── WordPressPosts.astro    # Componente para mostrar posts
│   ├── pages/
│   │   └── index.astro             # Página principal
│   └── graphql/
│       └── client.ts               # Cliente GraphQL (legacy)
├── astro.config.mjs                # Configuración de Astro
├── package.json                    # Dependencias del proyecto
└── .env.example                    # Variables de entorno de ejemplo
```

## 🔧 Personalización

### Modificar la Consulta GraphQL

Edita `src/components/WordPressPosts.astro` para cambiar los datos que obtienes:

```javascript
const query = `
  query GetPosts {
    posts(first: 10) {
      nodes {
        id
        title
        excerpt
        date
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
```

### Añadir Nuevas Páginas

Crea archivos `.astro` en `src/pages/` para nuevas rutas:
- `src/pages/about.astro` → `/about`
- `src/pages/blog/[slug].astro` → `/blog/mi-post`

### Estilos

Los estilos están en `src/pages/index.astro`. Puedes:
1. Crear archivos CSS separados en `src/styles/`
2. Usar frameworks como Tailwind CSS
3. Mantener estilos en componentes

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Instalar nuevas dependencias
npm install nombre-paquete
```

## 📚 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build/)
- [WPGraphQL](https://www.wpgraphql.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## 🐛 Solución de Problemas

### Error: Cannot fetch posts
- Verifica que la URL de GraphQL sea correcta
- Comprueba que el plugin WPGraphQL esté activo
- Revisa la configuración de CORS

### Error de Build en Cloudflare
- Asegúrate de usar Node.js 18+
- Verifica las variables de entorno
- Comprueba que todas las dependencias estén instaladas

## 📄 Licencia

Este proyecto es de código abierto. Úsalo libremente para tus proyectos.
