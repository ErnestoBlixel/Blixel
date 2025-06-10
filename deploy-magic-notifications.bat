@echo off
echo.
echo ========================================
echo  🌟 DEPLOYING MAGIC UI NOTIFICATIONS  🌟
echo ========================================
echo.

echo 📦 Instalando dependencias Magic UI...
call npm install framer-motion lucide-react
if %errorlevel% neq 0 (
    echo ❌ Error instalando dependencias
    pause
    exit /b 1
)
echo ✅ Dependencias instaladas correctamente

echo.
echo 🔧 Construyendo proyecto Astro...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Error en build
    pause
    exit /b 1
)
echo ✅ Build completado

echo.
echo 📝 Añadiendo cambios a Git...
git add .
git status

echo.
echo 💾 Haciendo commit...
git commit -m "feat: ✨ Añadir Magic UI Notification Cards espectaculares

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

✨ Efectos visuales impresionantes que harán que los usuarios digan ¡WOW!"

echo.
echo 🚀 Desplegando a Cloudflare Pages...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Error en deploy
    pause
    exit /b 1
)

echo.
echo ========================================
echo  ✅ MAGIC UI NOTIFICATIONS DEPLOYED!  ✅
echo ========================================
echo.
echo 🌐 Tu sitio se está desplegando en Cloudflare Pages
echo 🎯 URL: https://blixel-ai.pages.dev
echo.
echo 🧪 Para probar las notificaciones:
echo    1. Ve a tu sitio web
echo    2. Haz clic en el botón "🚀 Demo Magic UI"
echo    3. ¡Disfruta de las animaciones espectaculares!
echo.
echo 💻 Funciones disponibles en JavaScript:
echo    - createMagicNotification('success', 'Título', 'Mensaje')
echo    - showBlixelNotifications() - Demo automático
echo.
echo ¡Las Magic UI Notifications están listas! 🎉
echo.
pause
