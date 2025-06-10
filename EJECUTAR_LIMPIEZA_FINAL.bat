@echo off
echo.
echo 🧹 ==========================================
echo     LIMPIEZA FINAL - BLIXEL AI PROJECT
echo 🧹 ==========================================
echo.

echo ⚠️  ESTE SCRIPT VA A ELIMINAR TODOS LOS ARCHIVOS OBSOLETOS
echo ⚠️  ¿Estás seguro de continuar? (S/N)
set /p confirmacion="👉 Escribe S para continuar: "

if /i not "%confirmacion%"=="S" (
    echo ❌ Limpieza cancelada
    pause
    exit /b 0
)

echo.
echo 🗑️  Eliminando archivos obsoletos...

:: Scripts .bat obsoletos
for %%f in (
    "actualizar-git-cloudflare.bat"
    "animaciones-funcionando.bat"
    "aplicar-*.bat"
    "check*.bat"
    "clean-duplicates.bat"
    "commit*.bat"
    "comprobar-todo.bat"
    "debug_github.bat"
    "deploy-*.bat"
    "deploy-*.ps1"
    "deploy*.cmd"
    "deploy_*.bat"
    "find-*.bat"
    "find-*.js"
    "fix-*.bat"
    "fix_*.bat"
    "force_sync.bat"
    "h1-mas-pequeno.bat"
    "hero-actualizado.bat"
    "instalar-magic-ui.bat"
    "install-magic-notifications.bat"
    "padding-reducido.bat"
    "probar-animaciones-simples.bat"
    "resumen.bat"
    "revertir-*.bat"
    "solucion-*.bat"
    "tarjetas-*.bat"
    "test-*.bat"
    "titulo-optimizado.bat"
    "update-cloudflare-quick.bat"
    "verificar-*.bat"
    "verify-changes.js"
    "d.ps1"
) do (
    if exist "%%f" (
        del /f /q "%%f" 2>nul
        echo ✅ Eliminado: %%f
    )
)

:: Documentación obsoleta
for %%f in (
    "ANIMACIONES_*.md"
    "CAMBIOS_*.md"
    "COLORES_MARCA_APLICADOS.md"
    "CONFIGURACION_*.md"
    "DEPLOY_*.md"
    "ESTADO_FUNCIONANDO.md"
    "HERO_*.md"
    "LISTO_MEJORAS.md"
    "LOGOS_INSTRUCCIONES.md"
    "MAGIC_UI_*.md"
    "MEJORAS_HERO_APLICADAS.md"
    "PLANTILLA_DOCUMENTACION.md"
    "POWERSHELL_GUIDE.md"
    "RESUMEN_*.md"
    "SOLUCION*.md"
    "TARJETAS_*.md"
    "TODO_LISTO*.md"
    "TROUBLESHOOTING_WORDPRESS.md"
) do (
    if exist "%%f" (
        del /f /q "%%f" 2>nul
        echo ✅ Eliminado: %%f
    )
)

:: Archivos de prueba
for %%f in (
    "test-*.js"
    "test-*.html"
    "astro.config.js"
    "htaccess_*.txt"
    "diagnose_wordpress*"
    "cleanup.sh"
    "temp_delete_marker.txt"
    "CLEANUP_PROJECT.bat"
) do (
    if exist "%%f" (
        del /f /q "%%f" 2>nul
        echo ✅ Eliminado: %%f
    )
)

echo.
echo 🎉 ==========================================
echo     LIMPIEZA COMPLETADA EXITOSAMENTE!
echo 🎉 ==========================================
echo.
echo ✅ Archivos mantenidos:
echo    📄 README.md (documentación completa)
echo    🚀 DEPLOY.bat (script único de deploy)
echo    📁 src/ (código fuente)
echo    📁 public/ (assets)
echo    ⚙️  package.json, astro.config.mjs, tsconfig.json
echo.
echo 📋 Próximos pasos:
echo    1️⃣  Ejecuta: ./DEPLOY.bat (para hacer deploy)
echo    2️⃣  Ejecuta: npm run dev (para desarrollo)
echo    3️⃣  Lee: README.md (documentación completa)
echo.
echo 🌐 Tu sitio: https://blixel.pages.dev
echo.

:: Auto-eliminar este script después de ejecutarse
echo ♻️  Auto-eliminando script de limpieza...
del /f /q "%~f0" 2>nul

pause
