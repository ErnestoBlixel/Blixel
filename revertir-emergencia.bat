@echo off
echo ======================================
echo    REVERTIR ULTIMO COMMIT (EMERGENCIA)
echo ======================================
echo.

echo ADVERTENCIA: Esto deshara el ultimo commit
echo.
echo ¿Estas seguro? (S/N)
set /p confirmar=
if /i not "%confirmar%"=="s" (
    echo Operacion cancelada.
    pause
    exit /b
)

echo.
echo [1] Revirtiendo ultimo commit localmente...
git reset --hard HEAD~1

echo.
echo [2] Forzando actualizacion en GitHub...
git push origin main --force

echo.
echo ======================================
echo    REVERSION COMPLETADA
echo ======================================
echo.
echo El ultimo commit ha sido revertido.
echo GitHub ha sido actualizado.
echo.
echo Para volver a desplegar los cambios:
echo - Ejecuta aplicar-cambios-v2.bat
echo - Luego actualizar-git-cloudflare.bat
echo.
pause
