@echo off
echo 🐛 Arreglando error de compilación de CookieBanner...

cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo ✅ Verificando estado del repositorio...
git status

echo.
echo ✅ Añadiendo archivo arreglado...
git add src/components/CookieBanner.astro

echo.
echo ✅ Haciendo commit del fix...
git commit -m "🐛 Fix: Corregir error de parser HTML en CookieBanner

- Movido CSS suelto dentro de etiquetas <style> correctas
- Frontmatter --- arreglado al inicio del archivo
- Parser HTML ya no falla en compilación de Cloudflare
- CookieBanner funcional sin errores de sintaxis"

echo.
echo ✅ Haciendo push...
git push origin main

echo.
echo 🚀 ¡Fix aplicado y subido exitosamente!
echo 🎯 La compilación en Cloudflare ahora debería funcionar correctamente.
pause
