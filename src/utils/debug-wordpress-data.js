// src/utils/debug-wordpress-data.js
// Script para debuggear los datos que llegan de WordPress

import { graphQLClient, gql } from '../graphql/client.js';

async function debugWordPressData() {
  console.log('🔍 Debuggeando datos de WordPress...\n');
  
  try {
    // 1. Test básico - información general del sitio
    console.log('📋 1. Información general del sitio:');
    const generalQuery = gql`
      query GetGeneralSettings {
        generalSettings {
          title
          description
          url
        }
      }
    `;
    
    const generalResult = await graphQLClient.query({
      query: generalQuery,
      fetchPolicy: 'no-cache'
    });
    
    console.log('   Título:', generalResult.data?.generalSettings?.title || 'NO ENCONTRADO');
    console.log('   Descripción:', generalResult.data?.generalSettings?.description || 'NO ENCONTRADO');
    console.log('   URL:', generalResult.data?.generalSettings?.url || 'NO ENCONTRADO');

    // 2. Listar todas las páginas disponibles
    console.log('\n📄 2. Páginas disponibles:');
    const pagesQuery = gql`
      query GetAllPages {
        pages(first: 20) {
          nodes {
            id
            title
            slug
            content
            excerpt
            seo {
              title
              metaDesc
            }
          }
        }
      }
    `;
    
    const pagesResult = await graphQLClient.query({
      query: pagesQuery,
      fetchPolicy: 'no-cache'
    });
    
    if (pagesResult.data?.pages?.nodes) {
      pagesResult.data.pages.nodes.forEach((page, index) => {
        console.log(`   ${index + 1}. "${page.title}" (slug: ${page.slug})`);
        if (page.seo?.title) {
          console.log(`      - SEO Título: ${page.seo.title}`);
        }
        if (page.seo?.metaDesc) {
          console.log(`      - SEO Descripción: ${page.seo.metaDesc.substring(0, 100)}...`);
        }
        console.log('');
      });
    } else {
      console.log('   ❌ No se encontraron páginas');
    }

    // 3. Intentar obtener icono desde API REST
    console.log('🖼️  3. Información del icono del sitio:');
    try {
      const iconResponse = await fetch('https://blixel.es/wp-json/wp/v2/settings');
      if (iconResponse.ok) {
        const iconData = await iconResponse.json();
        console.log('   URL del icono:', iconData.site_icon_url || 'NO CONFIGURADO');
        console.log('   Título desde REST:', iconData.title || 'NO ENCONTRADO');
      } else {
        console.log('   ❌ No se pudo acceder a la API REST');
      }
    } catch (error) {
      console.log('   ❌ Error con API REST:', error.message);
    }

    // 4. Test específico para páginas home/inicio
    console.log('\n🏠 4. Buscando página HOME específica:');
    const homeQuery = gql`
      query GetHomePage {
        homePage: page(id: "home", idType: URI) {
          id
          title
          slug
          content
          excerpt
          seo {
            title
            metaDesc
          }
        }
        inicioPage: page(id: "inicio", idType: URI) {
          id
          title
          slug
          content
          excerpt
          seo {
            title
            metaDesc
          }
        }
      }
    `;
    
    const homeResult = await graphQLClient.query({
      query: homeQuery,
      fetchPolicy: 'no-cache'
    });
    
    if (homeResult.data?.homePage) {
      const page = homeResult.data.homePage;
      console.log('   ✅ Página "home" encontrada:');
      console.log('      - Título:', page.title);
      console.log('      - SEO Título:', page.seo?.title || 'No configurado');
      console.log('      - SEO Descripción:', page.seo?.metaDesc || 'No configurado');
    } else if (homeResult.data?.inicioPage) {
      const page = homeResult.data.inicioPage;
      console.log('   ✅ Página "inicio" encontrada:');
      console.log('      - Título:', page.title);
      console.log('      - SEO Título:', page.seo?.title || 'No configurado');
      console.log('      - SEO Descripción:', page.seo?.metaDesc || 'No configurado');
    } else {
      console.log('   ❌ No se encontró página "home" ni "inicio"');
      console.log('   💡 Sugerencia: Crear una página con slug "home" o "inicio"');
    }

  } catch (error) {
    console.error('\n❌ Error durante el debug:', error);
    
    // Mostrar detalles del error para mejor debugging
    if (error.networkError) {
      console.log('   🌐 Error de red:', error.networkError.message);
    }
    if (error.graphQLErrors) {
      console.log('   📊 Errores GraphQL:', error.graphQLErrors);
    }
  }
}

// Ejecutar debug
debugWordPressData();