@echo off
echo ======================================
echo    VERIFICANDO CAMBIOS APLICADOS
echo ======================================
echo.

echo [1] Verificando H2 en ServicesIASection...
findstr /C:"Nuestras soluciones de" src\components\ServicesIASection.astro >nul
if %errorlevel%==0 (
    echo ✓ H2 de servicios actualizado correctamente
) else (
    echo ✗ ERROR: H2 de servicios NO actualizado
)

echo.
echo [2] Verificando H2 en WhyIANowSection...
findstr /C:"Por qué el momento es" src\components\WhyIANowSection.astro >nul
if %errorlevel%==0 (
    echo ✓ H2 de why now actualizado correctamente
) else (
    echo ✗ ERROR: H2 de why now NO actualizado
)

echo.
echo [3] Verificando Hero simplificado...
findstr /C:"padding: 4rem 0;" src\components\Hero.astro >nul
if %errorlevel%==0 (
    echo ✓ Hero con padding por defecto encontrado
) else (
    echo ✗ ERROR: Hero no tiene el padding correcto
)

echo.
echo [4] Verificando que no hay estilos complejos del Hero antiguo...
findstr /C:"padding-bottom: 150px" src\components\Hero.astro >nul
if %errorlevel%==1 (
    echo ✓ Hero antiguo eliminado correctamente
) else (
    echo ✗ ERROR: Todavia hay estilos del Hero antiguo
)

echo.
echo ======================================
echo    RESUMEN DE VERIFICACION
echo ======================================
echo.
echo Si todos los items tienen ✓, los cambios estan aplicados correctamente.
echo Si hay algun ✗, revisa el archivo correspondiente.
echo.
echo NOTA: Si los cambios estan correctos pero no se ven en el navegador:
echo 1. Ejecuta aplicar-cambios.bat
echo 2. Limpia el cache del navegador (Ctrl+F5)
echo 3. Abre en modo incognito
echo.
pause
