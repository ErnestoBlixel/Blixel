@echo off
echo =====================================
echo   DEPLOY A CLOUDFLARE PAGES
echo =====================================

echo.
echo 1. Construyendo el proyecto...
npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERROR EN BUILD
    echo Revisa los errores arriba antes de continuar
    pause
    exit /b 1
)

echo.
echo ✅ Build exitoso!

echo.
echo 2. Preparando cambios para Git...
git add .

echo.
echo 3. Creando commit...
git commit -m "Update: Sección Por qué implementar IA ahora"

echo.
echo 4. Subiendo a GitHub (esto activa Cloudflare)...
git push

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =====================================
    echo 🚀 DEPLOY INICIADO CON ÉXITO!
    echo =====================================
    echo.
    echo Cloudflare Pages detectará los cambios automáticamente
    echo y reconstruirá tu sitio en 1-3 minutos.
    echo.
    echo 📌 Puedes ver el progreso en:
    echo https://dash.cloudflare.com/pages
    echo.
    echo 🌐 Tu sitio estará actualizado en:
    echo https://blixel.es
    echo.
    echo =====================================
) else (
    echo.
    echo ❌ Error al hacer push a GitHub
    echo Verifica tu conexión y credenciales
)

pause
