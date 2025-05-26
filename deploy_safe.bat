@echo off
echo =====================================
echo   DEPLOY CON MANEJO DE ERRORES GRAPHQL
echo =====================================

echo.
echo 1. Verificando configuracion actual...
echo URL GraphQL configurada:
type .env
echo.

echo 2. Limpiando cache...
if exist node_modules rmdir /s /q node_modules
if exist dist rmdir /s /q dist
if exist .astro rmdir /s /q .astro

echo.
echo 3. Instalando dependencias...
npm install

echo.
echo 4. Probando build (deberia funcionar ahora)...
npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ BUILD EXITOSO! 
    echo.
    echo La pagina /test ahora maneja errores graciosamente
    echo y no rompe el build si GraphQL no esta disponible.
    echo.
    
    echo 5. Haciendo commit...
    git add .
    git commit -m "Fix: Manejo de errores GraphQL para build estable"
    
    echo.
    echo 6. Pushing to repository...
    git push
    
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo 🚀 DEPLOY COMPLETADO EXITOSAMENTE
        echo =====================================
        echo   Siguiente paso: 
        echo   Configurar WordPress en cms.blixel.es
        echo =====================================
    ) else (
        echo ❌ Error al hacer push
    )
) else (
    echo.
    echo ❌ ERROR EN BUILD
    echo Revisa los logs arriba para mas detalles
    pause
)

echo.
echo === SIGUIENTE PASOS ===
echo 1. Accede a https://cms.blixel.es/cms/wp-admin
echo 2. Verifica que WPGraphQL este instalado y activado
echo 3. Prueba https://cms.blixel.es/cms/graphql en el navegador
echo 4. Si todo funciona, actualiza la URL en .env
pause
