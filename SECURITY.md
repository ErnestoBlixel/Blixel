# SECURITY.md

## 🔒 Configuración de Seguridad

Este proyecto está configurado para proteger información sensible:

### ✅ Archivos Protegidos

Los siguientes archivos **NO** se suben a GitHub:
- `.env` - Variables de entorno locales
- `.env.*` - Cualquier archivo de entorno
- `*.key` - Claves privadas
- `config/secrets.js` - Configuraciones sensibles

### 🌐 Variables de Entorno

#### Variables Públicas (visibles en cliente):
- `PUBLIC_WP_GRAPHQL_URL` - URL del endpoint GraphQL

#### Variables Privadas (solo servidor):
- Cualquier variable sin prefijo `PUBLIC_`

### 🚀 Configuración en Cloudflare Pages

1. Ve a **Workers & Pages → tu-proyecto → Settings → Environment variables**
2. Añade las variables necesarias:
   ```
   PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/graphql
   ```

### 🔧 Configuración Local

1. Copia `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edita `.env` con tus valores locales:
   ```env
   PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/graphql
   ```

### ⚠️ Importante

- **NUNCA** hagas commit del archivo `.env`
- **SIEMPRE** usa variables `PUBLIC_*` para datos que pueden ser visibles
- **VERIFICA** que `.gitignore` incluye archivos sensibles

### 🕵️ Debug Mode

La información de debug solo es visible en:
- Modo desarrollo (`npm run dev`)
- No contiene datos sensibles
- Se oculta automáticamente en producción
