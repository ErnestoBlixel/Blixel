@echo off
cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"
echo === Agregando cambios ===
git add -A
echo.
echo === Haciendo commit ===
git commit -m "Fix: H1 visible inmediatamente y logo bajado en Hero"
echo.
echo === Subiendo a GitHub ===
git push origin main
echo.
echo === Proceso completado ===
pause