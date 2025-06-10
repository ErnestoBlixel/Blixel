@echo off
git add -A && git commit -m "feat: Hero con WordPress" && git push origin main && npm run build && npx wrangler pages deploy ./dist --project-name blixel-ai --branch main && echo HERO CON WORDPRESS DESPLEGADO!
