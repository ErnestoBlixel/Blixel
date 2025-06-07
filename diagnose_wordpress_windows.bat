@echo off
echo ========================================
echo    DIAGNOSTICO WORDPRESS + GRAPHQL
echo ========================================
echo.

echo [1] Verificando conectividad con WordPress...
curl -s -o NUL -w "Status: %%{http_code}\n" https://cms.blixel.es
echo.

echo [2] Verificando wp-admin...
curl -s -o NUL -w "Status: %%{http_code}\n" https://cms.blixel.es/wp-admin
echo.

echo [3] Verificando GraphQL endpoint...
curl -s -o NUL -w "Status: %%{http_code}\n" https://cms.blixel.es/graphql
echo.

echo [4] Probando GraphQL con query simple...
curl -X POST -H "Content-Type: application/json" -d "{\"query\":\"{__typename}\"}" https://cms.blixel.es/graphql
echo.
echo.

echo [5] Ejecutando script Node.js de diagnostico...
node test-graphql.js
echo.

echo ========================================
echo    RESUMEN
echo ========================================
echo Si GraphQL devuelve 404:
echo   - Activa el plugin WPGraphQL en WordPress
echo   - URL admin: https://cms.blixel.es/wp-admin
echo.
echo Si hay error de CORS:
echo   - Usa el proxy local cambiando en .env:
echo   - PUBLIC_WP_GRAPHQL_URL=http://localhost:4321/wp-graphql
echo.
pause
