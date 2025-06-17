@echo off
echo ========================================
echo   COMMIT: BOTÓN MINIMALISTA + CA COMPLETO
echo ========================================

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo 📍 Directorio actual: %cd%
echo.

echo 🔍 Verificando estado de Git...
git status --short

echo.
echo 📦 Agregando todos los archivos...
git add .

echo.
echo 💾 Haciendo commit...
git commit -m "Mejorar UX multiidioma: botón minimalista y versión catalana completa

🎨 BOTÓN MULTIIDIOMA MINIMALISTA:
- ✅ Diseño más compacto (65px vs 80px de ancho)
- ✅ Altura reducida (36px vs 30px) 
- ✅ Animaciones más suaves (0.25s cubic-bezier)
- ✅ Mejor backdrop blur (16px) y sombras
- ✅ Auto-cierre al scroll
- ✅ Solo bandera en móviles muy pequeños

🌐 VERSIÓN CATALANA COMPLETA:
- ✅ Añadido 4º servicio: 'Desenvolupament SaaS amb IA'
- ✅ Sección urgencia: 'Per què el moment és ARA?' + estadísticas
- ✅ Sección ejemplos animados con Magic UI Cards
- ✅ FAQ completo: 6 preguntas traducidas al catalán
- ✅ Todas las traducciones corregidas y consistentes

📱 RESPONSIVE MEJORADO:
- ✅ Botón se adapta mejor a todas las pantallas
- ✅ Layout catalán idéntico al español
- ✅ CSS optimizado para modo claro/oscuro"

echo.
echo 🚀 Haciendo push a repositorio remoto...
git push

echo.
echo 🎉 ¡Cambios subidos exitosamente!
echo.
echo ⚡ URLs del sitio:
echo    - Español: https://blixel.es/ (con botón minimalista)
echo    - Catalán: https://blixel.es/ca (versión completa)
echo.
echo 🔧 Archivos modificados:
echo    - src/components/LanguageSelector.astro (nuevo diseño minimalista)
echo    - src/pages/ca/index.astro (versión completa con todas las secciones)
echo.

pause