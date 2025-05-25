@echo off
echo 🚀 Desplegando correcciones GraphQL a producción...
echo.

echo 📋 Estado actual:
git status

echo.
echo 📁 Agregando archivos:
git add .

echo.
echo 💾 Creando commit:
git commit -m "Fix: Corregir query GraphQL - usar 'page' en lugar de 'paginaHome'"

echo.
echo 🚀 Subiendo a GitHub:
git push origin main

echo.
echo ✅ ¡Cambios subidos! 
echo Cloudflare debería detectar automáticamente el cambio y hacer un nuevo deployment.
echo Ve a Cloudflare Pages para verificar el progreso del deployment.
echo.
pause
