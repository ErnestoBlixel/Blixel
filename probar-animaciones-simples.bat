@echo off
echo ==========================================
echo PROBAR VERSION CON ANIMACIONES SIMPLES
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo Esta versión tiene animaciones GARANTIZADAS:
echo - Entrada desde la izquierda al cargar
echo - Nuevas tarjetas desde arriba cada 3 seg
echo - Hover con elevación
echo - TODO en un solo archivo
echo.
pause

echo.
echo APLICANDO VERSION ANIMADA...
powershell -Command "(Get-Content 'src/pages/index.astro') -replace 'import ExamplesIASection from ''../components/ExamplesIASection.astro'';', 'import ExamplesIASection from ''../components/ExamplesAnimated.astro'';' | Set-Content 'src/pages/index.astro'"

echo.
echo HACIENDO COMMIT...
git add .
git commit -m "test: Probar versión con animaciones simples garantizadas

- Animaciones CSS puras funcionando
- Entrada desde izquierda con delays
- Rotación cada 3 segundos
- Todo en un archivo para evitar problemas
- Tarjetas blancas mantenidas"

git push origin main

echo.
echo ==========================================
echo ✅ VERSION ANIMADA APLICADA!
echo ==========================================
echo.
echo Las animaciones DEBEN funcionar ahora.
echo Si no funcionan, hay un problema con el navegador.
echo.
pause
