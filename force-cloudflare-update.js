#!/usr/bin/env node

// Script para forzar actualización en Cloudflare
// Ejecutar con: node force-cloudflare-update.js

const { execSync } = require('child_process');

console.log('🔄 Forzando actualización de Cloudflare...\n');

try {
  // 1. Verificar status
  console.log('1️⃣ Verificando status del repositorio...');
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  if (status.trim()) {
    console.log('⚠️ Hay cambios pendientes:');
    console.log(status);
    console.log('Agregando y commiteando...');
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "🔧 Fix: Cambios pendientes antes de force deploy"', { stdio: 'inherit' });
  } else {
    console.log('✅ Repositorio limpio');
  }

  // 2. Push cambios si hay
  console.log('\n2️⃣ Sincronizando con remoto...');
  execSync('git push origin main', { stdio: 'inherit' });

  // 3. Commit vacío para forzar deploy
  console.log('\n3️⃣ Forzando redeploy...');
  const timestamp = new Date().toISOString();
  execSync(`git commit --allow-empty -m "🚀 Deploy: Force Cloudflare rebuild ${timestamp}"`, { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });

  console.log('\n✅ Deploy forzado exitosamente!');
  console.log('\n🕐 Espera 2-3 minutos y verifica:');
  console.log('   • Cloudflare Pages Dashboard');
  console.log('   • https://blixel.es/formacion-ia-empresas');
  console.log('\n🔥 Si aún no funciona, limpia cache manualmente en Cloudflare Dashboard');

} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('\n🛠️ Soluciones alternativas:');
  console.log('1. Limpia cache manualmente en Cloudflare Dashboard');
  console.log('2. Verifica que el repositorio esté conectado correctamente');
  console.log('3. Revisa los logs de deploy en Cloudflare Pages');
}
