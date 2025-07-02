# 🔍 Diagnóstico: Página WordPress no encontrada

## Problema
La página `formacion-ia-empresas` devuelve 404 en Astro aunque existe en WordPress.

## Pasos de diagnóstico

### 1. Ejecutar script de búsqueda
```bash
node test-wp-simple.js
```

Esto te mostrará todas las páginas detectadas por GraphQL.

### 2. Buscar específicamente tu página
```bash
node search-wp-content.js
```

Este script buscará la página de varias formas diferentes.

### 3. Verificar el build de Astro
```bash
npm run build
```

Revisa el output del build. Deberías ver algo como:
```
▶ pages/formacion-ia-empresas/index.html (+XX ms)
```

Si no aparece, la página no se está generando.

## Posibles causas y soluciones

### Causa 1: La página está en borrador
**Solución**: En WordPress, asegúrate de que la página esté publicada (no en borrador).

### Causa 2: Problema de caché
**Solución**: 
```bash
# Limpiar caché de Astro
rm -rf .astro
rm -rf dist
npm run build
```

### Causa 3: El slug es diferente
**Solución**: En WordPress, ve a la página y verifica el slug exacto en la configuración.

### Causa 4: Problema con GraphQL/WPGraphQL
**Solución**: 
1. Verifica que WPGraphQL esté activo
2. Prueba el GraphQL IDE en: https://cms.blixel.es/graphql (si está habilitado)
3. Ejecuta esta query:
```graphql
{
  pageBy(slug: "formacion-ia-empresas") {
    id
    slug
    title
    status
  }
}
```

### Causa 5: La página es un Custom Post Type
Si creaste la página con un plugin o tema especial, podría ser un CPT.

**Solución**: Necesitaríamos actualizar las queries para incluir ese tipo de contenido.

## Verificación rápida en WordPress

1. Ve al admin de WordPress
2. Páginas → Todas las páginas
3. Busca "formacion"
4. Verifica:
   - Estado: Publicada
   - Slug: formacion-ia-empresas
   - Visibilidad: Pública

## Debug adicional

Si ninguno de los scripts anteriores encuentra la página, ejecuta:

```bash
# Ver qué rutas genera Astro
npm run build > build-output.txt 2>&1
```

Luego revisa `build-output.txt` para ver qué páginas se generaron.

## Solución temporal

Mientras resolvemos el problema, puedes crear la página manualmente:

1. Copia `src/pages/[slug].astro` a `src/pages/formacion-ia-empresas.astro`
2. Modifica el archivo para cargar el contenido específico
3. Rebuild y deploy

¿Cuál es el resultado de los scripts de diagnóstico?
