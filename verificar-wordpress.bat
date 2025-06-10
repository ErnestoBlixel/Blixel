@echo off
echo ======================================
echo    VERIFICANDO CONEXION CON WORDPRESS
echo ======================================
echo.

echo [1] Verificando archivo .env...
if exist .env (
    echo ✓ Archivo .env encontrado
    findstr "PUBLIC_WP_GRAPHQL_URL" .env >nul
    if %errorlevel%==0 (
        echo ✓ PUBLIC_WP_GRAPHQL_URL configurada
    ) else (
        echo ✗ ERROR: PUBLIC_WP_GRAPHQL_URL no encontrada en .env
        echo.
        echo Agrega esta linea a tu .env:
        echo PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/graphql
    )
) else (
    echo ✗ ERROR: No existe archivo .env
    echo.
    echo Crea un archivo .env con:
    echo PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/graphql
)

echo.
echo [2] Verificando conexion GraphQL...
echo.
echo Para probar la conexion, ejecuta:
echo npm run dev
echo.
echo Y revisa la consola del navegador (F12)
echo.
echo IMPORTANTE:
echo - El H1 del Hero debe mostrar el titulo de tu pagina de WordPress
echo - La descripcion debe mostrar la meta descripcion de Yoast SEO
echo.
echo Si no funciona:
echo 1. Verifica que tu WordPress tenga el plugin WPGraphQL activado
echo 2. Verifica que la URL del GraphQL sea correcta
echo 3. Verifica que la pagina principal exista en WordPress
echo.
pause
