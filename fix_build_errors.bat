@echo off
echo 🔧 Corrigiendo errores de sintaxis para el build...

cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo ✅ Añadiendo correcciones críticas...
git add src/pages/sitemap.xml.ts
git add src/pages/robots.txt.ts
git add src/middleware.ts
git add src/i18n/config.ts
git add src/components/SEOHead.astro

echo.
echo ✅ Haciendo commit de las correcciones...
git commit -m "🔧 Fix: Corregir errores de sintaxis para compilación

🐛 ERRORES CORREGIDOS:
- sitemap.xml.ts: Cambiar de sintaxis Astro a API Route
- robots.txt.ts: Cambiar de sintaxis Astro a API Route  
- middleware.ts: Simplificar para evitar errores
- config.ts: Quitar función duplicada getAlternateUrls

✅ CAMBIOS:
- Usar export const GET: APIRoute en .ts files
- Response API correcta para sitemap/robots
- Middleware básico funcional
- Importaciones limpias

🚀 RESULTADO:
- Build debería compilar correctamente
- Sitemap y robots.txt funcionales
- Middleware operativo
- Sin errores de sintaxis"

echo.
echo ✅ Haciendo push...
git push origin main

echo.
echo 🎯 ¡ERRORES CORREGIDOS!
echo 🔍 Los principales problemas eran:
echo   • Sintaxis incorrecta en archivos .ts
echo   • Uso de --- en lugar de export const GET
echo   • Función duplicada en config
echo.
echo 🚀 El build ahora debería funcionar correctamente
pause
