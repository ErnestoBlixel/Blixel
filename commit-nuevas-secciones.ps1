# Script PowerShell para commit de nuevas secciones IA
Write-Host "=========================================="
Write-Host "REVISION Y COMMIT DE NUEVAS SECCIONES IA" -ForegroundColor Cyan
Write-Host "=========================================="
Write-Host ""

# Verificar estado
Write-Host "[1/4] VERIFICANDO ESTADO DEL REPOSITORIO..." -ForegroundColor Yellow
Write-Host "----------------------------------------"
git status
Write-Host ""

# Mostrar archivos modificados
Write-Host "[2/4] ARCHIVOS MODIFICADOS:" -ForegroundColor Yellow
Write-Host "----------------------------------------"
git diff --name-only
Write-Host ""

# Resumen de cambios
Write-Host "[3/4] REVISION DE CAMBIOS:" -ForegroundColor Yellow
Write-Host "----------------------------------------"
Write-Host ""
Write-Host "✅ ARCHIVOS NUEVOS CREADOS:" -ForegroundColor Green
Write-Host "   - src/components/QuoteSection.astro (Cita inspiradora con estadisticas)"
Write-Host "   - src/components/ExamplesIASection.astro (Ejemplos IA con fondo blanco)"
Write-Host ""
Write-Host "✅ ARCHIVOS MODIFICADOS:" -ForegroundColor Green
Write-Host "   - src/pages/index.astro (Importadas nuevas secciones)"
Write-Host ""
Write-Host "✅ CAMBIOS APLICADOS:" -ForegroundColor Green
Write-Host "   - Fondo blanco solido en tarjetas (estilo Magic UI)"
Write-Host "   - Borde gris claro #e5e7eb"
Write-Host "   - Soporte para modo oscuro"
Write-Host "   - Sombra sutil en iconos"
Write-Host ""

# Mostrar cambios específicos
Write-Host "[4/4] RESUMEN DE CAMBIOS VISUALES:" -ForegroundColor Yellow
Write-Host "----------------------------------------"
git diff src/components/ExamplesIASection.astro | Select-String -Pattern "background:|border:|@media \(prefers-color-scheme"
Write-Host ""

# Pausar para revisión
Write-Host "Presiona Enter para continuar con el commit..." -ForegroundColor Cyan
Read-Host

Write-Host ""
Write-Host "PREPARANDO PARA COMMIT..." -ForegroundColor Yellow
Write-Host "----------------------------------------"

# Añadir todos los archivos
git add .

# Hacer commit
$commitMessage = @"
feat: Añadir secciones QuoteSection y ExamplesIASection con tarjetas Magic UI

- Nueva seccion QuoteSection con cita inspiradora y estadisticas flotantes (67% y 46%)
- Nueva seccion ExamplesIASection con lista animada de notificaciones IA
- Aplicado estilo Magic UI: fondo blanco solido #ffffff y borde gris #e5e7eb  
- Añadido soporte para modo oscuro en las tarjetas
- Integradas ambas secciones en index.astro entre servicios y metodologia
- Animaciones suaves y efectos visuales en ambas secciones
"@

git commit -m $commitMessage

Write-Host ""
Write-Host "✅ COMMIT REALIZADO EXITOSAMENTE!" -ForegroundColor Green
Write-Host ""

Write-Host "MOSTRANDO ULTIMO COMMIT:" -ForegroundColor Yellow
Write-Host "----------------------------------------"
git log -1 --oneline --decorate
Write-Host ""

# Preguntar si hacer push
Write-Host ""
$push = Read-Host "¿Deseas hacer push a GitHub? (S/N)"
if ($push -eq 'S' -or $push -eq 's') {
    Write-Host ""
    Write-Host "SUBIENDO A GITHUB..." -ForegroundColor Yellow
    git push origin main
    Write-Host ""
    Write-Host "✅ CAMBIOS SUBIDOS A GITHUB!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Cloudflare Pages deberia empezar el despliegue automaticamente." -ForegroundColor Cyan
    Write-Host "   Revisa: https://dash.cloudflare.com/" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "ℹ️  Commit guardado localmente." -ForegroundColor Blue
    Write-Host "   Ejecuta 'git push origin main' cuando estes listo." -ForegroundColor Blue
}

Write-Host ""
Write-Host "Proceso completado. Presiona Enter para salir..."
Read-Host
