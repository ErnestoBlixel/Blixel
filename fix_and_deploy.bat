@echo off
echo =====================================
echo   SOLUCIONANDO PROBLEMA GRAPHQL
echo =====================================

echo.
echo 1. Verificando configuracion de URLs...
echo ✅ .env actualizado a: https://cms.blixel.es/cms/graphql
echo ✅ client.ts actualizado a: https://cms.blixel.es/cms/graphql
echo ✅ .env.example actualizado
echo ✅ diagnosticGraphQL.js actualizado
echo ✅ testGraphQL.js actualizado

echo.
echo 2. Limpiando cache y reinstalando dependencias...
rmdir /s /q node_modules 2>nul
rmdir /s /q dist 2>nul
rmdir /s /q .astro 2>nul

echo.
echo 3. Instalando dependencias...
npm install

echo.
echo 4. Probando build local...
npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ BUILD EXITOSO! 
    echo.
    echo 5. Haciendo commit y push...
    git add .
    git commit -m "Fix: Actualizar URLs GraphQL para nueva configuracion htaccess"
    git push
    
    echo.
    echo 🚀 DEPLOY COMPLETADO
    echo =====================================
    echo   URLs corregidas:
    echo   OLD: https://cms.blixel.es/graphql
    echo   NEW: https://cms.blixel.es/cms/graphql
    echo =====================================
) else (
    echo.
    echo ❌ ERROR EN BUILD
    echo Revisa los logs arriba para mas detalles
    pause
)
