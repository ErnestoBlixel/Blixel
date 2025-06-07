@echo off
cls
color 0A
echo ========================================
echo    CONFIGURACION ACTUALIZADA
echo ========================================
echo.
echo Tu codigo ahora busca la pagina principal
echo en lugar de "blixel-ai"
echo.
echo PASOS INMEDIATOS:
echo -----------------
echo.
echo 1. En WordPress, edita tu pagina principal
echo    - Deja el campo "Slug" vacio
echo    - O escribe: home
echo    - Agrega imagen destacada
echo    - Guarda cambios
echo.
echo 2. Reinicia el servidor:
echo    npm run dev
echo.
echo 3. Verifica que aparezca:
echo    - Conectado (verde)
echo    - Tu titulo como H1
echo    - Imagen destacada configurada
echo.
echo ========================================
echo    COMANDOS DE DIAGNOSTICO
echo ========================================
echo.
echo find-home.bat      - Encuentra tu pagina principal
echo test-pages.js      - Lista todas las paginas
echo check-visual.bat   - Diagnostico completo
echo.
pause
