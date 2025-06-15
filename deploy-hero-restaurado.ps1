Write-Host "🚀 Desplegando Hero restaurado con slider de logos..." -ForegroundColor Cyan

# Verificar que estamos en el directorio correcto
if (-not (Test-Path ".\astro.config.mjs")) {
    Write-Host "❌ Error: No se encontró astro.config.mjs" -ForegroundColor Red
    Write-Host "   Asegúrate de ejecutar este script desde la raíz del proyecto" -ForegroundColor Yellow
    exit 1
}

Write-Host "`n📦 Construyendo el proyecto..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en la construcción" -ForegroundColor Red
    exit 1
}

Write-Host "`n☁️  Desplegando a Cloudflare Pages..." -ForegroundColor Yellow
npx wrangler pages deploy dist

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ ¡Despliegue exitoso!" -ForegroundColor Green
    Write-Host "`n🎨 Hero restaurado con:" -ForegroundColor Cyan
    Write-Host "   ✓ Slider de logos de tecnologías IA" -ForegroundColor Green
    Write-Host "   ✓ Hero de altura completa (100vh)" -ForegroundColor Green
    Write-Host "   ✓ Sin necesidad de scroll para ver logos" -ForegroundColor Green
    Write-Host "   ✓ Red neuronal animada" -ForegroundColor Green
    Write-Host "   ✓ Efecto Matrix sutil" -ForegroundColor Green
    Write-Host "`n🌐 Tu sitio estará disponible en unos minutos" -ForegroundColor Yellow
    Write-Host "   URL: https://blixel.pages.dev" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Error en el despliegue" -ForegroundColor Red
    Write-Host "   Revisa la configuración de Cloudflare Pages" -ForegroundColor Yellow
}
