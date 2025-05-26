# 🛠️ TROUBLESHOOTING WORDPRESS + GRAPHQL

## **Problema actual:**
- Las URLs `cms.blixel.es/graphql` y `cms.blixel.es/cms/graphql` dan 404
- El build de Astro falla porque no puede conectar con GraphQL

## **✅ Solución inmediata aplicada:**
1. **Página /test modificada** para no romper el build
2. **Manejo de errores gracioso** en desarrollo y producción
3. **Fallback a datos estáticos** si GraphQL no está disponible

## **🔍 Diagnóstico necesario:**

### 1. **Verificar instalación de WordPress**
Accede a:
- `https://cms.blixel.es/cms/wp-admin`
- `https://cms.blixel.es/wp-admin`

¿Cuál funciona? Esa es tu ruta base correcta.

### 2. **Verificar plugin WPGraphQL**
En WordPress Admin:
1. Ir a **Plugins → Installed Plugins**
2. Buscar **WPGraphQL**
3. Asegurarse de que esté **Activado**

### 3. **Probar GraphQL manualmente**
Una vez que WordPress funcione, probar:
- `https://cms.blixel.es/graphql` (si WP está en root)
- `https://cms.blixel.es/cms/graphql` (si WP está en /cms/)

### 4. **Verificar .htaccess**
Tu configuración actual redirige:
```apache
# En public_html/.htaccess
RewriteRule ^(graphql|graphiql)(/.*)?$ cms/$1$2 [L]
```

Esto significa:
- `cms.blixel.es/graphql` → `cms.blixel.es/cms/graphql`

## **🚀 Una vez que WordPress funcione:**

### Opción A: WordPress en /cms/
```bash
# En .env
PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/cms/graphql
```

### Opción B: WordPress en root con redirección
```bash
# En .env
PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/graphql
```

## **🧪 Scripts de testing:**

### Para Windows:
```bash
deploy_safe.bat    # Deploy que no falla por GraphQL
```

### Para Linux/Mac:
```bash
chmod +x diagnose_wordpress.sh
./diagnose_wordpress.sh    # Diagnostica conectividad
```

## **📝 URLs importantes:**

- **CMS Admin**: `https://cms.blixel.es/cms/wp-admin` o `https://cms.blixel.es/wp-admin`
- **GraphQL**: `https://cms.blixel.es/cms/graphql` o `https://cms.blixel.es/graphql`
- **Frontend**: `https://blixel.es`
- **Test Page**: `https://blixel.es/test` (con info de debug)

## **🎯 Estado actual:**
- ✅ Build no falla más
- ✅ Deploy funcionará
- ⏳ Pendiente: Configurar WordPress correctamente
- ⏳ Pendiente: Activar WPGraphQL
- ⏳ Pendiente: Confirmar URL correcta

---
**Próximo paso**: Configurar WordPress y activar WPGraphQL plugin.
