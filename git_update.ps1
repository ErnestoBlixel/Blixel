# Script PowerShell para actualizar Git
# Ejecutar con: PowerShell -ExecutionPolicy Bypass -File git_update.ps1

Write-Host "=== Actualizando repositorio Git ===" -ForegroundColor Green
Set-Location "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

Write-Host "`n--- Agregando cambios ---" -ForegroundColor Yellow
git add -A

Write-Host "`n--- Haciendo commit ---" -ForegroundColor Yellow
git commit -m "Fix: H1 visible inmediatamente y logo bajado en Hero"

Write-Host "`n--- Subiendo a GitHub ---" -ForegroundColor Yellow
git push origin main

Write-Host "`n=== ¡Proceso completado! ===" -ForegroundColor Green
Write-Host "Los cambios se han subido a GitHub." -ForegroundColor Cyan
Write-Host "Cloudflare Pages debería actualizar automáticamente en 1-3 minutos." -ForegroundColor Cyan

# Pausar para ver los resultados
Write-Host "`nPresiona cualquier tecla para continuar..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")