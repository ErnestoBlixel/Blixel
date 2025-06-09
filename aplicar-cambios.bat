@echo off
echo ======================================
echo    APLICANDO CAMBIOS Y LIMPIANDO CACHE
echo ======================================
echo.

echo [1] Deteniendo servidor de desarrollo...
taskkill /F /IM node.exe 2>nul

echo.
echo [2] Limpiando carpeta dist...
if exist dist rmdir /s /q dist

echo.
echo [3] Limpiando cache de Astro...
if exist .astro rmdir /s /q .astro

echo.
echo [4] Limpiando node_modules/.cache...
if exist node_modules\.cache rmdir /s /q node_modules\.cache

echo.
echo [5] Reiniciando servidor de desarrollo...
echo.
echo Por favor, abre el navegador en modo incognito o limpia el cache (Ctrl+F5)
echo.
start cmd /k "npm run dev"

echo.
echo ======================================
echo    CAMBIOS APLICADOS CORRECTAMENTE
echo ======================================
echo.
echo RESUMEN DE CAMBIOS:
echo - H2 de servicios: "Nuestras soluciones de inteligencia artificial para empresas" (centrado)
echo - H2 de why now: "¿Por que el momento es AHORA?"
echo - Hero recreado con padding y margenes por defecto
echo.
echo IMPORTANTE: 
echo 1. Espera a que el servidor se inicie completamente
echo 2. Abre el navegador en modo incognito o presiona Ctrl+F5 para limpiar cache
echo 3. Si ves el hero antiguo, cierra el navegador y abrelo de nuevo
echo.
pause
