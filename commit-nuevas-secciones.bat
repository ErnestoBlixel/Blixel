@echo off
echo ==========================================
echo REVISION Y COMMIT DE NUEVAS SECCIONES IA
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/4] VERIFICANDO ESTADO DEL REPOSITORIO...
echo ----------------------------------------
git status
echo.

echo [2/4] ARCHIVOS MODIFICADOS:
echo ----------------------------------------
git diff --name-only
echo.

echo [3/4] REVISION DE CAMBIOS:
echo ----------------------------------------
echo.
echo ✅ ARCHIVOS NUEVOS CREADOS:
echo    - src/components/QuoteSection.astro (Cita inspiradora con estadisticas)
echo    - src/components/ExamplesIASection.astro (Ejemplos IA con fondo blanco)
echo.
echo ✅ ARCHIVOS MODIFICADOS:
echo    - src/pages/index.astro (Importadas nuevas secciones)
echo.
echo ✅ CAMBIOS APLICADOS:
echo    - Fondo blanco solido en tarjetas (estilo Magic UI)
echo    - Borde gris claro #e5e7eb
echo    - Soporte para modo oscuro
echo    - Sombra sutil en iconos
echo.

echo [4/4] RESUMEN DE CAMBIOS VISUALES:
echo ----------------------------------------
git diff src/components/ExamplesIASection.astro | findstr /C:"background:" /C:"border:" /C:"@media (prefers-color-scheme"
echo.

pause

echo.
echo PREPARANDO PARA COMMIT...
echo ----------------------------------------

REM Añadir todos los archivos
git add .

REM Hacer commit con mensaje descriptivo
git commit -m "feat: Añadir secciones QuoteSection y ExamplesIASection con tarjetas Magic UI

- Nueva seccion QuoteSection con cita inspiradora y estadisticas flotantes (67% y 46%)
- Nueva seccion ExamplesIASection con lista animada de notificaciones IA
- Aplicado estilo Magic UI: fondo blanco solido #ffffff y borde gris #e5e7eb  
- Añadido soporte para modo oscuro en las tarjetas
- Integradas ambas secciones en index.astro entre servicios y metodologia
- Animaciones suaves y efectos visuales en ambas secciones"

echo.
echo ✅ COMMIT REALIZADO EXITOSAMENTE!
echo.

echo MOSTRANDO ULTIMO COMMIT:
echo ----------------------------------------
git log -1 --oneline --decorate
echo.

echo.
echo ¿Deseas hacer push a GitHub? (S/N)
choice /C SN /N
if %errorlevel%==1 (
    echo.
    echo SUBIENDO A GITHUB...
    git push origin main
    echo.
    echo ✅ CAMBIOS SUBIDOS A GITHUB!
    echo.
    echo 🚀 Cloudflare Pages deberia empezar el despliegue automaticamente.
    echo    Revisa: https://dash.cloudflare.com/
) else (
    echo.
    echo ℹ️  Commit guardado localmente. 
    echo    Ejecuta 'git push origin main' cuando estes listo.
)

echo.
pause
