# Script para cambiar entre versión actual y optimizada
Write-Host "🔄 Gestión de versiones de index.astro" -ForegroundColor Cyan

$choice = Read-Host "`nElige una opción:`n1. Ver versión actual (11 secciones)`n2. Cambiar a versión optimizada (4 secciones)`n3. Comparar ambas versiones`n`nOpción (1-3)"

switch ($choice) {
    1 {
        Write-Host "`n📊 Estructura actual:" -ForegroundColor Yellow
        Write-Host "- 11 secciones independientes"
        Write-Host "- Cada componente es una <section>"
        Write-Host "- Muchos observers y animaciones"
        Write-Host "- Puede ser abrumador para usuarios"
        
        Write-Host "`n✅ La versión actual ya está activa" -ForegroundColor Green
    }
    
    2 {
        Write-Host "`n🚀 Cambiando a versión optimizada..." -ForegroundColor Yellow
        
        # Backup de la versión actual
        Copy-Item "src\pages\index.astro" "src\pages\index-11sections.astro.backup" -Force
        
        # Activar versión optimizada
        Copy-Item "src\pages\index-optimized.astro" "src\pages\index.astro" -Force
        
        # También actualizar QuoteSection
        if (Test-Path "src\components\QuoteSection-optimized.astro") {
            Copy-Item "src\components\QuoteSection.astro" "src\components\QuoteSection-with-section.astro.backup" -Force
            Copy-Item "src\components\QuoteSection-optimized.astro" "src\components\QuoteSection.astro" -Force
        }
        
        Write-Host "`n✅ Versión optimizada activada!" -ForegroundColor Green
        Write-Host "`nBeneficios:" -ForegroundColor Cyan
        Write-Host "- Solo 4 secciones principales"
        Write-Host "- Mejor jerarquía SEO"
        Write-Host "- Menos abrumador"
        Write-Host "- Carga más rápida"
        Write-Host "- Mejor accesibilidad"
        
        Write-Host "`n💡 Ejecuta 'npm run dev' para ver los cambios" -ForegroundColor Yellow
    }
    
    3 {
        Write-Host "`n📊 COMPARACIÓN:" -ForegroundColor Cyan
        
        Write-Host "`nVERSIÓN ACTUAL (11 secciones):" -ForegroundColor Yellow
        Write-Host "├── Hero"
        Write-Host "├── ServicesIASection"
        Write-Host "├── QuoteSection"
        Write-Host "├── WhyIANowSection"
        Write-Host "├── ExamplesIASection"
        Write-Host "├── IntroSection"
        Write-Host "├── ProblemIASection"
        Write-Host "├── MethodologyIASection"
        Write-Host "├── CasesIASection"
        Write-Host "├── FAQSection"
        Write-Host "└── GravityFormSection"
        
        Write-Host "`nVERSIÓN OPTIMIZADA (4 secciones):" -ForegroundColor Green
        Write-Host "├── Hero (no es section)"
        Write-Host "├── section#propuesta-valor"
        Write-Host "│   ├── ServicesIA (div)"
        Write-Host "│   ├── Quote (aside)"
        Write-Host "│   └── WhyIANow (div)"
        Write-Host "├── section#demostracion"
        Write-Host "│   ├── Examples (div)"
        Write-Host "│   ├── Methodology (div)"
        Write-Host "│   └── Cases (div)"
        Write-Host "├── section#recursos"
        Write-Host "│   ├── Intro (article)"
        Write-Host "│   ├── Problem (div)"
        Write-Host "│   └── FAQ (div)"
        Write-Host "└── section#contacto"
        Write-Host "    └── GravityForm"
        
        Write-Host "`n✅ Recomendación: Usa la versión optimizada" -ForegroundColor Green
    }
    
    default {
        Write-Host "❌ Opción no válida" -ForegroundColor Red
    }
}

Write-Host "`n✨ Script completado" -ForegroundColor Magenta
