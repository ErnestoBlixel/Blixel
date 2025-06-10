Write-Host "🚀 Desplegando mejoras al Hero y Logos..." -ForegroundColor Cyan
git add -A
git commit -m "fix: Mejoras visuales Hero y LogosSlider" -m "- Cursor typing eliminado" -m "- Mejor espaciado entre lineas del titulo" -m "- LogosSlider con max-width" -m "- Gradientes mejorados"
git push origin main
npm run build
npx wrangler pages deploy ./dist --project-name blixel-ai --branch main
Write-Host "✅ DEPLOY COMPLETADO!" -ForegroundColor Green
Write-Host "🌐 Ver en: https://blixel-ai.pages.dev" -ForegroundColor Yellow
