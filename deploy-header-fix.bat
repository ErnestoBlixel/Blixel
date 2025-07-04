@echo off
echo ========================================
echo  DEPLOY HEADER FIX TO CLOUDFLARE
echo ========================================

echo.
echo 1. Checking git status...
git status

echo.
echo 2. Adding all changes...
git add .

echo.
echo 3. Committing changes...
git commit -m "fix: Arreglar header - eliminar particulas grises y actualizar selector idiomas con banderas

- Eliminar particulas blur grises del centro del hero
- Remover selector de idioma duplicado del header izquierdo  
- Actualizar LanguageSelector para usar banderas CA.png y ES.png
- Mejorar estilos del selector con efectos hover y modo claro/oscuro
- Header ahora limpio con solo logo y toggle tema"

echo.
echo 4. Pushing to GitHub (triggers Cloudflare deploy)...
git push origin main

echo.
echo ========================================
echo  DEPLOY COMPLETED!
echo ========================================
echo.
echo Los cambios se han subido a GitHub y Cloudflare
echo deberia desplegar automaticamente en unos minutos.
echo.
echo Puedes verificar el estado del deploy en:
echo https://dash.cloudflare.com/
echo.
pause
