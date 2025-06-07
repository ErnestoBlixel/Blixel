const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando cambios en HowWeApplyIASection.astro...\n');

const filePath = path.join(__dirname, 'src', 'components', 'HowWeApplyIASection.astro');

try {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Verificar H2 y subtítulo
  if (content.includes('<h2 class="section-title">')) {
    console.log('✅ H2 encontrado');
  }
  
  if (content.includes('Transformamos tu negocio con soluciones inteligentes')) {
    console.log('✅ Subtítulo encontrado');
  }
  
  if (content.includes('Formación en tu empresa')) {
    console.log('✅ Título "Formación en tu empresa" encontrado');
  }
  
  if (content.includes('background: #000000')) {
    console.log('✅ Fondo negro configurado');
  }
  
  if (content.includes('particles-canvas-secondary')) {
    console.log('✅ Canvas de partículas configurado');
  }
  
  // Verificar que esté en index.astro
  const indexPath = path.join(__dirname, 'src', 'pages', 'index.astro');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  if (indexContent.includes('HowWeApplyIASection')) {
    console.log('✅ Componente importado en index.astro');
  }
  
  console.log('\n📁 Archivo ubicado en:', filePath);
  console.log('\n💡 Si no ves los cambios:');
  console.log('1. Detén el servidor con Ctrl+C');
  console.log('2. Ejecuta: npm run dev');
  console.log('3. Abre en incógnito o limpia caché (Ctrl+Shift+R)');
  
} catch (error) {
  console.error('❌ Error:', error.message);
}
