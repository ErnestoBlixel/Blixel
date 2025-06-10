# 📁 DONDE SUBIR LOS LOGOS

## Ubicación:
```
C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro\public\logos\
```

## Instrucciones:

1. **Sube tus logos a esta carpeta:**
   - `public/logos/logo1.png`
   - `public/logos/logo2.png`
   - `public/logos/logo3.png`
   - etc.

2. **Formatos recomendados:**
   - PNG con fondo transparente
   - SVG para mejor calidad
   - Tamaño: aproximadamente 200x80px

3. **Nombres sugeridos:**
   - `empresa1.png`
   - `cliente1.svg`
   - O nombres descriptivos como `microsoft.png`, `google.svg`

4. **En el código, los usarás así:**
   ```astro
   <img src="/logos/empresa1.png" alt="Empresa 1" />
   ```
   (Nota: Sin "public" en la ruta)

## Ejemplo de estructura:
```
public/
  └── logos/
      ├── microsoft.png
      ├── google.svg
      ├── amazon.png
      ├── meta.svg
      └── apple.png
```

**IMPORTANTE**: Todo lo que pongas en `public/` estará disponible directamente en la raíz del sitio web.
