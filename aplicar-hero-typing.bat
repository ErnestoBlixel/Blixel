@echo off
echo ======================================
echo    APLICANDO CAMBIOS DEL HERO
echo ======================================
echo.

echo [1] Limpiando cache...
if exist .astro rmdir /s /q .astro
if exist dist rmdir /s /q dist

echo.
echo [2] Reiniciando servidor...
echo.
echo CAMBIOS APLICADOS:
echo - H1 mas grande (hasta 5.5rem)
echo - Efecto typing en el titulo
echo - Margenes ajustados (no excesivos)
echo - Slider de logos agregado
echo.
echo PARA AGREGAR TUS LOGOS:
echo 1. Sube tus logos a: public/logos/
echo 2. Edita LogosSlider.astro con los nombres correctos
echo.
start cmd /k "npm run dev"

echo.
pause
