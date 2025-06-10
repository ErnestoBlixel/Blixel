@echo off
echo ==========================================
echo APLICAR ICONO CHECK VERDE EN TARJETAS
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/3] CAMBIOS A APLICAR:
echo ----------------------------------------
echo ✅ Reemplazar emoticonos por icono check verde
echo ✅ Icono ocupa toda la altura de la tarjeta
echo ✅ Fondo verde (#10b981) en lateral izquierdo
echo ✅ Check blanco SVG centrado
echo ✅ Diseño coherente en todas las tarjetas
echo.

echo [2/3] VERIFICANDO CAMBIOS...
git status
echo.

echo [3/3] HACIENDO COMMIT Y PUSH...
git add .

git commit -m "feat: Reemplazar emoticonos por icono check verde lateral

- Icono check SVG en fondo verde (#10b981)
- Icono ocupa toda la altura de la tarjeta (2 líneas)
- Posicionado en lateral izquierdo con bordes redondeados
- Eliminados todos los emoticonos
- Diseño más profesional y consistente
- Check blanco sobre fondo verde para mejor contraste"

git push origin main

echo.
echo ==========================================
echo ✅ ICONO CHECK APLICADO!
echo ==========================================
echo.
echo 🎯 Ahora las tarjetas tienen:
echo    - Check verde ✓ en lateral izquierdo
echo    - Sin emoticonos
echo    - Diseño más limpio y profesional
echo.
echo 🚀 Cloudflare desplegará en 2-3 minutos
echo.
pause
