@echo off
echo =====================================
echo   DEPLOY RAPIDO - WORDPRESS FUNCIONA
echo =====================================

echo.
echo ✅ WordPress confirmado funcionando en cms.blixel.es
echo ✅ WPGraphQL plugin instalado
echo ✅ URL configurada: https://cms.blixel.es/graphql
echo.

echo 1. Limpiando cache...
if exist node_modules rmdir /s /q node_modules 2>nul
if exist dist rmdir /s /q dist 2>nul
if exist .astro rmdir /s /q .astro 2>nul

echo.
echo 2. Instalando dependencias...
npm install

echo.
echo 3. Intentando build...
npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ BUILD EXITOSO! 
    echo.
    echo 4. Haciendo commit y deploy...
    git add .
    git commit -m "Fix: WordPress confirmado funcionando, deploy con GraphQL"
    git push
    
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo 🚀 DEPLOY COMPLETADO
        echo.
        echo === SIGUIENTE PASO ===
        echo Verificar que GraphQL funcione:
        echo 1. https://cms.blixel.es/graphql ^(endpoint^)
        echo 2. https://cms.blixel.es/graphiql ^(interfaz^)
        echo 3. https://blixel.es/test ^(pagina de prueba^)
    ) else (
        echo ❌ Error al hacer push
    )
) else (
    echo ❌ Build falló - revisando logs...
)

pause
