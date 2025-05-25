@echo off
echo 🔧 Resolviendo problema de sincronización GitHub...
echo.

echo 📋 Estado actual de ramas:
git branch -a

echo.
echo 🗂️ Últimos commits locales:
git log --oneline -5

echo.
echo 🌐 Últimos commits en origin/main:
git log origin/main --oneline -5

echo.
echo 🔄 Forzando actualización del remoto:
git fetch origin --force

echo.
echo 🚀 Push más agresivo:
git push origin +main:main

echo.
echo ✅ Verificando sincronización:
git log origin/main --oneline -3

echo.
echo 📝 Si sigue fallando, eliminaremos cache de git:
git gc --prune=now
git remote prune origin

echo.
pause
