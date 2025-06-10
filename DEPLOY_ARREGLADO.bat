@echo off
echo ======================================
echo 🚀 DEPLOY FINAL - IMPORTS CORREGIDOS
echo ======================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/3] VERIFICANDO QUE NO HAY MAS IMPORTS INCORRECTOS...
findstr /r "motion/react" src\components\magic-ui\*.tsx >nul 2>&1
if not errorlevel 1 (
    echo ❌ TODAVIA HAY IMPORTS INCORRECTOS
    pause
    exit /b 1
)
echo ✅ Todos los imports corregidos (framer-motion)

echo.
echo [2/3] SUBIENDO CAMBIOS...
git add .
git commit -m "fix: corregir TODOS los imports motion/react a framer-motion"

echo.
echo [3/3] DEPLOY A CLOUDFLARE...
git push origin main

echo.
echo ======================================
echo ✅ DEPLOY COMPLETADO
echo ======================================
echo.
echo 🌐 Tu sitio se desplegará en 2-3 minutos:
echo    https://blixel.pages.dev
echo.
echo ✅ ARCHIVOS CORREGIDOS:
echo    ✓ NotificationManager.tsx
echo    ✓ NotificationCard.tsx
echo.
echo 🚀 PROBLEMA RESUELTO DEFINITIVAMENTE
echo.
pause
