@echo off
echo ========================================
echo    COMMIT Y PUSH - SISTEMA MULTIIDIOMA
echo ========================================

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo 📍 Directorio actual: %cd%
echo.

echo 🔍 Verificando estado de Git...
git status --short

echo.
echo 📦 Agregando todos los archivos...
git add .

echo.
echo 💾 Haciendo commit...
git commit -m "Implementar sistema multiidioma: arreglar version catalana y restaurar diseño español

- ✅ Corregida versión catalana (/ca) - eliminado bucle infinito
- ✅ Restaurado diseño original español (/) - CSS completo
- ✅ Implementado ContactForm multiidioma funcional  
- ✅ Creados backups de seguridad (.backup)
- ✅ Middleware mejorado para manejo de rutas
- ✅ Formularios envían idioma a Make webhook
- 🌐 URLs funcionando: / (ES) y /ca (CAT)"

echo.
echo 🚀 Haciendo push a repositorio remoto...
git push

echo.
echo 🎉 ¡Cambios subidos exitosamente!
echo.
echo ⚡ URLs del sitio:
echo    - Español: https://blixel.es/
echo    - Catalán: https://blixel.es/ca
echo.

pause