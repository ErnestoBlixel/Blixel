#!/bin/bash
# Script para eliminar archivos obsoletos y de prueba

echo "🧹 LIMPIANDO PROYECTO - ELIMINANDO ARCHIVOS OBSOLETOS..."

# Eliminar todos los archivos .bat de prueba
rm -f actualizar-git-cloudflare.bat
rm -f animaciones-funcionando.bat
rm -f aplicar-*.bat
rm -f check*.bat
rm -f clean-duplicates.bat
rm -f commit*.bat
rm -f comprobar-todo.bat
rm -f d.ps1
rm -f debug_github.bat
rm -f deploy-*.bat
rm -f deploy-*.ps1
rm -f deploy*.cmd
rm -f deploy*.ps1
rm -f deploy_*.bat
rm -f find-*.bat
rm -f find-*.js
rm -f fix-*.bat
rm -f fix_*.bat
rm -f force_sync.bat
rm -f h1-mas-pequeno.bat
rm -f hero-actualizado.bat
rm -f instalar-magic-ui.bat
rm -f install-magic-notifications.bat
rm -f padding-reducido.bat
rm -f probar-animaciones-simples.bat
rm -f resumen.bat
rm -f revertir-*.bat
rm -f solucion-*.bat
rm -f tarjetas-*.bat
rm -f test-*.bat
rm -f test-*.js
rm -f test-*.html
rm -f titulo-optimizado.bat
rm -f update-cloudflare-quick.bat
rm -f verificar-*.bat
rm -f verify-changes.js

# Eliminar documentación redundante
rm -f ANIMACIONES_*.md
rm -f CAMBIOS_*.md
rm -f COLORES_MARCA_APLICADOS.md
rm -f CONFIGURACION_*.md
rm -f DEPLOY_*.md
rm -f ESTADO_FUNCIONANDO.md
rm -f HERO_*.md
rm -f LISTO_MEJORAS.md
rm -f LOGOS_INSTRUCCIONES.md
rm -f MAGIC_UI_*.md
rm -f MEJORAS_HERO_APLICADAS.md
rm -f PLANTILLA_DOCUMENTACION.md
rm -f POWERSHELL_GUIDE.md
rm -f RESUMEN_*.md
rm -f SOLUCION*.md
rm -f TARJETAS_*.md
rm -f TODO_LISTO*.md
rm -f TROUBLESHOOTING_WORDPRESS.md

# Eliminar archivos de configuración duplicados
rm -f astro.config.js
rm -f htaccess_*.txt

# Eliminar scripts de diagnóstico
rm -f diagnose_wordpress*

echo "✅ LIMPIEZA COMPLETADA!"
