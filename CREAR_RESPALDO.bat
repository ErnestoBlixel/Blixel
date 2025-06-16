@echo off
echo.
echo ============================================
echo    CREANDO RESPALDO ANTES DE LIMPIEZA
echo ============================================
echo.

REM Crear directorio de respaldo con timestamp
set timestamp=%date:~-4,4%%date:~-10,2%%date:~-7,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set timestamp=%timestamp: =0%
set backup_dir=BACKUP_%timestamp%

echo 📦 Creando respaldo en directorio: %backup_dir%
mkdir "%backup_dir%"

echo.
echo 💾 Copiando archivos importantes...

REM Copiar archivos de configuración que serán eliminados
if exist "astro.config.js" copy "astro.config.js" "%backup_dir%\" >nul
if exist "tailwind.config.js" copy "tailwind.config.js" "%backup_dir%\" >nul

REM Copiar algunos archivos de documentación importantes
if exist "CAMBIOS-FINALES.md" copy "CAMBIOS-FINALES.md" "%backup_dir%\" >nul
if exist "HERO-RESTAURADO.md" copy "HERO-RESTAURADO.md" "%backup_dir%\" >nul
if exist "IMPLEMENTACION-MEJORAS.md" copy "IMPLEMENTACION-MEJORAS.md" "%backup_dir%\" >nul

REM Crear respaldo de componentes que serán eliminados
mkdir "%backup_dir%\components_backup"
if exist "src\components\ContactForm-Fake.astro" copy "src\components\ContactForm-Fake.astro" "%backup_dir%\components_backup\" >nul
if exist "src\components\Hero.astro.backup" copy "src\components\Hero.astro.backup" "%backup_dir%\components_backup\" >nul
if exist "src\components\HomePage.astro" copy "src\components\HomePage.astro" "%backup_dir%\components_backup\" >nul

REM Crear respaldo de páginas que serán eliminadas
mkdir "%backup_dir%\pages_backup"
if exist "src\pages\index-complete.astro" copy "src\pages\index-complete.astro" "%backup_dir%\pages_backup\" >nul
if exist "src\pages\index-optimized.astro" copy "src\pages\index-optimized.astro" "%backup_dir%\pages_backup\" >nul
if exist "src\pages\template.astro" copy "src\pages\template.astro" "%backup_dir%\pages_backup\" >nul

REM Crear respaldo de scripts importantes
mkdir "%backup_dir%\scripts_backup"
if exist "deploy.ps1" copy "deploy.ps1" "%backup_dir%\scripts_backup\" >nul
if exist "deploy-to-cloudflare.ps1" copy "deploy-to-cloudflare.ps1" "%backup_dir%\scripts_backup\" >nul

echo ✅ Respaldo creado exitosamente en: %backup_dir%
echo.
echo ⚠️  IMPORTANTE: 
echo    Si algo sale mal durante la limpieza, puedes restaurar
echo    archivos importantes desde el directorio de respaldo.
echo.
echo 🚀 Ahora puedes ejecutar: EJECUTAR_LIMPIEZA.bat
echo.
pause
