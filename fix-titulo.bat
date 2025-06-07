@echo off
cls
color 0E
echo ========================================
echo    SOLUCION: TITULO NO VISIBLE
echo ========================================
echo.
echo El titulo no se estaba mostrando porque:
echo 1. Las variables no estaban conectadas correctamente
echo 2. El gradiente de texto podia causar problemas
echo.
echo ========================================
echo    CAMBIOS APLICADOS
echo ========================================
echo.
echo 1. Corregido el uso de variables del titulo
echo 2. Simplificado el CSS del texto
echo 3. Agregado debug info mejorado
echo 4. Titulo por defecto si no hay datos
echo.
echo ========================================
echo.
echo Ahora tu titulo deberia mostrarse:
echo - Linea 1: "¿Aun no usas IA"
echo - Linea 2: "en tu empresa? Entonces vas tarde."
echo.
echo O el titulo que tengas en WordPress.
echo.
echo Reiniciando servidor...
echo.
timeout /t 2 >nul
npm run dev
