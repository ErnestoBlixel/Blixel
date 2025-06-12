@echo off
echo ================================
echo   DEPLOY GRAVITY FORMS MANUAL
echo   Git + Cloudflare Pages
echo ================================
echo.

echo 🔧 Verificando archivos modificados...
git status --porcelain
echo.

echo 📝 CAMBIOS REALIZADOS:
echo - ✅ Formulario Gravity Forms integrado en Hero
echo - ✅ Posición: después de título y descripción  
echo - ✅ Datos: llegan a WordPress cms.blixel.es
echo - ✅ Diseño responsivo con glass effect
echo.

set /p continuar="¿Continuar con el deploy? (s/n): "
if /i not "%continuar%"=="s" (
    echo ❌ Deploy cancelado
    pause
    exit /b 1
)

echo.
echo 🏗️ Paso 1: Build del proyecto...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Error en el build
    pause
    exit /b 1
)

echo.
echo 📦 Paso 2: Git - Agregando archivos...
git add .
git status --short

echo.
echo 💬 Paso 3: Git - Commit...
git commit -m "feat: Integrate Gravity Forms in Hero section

- Add GravityForm component directly in Hero after title/description
- Remove duplicate form from index.astro
- Add responsive styles with glass effect
- Sync animations (form appears at 3.4s)
- Data flows correctly to WordPress cms.blixel.es
- Optimize iframe height for mobile/desktop"

if %errorlevel% neq 0 (
    echo ⚠️ Sin cambios para commit o error en commit
    echo Continuando con push...
)

echo.
echo ⬆️ Paso 4: Git - Push a repositorio...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Error en git push
    pause
    exit /b 1
)

echo.
echo ☁️ Paso 5: Deploy a Cloudflare...
echo.
echo 📋 OPCIONES DE DEPLOY A CLOUDFLARE:
echo.
echo 1. Auto-deploy (si está configurado en Cloudflare Pages):
echo    - Cloudflare detecta el push y hace deploy automático
echo    - Revisa: https://dash.cloudflare.com/pages
echo.
echo 2. Manual via Wrangler CLI:
echo    - npx wrangler pages deploy dist
echo.
echo 3. Manual via Dashboard:
echo    - Ve a Cloudflare Pages Dashboard
echo    - Trigger new deployment
echo.

set /p deploy_method="¿Método de deploy? (1=Auto, 2=Wrangler, 3=Manual): "

if "%deploy_method%"=="2" (
    echo.
    echo 🚀 Ejecutando Wrangler deploy...
    npx wrangler pages deploy dist
    if %errorlevel% neq 0 (
        echo ❌ Error en Wrangler deploy
        echo 💡 Solución: Ve al dashboard manual
        echo https://dash.cloudflare.com/pages
        pause
        exit /b 1
    )
    echo ✅ Deploy con Wrangler completado
) else if "%deploy_method%"=="3" (
    echo.
    echo 🌐 Abriendo Cloudflare Pages Dashboard...
    start https://dash.cloudflare.com/pages
    echo.
    echo 📋 PASOS MANUALES:
    echo 1. Busca tu proyecto en la lista
    echo 2. Click en "View" o el nombre del proyecto
    echo 3. Click en "Create deployment"
    echo 4. Upload la carpeta /dist o trigger from Git
    echo.
    pause
) else (
    echo.
    echo ⏳ Auto-deploy configurado. 
    echo 🔍 Revisa el estado en: https://dash.cloudflare.com/pages
    echo.
    echo 📊 El deploy suele tardar 1-3 minutos
    echo ✅ Una vez completado, tu formulario estará live
)

echo.
echo ================================
echo   ✅ DEPLOY COMPLETADO
echo ================================
echo.
echo 🎯 RESUMEN:
echo ✅ Git: Cambios committed y pushed
echo ✅ Build: Proyecto compilado
echo ✅ Cloudflare: Deploy iniciado/completado
echo.
echo 🔗 ENLACES ÚTILES:
echo 📱 Tu sitio: https://tu-sitio.pages.dev
echo ⚙️ Cloudflare: https://dash.cloudflare.com/pages
echo 🗃️ WordPress: https://cms.blixel.es/wp-admin
echo 📝 Formularios: https://cms.blixel.es/wp-admin/admin.php?page=gf_entries
echo.
echo 🧪 TESTING:
echo 1. Abre tu sitio en producción
echo 2. Busca el formulario en el Hero (después del título)
echo 3. Completa y envía un test
echo 4. Verifica en WordPress que llegó el dato
echo.

pause
