#!/bin/bash
# Script para restaurar la versión anterior del Hero

echo "🔄 Restaurando versión anterior del Hero..."

# Backup de la versión actual (por si acaso)
cp "src/components/Hero.astro" "src/components/Hero.astro.current"

# Restaurar desde el backup
cp "src/components/Hero.astro.backup" "src/components/Hero.astro"

echo "✅ Hero restaurado desde el backup"

# Verificar el estado de Git
echo "📊 Estado actual de Git:"
git status

echo "¿Deseas hacer commit de estos cambios? (y/n)"
read -r response
if [[ "$response" == "y" ]]; then
    git add src/components/Hero.astro
    git commit -m "fix: Restaurar Hero con sistema de partículas y efectos visuales completos"
    echo "✅ Commit realizado"
fi
