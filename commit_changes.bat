@echo off
echo 🚀 Iniciando proceso de commit y push...
echo.

echo 📁 Agregando archivos al staging area...
git add .
if %errorlevel% neq 0 (
    echo ❌ Error en git add
    pause
    exit /b 1
)
echo ✅ Archivos agregados correctamente

echo.
echo 📋 Verificando estado del repositorio...
git status --short

echo.
echo 💾 Creando commit...
git commit -m "Fix: Corregir error de sintaxis en archivos .astro"
if %errorlevel% neq 0 (
    echo ❌ Error en git commit
    pause
    exit /b 1
)
echo ✅ Commit creado correctamente

echo.
echo 🚀 Subiendo cambios al repositorio remoto...
git push
if %errorlevel% neq 0 (
    echo ❌ Error al hacer push
    pause
    exit /b 1
)

echo.
echo 🎉 ¡Proceso completado exitosamente!
echo ✅ Cambios subidos correctamente a GitHub
echo.
echo Presiona cualquier tecla para continuar...
pause
