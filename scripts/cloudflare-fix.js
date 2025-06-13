// scripts/cloudflare-fix.js
const fs = require('fs');
const path = require('path');

// Fix para problemas comunes con Cloudflare Pages
const distPath = path.join(process.cwd(), 'dist');

// Verificar que existe el directorio dist
if (!fs.existsSync(distPath)) {
  console.error('❌ El directorio dist no existe. Asegúrate de que el build se completó correctamente.');
  process.exit(1);
}

// Crear _routes.json si no existe
const routesPath = path.join(distPath, '_routes.json');
if (!fs.existsSync(routesPath)) {
  const routes = {
    version: 1,
    include: ["/*"],
    exclude: [
      "/assets/*",
      "/*.css",
      "/*.js",
      "/*.png",
      "/*.jpg",
      "/*.jpeg",
      "/*.svg",
      "/*.gif",
      "/*.webp",
      "/*.ico",
      "/*.woff",
      "/*.woff2"
    ]
  };
  
  fs.writeFileSync(routesPath, JSON.stringify(routes, null, 2));
  console.log('✅ Archivo _routes.json creado');
}

// Verificar que existe _worker.js
const workerPath = path.join(distPath, '_worker.js');
if (!fs.existsSync(workerPath)) {
  console.error('❌ El archivo _worker.js no existe. Verifica la configuración del adapter de Cloudflare.');
  process.exit(1);
}

console.log('✅ Build preparado para Cloudflare Pages');