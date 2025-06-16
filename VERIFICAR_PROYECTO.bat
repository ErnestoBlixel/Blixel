@echo off
echo.
echo ============================================
echo    VERIFICACIÓN POST-LIMPIEZA
echo ============================================
echo.

echo 🔍 Verificando integridad del proyecto...
echo.

REM Verificar que los archivos esenciales siguen existiendo
echo 📋 Verificando archivos esenciales...

if exist "astro.config.mjs" (
    echo ✅ astro.config.mjs
) else (
    echo ❌ FALTA: astro.config.mjs
    set error=1
)

if exist "package.json" (
    echo ✅ package.json
) else (
    echo ❌ FALTA: package.json
    set error=1
)

if exist "tailwind.config.mjs" (
    echo ✅ tailwind.config.mjs
) else (
    echo ❌ FALTA: tailwind.config.mjs
    set error=1
)

if exist "src\pages\index.astro" (
    echo ✅ src\pages\index.astro
) else (
    echo ❌ FALTA: src\pages\index.astro
    set error=1
)

if exist "src\layouts\Layout.astro" (
    echo ✅ src\layouts\Layout.astro
) else (
    echo ❌ FALTA: src\layouts\Layout.astro
    set error=1
)

if exist "src\components\Hero.astro" (
    echo ✅ src\components\Hero.astro
) else (
    echo ❌ FALTA: src\components\Hero.astro
    set error=1
)

if exist "src\components\ContactForm.astro" (
    echo ✅ src\components\ContactForm.astro
) else (
    echo ❌ FALTA: src\components\ContactForm.astro
    set error=1
)

if exist "src\components\magic-cards-new\MagicCardsFINAL.astro" (
    echo ✅ src\components\magic-cards-new\MagicCardsFINAL.astro
) else (
    echo ❌ FALTA: src\components\magic-cards-new\MagicCardsFINAL.astro
    set error=1
)

echo.
echo 🗂️ Verificando directorios esenciales...

if exist "node_modules" (
    echo ✅ node_modules/
) else (
    echo ⚠️  node_modules/ no existe - ejecuta: npm install
)

if exist "public" (
    echo ✅ public/
) else (
    echo ❌ FALTA: public/
    set error=1
)

if exist "src" (
    echo ✅ src/
) else (
    echo ❌ FALTA: src/
    set error=1
)

echo.
echo 🧹 Verificando que archivos innecesarios fueron eliminados...

REM Verificar que algunos archivos fueron eliminados correctamente
if not exist "astro.config.js" (
    echo ✅ astro.config.js eliminado (duplicado)
) else (
    echo ⚠️  astro.config.js aún existe
)

if not exist "tailwind.config.js" (
    echo ✅ tailwind.config.js eliminado (duplicado)
) else (
    echo ⚠️  tailwind.config.js aún existe
)

if not exist "scripts" (
    echo ✅ directorio scripts/ eliminado
) else (
    echo ⚠️  directorio scripts/ aún existe
)

echo.
echo 📊 Contando archivos restantes...

REM Contar archivos en directorios principales
for /f %%i in ('dir src\components\*.astro /b 2^>nul ^| find /c /v ""') do set components_count=%%i
for /f %%i in ('dir src\pages\*.astro /b 2^>nul ^| find /c /v ""') do set pages_count=%%i
for /f %%i in ('dir *.ps1 /b 2^>nul ^| find /c /v ""') do set scripts_count=%%i

echo 📁 Componentes restantes: %components_count%
echo 📄 Páginas restantes: %pages_count% 
echo 📜 Scripts PS1 restantes: %scripts_count%

echo.
if "%error%"=="1" (
    echo ❌ ERRORES DETECTADOS!
    echo    Algunos archivos esenciales faltan.
    echo    Revisa el respaldo y restaura si es necesario.
) else (
    echo ✅ VERIFICACIÓN EXITOSA!
    echo    El proyecto mantiene todos los archivos esenciales.
)

echo.
echo 🚀 SIGUIENTE PASO - Prueba del servidor:
echo    npm run dev
echo.
echo 📋 Si todo funciona, haz commit:
echo    git add .
echo    git commit -m "Clean: Remove unused files and components"
echo.
pause
