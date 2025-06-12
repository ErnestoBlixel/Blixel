@echo off
echo === LIMPIANDO ARCHIVOS BASURA DEL PROYECTO ===
cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo.
echo Eliminando archivos .bat basura...
del /f /q aplicar-*.bat 2>nul
del /f /q check*.bat 2>nul
del /f /q deploy*.bat 2>nul
del /f /q deploy*.ps1 2>nul
del /f /q deploy*.cmd 2>nul
del /f /q fix*.bat 2>nul
del /f /q commit*.bat 2>nul
del /f /q commit*.ps1 2>nul
del /f /q verificar*.bat 2>nul
del /f /q test-*.bat 2>nul
del /f /q clean*.bat 2>nul
del /f /q cleanup*.bat 2>nul
del /f /q diagnose*.bat 2>nul
del /f /q force_sync.bat 2>nul
del /f /q find-*.bat 2>nul
del /f /q git_update.bat 2>nul
del /f /q git_update.ps1 2>nul
del /f /q hero-*.bat 2>nul
del /f /q h1-*.bat 2>nul
del /f /q instalar*.bat 2>nul
del /f /q install*.bat 2>nul
del /f /q limpiar*.bat 2>nul
del /f /q LIMPIAR*.bat 2>nul
del /f /q padding*.bat 2>nul
del /f /q probar*.bat 2>nul
del /f /q resumen.bat 2>nul
del /f /q revertir*.bat 2>nul
del /f /q solucion*.bat 2>nul
del /f /q tarjetas*.bat 2>nul
del /f /q titulo*.bat 2>nul
del /f /q update*.bat 2>nul
del /f /q d.ps1 2>nul
del /f /q LIMPIAR_SRC.ps1 2>nul
del /f /q LIMPIAR_SRC_SIMPLE.bat 2>nul
del /f /q EJECUTAR_LIMPIEZA_FINAL.bat 2>nul
del /f /q deploy-quick.ps1 2>nul

echo.
echo Eliminando archivos .md innecesarios...
del /f /q ANIMACIONES*.md 2>nul
del /f /q CAMBIOS*.md 2>nul
del /f /q COLORES*.md 2>nul
del /f /q COMO_ACTUALIZAR*.md 2>nul
del /f /q CONFIGURACION*.md 2>nul
del /f /q DEPLOY*.md 2>nul
del /f /q EJECUTAR*.md 2>nul
del /f /q ESTADO*.md 2>nul
del /f /q GRAVITY*.md 2>nul
del /f /q HERO*.md 2>nul
del /f /q INSTRUCCIONES*.md 2>nul
del /f /q LISTO*.md 2>nul
del /f /q LOGOS*.md 2>nul
del /f /q MAGIC*.md 2>nul
del /f /q MEJORAS*.md 2>nul
del /f /q PLANTILLA*.md 2>nul
del /f /q POWERSHELL*.md 2>nul
del /f /q PROYECTO*.md 2>nul
del /f /q RESUMEN*.md 2>nul
del /f /q SOLUCION*.md 2>nul
del /f /q TARJETAS*.md 2>nul
del /f /q TODO*.md 2>nul
del /f /q TROUBLESHOOTING*.md 2>nul
del /f /q CLEANUP*.md 2>nul

echo.
echo Eliminando otros archivos basura...
del /f /q comandos_git.txt 2>nul
del /f /q ARCHIVOS_A_ELIMINAR.txt 2>nul
del /f /q temp_delete_marker.txt 2>nul
del /f /q cleanup.sh 2>nul
del /f /q diagnose_wordpress.sh 2>nul
del /f /q cleanup_final.js 2>nul
del /f /q find-duplicates.js 2>nul
del /f /q find-home.js 2>nul
del /f /q test-*.js 2>nul
del /f /q verify-changes.js 2>nul
del /f /q test-animaciones.html 2>nul
del /f /q htaccess*.txt 2>nul

echo.
echo === LIMPIEZA COMPLETADA ===
echo.
echo Solo ejecuta estos comandos git cuando quieras actualizar:
echo.
echo cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"
echo git add -A
echo git commit -m "tu mensaje"
echo git push origin main
echo.
pause