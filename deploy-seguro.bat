@echo off
echo ======================================
echo    ACTUALIZACION SEGURA GIT + CLOUDFLARE
echo ======================================
echo.

echo [1] Verificando estado de Git...
git status
echo.

echo [2] Mostrando diferencias...
git diff --stat
echo.

echo ¿Deseas continuar con estos cambios? (S/N)
set /p continuar=
if /i not "%continuar%"=="s" (
    echo Actualizacion cancelada.
    pause
    exit /b
)

echo.
echo [3] Agregando todos los cambios...
git add -A

echo.
echo [4] Creando commit...
git commit -m "fix: Hero compacto, H2 alineado izquierda y espaciados optimizados" -m "- Hero recreado mas compacto (padding 2rem/3rem)" -m "- H2 servicios alineado a la izquierda" -m "- Eliminados margenes negativos grandes" -m "- GraphQL integrado en Hero"

echo.
echo [5] Verificando rama actual...
git branch --show-current

echo.
echo [6] Subiendo a GitHub...
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo ERROR: No se pudo subir a GitHub. Verifica tu conexion.
    pause
    exit /b
)

echo.
echo [7] Construyendo proyecto...
call npm run build

if not exist dist (
    echo ERROR: La construccion fallo. Verifica los errores.
    pause
    exit /b
)

echo.
echo [8] Desplegando a Cloudflare Pages...
npx wrangler pages deploy ./dist --project-name blixel-ai --branch main

echo.
echo ======================================
echo    DESPLIEGUE COMPLETADO
echo ======================================
echo.
echo ✓ Commit: %date% %time%
echo ✓ GitHub: https://github.com/[tu-usuario]/blixel-ai
echo ✓ Cloudflare: https://blixel-ai.pages.dev
echo.
echo Los cambios estaran visibles en 1-2 minutos.
echo.
pause
