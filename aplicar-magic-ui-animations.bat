@echo off
echo ==========================================
echo APLICAR ANIMACIONES MAGIC UI
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/3] CAMBIOS DE ANIMACION MAGIC UI:
echo ----------------------------------------
echo ✅ Tarjetas blancas mantenidas
echo ✅ Animación de entrada con rebote (bounce)
echo ✅ Efecto de brillo al hover
echo ✅ Animación de salida suave
echo ✅ Contenedor con glass morphism
echo ✅ Inicio de animaciones al hacer scroll
echo ✅ Delays escalonados más fluidos
echo.

echo [2/3] VERIFICANDO Y APLICANDO...
git add src/components/ExamplesIASection.astro

git commit -m "feat: Añadir animaciones estilo Magic UI a tarjetas blancas

- Animación de entrada con efecto bounce (magicSlideIn)
- Animación de salida suave (magicSlideOut)
- Efecto de brillo al pasar el mouse
- Pulso en el icono al hover
- Contenedor con glass morphism mejorado
- IntersectionObserver para iniciar animaciones al scroll
- Timing más fluido con cubic-bezier
- Mantiene el diseño de tarjetas blancas"

echo.
echo [3/3] SUBIENDO A GITHUB...
git push origin main

echo.
echo ==========================================
echo ✅ ANIMACIONES MAGIC UI APLICADAS!
echo ==========================================
echo.
echo 🎯 Efectos añadidos:
echo    - Entrada con rebote suave
echo    - Brillo al pasar el mouse
echo    - Animaciones al hacer scroll
echo    - Transiciones fluidas
echo.
echo 🚀 Las tarjetas siguen siendo blancas
echo    pero ahora con animaciones premium
echo.
pause
