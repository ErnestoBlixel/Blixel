@echo off
echo ======================================
echo    VERIFICANDO ESTADO DEL PROYECTO
echo ======================================
echo.

echo [1] Estado de Git:
echo --------------------
git status --short
echo.

echo [2] Ultima confirmacion:
echo --------------------
git log -1 --oneline
echo.

echo [3] Rama actual:
echo --------------------
git branch --show-current
echo.

echo [4] Verificando conexion con GitHub:
echo --------------------
git remote -v
echo.

echo [5] Archivos modificados:
echo --------------------
echo.
echo Archivos principales modificados:
echo.
if exist src\components\Hero.astro echo ✓ Hero.astro - MODIFICADO
if exist src\components\ServicesIASection.astro echo ✓ ServicesIASection.astro - MODIFICADO  
if exist src\components\WhyIANowSection.astro echo ✓ WhyIANowSection.astro - MODIFICADO
if exist src\layouts\Layout.astro echo ✓ Layout.astro - MODIFICADO
echo.

echo [6] Resumen de cambios pendientes:
echo --------------------
git diff --stat
echo.

echo ======================================
echo    OPCIONES DISPONIBLES
echo ======================================
echo.
echo 1. actualizar-git-cloudflare.bat - Despliega todo automaticamente
echo 2. deploy-seguro.bat - Despliega con confirmacion
echo 3. aplicar-cambios-v2.bat - Solo aplica cambios localmente
echo.
pause
