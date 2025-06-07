// Script de diagnóstico visual para verificar los datos de WordPress
const fetch = require('node-fetch');

const GRAPHQL_URL = 'https://cms.blixel.es/graphql';

// Query completo como en index.astro
const FULL_QUERY = `
  query GetHomePageAndSiteIcon {
    page(id: "/", idType: URI) {
      title
      content
      databaseId
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
      }
    }
    generalSettings {
      title
      description
      url
    }
    mediaItems(where: {search: "BLIXEL"}, first: 5) {
      nodes {
        id
        title
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
    }
  }
`;

async function visualDiagnostic() {
  console.log('🔍 === DIAGNÓSTICO VISUAL DE WORDPRESS ===\n');

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: FULL_QUERY
      })
    });

    if (response.ok) {
      const result = await response.json();
      
      if (result.errors) {
        console.log('❌ GraphQL devolvió errores:');
        result.errors.forEach(error => {
          console.log(`   ${error.message}`);
        });
        return;
      }

      if (result.data) {
        console.log('✅ Conexión exitosa con GraphQL!\n');
        
        // Información del sitio
        if (result.data.generalSettings) {
          console.log('🌐 CONFIGURACIÓN DEL SITIO:');
          console.log('========================');
          console.log(`Título: ${result.data.generalSettings.title}`);
          console.log(`Descripción: ${result.data.generalSettings.description}`);
          console.log(`URL: ${result.data.generalSettings.url}`);
          console.log('');
        }

        // Información de la página
        if (result.data.page) {
          const page = result.data.page;
          console.log('📄 PÁGINA PRINCIPAL ENCONTRADA:');
          console.log('==============================');
          console.log(`✅ Título H1 (se mostrará en el hero): "${page.title}"`);
          console.log(`   ID: ${page.databaseId}`);
          
          // Imagen destacada
          if (page.featuredImage?.node) {
            console.log('\n🖼️  IMAGEN DESTACADA (para compartir en redes):');
            console.log(`   URL: ${page.featuredImage.node.sourceUrl}`);
            console.log(`   Alt: ${page.featuredImage.node.altText || 'Sin texto alternativo'}`);
            console.log(`   Dimensiones: ${page.featuredImage.node.mediaDetails.width}x${page.featuredImage.node.mediaDetails.height}`);
          } else {
            console.log('\n❌ NO HAY IMAGEN DESTACADA');
            console.log('   Para agregar una: WordPress Admin → Páginas → Editar "blixel-ai" → Panel derecho → Imagen destacada');
          }
          
          // SEO
          if (page.seo) {
            console.log('\n🔍 DATOS SEO (Yoast/RankMath):');
            console.log(`   SEO Title: ${page.seo.title || 'No configurado'}`);
            console.log(`   Meta Description: ${page.seo.metaDesc || 'No configurado'}`);
            console.log(`   OG Title: ${page.seo.opengraphTitle || 'No configurado'}`);
            console.log(`   OG Description: ${page.seo.opengraphDescription || 'No configurado'}`);
          }
        } else {
          console.log('❌ NO SE ENCONTRÓ LA PÁGINA PRINCIPAL');
          console.log('\n💡 SOLUCIÓN:');
          console.log('1. Ejecuta: find-home.bat para encontrar tu página');
          console.log('2. O en WordPress, edita tu página principal');
          console.log('3. En el campo "Slug" deja vacío o pon: home');
          console.log('4. Agrega una imagen destacada');
          console.log('5. Guarda la página');
        }

        // Logo
        if (result.data.mediaItems && result.data.mediaItems.nodes.length > 0) {
          console.log('\n🎨 IMÁGENES DE LOGO ENCONTRADAS:');
          result.data.mediaItems.nodes.forEach((img, i) => {
            console.log(`   ${i + 1}. ${img.title} - ${img.sourceUrl}`);
          });
        }

        // Resumen visual
        console.log('\n📊 RESUMEN VISUAL DE TU SITIO:');
        console.log('==============================');
        console.log('Cuando alguien visite tu página verá:');
        console.log(`- H1 del Hero: "${result.data.page?.title || 'Inteligencia Artificial para Empresas'}" (del título de la página)`);
        console.log(`- Title del navegador: "${result.data.page?.seo?.title || result.data.page?.title || 'Inteligencia Artificial para Empresas | Blixel'}" (del SEO)`);
        
        console.log('\nCuando compartan tu URL en redes sociales:');
        if (result.data.page?.featuredImage?.node) {
          console.log(`- Imagen: ${result.data.page.featuredImage.node.sourceUrl}`);
        } else {
          console.log('- Imagen: ❌ No configurada (agrega imagen destacada en WordPress)');
        }
        console.log(`- Título: "${result.data.page?.seo?.opengraphTitle || result.data.page?.seo?.title || result.data.page?.title || 'Blixel'}" (del SEO)`);
        console.log(`- Descripción: "${result.data.page?.seo?.opengraphDescription || result.data.page?.seo?.metaDesc || 'Implementamos soluciones de IA...'}"`);
      }
    } else {
      console.log('❌ Error HTTP:', response.status);
    }

  } catch (error) {
    console.log('❌ Error de conexión:', error.message);
  }
}

// Ejecutar
visualDiagnostic();
