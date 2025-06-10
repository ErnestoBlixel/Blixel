@echo off
git add -A && git commit -m "fix: Hero y LogosSlider mejorados" && git push origin main && npm run build && npx wrangler pages deploy ./dist --project-name blixel-ai --branch main && echo COMPLETADO!
