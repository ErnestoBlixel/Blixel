@echo off
echo ======================================
echo    APLICANDO COLORES DE MARCA
echo ======================================
echo.

echo [1] Limpiando cache...
if exist .astro rmdir /s /q .astro
if exist dist rmdir /s /q dist

echo.
echo [2] Reiniciando servidor...
echo.
echo CAMBIOS APLICADOS:
echo - Gradientes con colores #251863 y #02aa6d
echo - 13 logos agregados al slider
echo - Todos los elementos visuales actualizados
echo.
echo COLORES DE MARCA:
echo - Azul oscuro: #251863
echo - Verde: #02aa6d
echo.
start cmd /k "npm run dev"

echo.
pause
