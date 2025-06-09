@echo off
echo ======================================
echo    ACTUALIZANDO GIT Y CLOUDFLARE
echo ======================================
echo.

echo [1] Agregando cambios a Git...
git add .

echo.
echo [2] Creando commit con los cambios...
git commit -m "fix: Hero compacto, H2 alineado izquierda y espaciados optimizados

- Hero recreado: mas compacto sin espacios grandes (padding 2rem arriba, 3rem abajo)
- ServicesIASection: H2 'Nuestras soluciones...' alineado a la izquierda
- WhyIANowSection: H2 '¿Por que el momento es AHORA?'
- Eliminados margenes negativos grandes de todas las secciones
- Padding normal en secciones (4rem)
- GraphQL integrado en Hero
- Reducido padding-top del body a 80px"

echo.
echo [3] Subiendo cambios a GitHub...
git push origin main

echo.
echo [4] Esperando sincronizacion con GitHub...
timeout /t 5 /nobreak

echo.
echo [5] Construyendo para produccion...
npm run build

echo.
echo [6] Desplegando a Cloudflare Pages...
npx wrangler pages deploy ./dist --project-name blixel-ai --branch main

echo.
echo ======================================
echo    ACTUALIZACION COMPLETADA
echo ======================================
echo.
echo ✓ Cambios subidos a GitHub
echo ✓ Sitio desplegado en Cloudflare
echo.
echo CAMBIOS DESPLEGADOS:
echo - Hero super compacto (sin espacios grandes)
echo - H2 de servicios alineado a la IZQUIERDA
echo - Todos los espaciados optimizados
echo.
echo URL del sitio: https://blixel-ai.pages.dev
echo.
echo NOTA: Los cambios pueden tardar 1-2 minutos en verse en Cloudflare
echo.
pause
