@echo off
echo.
echo 🔧 ========================================
echo     PROBANDO BUILD ANTES DE DEPLOY
echo 🔧 ========================================
echo.

echo ✅ Paso 1: Limpiando cache de npm...
npm cache clean --force

echo.
echo ✅ Paso 2: Instalando dependencias...
npm install

echo.
echo ✅ Paso 3: Intentando build local...
echo ⏳ Esto puede tomar un momento...
npm run build

if %errorlevel% neq 0 (
    echo.
    echo ❌ ERROR: El build falló!
    echo 🔍 Revisa los errores arriba para más información.
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ ¡BUILD EXITOSO! 🎉
echo.
echo 🚀 ¿Quieres hacer el deploy ahora? (Y/N)
set /p deploy="Presiona Y para deploy o N para cancelar: "

if /i "%deploy%"=="Y" (
    echo.
    echo 🚀 Iniciando deploy...
    call fix-and-deploy-magic-ui.bat
) else (
    echo.
    echo ⏸️  Deploy cancelado. Puedes ejecutar 'fix-and-deploy-magic-ui.bat' cuando quieras.
)

echo.
pause
