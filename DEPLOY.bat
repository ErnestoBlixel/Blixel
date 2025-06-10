@echo off
echo.
echo 🚀 ==========================================
echo     BLIXEL AI - DEPLOY TO CLOUDFLARE
echo 🚀 ==========================================
echo.

echo ✅ Verificando estado del repositorio...
git status

echo.
echo ✅ Agregando cambios...
git add .

echo.
echo ✅ Creando commit...
set /p mensaje="💬 Mensaje del commit (o Enter para mensaje automático): "
if "%mensaje%"=="" (
    git commit -m "feat: 🚀 Deploy automático Blixel AI - %date% %time%"
) else (
    git commit -m "%mensaje%"
)

echo.
echo ✅ Subiendo a GitHub...
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo ❌ ERROR: No se pudo hacer push al repositorio
    echo 🔍 Revisa tu conexión y permisos de GitHub
    pause
    exit /b 1
)

echo.
echo ✅ Deploy iniciado en Cloudflare Pages!
echo.
echo 🌐 Tu sitio se actualizará en:
echo    👉 https://blixel.pages.dev
echo.
echo ⏳ El proceso de build toma aproximadamente 2-3 minutos
echo 📧 Recibirás notificación por email cuando esté listo
echo.
echo ✨ BLIXEL AI - DEPLOY COMPLETADO ✨
echo.
pause
