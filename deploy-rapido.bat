@echo off
:: Deploy rapido en una linea
git add -A && git commit -m "fix: Hero compacto, H2 izquierda, espaciados optimizados" && git push origin main && npm run build && npx wrangler pages deploy ./dist --project-name blixel-ai --branch main && echo DEPLOY COMPLETADO!
