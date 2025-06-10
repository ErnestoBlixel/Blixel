@echo off
echo 🧹 ========================================
echo     LIMPIANDO PROYECTO BLIXEL AI
echo 🧹 ========================================
echo.

echo ✅ Eliminando scripts de prueba y archivos obsoletos...

:: Eliminar scripts .bat obsoletos
del /f /q actualizar-git-cloudflare.bat 2>nul
del /f /q animaciones-funcionando.bat 2>nul
del /f /q aplicar-*.bat 2>nul
del /f /q check*.bat 2>nul
del /f /q clean-duplicates.bat 2>nul
del /f /q commit*.bat 2>nul
del /f /q comprobar-todo.bat 2>nul
del /f /q debug_github.bat 2>nul
del /f /q deploy-*.bat 2>nul
del /f /q deploy-*.ps1 2>nul
del /f /q deploy*.cmd 2>nul
del /f /q deploy_*.bat 2>nul
del /f /q find-*.bat 2>nul
del /f /q find-*.js 2>nul
del /f /q fix-*.bat 2>nul
del /f /q fix_*.bat 2>nul
del /f /q force_sync.bat 2>nul
del /f /q h1-mas-pequeno.bat 2>nul
del /f /q hero-actualizado.bat 2>nul
del /f /q instalar-magic-ui.bat 2>nul
del /f /q install-magic-notifications.bat 2>nul
del /f /q padding-reducido.bat 2>nul
del /f /q probar-animaciones-simples.bat 2>nul
del /f /q resumen.bat 2>nul
del /f /q revertir-*.bat 2>nul
del /f /q solucion-*.bat 2>nul
del /f /q tarjetas-*.bat 2>nul
del /f /q test-*.bat 2>nul
del /f /q titulo-optimizado.bat 2>nul
del /f /q update-cloudflare-quick.bat 2>nul
del /f /q verificar-*.bat 2>nul

:: Eliminar archivos de prueba
del /f /q test-*.js 2>nul
del /f /q test-*.html 2>nul
del /f /q verify-changes.js 2>nul
del /f /q d.ps1 2>nul

:: Eliminar documentación obsoleta
del /f /q ANIMACIONES_*.md 2>nul
del /f /q CAMBIOS_*.md 2>nul
del /f /q COLORES_MARCA_APLICADOS.md 2>nul
del /f /q CONFIGURACION_*.md 2>nul
del /f /q DEPLOY_*.md 2>nul
del /f /q ESTADO_FUNCIONANDO.md 2>nul
del /f /q HERO_*.md 2>nul
del /f /q LISTO_MEJORAS.md 2>nul
del /f /q LOGOS_INSTRUCCIONES.md 2>nul
del /f /q MAGIC_UI_*.md 2>nul
del /f /q MEJORAS_HERO_APLICADAS.md 2>nul
del /f /q PLANTILLA_DOCUMENTACION.md 2>nul
del /f /q POWERSHELL_GUIDE.md 2>nul
del /f /q RESUMEN_*.md 2>nul
del /f /q SOLUCION*.md 2>nul
del /f /q TARJETAS_*.md 2>nul
del /f /q TODO_LISTO*.md 2>nul
del /f /q TROUBLESHOOTING_WORDPRESS.md 2>nul

:: Eliminar archivos de configuración duplicados
del /f /q astro.config.js 2>nul
del /f /q htaccess_*.txt 2>nul
del /f /q diagnose_wordpress* 2>nul
del /f /q deploy*.ps1 2>nul

echo.
echo ✅ LIMPIEZA COMPLETADA!
echo.
echo 📁 Archivos mantenidos:
echo    - package.json
echo    - astro.config.mjs  
echo    - tsconfig.json
echo    - README.md (actualizado)
echo    - DEPLOY.bat (script único de deploy)
echo    - src/ (código fuente)
echo    - public/ (assets)
echo.
pause
