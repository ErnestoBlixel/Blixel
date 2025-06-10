Write-Host "🎨 Desplegando con colores de marca..." -ForegroundColor Cyan
git add -A
git commit -m "feat: Colores de marca y logos reales" -m "- Gradientes #251863 y #02aa6d aplicados" -m "- 13 logos de clientes agregados" -m "- Todos los elementos visuales actualizados"
git push origin main
npm run build
npx wrangler pages deploy ./dist --project-name blixel-ai --branch main
Write-Host "✅ DEPLOY COMPLETADO!" -ForegroundColor Green
Write-Host "🌐 Ver en: https://blixel-ai.pages.dev" -ForegroundColor Yellow
