const fs = require('fs');
const path = require('path');

console.log('🔍 Buscando componentes con "Cómo aplicamos"...\n');

function searchInFiles(dir, searchText) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.startsWith('.')) {
      searchInFiles(filePath, searchText);
    } else if (file.endsWith('.astro') || file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes(searchText)) {
        console.log(`✅ Encontrado en: ${filePath}`);
        
        // Mostrar las líneas que contienen el texto
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (line.includes(searchText)) {
            console.log(`   Línea ${index + 1}: ${line.trim()}`);
          }
        });
        console.log('');
      }
    }
  });
}

searchInFiles('./src', 'Cómo aplicamos');
searchInFiles('./src', 'ServicesIASection');
