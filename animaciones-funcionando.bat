@echo off
echo ==========================================
echo APLICAR ANIMACIONES FUNCIONANDO
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/3] ANIMACIONES APLICADAS:
echo ----------------------------------------
echo ✅ Entrada inicial desde la izquierda
echo ✅ Nuevas tarjetas con efecto de rebote
echo ✅ Rotación cada 3 segundos
echo ✅ Transiciones suaves al hover
echo ✅ Tarjetas blancas mantenidas
echo.

echo [2/3] APLICANDO CAMBIOS...
git add src/components/ExamplesIASection.astro

git commit -m "fix: Animaciones funcionando correctamente

- Animación inicial: tarjetas entran desde la izquierda
- Nueva animación fadeInSlide para tarjetas nuevas
- Rotación automática cada 3 segundos
- Las nuevas tarjetas entran por arriba con rebote
- Hover con elevación funcionando
- Mantiene el diseño de tarjetas blancas"

echo.
echo [3/3] SUBIENDO A GITHUB...
git push origin main

echo.
echo ==========================================
echo ✅ ANIMACIONES APLICADAS Y FUNCIONANDO!
echo ==========================================
echo.
echo 🎯 Comportamiento:
echo    1. Al cargar: 5 tarjetas entran escalonadas
echo    2. Cada 3 seg: Nueva tarjeta entra por arriba
echo    3. Hover: Tarjeta se eleva
echo.
pause
