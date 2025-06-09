@echo off
echo =====================================
echo   ACTUALIZAR CLOUDFLARE - RÁPIDO
echo =====================================

echo.
echo Subiendo cambios a GitHub...
echo.

git add .
git commit -m "Update: %date% %time%"
git push

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Cambios subidos exitosamente!
    echo.
    echo ⏳ Cloudflare actualizará tu sitio en 1-3 minutos
    echo 🌐 Verifica en: https://blixel.es
    echo.
) else (
    echo.
    echo ❌ Error al subir cambios
)

pause
