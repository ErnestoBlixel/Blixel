# Script para restaurar la versión anterior del Hero
Write-Host "🔄 Restaurando versión anterior del Hero..." -ForegroundColor Yellow

# Backup de la versión actual (por si acaso)
Copy-Item "src\components\Hero.astro" "src\components\Hero.astro.current" -Force
Write-Host "📦 Backup de la versión actual creado" -ForegroundColor Gray

# Restaurar desde el backup
Copy-Item "src\components\Hero.astro.backup" "src\components\Hero.astro" -Force
Write-Host "✅ Hero restaurado desde el backup" -ForegroundColor Green

# Verificar el estado de Git
Write-Host "`n📊 Estado actual de Git:" -ForegroundColor Cyan
git status

# Preguntar si hacer commit
$response = Read-Host "`n¿Deseas hacer commit de estos cambios? (s/n)"
if ($response -eq 's') {
    git add src\components\Hero.astro
    git commit -m "fix: Restaurar Hero con sistema de partículas y efectos visuales completos"
    Write-Host "✅ Commit realizado" -ForegroundColor Green
    
    # Preguntar si hacer push
    $pushResponse = Read-Host "`n¿Deseas hacer push a GitHub? (s/n)"
    if ($pushResponse -eq 's') {
        git push origin main
        Write-Host "✅ Push realizado" -ForegroundColor Green
    }
}

Write-Host "`n✨ Proceso completado" -ForegroundColor Magenta
