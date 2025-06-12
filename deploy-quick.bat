@echo off
echo 🚀 DEPLOY RÁPIDO - Gravity Forms
echo.

echo Building...
call npm run build || exit /b 1

echo.
echo Git commit...
git add .
git commit -m "Add Gravity Forms to Hero section"
git push origin main

echo.
echo ✅ LISTO! 
echo - Git: Updated
echo - Cloudflare: Auto-deploy en curso
echo - Check: https://dash.cloudflare.com/pages
echo.

pause
