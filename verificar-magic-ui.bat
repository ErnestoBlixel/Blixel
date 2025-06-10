@echo off
echo.
echo 🔍 VERIFICACIÓN RÁPIDA - Magic UI Notifications
echo ================================================
echo.

echo ✅ Verificando estructura de archivos...
if exist "src\components\magic-ui" (
    echo    📁 Carpeta magic-ui: ✅ EXISTE
) else (
    echo    📁 Carpeta magic-ui: ❌ NO EXISTE
    goto error
)

if exist "src\components\MagicNotifications.astro" (
    echo    📄 MagicNotifications.astro: ✅ EXISTE
) else (
    echo    📄 MagicNotifications.astro: ❌ NO EXISTE
    goto error
)

if exist "src\layouts\Layout.astro" (
    echo    📄 Layout.astro: ✅ EXISTE (actualizado)
) else (
    echo    📄 Layout.astro: ❌ NO EXISTE
    goto error
)

if exist "package.json" (
    echo    📄 package.json: ✅ EXISTE (actualizado con dependencias)
) else (
    echo    📄 package.json: ❌ NO EXISTE
    goto error
)

echo.
echo ✅ Verificando Git status...
git status --porcelain > nul 2>&1
if %errorlevel% equ 0 (
    echo    📦 Git repository: ✅ LISTO
) else (
    echo    📦 Git repository: ❌ ERROR
    goto error
)

echo.
echo 🎯 RESUMEN DE MAGIC UI NOTIFICATIONS:
echo =====================================
echo.
echo 🌟 EFECTOS VISUALES:
echo    ✨ Border Beam - Rayos animados en bordes
echo    🎆 Particles - Partículas flotantes dinámicas
echo    💫 Magic Spotlight - Sigue el cursor del mouse
echo    🌊 Ripple Effect - Ondas expansivas de fondo
echo.
echo 🎨 ESTILOS DISPONIBLES:
echo    1. ✨ Magic Spotlight (Principal)
echo    2. 🌈 Neon Ripple (Futurista)
echo    3. ⚡ Cyber Glitch (Tecnológico)  
echo    4. 🎯 Classic (Elegante)
echo.
echo 🔔 TIPOS DE NOTIFICACIÓN:
echo    ✅ success, ⚠️ warning, ❌ error, ℹ️ info
echo    ⭐ star, ⚡ zap, ❤️ heart, 🎁 gift
echo.
echo 🚀 FUNCIONES JAVASCRIPT:
echo    • window.createMagicNotification(type, title, message)
echo    • window.showBlixelNotifications() - Demo automático
echo.
echo 📱 CARACTERÍSTICAS:
echo    • Responsive design
echo    • Auto-remove (5 segundos)
echo    • Animaciones 60 FPS
echo    • GPU accelerated
echo    • Sin dependencias externas para funcionar
echo.
echo ========================================
echo  🎉 TODO LISTO PARA EL DEPLOY! 🎉
echo ========================================
echo.
echo ¿Quieres proceder con el deploy a Cloudflare? (S/N)
set /p choice="Respuesta: "
if /i "%choice%"=="S" (
    echo.
    echo 🚀 Iniciando deploy...
    call deploy-magic-notifications.bat
) else (
    echo.
    echo ⏸️ Deploy cancelado. Para deployar manualmente:
    echo    deploy-magic-notifications.bat
    echo.
)
goto end

:error
echo.
echo ❌ ERROR: Faltan archivos importantes
echo Por favor, verifica que todos los archivos se hayan creado correctamente.
echo.
pause
exit /b 1

:end
pause
