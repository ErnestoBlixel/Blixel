@echo off
echo ======================================
echo    APLICANDO CAMBIOS Y LIMPIANDO CACHE
echo ======================================
echo.

echo [1] Deteniendo servidor de desarrollo...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

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
echo IMPORTANTE: Abre el navegador en modo incognito o limpia el cache (Ctrl+F5)
echo.
start cmd /k "npm run dev"

echo.
echo ======================================
echo    CAMBIOS APLICADOS CORRECTAMENTE
echo ======================================
echo.
echo RESUMEN DE CAMBIOS APLICADOS:
echo.
echo ✓ H2 de servicios: Alineado a la IZQUIERDA
echo ✓ Hero: Recreado con espacio minimo (sin gaps grandes)
echo ✓ Padding Hero: Solo 2rem arriba y 3rem abajo
echo ✓ Sin margenes negativos grandes en las secciones
echo ✓ GraphQL integrado en el Hero
echo.
echo NOTAS IMPORTANTES:
echo 1. El Hero ahora ocupa mucho menos espacio
echo 2. No hay gaps grandes entre header y contenido
echo 3. Las secciones tienen padding normal (4rem)
echo.
echo Si sigues viendo el diseño antiguo:
echo - Cierra TODAS las pestañas del navegador
echo - Abre en modo incognito (Ctrl+Shift+N)
echo - O limpia el cache del navegador completamente
echo.
pause
