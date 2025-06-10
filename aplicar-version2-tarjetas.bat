@echo off
echo ==========================================
echo APLICAR VERSION 2 - TARJETAS BLANCAS
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/3] CREANDO BACKUP DE LA VERSION ACTUAL...
copy src\components\ExamplesIASection.astro src\components\ExamplesIASection.backup.astro
echo.

echo [2/3] APLICANDO VERSION ALTERNATIVA...
echo ----------------------------------------

REM Modificar index.astro para usar la V2
powershell -Command "(Get-Content 'src/pages/index.astro') -replace 'import ExamplesIASection from ''../components/ExamplesIASection.astro'';', 'import ExamplesIASection from ''../components/ExamplesIASectionV2.astro'';' | Set-Content 'src/pages/index.astro'"

echo.
echo ✅ CAMBIOS APLICADOS:
echo    - Creado ExamplesIASectionV2.astro con diseño simplificado
echo    - Tarjetas con background: white garantizado
echo    - Sin efectos complejos que puedan interferir
echo    - Título en 2 líneas como solicitaste
echo.

echo [3/3] HACIENDO COMMIT Y PUSH...
echo ----------------------------------------

git add .
git commit -m "feat: Implementar versión 2 de ExamplesIASection con tarjetas blancas garantizadas

- Nuevo componente ExamplesIASectionV2 con diseño simplificado
- Tarjetas con fondo blanco sólido sin efectos complejos
- Título 'Pon a trabajar la IA / en tu empresa' en 2 líneas
- Contenedor con fondo semi-transparente para contraste
- Iconos con emojis en fondo gris claro
- Animaciones simples y limpias
- Descripciones reales en cada notificación"

git push origin main

echo.
echo ==========================================
echo ✅ VERSION 2 APLICADA Y SUBIDA!
echo ==========================================
echo.
echo Si esta versión tampoco funciona, ejecuta:
echo    revertir-a-version-original.bat
echo.
pause
