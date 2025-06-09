# Deploy rápido en PowerShell
Write-Host "🚀 Iniciando despliegue..." -ForegroundColor Cyan
git add -A
git commit -m "fix: Hero compacto, H2 izquierda, espaciados optimizados"
git push origin main
npm run build
npx wrangler pages deploy ./dist --project-name blixel-ai --branch main
Write-Host "✅ DEPLOY COMPLETADO!" -ForegroundColor Green
Write-Host "🌐 https://blixel-ai.pages.dev" -ForegroundColor Yellow
