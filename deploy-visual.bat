@echo off
cls
color 0A
echo.
echo    ╔════════════════════════════════════════════╗
echo    ║     DESPLIEGUE A GIT Y CLOUDFLARE          ║
echo    ║          Blixel AI - Deploy Tool           ║
echo    ╔════════════════════════════════════════════╝
echo.

echo    📋 CAMBIOS A DESPLEGAR:
echo    ├─ Hero super compacto (sin espacios grandes)
echo    ├─ H2 servicios alineado a la IZQUIERDA  
echo    ├─ Espaciados optimizados en todas las secciones
echo    └─ GraphQL integrado en Hero
echo.

echo    🔍 Verificando prerequisitos...
where git >nul 2>&1
if %errorlevel% neq 0 (
    color 0C
    echo    ❌ ERROR: Git no esta instalado
    pause
    exit /b
)
echo    ✅ Git instalado

where npm >nul 2>&1
if %errorlevel% neq 0 (
    color 0C
    echo    ❌ ERROR: Node/NPM no esta instalado
    pause
    exit /b
)
echo    ✅ NPM instalado

where wrangler >nul 2>&1
if %errorlevel% neq 0 (
    echo    ⚠️  Wrangler no global, usando npx...
)
echo.

echo    ┌─────────────────────────────────────────┐
echo    │  Presiona cualquier tecla para iniciar  │
echo    └─────────────────────────────────────────┘
pause >nul

cls
echo.
echo    ════════════════════════════════════════════
echo    PASO 1/6: Agregando cambios a Git
echo    ════════════════════════════════════════════
git add -A
echo    ✅ Archivos agregados

echo.
echo    ════════════════════════════════════════════
echo    PASO 2/6: Creando commit
echo    ════════════════════════════════════════════
git commit -m "fix: Hero compacto y H2 alineado izquierda" -m "- Hero sin espacios grandes (padding 2rem/3rem)" -m "- ServicesIA: H2 alineado a la izquierda" -m "- Eliminados margenes negativos" -m "- GraphQL en Hero"
echo    ✅ Commit creado

echo.
echo    ════════════════════════════════════════════
echo    PASO 3/6: Subiendo a GitHub
echo    ════════════════════════════════════════════
git push origin main
if %errorlevel% neq 0 (
    color 0C
    echo    ❌ Error al subir a GitHub
    pause
    exit /b
)
echo    ✅ Subido a GitHub

echo.
echo    ════════════════════════════════════════════
echo    PASO 4/6: Limpiando build anterior
echo    ════════════════════════════════════════════
if exist dist rmdir /s /q dist
echo    ✅ Directorio limpio

echo.
echo    ════════════════════════════════════════════
echo    PASO 5/6: Construyendo proyecto
echo    ════════════════════════════════════════════
call npm run build
if not exist dist (
    color 0C
    echo    ❌ Error en la construccion
    pause
    exit /b
)
echo    ✅ Build completado

echo.
echo    ════════════════════════════════════════════
echo    PASO 6/6: Desplegando a Cloudflare
echo    ════════════════════════════════════════════
npx wrangler pages deploy ./dist --project-name blixel-ai --branch main
echo    ✅ Desplegado a Cloudflare

echo.
color 0A
echo    ╔════════════════════════════════════════════╗
echo    ║         DESPLIEGUE COMPLETADO ✅           ║
echo    ╠════════════════════════════════════════════╣
echo    ║                                            ║
echo    ║  📍 GitHub: Actualizado                    ║
echo    ║  🌐 Cloudflare: https://blixel-ai.pages.dev║
echo    ║  ⏱️  Visible en: 1-2 minutos               ║
echo    ║                                            ║
echo    ╚════════════════════════════════════════════╝
echo.
echo    Presiona cualquier tecla para salir...
pause >nul
