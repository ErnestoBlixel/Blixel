@echo off
echo =====================================
echo   ACTUALIZANDO SITIO COMPLETO
echo =====================================

echo.
echo 1. Construyendo proyecto...
npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Error en build. Revisa los errores arriba.
    pause
    exit /b 1
)

echo.
echo ✅ Build exitoso!

echo.
echo 2. Guardando todos los cambios...
git add .

echo.
echo 3. Creando commit...
git commit -m "Fix: Eliminar líneas divisorias y unificar fondos - tema oscuro completo"

echo.
echo 4. Cambiando a rama principal...
git checkout main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Probando con master...
    git checkout master
)

echo.
echo 5. Fusionando cambios...
git merge feature/hero-services-refactor

echo.
echo 6. Subiendo a GitHub (Cloudflare se actualizará automáticamente)...
git push

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =====================================
    echo 🚀 ACTUALIZACIÓN COMPLETADA!
    echo =====================================
    echo.
    echo ✅ Nueva sección "Por qué IA ahora" añadida
    echo ✅ Espaciado entre secciones corregido
    echo ✅ Fondo negro uniforme en todo el sitio
    echo ✅ Sin líneas divisorias entre secciones
    echo.
    echo ⏳ Cloudflare actualizará tu sitio en 3-5 minutos
    echo 🌐 Verifica en: https://blixel.es
    echo.
    echo TIP: Limpia caché del navegador (Ctrl+F5) para ver los cambios
    echo =====================================
) else (
    echo.
    echo ❌ Error al subir cambios
    echo Revisa tu conexión y credenciales de Git
)

pause
