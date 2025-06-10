# 🚀 Deploy Magic UI Notifications - PowerShell
# ===============================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " 🌟 DEPLOYING MAGIC UI NOTIFICATIONS  🌟" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar que estamos en el directorio correcto
if (!(Test-Path "package.json")) {
    Write-Host "❌ Error: No se encuentra package.json" -ForegroundColor Red
    Write-Host "   Asegúrate de estar en el directorio del proyecto Astro" -ForegroundColor Yellow
    Read-Host "Presiona Enter para salir"
    exit 1
}

Write-Host "📦 Instalando dependencias Magic UI..." -ForegroundColor Green
try {
    npm install framer-motion lucide-react
    if ($LASTEXITCODE -ne 0) {
        throw "Error instalando dependencias"
    }
    Write-Host "✅ Dependencias instaladas correctamente" -ForegroundColor Green
} catch {
    Write-Host "❌ Error instalando dependencias: $_" -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit 1
}

Write-Host ""
Write-Host "🔧 Construyendo proyecto Astro..." -ForegroundColor Green
try {
    npm run build
    if ($LASTEXITCODE -ne 0) {
        throw "Error en build"
    }
    Write-Host "✅ Build completado" -ForegroundColor Green
} catch {
    Write-Host "❌ Error en build: $_" -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit 1
}

Write-Host ""
Write-Host "📝 Añadiendo cambios a Git..." -ForegroundColor Green
git add .
git status

Write-Host ""
Write-Host "💾 Haciendo commit..." -ForegroundColor Green
$commitMessage = @"
feat: ✨ Añadir Magic UI Notification Cards espectaculares

🎨 Nuevas características:
- Border Beam: Rayos animados en bordes
- Particles: Partículas flotantes dinámicas  
- Magic Spotlight: Efecto que sigue el cursor
- Ripple Effect: Ondas expansivas de fondo
- 4 estilos: Magic, Neon, Glitch, Classic
- 8 tipos de notificación: success, warning, error, info, star, zap, heart, gift
- Animaciones 3D con framer-motion
- Integración global en Layout.astro
- Auto-remove después de 5 segundos
- Responsive y optimizado

🚀 Funciones JavaScript globales:
- window.createMagicNotification(type, title, message)
- window.showBlixelNotifications() - Demo automático
- Completamente funcional sin dependencias externas

✨ Efectos visuales impresionantes que harán que los usuarios digan ¡WOW!
"@

git commit -m $commitMessage

Write-Host ""
Write-Host "🚀 Desplegando a Cloudflare Pages..." -ForegroundColor Green
try {
    git push origin main
    if ($LASTEXITCODE -ne 0) {
        throw "Error en deploy"
    }
} catch {
    Write-Host "❌ Error en deploy: $_" -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " ✅ MAGIC UI NOTIFICATIONS DEPLOYED!  ✅" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Tu sitio se está desplegando en Cloudflare Pages" -ForegroundColor Cyan
Write-Host "🎯 URL: https://blixel-ai.pages.dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "🧪 Para probar las notificaciones:" -ForegroundColor Cyan
Write-Host "   1. Ve a tu sitio web" -ForegroundColor White
Write-Host "   2. Haz clic en el botón '🚀 Demo Magic UI'" -ForegroundColor White
Write-Host "   3. ¡Disfruta de las animaciones espectaculares!" -ForegroundColor White
Write-Host ""
Write-Host "💻 Funciones disponibles en JavaScript:" -ForegroundColor Cyan
Write-Host "   - createMagicNotification('success', 'Título', 'Mensaje')" -ForegroundColor White
Write-Host "   - showBlixelNotifications() - Demo automático" -ForegroundColor White
Write-Host ""
Write-Host "¡Las Magic UI Notifications están listas! 🎉" -ForegroundColor Green
Write-Host ""
Read-Host "Presiona Enter para continuar"
