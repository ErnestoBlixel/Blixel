# ✅ CONFIGURACIÓN CORRECTA - DOMINIOS CLAROS

## **Arquitectura de dominios:**

- 🌐 **`blixel.es`** = Frontend (Astro en Cloudflare Pages)
- 🔧 **`cms.blixel.es`** = WordPress headless (backend para contenido)

## **URLs correctas:**

- **GraphQL Endpoint**: `https://cms.blixel.es/graphql`
- **GraphiQL UI**: `https://cms.blixel.es/graphiql`
- **WordPress Admin**: `https://cms.blixel.es/wp-admin`
- **REST API**: `https://cms.blixel.es/wp-json/wp/v2`

## **✅ Configuración aplicada:**

### `.env`
```bash
PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/graphql
```

### Tu `.htaccess` funciona así:
```apache
# En cms.blixel.es/public_html/.htaccess
RewriteRule ^(graphql|graphiql)(/.*)?$ cms/$1$2 [L]
```

**Esto significa:**
- Usuario accede a: `cms.blixel.es/graphql`
- Servidor redirige internamente a: `cms.blixel.es/cms/graphql` (donde está WordPress)

## **🚀 Para hacer deploy:**

```bash
cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"
deploy_safe.bat
```

## **📋 Siguientes pasos:**

1. **Verificar WordPress funciona**: `https://cms.blixel.es/wp-admin`
2. **Activar WPGraphQL plugin**
3. **Probar GraphQL**: `https://cms.blixel.es/graphql`
4. **Si funciona, el Astro conectará automáticamente**

## **🎯 Estado actual:**
- ✅ **URLs corregidas**
- ✅ **Build no fallará**
- ✅ **Configuración de dominios clara**
- ⏳ **Pendiente: Verificar WordPress en cms.blixel.es**

---
**Bottom line**: La URL `https://cms.blixel.es/graphql` es la correcta. No necesitas `/cms/` porque es el subdominio específico para WordPress.
