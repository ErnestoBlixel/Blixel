# Solución aplicada para el error de Apollo Client

## Problema encontrado
Error: `[vite] Named export 'gql' not found. The requested module '@apollo/client' is a CommonJS module`

## Cambios realizados

### 1. Archivo: `src/graphql/client.ts`
- ✅ Cambiado de importación named exports a namespace import
- ✅ Uso de `import * as Apollo from '@apollo/client'`
- ✅ Destructuring manual de los componentes necesarios

### 2. Archivo: `astro.config.mjs`
- ✅ Agregada configuración de Vite para optimizar Apollo Client
- ✅ Incluido `@apollo/client` en `optimizeDeps.include`
- ✅ Agregado `@apollo/client` a `ssr.noExternal`

### 3. Archivos de respaldo creados
- ✅ `src/graphql/client-backup.ts` - Cliente alternativo con importación dinámica
- ✅ `src/utils/test-apollo.js` - Script de prueba para verificar importaciones

## Próximos pasos

1. **Reiniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Si el problema persiste:**
   - Borrar caché: `rm -rf .astro && rm -rf node_modules/.vite`
   - Reinstalar dependencias: `npm install`
   - Ejecutar prueba: `node src/utils/test-apollo.js`

3. **Alternativa si Apollo Client sigue fallando:**
   - Usar el cliente de respaldo con `graphql-request`
   - Importar desde `client-backup.ts` en lugar de `client.ts`

## Archivos modificados
- ✅ `src/graphql/client.ts`
- ✅ `astro.config.mjs`
- ➕ `src/graphql/client-backup.ts` (nuevo)
- ➕ `src/utils/test-apollo.js` (nuevo)

El error debería estar solucionado con estos cambios. La importación por namespace es más compatible con bundlers como Vite/Astro.
