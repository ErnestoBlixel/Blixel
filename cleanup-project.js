#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 LIMPIEZA DE PROYECTO BLIXEL - WEB_ASTRO');
console.log('==========================================\n');

// Archivos y directorios que MANTENER (basados en el index.astro actual)
const filesToKeep = {
  // Archivos de configuración esenciales
  'astro.config.mjs': 'Configuración principal de Astro',
  'package.json': 'Dependencias del proyecto',
  'package-lock.json': 'Lock de dependencias',
  'tailwind.config.mjs': 'Configuración de Tailwind CSS',
  'tsconfig.json': 'Configuración de TypeScript',
  'postcss.config.js': 'Configuración de PostCSS',
  'components.json': 'Configuración de componentes',
  '.env.example': 'Ejemplo de variables de entorno',
  '.gitignore': 'Archivos ignorados por Git',
  'wrangler.toml': 'Configuración de Cloudflare Workers',

  // Layouts necesarios
  'src/layouts/Layout.astro': 'Layout principal usado en index.astro',

  // Componentes utilizados en index.astro
  'src/components/Hero.astro': 'Componente Hero usado en index.astro',
  'src/components/ContactForm.astro': 'Formulario de contacto usado en index.astro',
  'src/components/magic-cards-new/MagicCardsFINAL.astro': 'Tarjetas Magic UI usadas en index.astro',

  // Páginas principales
  'src/pages/index.astro': 'Página principal',
  'src/pages/api/submit-form.js': 'API para el formulario',

  // Estilos
  'src/styles/globals.css': 'Estilos globales',

  // Configuración de tipos
  'src/env.d.ts': 'Definiciones de tipos de entorno',

  // Utilities necesarios
  'src/lib/utils.ts': 'Utilidades generales',

  // Archivos de entorno
  '.env': 'Variables de entorno (si existe)'
};

// Directorios que conservar completos
const dirsToKeep = [
  'node_modules',
  '.git',
  '.astro',
  'dist',
  'public'
];

// Identificar archivos a eliminar
function identifyFilesToDelete() {
  console.log('📋 ANÁLISIS DE ARCHIVOS...\n');
  
  const filesToDelete = [];
  const rootFiles = fs.readdirSync('.');
  
  // Analizar archivos en la raíz
  rootFiles.forEach(file => {
    const filePath = path.join('.', file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile() && !filesToKeep[file]) {
      // Es un archivo y no está en la lista de mantener
      if (file.includes('test-') || 
          file.includes('deploy-') || 
          file.includes('cleanup') ||
          file.includes('diagnose') ||
          file.includes('verify') ||
          file.includes('find-') ||
          file.includes('fix-') ||
          file.includes('restart') ||
          file.includes('optimize') ||
          file.includes('restore') ||
          file.includes('commit-') ||
          file.includes('git_') ||
          file.includes('activate-') ||
          file.includes('CAMBIOS') ||
          file.includes('IMPLEMENTACION') ||
          file.includes('HERO-') ||
          file.includes('.sh') ||
          file.includes('.cmd') ||
          file.includes('.ps1') ||
          file.includes('.md') ||
          file.includes('.html') ||
          file.includes('.css') ||
          file.includes('.bat') ||
          file.startsWith('d.') ||
          file === 'astro.config.js' // Mantener solo .mjs
      ) {
        filesToDelete.push({
          path: filePath,
          type: 'archivo',
          reason: 'Archivo de prueba/script/configuración duplicada'
        });
      }
    }
  });

  // Analizar src/components
  analyzeDirectory('src/components', filesToDelete);
  
  // Analizar src/pages
  analyzeDirectory('src/pages', filesToDelete);
  
  // Analizar src/utils
  analyzeDirectory('src/utils', filesToDelete);
  
  // Analizar src/graphql
  analyzeDirectory('src/graphql', filesToDelete);
  
  // Analizar src/config
  analyzeDirectory('src/config', filesToDelete);
  
  // Analizar scripts
  analyzeDirectory('scripts', filesToDelete);

  return filesToDelete;
}

