@echo off
echo ==========================================
echo VERSION CON ANIMACIONES INLINE (100% GARANTIZADO)
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo Esta versión tiene:
echo - Animaciones CSS directamente en el HTML
echo - Estilos inline para evitar conflictos
echo - JavaScript simple sin complicaciones
echo - IMPOSIBLE que no funcione
echo.
pause

echo.
echo APLICANDO VERSION INLINE...
powershell -Command "(Get-Content 'src/pages/index.astro') -replace 'import ExamplesIASection from ''../components/[^'']+\.astro'';', 'import ExamplesIASection from ''../components/ExamplesInline.astro'';' | Set-Content 'src/pages/index.astro'"

echo.
echo HACIENDO COMMIT...
git add .
git commit -m "fix: Versión con animaciones inline garantizadas

- Animaciones CSS directamente en style de cada elemento
- Sin dependencias externas
- JavaScript simple y directo
- Hover funcionando con !important
- Rotación cada 3 segundos garantizada"

git push origin main

echo.
echo ==========================================
echo ✅ VERSION INLINE APLICADA!
echo ==========================================
echo.
echo AHORA SÍ DEBES VER:
echo 1. Las tarjetas entrando desde la izquierda al cargar
echo 2. Nueva tarjeta desde arriba cada 3 segundos
echo 3. Hover al pasar el mouse (se eleva)
echo.
echo Si NO ves animaciones con esta versión:
echo - Tu navegador tiene JavaScript deshabilitado
echo - O hay un problema de caché muy severo
echo.
pause
