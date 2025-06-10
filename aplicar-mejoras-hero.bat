@echo off
echo ======================================
echo    APLICANDO MEJORAS AL HERO Y LOGOS
echo ======================================
echo.

echo [1] Limpiando cache...
if exist .astro rmdir /s /q .astro
if exist dist rmdir /s /q dist

echo.
echo [2] Reiniciando servidor...
echo.
echo CAMBIOS APLICADOS:
echo - Cursor del typing eliminado (mas limpio)
echo - Titulo con mejor espaciado entre lineas
echo - Logos con max-width como otros bloques
echo - Gradientes mejorados en los bordes
echo.
start cmd /k "npm run dev"

echo.
pause
