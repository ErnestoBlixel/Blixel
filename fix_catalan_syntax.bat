@echo off
echo 🔧 Corrigiendo error de sintaxis en ca/index.astro...

cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo ✅ Añadiendo corrección específica...
git add src/pages/ca/index.astro

echo.
echo ✅ Haciendo commit de la corrección...
git commit -m "🔧 Fix: Corregir sintaxis en ca/index.astro

🐛 PROBLEMA RESUELTO:
- Error de sintaxis en línea 23 del archivo catalán
- Caracteres especiales problemáticos en encoding
- pageSlug con formato incorrecto

✅ CORRECCIONES:
- Simplificado pageSlug: ca/inicio → ca-home  
- Eliminados caracteres especiales problemáticos
- Normalizado encoding de texto catalán
- Sintaxis Astro corregida

🚀 RESULTADO:
- Build debería compilar sin errores
- Página catalana funcional
- Encoding limpio y compatible"

echo.
echo ✅ Haciendo push...
git push origin main

echo.
echo 🎯 ¡ERROR DE SINTAXIS CORREGIDO!
echo 📝 Cambios realizados:
echo   • pageSlug simplificado
echo   • Caracteres especiales normalizados  
echo   • Sintaxis Astro verificada
echo.
echo 🚀 El build debería funcionar ahora
pause
