// Script para verificar que Astro puede ver las páginas
import dotenv from 'dotenv';
dotenv.config();

// Simular el entorno de Astro
process.env.PUBLIC_WP_GRAPHQL_URL = process.env.PUBLIC_WP_GRAPHQL_URL || 'https://cms.blixel.es/graphql';

async function checkAstroPages() {
  console.log('🔍 Verificando páginas para Astro...\n');
  
  try {
    // Importar el módulo después de configurar las variables de entorno
    const { getPageSlugs, getPageBySlug } = await import('./src/lib/wordpress.ts');
    
    console.log('📄 Obteniendo slugs...');
    const slugs = await getPageSlugs();
    
    console.log(`✅ Slugs encontrados: ${slugs.length}`);
    slugs.forEach(slug => {
      console.log(`   - ${slug}`);
    });
    
    // Verificar específicamente formacion-ia-empresas
    console.log('\n🔎 Verificando página formacion-ia-empresas...');
    const page = await getPageBySlug('formacion-ia-empresas');
    
    if (page) {
      console.log('✅ Página encontrada correctamente!');
      console.log(`   Título: ${page.title}`);
      console.log(`   Slug: ${page.slug}`);
    } else {
      console.log('❌ No se pudo obtener la página');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkAstroPages();
