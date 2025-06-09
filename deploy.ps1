# Script de despliegue para PowerShell
Clear-Host
Write-Host ""
Write-Host "    ╔════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "    ║     DESPLIEGUE A GIT Y CLOUDFLARE          ║" -ForegroundColor Cyan
Write-Host "    ║          Blixel AI - Deploy Tool           ║" -ForegroundColor Cyan
Write-Host "    ╚════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Host "    📋 CAMBIOS A DESPLEGAR:" -ForegroundColor Yellow
Write-Host "    ├─ Hero super compacto (sin espacios grandes)" -ForegroundColor White
Write-Host "    ├─ H2 servicios alineado a la IZQUIERDA" -ForegroundColor White
Write-Host "    ├─ Espaciados optimizados en todas las secciones" -ForegroundColor White
Write-Host "    └─ GraphQL integrado en Hero" -ForegroundColor White
Write-Host ""

Write-Host "    Presiona ENTER para continuar..." -ForegroundColor Green
Read-Host

Clear-Host
Write-Host ""
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "    PASO 1/6: Agregando cambios a Git" -ForegroundColor Cyan
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
git add -A
Write-Host "    ✅ Archivos agregados" -ForegroundColor Green

Write-Host ""
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "    PASO 2/6: Creando commit" -ForegroundColor Cyan
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
git commit -m "fix: Hero compacto y H2 alineado izquierda" -m "- Hero sin espacios grandes (padding 2rem/3rem)" -m "- ServicesIA: H2 alineado a la izquierda" -m "- Eliminados margenes negativos" -m "- GraphQL en Hero"
Write-Host "    ✅ Commit creado" -ForegroundColor Green

Write-Host ""
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "    PASO 3/6: Subiendo a GitHub" -ForegroundColor Cyan
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "    ❌ Error al subir a GitHub" -ForegroundColor Red
    Read-Host "Presiona ENTER para salir"
    exit
}
Write-Host "    ✅ Subido a GitHub" -ForegroundColor Green

Write-Host ""
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "    PASO 4/6: Limpiando build anterior" -ForegroundColor Cyan
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
if (Test-Path dist) {
    Remove-Item -Recurse -Force dist
}
Write-Host "    ✅ Directorio limpio" -ForegroundColor Green

Write-Host ""
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "    PASO 5/6: Construyendo proyecto" -ForegroundColor Cyan
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
npm run build
if (-not (Test-Path dist)) {
    Write-Host "    ❌ Error en la construccion" -ForegroundColor Red
    Read-Host "Presiona ENTER para salir"
    exit
}
Write-Host "    ✅ Build completado" -ForegroundColor Green

Write-Host ""
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "    PASO 6/6: Desplegando a Cloudflare" -ForegroundColor Cyan
Write-Host "    ════════════════════════════════════════════" -ForegroundColor DarkGray
npx wrangler pages deploy ./dist --project-name blixel-ai --branch main
Write-Host "    ✅ Desplegado a Cloudflare" -ForegroundColor Green

Write-Host ""
Write-Host "    ╔════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "    ║         DESPLIEGUE COMPLETADO ✅           ║" -ForegroundColor Green
Write-Host "    ╠════════════════════════════════════════════╣" -ForegroundColor Green
Write-Host "    ║                                            ║" -ForegroundColor Green
Write-Host "    ║  📍 GitHub: Actualizado                    ║" -ForegroundColor Green
Write-Host "    ║  🌐 Cloudflare: https://blixel-ai.pages.dev║" -ForegroundColor Green
Write-Host "    ║  ⏱️  Visible en: 1-2 minutos               ║" -ForegroundColor Green
Write-Host "    ║                                            ║" -ForegroundColor Green
Write-Host "    ╚════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "    Presiona ENTER para salir..." -ForegroundColor Yellow
Read-Host
