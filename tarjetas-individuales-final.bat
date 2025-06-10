@echo off
echo ==========================================
echo TARJETAS INDIVIDUALES - SOLUCION FINAL
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/4] CAMBIOS APLICADOS:
echo ----------------------------------------
echo ✅ Eliminado fondo del contenedor
echo ✅ Solo 5 tarjetas visibles (independientes)
echo ✅ Mayor espaciado entre tarjetas (gap: 12px)
echo ✅ Margen lateral en cada tarjeta (8px)
echo ✅ Sombras más pronunciadas para separación
echo ✅ Border-radius aumentado a 16px
echo ✅ Animaciones más lentas (3 segundos)
echo.

echo [2/4] VERIFICANDO CAMBIOS...
git status
echo.

echo [3/4] HACIENDO COMMIT...
git add src/components/ExamplesIASection.astro

git commit -m "fix: Convertir a tarjetas individuales separadas

- Eliminado fondo del contenedor (transparent)
- Reducido a máximo 5 tarjetas visibles
- Aumentado espaciado entre tarjetas (gap 12px)
- Añadido margen lateral a cada tarjeta (8px)
- Sombras más pronunciadas para separación visual
- Border-radius aumentado a 16px
- Animaciones más espaciadas (cada 3 segundos)
- Iconos con fondo gris muy claro #f9fafb"

echo.
echo [4/4] SUBIENDO A GITHUB...
git push origin main

echo.
echo ==========================================
echo ✅ TARJETAS INDIVIDUALES APLICADAS!
echo ==========================================
echo.
echo 🎯 Ahora deberías ver:
echo    - 5 tarjetas blancas independientes
echo    - Sin fondo contenedor
echo    - Bien espaciadas entre sí
echo    - Sombras individuales en cada una
echo.
echo 🚀 Cloudflare desplegará en 2-3 minutos
echo.
pause
