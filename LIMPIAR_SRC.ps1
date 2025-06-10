# Script para limpiar archivos temporales en src/
# Ejecutar después de LIMPIAR_PROYECTO.ps1

Write-Host "🧹 LIMPIEZA DE ARCHIVOS SRC/ - BLIXEL AI" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

$projectPath = "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"
Set-Location $projectPath

# Archivos backup y temporales en src/
$srcFilesToDelete = @(
    "src/components/Hero.astro.backup",
    "src/components/HomePageBackup.astro.bak", 
    "src/components/HowWeApplyIASection.astro.backup",
    "src/components/HowWeApplyIASection.astro.deleted",
    "src/graphql/client-backup.ts",
    
    # Archivos de prueba en utils/
    "src/utils/check-pages.js",
    "src/utils/debug-wordpress-data.js",
    "src/utils/debug-wordpress.js",
    "src/utils/diagnose-connection.js",
    "src/utils/diagnosticGraphQL.js",
    "src/utils/test-apollo.js",
    "src/utils/test-template.js",
    "src/utils/test-yoast-seo.js",
    "src/utils/testGraphQL.js"
)

$deletedCount = 0

Write-Host "Eliminando archivos temporales en src/..." -ForegroundColor Yellow
Write-Host ""

foreach ($file in $srcFilesToDelete) {
    if (Test-Path $file) {
        try {
            Remove-Item $file -Force
            Write-Host "✓ Eliminado: $file" -ForegroundColor Green
            $deletedCount++
        } catch {
            Write-Host "✗ Error eliminando: $file" -ForegroundColor Red
        }
    } else {
        Write-Host "⚠ No encontrado: $file" -ForegroundColor DarkGray
    }
}

# Buscar y eliminar componentes duplicados o versiones antiguas
Write-Host ""
Write-Host "🔍 Buscando componentes duplicados..." -ForegroundColor Yellow

$componentsToCheck = @(
    "src/components/ExamplesIASectionV2.astro",  # Versión duplicada
    "src/components/ExamplesAnimated.astro",     # Version antigua
    "src/components/ExamplesInline.astro",       # Version antigua  
    "src/components/ExamplesSimple.astro",       # Version antigua
    "src/components/ExamplesUltraSimple.astro",  # Version antigua
    "src/components/HeaderMinimal.astro",        # Version antigua
    "src/components/HeroMinimal.astro"           # Version antigua
)

foreach ($component in $componentsToCheck) {
    if (Test-Path $component) {
        try {
            Remove-Item $component -Force
            Write-Host "✓ Eliminado componente duplicado: $component" -ForegroundColor Green
            $deletedCount++
        } catch {
            Write-Host "✗ Error eliminando: $component" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "✅ LIMPIEZA SRC/ COMPLETADA" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📊 Archivos eliminados: $deletedCount" -ForegroundColor Green
Write-Host ""

# Mostrar estructura limpia de src/
Write-Host "📁 Estructura final de src/:" -ForegroundColor Cyan
Write-Host ""
Write-Host "src/" -ForegroundColor Green
Write-Host "├── components/" -ForegroundColor Green
Write-Host "│   ├── magic-ui/          # ✨ Magic UI Components" -ForegroundColor Yellow
Write-Host "│   ├── Hero.astro         # 🏠 Hero principal" -ForegroundColor Yellow
Write-Host "│   ├── ServicesIASection.astro" -ForegroundColor Yellow
Write-Host "│   ├── ExamplesIASection.astro" -ForegroundColor Yellow
Write-Host "│   ├── MethodologyIASection.astro" -ForegroundColor Yellow
Write-Host "│   ├── FAQSection.astro" -ForegroundColor Yellow
Write-Host "│   ├── Header.astro" -ForegroundColor Yellow
Write-Host "│   └── Footer.astro" -ForegroundColor Yellow
Write-Host "├── pages/" -ForegroundColor Green
Write-Host "│   ├── index.astro        # 📄 Página principal" -ForegroundColor Yellow
Write-Host "│   └── magic-notifications.astro" -ForegroundColor Yellow
Write-Host "├── layouts/" -ForegroundColor Green
Write-Host "│   ├── Layout.astro       # 🎨 Layout principal" -ForegroundColor Yellow
Write-Host "│   └── PageLayout.astro" -ForegroundColor Yellow
Write-Host "├── graphql/" -ForegroundColor Green
Write-Host "│   ├── client.ts          # 🔌 Cliente GraphQL" -ForegroundColor Yellow
Write-Host "│   └── template-queries.ts" -ForegroundColor Yellow
Write-Host "└── utils/" -ForegroundColor Green
Write-Host "    └── getPageData.ts     # 🛠️  Funciones utilidad" -ForegroundColor Yellow
Write-Host ""

Write-Host "🚀 SRC/ OPTIMIZADO Y LISTO" -ForegroundColor Green
Read-Host "Presiona Enter para continuar..."
