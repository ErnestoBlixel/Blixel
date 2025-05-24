@echo off
echo 🔍 Verificando estado del repositorio...
echo.

echo 📋 Últimos commits locales:
git log --oneline -5

echo.
echo 🌐 Verificando estado del remoto:
git remote -v

echo.
echo 🔄 Sincronizando con remoto:
git fetch origin

echo.
echo 📊 Comparando local vs remoto:
git log --oneline origin/main -5

echo.
echo 🚀 Estado actual de la rama:
git status

echo.
echo 💾 Si hay diferencias, empujando de nuevo...
git push origin main

echo.
echo Presiona cualquier tecla para continuar...
pause
