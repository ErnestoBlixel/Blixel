# 🚀 SOLUCIÓN RÁPIDA

## El problema:
Tu código buscaba una página con slug "blixel-ai" pero tu página principal no tiene ese slug.

## La solución aplicada:
He actualizado el código para buscar la página principal (`/`) en lugar de "blixel-ai".

## ✅ Pasos para que funcione:

### En WordPress:
1. Ve a tu página **"Formación de inteligencia artificial empresas"**
2. En el campo **Slug** (que está vacío), escribe: `home` o déjalo vacío
3. Agrega una **imagen destacada** (1200x630px ideal para redes sociales)
4. **Guarda** los cambios

### En tu proyecto:
5. Reinicia el servidor:
   ```bash
   npm run dev
   ```
6. Abre http://localhost:4321

## 🎯 Resultado esperado:
- **H1 del Hero**: "Formación de inteligencia artificial empresas" (o el título que pongas)
- **Status**: ✅ Conectado
- **Imagen destacada**: ✅ Configurada (para cuando compartas en redes)

## 🔍 Si no funciona:
```bash
# Ejecuta este comando para encontrar tu página
find-home.bat
```

Luego usa el URI que te muestre para actualizar el código.

## 📝 Archivos modificados:
- `src/pages/index.astro` - Busca página principal
- `src/layouts/Layout.astro` - Añadido soporte para imagen Open Graph
- `src/components/Hero.astro` - Prioriza datos personalizados

---
¡Listo! Solo falta configurar el slug en WordPress.
