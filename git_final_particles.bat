@echo off
echo 🎯 Ajustando partículas según especificaciones...

cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo ✅ Añadiendo archivos optimizados...
git add src/layouts/Layout.astro src/styles/globals.css src/styles/light-mode-override.css

echo.
echo ✅ Haciendo commit de los ajustes...
git commit -m "🎯 Fix: Ajustar partículas según feedback - menos intensidad oscuro, más visibles claro

MODO OSCURO - MUCHO MÁS SUTIL:
- Partículas: 70→45 (36% menos)
- Opacidad: 0.6→0.4 (33% menos)
- Enlaces: 0.4→0.25 (38% menos)
- Tamaño: 2-5px→1-3px (más pequeñas)
- Velocidad: 1.2→0.8 (más lentas)
- Filtros reducidos: contrast(0.9)

MODO CLARO - ALTA VISIBILIDAD:
- Colores: Grises oscuros (#1e293b, #334155, etc)
- Opacidad: 0.8→0.9 (muy visible)
- Enlaces: 0.6→0.8 con color gris oscuro
- Filtro mejorado: contrast(1.2) brightness(1.1)
- Sin mix-blend-mode problemático"

echo.
echo ✅ Haciendo push...
git push origin main

echo.
echo 🎆 ¡Partículas ajustadas perfectamente!
echo 🌙 Modo oscuro: Súper sutiles, no molestan
echo ☀️ Modo claro: Claramente visibles con colores oscuros
pause
