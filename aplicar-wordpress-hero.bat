@echo off
echo ======================================
echo    APLICANDO HERO CON WORDPRESS
echo ======================================
echo.

echo [1] Verificando .env...
if not exist .env (
    echo Creando archivo .env...
    echo PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/graphql > .env
    echo ✓ Archivo .env creado
) else (
    echo ✓ Archivo .env existe
)

echo.
echo [2] Limpiando cache...
if exist .astro rmdir /s /q .astro
if exist dist rmdir /s /q dist

echo.
echo [3] Probando conexion con WordPress...
node test-wordpress.js

echo.
echo [4] Reiniciando servidor...
echo.
echo CAMBIOS APLICADOS:
echo - Hero toma el titulo de WordPress (H1)
echo - Hero toma la meta descripcion de Yoast
echo - GraphQL habilitado en produccion
echo.
echo PARA EDITAR EL CONTENIDO:
echo 1. Ve a cms.blixel.es
echo 2. Edita la pagina principal
echo 3. Cambia el titulo y la meta descripcion
echo 4. Los cambios se veran automaticamente
echo.
start cmd /k "npm run dev"

echo.
pause
