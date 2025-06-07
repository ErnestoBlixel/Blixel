@echo off
cls
echo ========================================
echo    BUSCAR PAGINA PRINCIPAL
echo ========================================
echo.
echo Este script te ayudara a encontrar cual es
echo el slug correcto de tu pagina principal.
echo.

node find-home.js

echo.
echo ========================================
echo    SOLUCION RAPIDA
echo ========================================
echo.
echo En WordPress, edita tu pagina principal:
echo.
echo 1. En el campo "Slug" escribe: home
echo 2. Guarda la pagina
echo 3. Reinicia el servidor: npm run dev
echo.
echo O usa el URI que aparece arriba en tu codigo.
echo.
pause
