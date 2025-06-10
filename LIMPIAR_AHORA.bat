@echo off
echo ELIMINANDO ARCHIVOS TEMPORALES...

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

del /Q aplicar-*.bat 2>nul
del /Q deploy-*.bat 2>nul
del /Q verificar-*.bat 2>nul
del /Q tarjetas-*.bat 2>nul
del /Q test-*.bat 2>nul
del /Q *.ps1 2>nul
del /Q TODO_*.md 2>nul
del /Q HERO_*.md 2>nul
del /Q MAGIC_*.md 2>nul
del /Q CAMBIOS_*.md 2>nul
del /Q RESUMEN_CAMBIOS.md 2>nul
del /Q SOLUCION*.md 2>nul
del /Q *.js 2>nul
del /Q *.html 2>nul
del /Q htaccess_*.txt 2>nul
del /Q temp_*.txt 2>nul

echo LIMPIEZA COMPLETADA
echo TU SITIO SIGUE FUNCIONANDO: https://blixel.es
pause
