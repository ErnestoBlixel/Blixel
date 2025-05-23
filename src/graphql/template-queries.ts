// src/graphql/template-queries.ts
// Versión final que incluye obtención del icono desde API pública

import { graphQLClient, gql } from './client';

// Query que sabemos que funciona
export const TEMPLATE_DATA_QUERY = gql`
  query DebugHomePage {
    generalSettings {
      title
      description
      url
    }
    
    homePage: page(id: "home", idType: URI) {
      id
      title
      slug
      status
      content
      seo {
        title
        metaDesc
      }
    }
    
    allPages: pages(first: 10) {
      nodes {
        id
        title
        slug
        status
        seo {
          title
          metaDesc
        }
      }
    }
  }
`;

// Función mejorada para obtener icono desde endpoint público
async function getSiteIconSafely() {
  try {
    // Usar endpoint público que no requiere permisos
    const response = await fetch('https://blixel.es/wp-json/');
    if (response.ok) {
      const data = await response.json();
      
      // El endpoint público a veces incluye site_icon_url
      if (data.site_icon_url) {
        console.log('✅ Icono obtenido desde endpoint público');
        return data.site_icon_url;
      }
      
      // También buscar en otros campos
      if (data.icon && data.icon.src) {
        console.log('✅ Icono obtenido desde campo icon');
        return data.icon.src;
      }
    }
    
    console.log('ℹ️ No se encontró icono en endpoint público');
    return '';
    
  } catch (error) {
    console.log('ℹ️ No se pudo obtener icono:', error.message);
    return '';
  }
}

// Función principal
export async function getTemplateData() {
  console.log('🔄 Obteniendo datos con query que funciona...');
  
  let siteTitle = '';
  let siteDescription = '';
  let heroTitle = '';
  let heroDescription = '';
  let siteIcon = '';
  let rawData = {};

  try {
    const result = await graphQLClient.query({
      query: TEMPLATE_DATA_QUERY,
      fetchPolicy: 'no-cache'
    });

    console.log('✅ Respuesta GraphQL exitosa');
    rawData = result.data;

    // DATOS DEL SITIO
    if (result.data?.generalSettings) {
      siteTitle = result.data.generalSettings.title || '';
      siteDescription = result.data.generalSettings.description || '';
      
      console.log(`✅ Título del sitio: "${siteTitle}"`);
      console.log(`✅ Descripción del sitio: "${siteDescription}"`);
    }

    // DATOS DE LA PÁGINA HOME
    if (result.data?.homePage) {
      const homePage = result.data.homePage;
      
      console.log('🏠 Página HOME detectada:');
      console.log(`   Título: "${homePage.title}"`);
      console.log(`   Slug: ${homePage.slug}`);
      console.log(`   Estado: ${homePage.status}`);
      
      // PRIORIZAR DATOS SEO
      if (homePage.seo?.title) {
        heroTitle = homePage.seo.title.trim();
        console.log(`🎯 HERO TÍTULO (SEO): "${heroTitle}"`);
      } else {
        heroTitle = homePage.title?.trim() || siteTitle;
        console.log(`🎯 HERO TÍTULO (página): "${heroTitle}"`);
      }

      if (homePage.seo?.metaDesc) {
        heroDescription = homePage.seo.metaDesc.trim();
        console.log(`📝 HERO DESCRIPCIÓN (SEO): "${heroDescription}"`);
      } else {
        heroDescription = siteDescription;
        console.log(`📝 HERO DESCRIPCIÓN (sitio): "${heroDescription}"`);
      }
      
    } else {
      console.log('❌ No se encontró página HOME');
      heroTitle = siteTitle;
      heroDescription = siteDescription;
    }

    // OBTENER ICONO
    siteIcon = await getSiteIconSafely();

    // VERIFICAR RESULTADO
    const usandoDatosHomePage = !!(result.data?.homePage?.seo?.title || result.data?.homePage?.seo?.metaDesc);
    
    console.log('🎯 RESULTADO FINAL:');
    console.log(`   Sitio: "${siteTitle}"`);
    console.log(`   Hero Título: "${heroTitle}"`);
    console.log(`   Hero Descripción: "${heroDescription.substring(0, 60)}..."`);
    console.log(`   Usando datos de página HOME: ${usandoDatosHomePage ? 'SÍ' : 'NO'}`);
    console.log(`   Tiene icono: ${siteIcon ? 'SÍ' : 'NO'}`);

  } catch (error) {
    console.error('❌ Error GraphQL:', error.message);
    
    // Valores de error para debug
    siteTitle = '[Error GraphQL]';
    siteDescription = '[Error GraphQL]';
    heroTitle = '[Error GraphQL]';
    heroDescription = '[Error GraphQL]';
  }

  return {
    siteTitle: siteTitle || '[Sin título]',
    siteDescription: siteDescription || '[Sin descripción]',
    siteIcon,
    heroTitle: heroTitle || '[Sin título hero]',
    heroDescription: heroDescription || '[Sin descripción hero]',
    rawData
  };
}