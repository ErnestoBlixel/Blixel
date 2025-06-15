# Activar version COMPLETA con TODO el contenido
Write-Host "🚀 Activando version COMPLETA con TODO tu contenido" -ForegroundColor Cyan

# Backup de la version actual
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
Copy-Item "src\pages\index.astro" "src\pages\index-backup-$timestamp.astro" -Force
Write-Host "✅ Backup creado: index-backup-$timestamp.astro" -ForegroundColor Green

# Activar version completa
Copy-Item "src\pages\index-complete.astro" "src\pages\index.astro" -Force
Write-Host "✅ Version completa activada" -ForegroundColor Green

Write-Host "`n📋 Contenido incluido:" -ForegroundColor Yellow
Write-Host "- Hero con particulas y efectos originales"
Write-Host "- Servicios: 4 tarjetas (Formacion, Automatizacion, Agentes, microSaaS)"
Write-Host "- Cita con gradientes"
Write-Host "- Por que ahora: con 4 estadisticas"
Write-Host "- Ejemplos: 5 tarjetas blancas animadas"
Write-Host "- Intro IA Empresarial"
Write-Host "- Problema simplificado"
Write-Host "- Metodologia Quick-ROI completa con timeline"
Write-Host "- Casos de exito: 4 sectores"
Write-Host "- FAQ: 8 preguntas"
Write-Host "- Formulario de contacto"

Write-Host "`n💡 Ejecuta 'npm run dev' para ver los cambios" -ForegroundColor Cyan

# Preguntar si hacer commit
$commit = Read-Host "`n¿Hacer commit de estos cambios? (s/n)"
if ($commit -eq "s") {
    git add src/pages/index.astro
    git commit -m "feat: Pagina completa con todo el contenido en una sola estructura HTML"
    Write-Host "✅ Commit realizado" -ForegroundColor Green
    
    $push = Read-Host "`n¿Hacer push a Cloudflare? (s/n)"
    if ($push -eq "s") {
        git push origin main
        Write-Host "✅ Desplegando a Cloudflare..." -ForegroundColor Green
    }
}

Write-Host "`n✨ ¡Tu contenido completo esta listo!" -ForegroundColor Magenta
