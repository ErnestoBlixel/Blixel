# COMANDOS PARA DEPLOY MANUAL

## 1. Verificar estado actual
git status

## 2. Agregar todos los cambios
git add .

## 3. Commit con mensaje descriptivo
git commit -m "fix: Arreglar header - eliminar particulas grises y actualizar selector idiomas con banderas

- Eliminar particulas blur grises del centro del hero
- Remover selector de idioma duplicado del header izquierdo  
- Actualizar LanguageSelector para usar banderas CA.png y ES.png
- Mejorar estilos del selector con efectos hover y modo claro/oscuro
- Header ahora limpio con solo logo y toggle tema"

## 4. Push a GitHub (activa deploy automático en Cloudflare)
git push origin main

## 5. Verificar deploy en Cloudflare
# Ve a: https://dash.cloudflare.com/
# Busca tu proyecto y verifica el estado del deployment

## ALTERNATIVA: Si hay conflictos
git pull origin main
git push origin main
