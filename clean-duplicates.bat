@echo off
echo Limpiando archivos duplicados y cache...

REM Eliminar archivos de backup
del /f /q "src\components\HowWeApplyIASection.astro.backup" 2>nul
del /f /q "src\components\HowWeApplyIASection.astro.deleted" 2>nul

REM Limpiar carpeta .astro (cache)
echo Limpiando cache de Astro...
rmdir /s /q .astro 2>nul

REM Limpiar dist
echo Limpiando dist...
rmdir /s /q dist 2>nul

echo.
echo ✅ Limpieza completa
echo.
echo Por favor:
echo 1. Cierra el servidor actual (Ctrl+C)
echo 2. Ejecuta: npm run dev
echo 3. Abre en modo incognito: http://localhost:4321
echo.
pause
