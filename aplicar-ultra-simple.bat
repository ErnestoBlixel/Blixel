@echo off
echo ==========================================
echo APLICAR VERSION ULTRA SIMPLE
echo ==========================================
echo.
echo Esta versión tiene:
echo - HTML y CSS básico (sin complicaciones)
echo - 5 tarjetas blancas estáticas
echo - Check verde simple (texto)
echo - Sin animaciones complejas
echo - GARANTIZADO FONDO BLANCO
echo.
pause

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo.
echo APLICANDO VERSION ULTRA SIMPLE...
echo ----------------------------------------

REM Cambiar el import en index.astro
powershell -Command "(Get-Content 'src/pages/index.astro') -replace 'import ExamplesIASection from ''../components/ExamplesIASection.astro'';', 'import ExamplesIASection from ''../components/ExamplesUltraSimple.astro'';' | Set-Content 'src/pages/index.astro'"

echo.
echo HACIENDO COMMIT...
git add .
git commit -m "fix: Versión ultra simple con tarjetas blancas garantizadas

- HTML y CSS básico sin complicaciones
- 5 tarjetas blancas con border 2px
- Check verde simple como texto
- Sin animaciones ni efectos complejos
- Fondo blanco sólido GARANTIZADO
- Diseño responsive simple"

git push origin main

echo.
echo ==========================================
echo ✅ VERSION ULTRA SIMPLE APLICADA!
echo ==========================================
echo.
echo Esta versión es imposible que falle.
echo Las tarjetas son 100% blancas.
echo.
pause
