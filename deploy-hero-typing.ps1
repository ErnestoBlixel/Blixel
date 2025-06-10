Write-Host "🚀 Desplegando Hero con typing y logos..." -ForegroundColor Cyan
git add -A
git commit -m "feat: H1 con efecto typing y slider de logos" -m "- H1 mas grande (hasta 5.5rem)" -m "- Efecto typing animado" -m "- Slider de logos infinito" -m "- Margenes optimizados"
git push origin main
npm run build
npx wrangler pages deploy ./dist --project-name blixel-ai --branch main
Write-Host "✅ DEPLOY COMPLETADO!" -ForegroundColor Green
Write-Host "🌐 Ver en: https://blixel-ai.pages.dev" -ForegroundColor Yellow
