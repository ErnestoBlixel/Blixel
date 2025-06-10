@echo off
echo ==========================================
echo VOLVER A VERSION ORIGINAL
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo Revirtiendo a ExamplesIASection.astro original...
powershell -Command "(Get-Content 'src/pages/index.astro') -replace 'import ExamplesIASection from ''../components/ExamplesAnimated.astro'';', 'import ExamplesIASection from ''../components/ExamplesIASection.astro'';' | Set-Content 'src/pages/index.astro'"

git add src/pages/index.astro
git commit -m "revert: Volver a versión original de ExamplesIASection"
git push origin main

echo.
echo ✅ Revertido a versión original
echo.
pause
