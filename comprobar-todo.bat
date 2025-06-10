@echo off
echo ======================================
echo    COMPROBANDO CONFIGURACION
echo ======================================
echo.

echo [1] Verificando cambios en el codigo...
echo.

findstr /C:"Ejecutar GraphQL siempre" src\components\Hero.astro >nul
if %errorlevel%==0 (
    echo ✓ Hero.astro actualizado correctamente
) else (
    echo ✗ ERROR: Hero.astro no tiene los cambios
)

findstr /C:"Intentar GraphQL si la URL" src\pages\index.astro >nul
if %errorlevel%==0 (
    echo ✓ index.astro actualizado correctamente
) else (
    echo ✗ ERROR: index.astro no tiene los cambios
)

echo.
echo [2] Verificando archivo .env...
if exist .env (
    echo ✓ .env existe
    findstr "PUBLIC_WP_GRAPHQL_URL" .env >nul
    if %errorlevel%==0 (
        echo ✓ PUBLIC_WP_GRAPHQL_URL configurada
    ) else (
        echo ✗ ERROR: Falta PUBLIC_WP_GRAPHQL_URL en .env
    )
) else (
    echo ✗ ERROR: No existe .env
)

echo.
echo [3] Probando conexion...
echo.
node test-wordpress.js

echo.
echo ======================================
echo Si todo tiene ✓, esta listo para usar!
echo ======================================
echo.
pause
