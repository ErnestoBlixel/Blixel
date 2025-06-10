@echo off
echo ==========================================
echo APLICAR VERSION SIMPLE (5 TARJETAS)
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/3] CREANDO BACKUP...
copy src\pages\index.astro src\pages\index.astro.backup
echo.

echo [2/3] APLICANDO VERSION SIMPLE...
echo ----------------------------------------

REM Reemplazar import en index.astro
powershell -Command "(Get-Content 'src/pages/index.astro') -replace 'import ExamplesIASection from ''../components/ExamplesIASection.astro'';', 'import ExamplesIASection from ''../components/ExamplesSimple.astro'';' | Set-Content 'src/pages/index.astro'"

echo ✅ Cambios aplicados:
echo    - 5 tarjetas estáticas individuales
echo    - Fondo blanco garantizado
echo    - Sin animaciones complejas
echo    - Diseño limpio y simple
echo.

echo [3/3] HACIENDO COMMIT Y PUSH...
git add .
git commit -m "feat: Implementar versión simple con 5 tarjetas individuales

- 5 tarjetas blancas estáticas e independientes
- Sin animaciones complejas ni listas dinámicas
- Fondo blanco sólido garantizado
- Layout simple y limpio
- Iconos con emojis en fondo gris claro"

git push origin main

echo.
echo ==========================================
echo ✅ VERSION SIMPLE APLICADA!
echo ==========================================
echo.
echo Para volver a la versión anterior:
echo    powershell -Command "(Get-Content 'src/pages/index.astro') -replace 'ExamplesSimple', 'ExamplesIASection' | Set-Content 'src/pages/index.astro'"
echo.
pause
