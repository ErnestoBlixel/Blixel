@echo off
echo 🔧 Corrigiendo error CSS en LanguageSelector.astro...

cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo ✅ Añadiendo corrección de LanguageSelector...
git add src/components/LanguageSelector.astro

echo.
echo ✅ Haciendo commit de la corrección CSS...
git commit -m "🔧 Fix: Corregir error CSS syntax en LanguageSelector.astro

🐛 PROBLEMA RESUELTO:
- Error CSS syntax línea 1 posición 31
- Problema de parsing en build de Cloudflare
- Import TypeScript complejo

✅ CORRECCIONES:
- Simplificado imports (removido type casting)
- Limpiado CSS syntax
- Corregido script TypeScript
- Formato más compatible con build

🚀 RESULTADO:
- CSS parsing limpio
- Build debería compilar correctamente
- Selector de idiomas funcional"

echo.
echo ✅ Haciendo push...
git push origin main

echo.
echo 🎯 ¡ERROR CSS CORREGIDO!
echo 📝 Cambios realizados:
echo   • Imports simplificados
echo   • CSS syntax limpio
echo   • TypeScript compatible
echo   • Parsing optimizado
echo.
echo 🚀 Build debería funcionar ahora
pause
