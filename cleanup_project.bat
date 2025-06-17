@echo off
echo ========================================
echo         🧹 LIMPIEZA DEL PROYECTO
echo ========================================

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo 📍 Directorio actual: %cd%
echo.

echo 🗑️ Eliminando archivos innecesarios...
echo.

REM Eliminar archivos .backup
echo ❌ Eliminando archivos .backup...
if exist "src\components\ContactForm.astro.backup" (
    del "src\components\ContactForm.astro.backup"
    echo    ✅ ContactForm.astro.backup eliminado
) else (
    echo    ⚠️ ContactForm.astro.backup no encontrado
)

if exist "src\middleware.ts.backup" (
    del "src\middleware.ts.backup"
    echo    ✅ middleware.ts.backup eliminado
) else (
    echo    ⚠️ middleware.ts.backup no encontrado
)

if exist "src\pages\ca\index.astro.backup" (
    del "src\pages\ca\index.astro.backup"
    echo    ✅ ca\index.astro.backup eliminado
) else (
    echo    ⚠️ ca\index.astro.backup no encontrado
)

if exist "src\pages\index.astro.backup" (
    del "src\pages\index.astro.backup"
    echo    ✅ index.astro.backup eliminado
) else (
    echo    ⚠️ index.astro.backup no encontrado
)

echo.
REM Eliminar archivos .bak
echo ❌ Eliminando archivos .bak...
if exist "src\pages\api\submit-form.js.bak" (
    del "src\pages\api\submit-form.js.bak"
    echo    ✅ submit-form.js.bak eliminado
) else (
    echo    ⚠️ submit-form.js.bak no encontrado
)

echo.
REM Eliminar archivos temporales
echo ❌ Eliminando archivos temporales...
if exist "temp_delete_file" (
    del "temp_delete_file"
    echo    ✅ temp_delete_file eliminado
) else (
    echo    ⚠️ temp_delete_file no encontrado
)

echo.
REM Eliminar APIs no utilizadas
echo ❌ Eliminando APIs no utilizadas...
if exist "src\pages\api\submit-form-old.js" (
    del "src\pages\api\submit-form-old.js"
    echo    ✅ submit-form-old.js eliminado
) else (
    echo    ⚠️ submit-form-old.js no encontrado
)

if exist "src\pages\api\submit-form-email.js" (
    del "src\pages\api\submit-form-email.js"
    echo    ✅ submit-form-email.js eliminado
) else (
    echo    ⚠️ submit-form-email.js no encontrado
)

echo.
REM Eliminar layouts no utilizados
echo ❌ Eliminando layouts no utilizados...
if exist "src\layouts\MainTemplate.astro" (
    del "src\layouts\MainTemplate.astro"
    echo    ✅ MainTemplate.astro eliminado
) else (
    echo    ⚠️ MainTemplate.astro no encontrado
)

echo.
echo 🎯 Verificando archivos principales...
echo.

REM Verificar que los archivos importantes siguen ahí
if exist "src\components\LanguageSelector.astro" (
    echo    ✅ LanguageSelector.astro (OK)
) else (
    echo    ❌ LanguageSelector.astro (FALTA)
)

if exist "src\components\ContactForm.astro" (
    echo    ✅ ContactForm.astro (OK)
) else (
    echo    ❌ ContactForm.astro (FALTA)
)

if exist "src\pages\index.astro" (
    echo    ✅ index.astro español (OK)
) else (
    echo    ❌ index.astro español (FALTA)
)

if exist "src\pages\ca\index.astro" (
    echo    ✅ index.astro catalán (OK)
) else (
    echo    ❌ index.astro catalán (FALTA)
)

if exist "src\pages\api\submit-form.ts" (
    echo    ✅ submit-form.ts activo (OK)
) else (
    echo    ❌ submit-form.ts activo (FALTA)
)

echo.
echo 📊 Estructura actual de APIs:
echo.
dir /b "src\pages\api\"
echo.

echo 🎉 ¡Limpieza completada!
echo.
echo 📁 Archivos eliminados:
echo    - ContactForm.astro.backup
echo    - middleware.ts.backup  
echo    - ca\index.astro.backup
echo    - index.astro.backup
echo    - submit-form.js.bak
echo    - temp_delete_file
echo    - submit-form-old.js
echo    - submit-form-email.js
echo    - MainTemplate.astro
echo.
echo 💡 Siguiente paso: git add . && git commit -m "Limpiar archivos innecesarios"
echo.

pause