Write-Host "🚀 Desplegando Hero con datos de WordPress..." -ForegroundColor Cyan
git add -A
git commit -m "feat: Hero toma titulo y descripcion de WordPress" -m "- H1 desde titulo de pagina WordPress" -m "- Descripcion desde Yoast SEO metaDesc" -m "- GraphQL habilitado en produccion"
git push origin main
npm run build
npx wrangler pages deploy ./dist --project-name blixel-ai --branch main
Write-Host "✅ DEPLOY COMPLETADO!" -ForegroundColor Green
Write-Host "🌐 Ver en: https://blixel-ai.pages.dev" -ForegroundColor Yellow
Write-Host "" -ForegroundColor White
Write-Host "📝 IMPORTANTE:" -ForegroundColor Yellow
Write-Host "- Edita tu pagina en cms.blixel.es" -ForegroundColor White
Write-Host "- El titulo de la pagina sera el H1" -ForegroundColor White
Write-Host "- La meta descripcion de Yoast sera la descripcion" -ForegroundColor White
