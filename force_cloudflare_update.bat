@echo off
echo 🔄 Forzando actualización de Cloudflare Pages...

cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo 📋 Verificando estado actual del repositorio...
git status
echo.
git log --oneline -5

echo.
echo ✅ Haciendo commit vacío para trigger deployment...
git commit --allow-empty -m "🔄 Trigger: Forzar redespliegue en Cloudflare Pages

🎯 OBJETIVO:
- Forzar nuevo build en Cloudflare
- Aplicar todos los fixes de sintaxis
- Actualizar a último commit

🔧 FIXES INCLUIDOS:
- sitemap.xml.ts corregido (API Route)
- robots.txt.ts corregido (API Route)  
- middleware.ts simplificado
- ca/index.astro sintaxis corregida
- SEOHead.astro optimizado

🚀 SISTEMA COMPLETO:
- Multiidioma ES/CA funcional
- Partículas balanceadas
- SEO optimizado
- Build corregido"

echo.
echo ✅ Pushing commit vacío para trigger...
git push origin main

echo.
echo 🔄 DEPLOYMENT FORZADO
echo.
echo 📋 PASOS PARA VERIFICAR:
echo 1. Ve a Cloudflare Pages Dashboard
echo 2. Revisa que aparezca un nuevo deployment
echo 3. Verifica que use el commit más reciente
echo 4. Si no se activa automáticamente:
echo    - Ve a "Settings" en Cloudflare Pages
echo    - Busca "Build configurations"  
echo    - Haz clic en "Retry deployment"
echo.
echo 🎯 Si persiste el problema:
echo    - Verifica webhook GitHub ↔ Cloudflare
echo    - Revisa branch configurado (main)
echo    - Comprueba permisos del repositorio
echo.
pause
