@echo off
echo ==========================================
echo SOLUCION DEFINITIVA TARJETAS BLANCAS
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/4] CAMBIOS APLICADOS:
echo ----------------------------------------
echo ✅ Título cambiado a 2 líneas: "Pon a trabajar la IA / en tu empresa"
echo ✅ Fondo blanco sólido forzado con múltiples propiedades
echo ✅ Contenedor con fondo oscuro para contraste
echo ✅ Colores de texto en negro y gris oscuro
echo ✅ Iconos con fondo gris claro
echo ✅ Eliminado modo oscuro para mantener siempre blanco
echo ✅ Animaciones simplificadas
echo.

echo [2/4] VERIFICANDO CAMBIOS CRÍTICOS...
echo ----------------------------------------
git diff src/components/ExamplesIASection.astro | findstr /C:"background-color: #ffffff !important" /C:"Pon a trabajar la IA"
echo.

echo [3/4] HACIENDO COMMIT...
echo ----------------------------------------

REM Añadir cambios
git add src/components/ExamplesIASection.astro

REM Commit con mensaje descriptivo
git commit -m "fix: Solución definitiva para tarjetas blancas y título 2 líneas

- Título cambiado: 'Pon a trabajar la IA / en tu empresa' (2 líneas)
- Fondo blanco forzado con background-color + background + sin backdrop-filter
- Contenedor con fondo oscuro rgba(0,0,0,0.3) para contraste
- Texto en negro (#000000) para máximo contraste en fondo blanco
- Iconos con fondo gris claro sólido #f3f4f6
- Eliminado modo oscuro - tarjetas siempre blancas
- Animaciones simplificadas sin scale
- Box-shadow más pronunciada para destacar las tarjetas"

echo.
echo [4/4] SUBIENDO A GITHUB...
git push origin main

echo.
echo ==========================================
echo ✅ CAMBIOS DEFINITIVOS APLICADOS!
echo ==========================================
echo.
echo 🎯 RESUMEN VISUAL:
echo    - Tarjetas: Fondo blanco sólido #FFFFFF
echo    - Contenedor: Fondo oscuro para contraste
echo    - Título: 2 líneas como querías
echo    - Texto: Negro y gris oscuro (legible)
echo.
echo 🚀 Cloudflare Pages iniciará el despliegue
echo    Revisa en 2-3 minutos: https://blixel.es
echo.
pause
