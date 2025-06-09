@echo off
echo ======================================
echo    VERIFICANDO CAMBIOS APLICADOS
echo ======================================
echo.

echo [1] Verificando H2 alineado a la izquierda en ServicesIASection...
findstr /C:"text-align: left;" src\components\ServicesIASection.astro >nul
if %errorlevel%==0 (
    echo ✓ H2 de servicios alineado a la izquierda
) else (
    echo ✗ ERROR: H2 de servicios NO alineado correctamente
)

echo.
echo [2] Verificando Hero compacto...
findstr /C:"padding: 2rem 0 3rem;" src\components\Hero.astro >nul
if %errorlevel%==0 (
    echo ✓ Hero con padding compacto encontrado
) else (
    echo ✗ ERROR: Hero no tiene el padding correcto
)

echo.
echo [3] Verificando que no hay margenes negativos grandes...
findstr /C:"margin-top: -150px" src\components\ServicesIASection.astro >nul
if %errorlevel%==1 (
    echo ✓ Margenes negativos eliminados de ServicesIASection
) else (
    echo ✗ ERROR: Todavia hay margenes negativos grandes en ServicesIASection
)

echo.
echo [4] Verificando GraphQL en Hero...
findstr /C:"query GetPageData" src\components\Hero.astro >nul
if %errorlevel%==0 (
    echo ✓ Hero con GraphQL implementado
) else (
    echo ✗ ERROR: Hero sin GraphQL
)

echo.
echo ======================================
echo    RESUMEN DE VERIFICACION
echo ======================================
echo.
echo Si todos los items tienen ✓, los cambios estan aplicados correctamente.
echo.
echo CAMBIOS APLICADOS:
echo - H2 de servicios alineado a la IZQUIERDA
echo - Hero recreado con padding minimo (sin espacios grandes)
echo - Eliminados margenes negativos de todas las secciones
echo - GraphQL integrado en el Hero
echo.
pause
