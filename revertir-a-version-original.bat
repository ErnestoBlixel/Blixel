@echo off
echo ==========================================
echo REVERTIR A VERSION ORIGINAL
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/2] RESTAURANDO VERSION ORIGINAL...
echo ----------------------------------------

REM Restaurar index.astro
powershell -Command "(Get-Content 'src/pages/index.astro') -replace 'import ExamplesIASection from ''../components/ExamplesIASectionV2.astro'';', 'import ExamplesIASection from ''../components/ExamplesIASection.astro'';' | Set-Content 'src/pages/index.astro'"

echo.
echo [2/2] APLICANDO CAMBIOS...
echo ----------------------------------------

git add src/pages/index.astro
git commit -m "revert: Volver a ExamplesIASection original"
git push origin main

echo.
echo ✅ REVERTIDO A VERSION ORIGINAL
echo.
pause