function analyzeDirectory(dirPath, filesToDelete) {
  if (!fs.existsSync(dirPath)) return;
  
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isFile()) {
      // Verificar si el archivo debe mantenerse
      const keepFile = Object.keys(filesToKeep).some(keepPath => 
        itemPath.replace(/\\/g, '/') === keepPath.replace(/\\/g, '/')
      );
      
      if (!keepFile) {
        // Identificar archivos no utilizados por patrones
        if (item.includes('backup') ||
            item.includes('.bak') ||
            item.includes('.deleted') ||
            item.includes('-optimized') ||
            item.includes('-simple') ||
            item.includes('-complete') ||
            item.includes('-multisection') ||
            item.includes('Test') ||
            item.includes('Debug') ||
            item.includes('WordPress') ||
            item.includes('GraphQL') ||
            item.includes('Gravity') ||
            item.includes('OLD_') ||
            item.includes('V2.astro') ||
            item.includes('Minimal') ||
            item.includes('Animated') ||
            item.includes('Inline') ||
            item.includes('Simple') ||
            item.includes('UltraSimple') ||
            item.includes('Improved') ||
            item.includes('Official') ||
            item.includes('Tailwind') ||
            item.includes('Cards5') ||
            item.includes('Demo') ||
            item.includes('Fake') ||
            item.includes('HTML-Native') ||
            item.includes('template') ||
            item.includes('example') ||
            item.includes('test') ||
            item.includes('diagnose') ||
            item.includes('check-') ||
            item.includes('debug-') ||
            dirPath.includes('OLD_') ||
            dirPath.includes('forms') ||
            dirPath.includes('magicui') && !dirPath.includes('magic-ui')
        ) {
          filesToDelete.push({
            path: itemPath,
            type: 'archivo',
            reason: 'Componente/archivo no utilizado o de prueba'
          });
        }
      }
    } else if (stat.isDirectory()) {
      // Verificar directorios completos a eliminar
      if (item === 'OLD_GRAVITY_FORMS' ||
          item === 'forms' ||
          item === 'magicui' // Solo el que NO tiene guión
      ) {
        filesToDelete.push({
          path: itemPath,
          type: 'directorio',
          reason: 'Directorio completo no utilizado'
        });
      } else {
        // Continuar analizando subdirectorios
        analyzeDirectory(itemPath, filesToDelete);
      }
    }
  });
}

// Mostrar resumen de limpieza
function showCleanupSummary(filesToDelete) {
  console.log('📊 RESUMEN DE LIMPIEZA:');
  console.log('=====================\n');
  
  const filesByType = {
    scripts: [],
    components: [],
    pages: [],
    configs: [],
    utils: [],
    other: []
  };
  
  filesToDelete.forEach(item => {
    if (item.path.includes('.ps1') || item.path.includes('.sh') || item.path.includes('.cmd') || item.path.includes('.bat')) {
      filesByType.scripts.push(item);
    } else if (item.path.includes('src/components')) {
      filesByType.components.push(item);
    } else if (item.path.includes('src/pages')) {
      filesByType.pages.push(item);
    } else if (item.path.includes('config') || item.path.endsWith('.js') || item.path.endsWith('.mjs')) {
      filesByType.configs.push(item);
    } else if (item.path.includes('src/utils') || item.path.includes('src/graphql')) {
      filesByType.utils.push(item);
    } else {
      filesByType.other.push(item);
    }
  });

  Object.entries(filesByType).forEach(([type, files]) => {
    if (files.length > 0) {
      console.log(`🗂️ ${type.toUpperCase()} (${files.length} archivos):`);
      files.forEach(file => {
        console.log(`   ❌ ${file.path}`);
      });
      console.log('');
    }
  });

  console.log(`📈 TOTAL: ${filesToDelete.length} archivos/directorios para eliminar\n`);
  
  return filesToDelete;
}

// Función principal
async function main() {
  try {
    // Cambiar al directorio del proyecto
    process.chdir(__dirname);
    
    const filesToDelete = identifyFilesToDelete();
    showCleanupSummary(filesToDelete);
    
    console.log('✅ ARCHIVOS QUE SE MANTENDRÁN:');
    console.log('============================\n');
    Object.entries(filesToKeep).forEach(([file, description]) => {
      if (fs.existsSync(file)) {
        console.log(`   ✓ ${file} - ${description}`);
      }
    });
    console.log('');
    
    console.log('💾 Para ejecutar la limpieza, usa:');
    console.log('   node cleanup-project.js --execute\n');
    
    // Si se pasa --execute, realizar la limpieza
    if (process.argv.includes('--execute')) {
      console.log('🚀 EJECUTANDO LIMPIEZA...\n');
      
      let deleted = 0;
      let errors = 0;
      
      for (const item of filesToDelete) {
        try {
          if (item.type === 'directorio') {
            fs.rmSync(item.path, { recursive: true, force: true });
          } else {
            fs.unlinkSync(item.path);
          }
          console.log(`   ✅ Eliminado: ${item.path}`);
          deleted++;
        } catch (error) {
          console.log(`   ❌ Error eliminando ${item.path}: ${error.message}`);
          errors++;
        }
      }
      
      console.log(`\n🎉 LIMPIEZA COMPLETADA!`);
      console.log(`   ✅ Eliminados: ${deleted} archivos/directorios`);
      console.log(`   ❌ Errores: ${errors}`);
      
      if (errors === 0) {
        console.log('\n✨ Tu proyecto está ahora limpio y listo para Git!');
        console.log('   Puedes hacer commit de los cambios.');
      }
    }
    
  } catch (error) {
    console.error('❌ Error durante la limpieza:', error.message);
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = { identifyFilesToDelete, showCleanupSummary };
