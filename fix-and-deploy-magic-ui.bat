@echo off
echo.
echo 🚀 ========================================
echo    ARREGLANDO Y DESPLEGANDO MAGIC UI
echo 🚀 ========================================
echo.

echo ✅ Paso 1: Verificando cambios...
git status

echo.
echo ✅ Paso 2: Agregando archivos corregidos...
git add .

echo.
echo ✅ Paso 3: Creando commit...
git commit -m "fix: 🔧 Arreglar importaciones Magic UI - Cambiar framer-motion a motion/react y corregir rutas"

echo.
echo ✅ Paso 4: Subiendo a GitHub...
git push origin main

echo.
echo ✅ Paso 5: Esperando deploy en Cloudflare...
echo ⏳ El deploy automático se iniciará en unos segundos...
echo.
echo 🌐 Tu sitio se actualizará en: https://blixel.pages.dev
echo.
echo ✨ MAGIC UI NOTIFICATION CARDS - LISTO! ✨
echo.
pause
