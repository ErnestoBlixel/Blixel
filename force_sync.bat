@echo off
echo 🔄 Forzando sincronización completa con GitHub...
echo.

echo 📋 Estado actual:
git status

echo.
echo 🗂️ Últimos commits locales:
git log --oneline -3

echo.
echo 🚀 Forzando push al repositorio remoto:
git push origin main --force-with-lease

echo.
echo ✅ Verificando que el push fue exitoso:
git ls-remote origin main

echo.
echo 🌐 Último commit en GitHub:
git log origin/main --oneline -1

echo.
echo 📦 Creando un commit vacío para forzar rebuild en Cloudflare:
git commit --allow-empty -m "Trigger Cloudflare rebuild"
git push origin main

echo.
echo ✅ ¡Proceso completado!
echo Ahora ve a Cloudflare y verifica el nuevo deployment.
echo.
pause
