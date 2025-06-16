# Script para aplicar cambios y desplegar a Cloudflare
Write-Host "🚀 Desplegando a Cloudflare Pages" -ForegroundColor Cyan

# Verificar estado
Write-Host "`n📊 Estado actual:" -ForegroundColor Yellow
git status --short
$currentBranch = git rev-parse --abbrev-ref HEAD

if ($currentBranch -eq "HEAD") {
    Write-Host "⚠️  Estás en detached HEAD!" -ForegroundColor Red
    Write-Host "Creando rama temporal..." -ForegroundColor Yellow
    git checkout -b temp-deploy-branch
}

Write-Host "`n📁 Archivos a incluir:" -ForegroundColor Yellow
Write-Host "- astro.config.mjs (configuración Cloudflare)"
Write-Host "- src/pages/index.astro (estructura optimizada)"
Write-Host "- src/components/QuoteSection.astro (sin section wrapper)"
Write-Host "- wrangler.toml (configuración deployment)"

$confirm = Read-Host "`n¿Proceder con el deployment? (s/n)"

if ($confirm -eq 's') {
    # Volver a main si no estamos ahí
    if ($currentBranch -ne "main") {
        Write-Host "`n🔄 Volviendo a main..." -ForegroundColor Yellow
        git checkout main
        
        # Traer los cambios de la rama temporal
        git checkout temp-deploy-branch -- .
    }
    
    # Agregar archivos
    Write-Host "`n📦 Agregando archivos..." -ForegroundColor Yellow
    git add -A
    
    # Mostrar qué se va a commitear
    Write-Host "`n📋 Cambios a commitear:" -ForegroundColor Cyan
    git status --short
    
    # Commit
    $commitMsg = Read-Host "`n💬 Mensaje de commit (Enter para usar default)"
    if ([string]::IsNullOrWhiteSpace($commitMsg)) {
        $commitMsg = "feat: Optimizar estructura (4 secciones) + partículas funcionando + config Cloudflare"
    }
    
    git commit -m $commitMsg
    
    # Push
    Write-Host "`n🚀 Haciendo push a GitHub..." -ForegroundColor Yellow
    git push origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n✅ Push exitoso!" -ForegroundColor Green
        Write-Host "`n🌐 Cloudflare Pages se actualizará automáticamente en unos minutos" -ForegroundColor Cyan
        Write-Host "Puedes verificar el progreso en:" -ForegroundColor Gray
        Write-Host "- GitHub Actions: https://github.com/tu-usuario/tu-repo/actions" -ForegroundColor Blue
        Write-Host "- Cloudflare Pages: https://dash.cloudflare.com/pages" -ForegroundColor Blue
        
        # Limpiar rama temporal si existe
        if ($currentBranch -eq "HEAD") {
            git branch -d temp-deploy-branch 2>$null
        }
    } else {
        Write-Host "`n❌ Error en el push" -ForegroundColor Red
        Write-Host "Posibles soluciones:" -ForegroundColor Yellow
        Write-Host "1. git pull origin main"
        Write-Host "2. git push --force origin main (cuidado!)"
    }
} else {
    Write-Host "`n❌ Deployment cancelado" -ForegroundColor Red
}

Write-Host "`n✨ Script completado" -ForegroundColor Magenta
