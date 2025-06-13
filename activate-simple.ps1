# Activar versión ULTRA SIMPLE
Write-Host "🎯 Cambiando a versión ULTRA SIMPLE" -ForegroundColor Cyan

# Backup de la versión actual
Copy-Item "src\pages\index.astro" "src\pages\index-multisection.backup" -Force
Write-Host "✅ Backup creado" -ForegroundColor Green

# Activar versión simple
Copy-Item "src\pages\index-simple.astro" "src\pages\index.astro" -Force
Write-Host "✅ Versión simple activada" -ForegroundColor Green

Write-Host "`n🚀 Cambios aplicados:" -ForegroundColor Yellow
Write-Host "- Sin menú de navegación"
Write-Host "- Una sola página fluida"
Write-Host "- Header minimalista"
Write-Host "- Todo el contenido junto"
Write-Host "- Formulario simple integrado"

Write-Host "`n💡 Ejecuta 'npm run dev' para ver los cambios" -ForegroundColor Cyan

# Preguntar si hacer commit
$commit = Read-Host "`n¿Hacer commit de estos cambios? (s/n)"
if ($commit -eq 's') {
    git add src/pages/index.astro
    git commit -m "refactor: Versión ultra simple - una sola página sin secciones"
    Write-Host "✅ Commit realizado" -ForegroundColor Green
    
    $push = Read-Host "`n¿Hacer push a Cloudflare? (s/n)"
    if ($push -eq 's') {
        git push origin main
        Write-Host "✅ Desplegando a Cloudflare..." -ForegroundColor Green
    }
}
