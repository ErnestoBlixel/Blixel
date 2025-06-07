@echo off
echo ========================================
echo    DIAGNOSTICO VISUAL DE TU SITIO
echo ========================================
echo.

echo [1] Ejecutando diagnostico visual...
echo.
node test-visual.js
echo.

echo ========================================
echo    VERIFICAR EN NAVEGADOR
echo ========================================
echo.
echo 1. Tu sitio local: http://localhost:4321
echo 2. WordPress Admin: https://cms.blixel.es/wp-admin
echo 3. Prueba de imagen compartida: https://developers.facebook.com/tools/debug/
echo.

echo Para probar como se ve al compartir:
echo 1. Abre: https://developers.facebook.com/tools/debug/
echo 2. Pega: https://blixel.es
echo 3. Click en "Debug" para ver la preview
echo.
pause
