@echo off
echo =========================================
echo APLICAR CAMBIOS DE TARJETAS BLANCAS
echo =========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/3] CAMBIOS APLICADOS:
echo ----------------------------------------
echo ✅ Fondo blanco solido (#ffffff) con !important
echo ✅ Layout invertido: texto ocupa 60% (1.5fr)
echo ✅ Tarjetas individuales con emojis
echo ✅ Descripciones reales en vez de "Magic UI"
echo ✅ Iconos con fondo gris claro
echo ✅ Mejoras en hover y animaciones
echo.

echo [2/3] VERIFICANDO CAMBIOS...
echo ----------------------------------------
git diff src/components/ExamplesIASection.astro | findstr /C:"background: #ffffff !important" /C:"grid-template-columns: 1fr 1.5fr"
echo.

echo [3/3] HACIENDO COMMIT Y PUSH...
echo ----------------------------------------

REM Añadir cambios
git add src/components/ExamplesIASection.astro

REM Commit
git commit -m "fix: Mejorar diseño de tarjetas con fondo blanco y layout 60/40

- Fondo blanco solido forzado con !important en todas las tarjetas
- Layout invertido: lista 40% y texto 60% (1fr 1.5fr)
- Eliminado fondo del contenedor para ver mejor las tarjetas
- Añadidos emojis descriptivos en cada notificación
- Descripciones reales en lugar de 'Magic UI' genérico
- Iconos con fondo gris claro y bordes redondeados
- Mejorado hover con desplazamiento horizontal
- Padding ajustado para mejor espaciado"

echo.
echo SUBIENDO A GITHUB...
git push origin main

echo.
echo =========================================
echo ✅ CAMBIOS APLICADOS Y SUBIDOS!
echo =========================================
echo.
echo 🚀 Cloudflare Pages iniciará el despliegue en breve
echo    Revisa: https://dash.cloudflare.com/
echo.
echo 💡 Los cambios incluyen:
echo    - Tarjetas con fondo blanco sólido
echo    - Texto ocupa 60% del espacio
echo    - Emojis descriptivos en cada tarjeta
echo    - Descripciones reales de casos de uso
echo.
pause
