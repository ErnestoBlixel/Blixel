// Script de prueba para verificar la conexión con WordPress GraphQL
import { getAllPages, getPageSlugs } from '../src/lib/wordpress.ts';

console.log('🔍 Probando conexión con WordPress GraphQL...\n');

async function testConnection() {
  try {
    // Test 1: Obtener slugs de páginas
    console.log('📄 Obteniendo slugs de páginas...');
    const slugs = await getPageSlugs();
    console.log(`✅ Se encontraron ${slugs.length} páginas:`);
    slugs.forEach((slug: string) => {
      console.log(`   - /${slug}`);
    });
    
    console.log('\n📊 Obteniendo información detallada de las páginas...');
    // Test 2: Obtener todas las páginas
    const pages = await getAllPages();
    
    pages.forEach((page: any) => {
      console.log(`\n📄 Página: ${page.title}`);
      console.log(`   - Slug: /${page.slug}`);
      console.log(`   - Fecha: ${new Date(page.date).toLocaleDateString()}`);
      console.log(`   - Modificado: ${new Date(page.modified).toLocaleDateString()}`);
      console.log(`   - Tiene imagen destacada: ${page.featuredImage ? 'Sí' : 'No'}`);
    });
    
    console.log('\n✅ ¡Conexión exitosa con WordPress GraphQL!');
    console.log('📌 Las páginas se generarán en las siguientes rutas:');
    slugs.forEach((slug: string) => {
      console.log(`   https://blixel.es/${slug}`);
    });
    
  } catch (error) {
    console.error('\n❌ Error al conectar con WordPress:', error);
    console.log('\n🔧 Posibles soluciones:');
    console.log('1. Verifica que el plugin WPGraphQL esté instalado y activo en WordPress');
    console.log('2. Verifica la URL de GraphQL en el archivo .env');
    console.log('3. Asegúrate de que CORS esté configurado correctamente en WordPress');
  }
}

testConnection();
