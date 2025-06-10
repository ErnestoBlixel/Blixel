@echo off
git add -A && git commit -m "feat: Colores de marca y logos reales" -m "- Gradientes #251863 y #02aa6d" -m "- 13 logos agregados" && git push origin main && npm run build && npx wrangler pages deploy ./dist --project-name blixel-ai --branch main && echo DEPLOY COMPLETADO!
