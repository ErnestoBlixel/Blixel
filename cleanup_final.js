const fs = require('fs');
const path = require('path');

// Archivos y directorios que deben mantenerse
const keepFiles = [
  'package.json',
  'package-lock.json',
  'astro.config.mjs',
  'astro.config.js',
  'tsconfig.json',
  '.gitignore',
  '.env.example',
  'README.md',
  'SECURITY.md',
  'cleanup_final.js', // Este mismo script
  'RESUMEN_PROYECTO.md' // El resumen que crearemos
];

const keepDirectories = [
  'src',
  'public',
  'dist',
  'node_modules',
  '.git',
  '.astro',
  '.wrangler'
];

// Función para eliminar archivos
function deleteFile(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`✓ Eliminado: ${path.basename(filePath)}`);
  } catch (error) {
    console.log(`✗ Error eliminando ${path.basename(filePath)}: ${error.message}`);
  }
}

// Función principal
function cleanup() {
  const currentDir = __dirname;
  const files = fs.readdirSync(currentDir);

  console.log('🧹 Iniciando limpieza de archivos temporales...\n');

  files.forEach(file => {
    const filePath = path.join(currentDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      // Si es archivo y NO está en la lista de mantener, eliminarlo
      if (!keepFiles.includes(file)) {
        deleteFile(filePath);
      }
    } else if (stats.isDirectory()) {
      // Si es directorio y NO está en la lista de mantener, mostrar advertencia
      if (!keepDirectories.includes(file)) {
        console.log(`⚠️  Directorio no reconocido: ${file} (revisar manualmente)`);
      }
    }
  });

  console.log('\n✅ Limpieza completada!');
  console.log('\n📁 Archivos mantenidos:');
  keepFiles.forEach(file => {
    if (fs.existsSync(path.join(currentDir, file))) {
      console.log(`  • ${file}`);
    }
  });

  console.log('\n📁 Directorios mantenidos:');
  keepDirectories.forEach(dir => {
    if (fs.existsSync(path.join(currentDir, dir))) {
      console.log(`  • ${dir}`);
    }
  });
}

cleanup();
