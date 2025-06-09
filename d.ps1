Write-Host "Iniciando despliegue..." -ForegroundColor Cyan
& git add -A
& git commit -m "fix: Hero compacto, H2 izquierda, espaciados optimizados"
& git push origin main
& npm run build
& npx wrangler pages deploy ./dist --project-name blixel-ai --branch main
Write-Host "COMPLETADO! Ver en: https://blixel-ai.pages.dev" -ForegroundColor Green
