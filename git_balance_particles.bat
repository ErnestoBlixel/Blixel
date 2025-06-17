@echo off
echo ⚖️ Balanceando visibilidad de partículas entre modos...

cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\WEB_ASTRO"

echo.
echo ✅ Añadiendo archivos balanceados...
git add src/layouts/Layout.astro src/styles/globals.css src/styles/light-mode-override.css

echo.
echo ✅ Haciendo commit del balance...
git commit -m "⚖️ Balance: Ajustar visibilidad de partículas entre modo oscuro y claro

MODO OSCURO (reducido intensidad):
- Opacidad: 0.8→0.6
- Enlaces: 0.6→0.4  
- Filtros suaves: contrast(1.05)
- Mix-blend-mode: normal

MODO CLARO (mejorado visibilidad):
- Opacidad: 0.9→0.8
- Enlaces: 0.7→0.6
- Eliminados filtros problemáticos
- Mix-blend-mode: normal

GENERAL:
- Cantidad: 80→70 partículas
- Tamaño: 3-7px→2-5px
- Grosor enlaces: 2px→1.5px"

echo.
echo ✅ Haciendo push...
git push origin main

echo.
echo 🎯 ¡Partículas balanceadas correctamente!
echo 🌙 Modo oscuro: Visibles pero no agresivas
echo ☀️ Modo claro: Claramente visibles
pause
