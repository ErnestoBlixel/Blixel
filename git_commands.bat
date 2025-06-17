@echo off
echo 🎆 Haciendo commit de mejoras en partículas...

cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo ✅ Verificando estado del repositorio...
git status

echo.
echo ✅ Añadiendo archivos modificados...
git add src/layouts/Layout.astro
git add src/styles/globals.css
git add src/styles/light-mode-override.css

echo.
echo ✅ Haciendo commit...
git commit -m "✨ Mejoras en visibilidad de partículas para modo oscuro y claro

- Aumentada opacidad de partículas (0.5→0.8 oscuro, 0.9 claro)
- Incrementado grosor de enlaces (1.5px→2px)
- Más partículas visibles (60→80)
- Tamaño aumentado (2-5px→3-7px)
- Mejores filtros de contraste para ambos modos
- Mix-blend-mode optimizado por tema
- Hardware acceleration con translate3d
- Z-index corregido para mejor layering"

echo.
echo ✅ Haciendo push...
git push origin main

echo.
echo 🚀 ¡Cambios subidos exitosamente!
pause
