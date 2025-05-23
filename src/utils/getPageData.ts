// src/utils/getPageData.ts
import { graphQLClient, gql } from '../graphql/client';

export interface PageData {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  slug: string;
  seo?: {
    title?: string;
    description?: string;
  };
  hero?: {
    title?: string;
    subtitle?: string;
    description?: string;
    variant?: 'default' | 'gradient' | 'dark' | 'minimal';
  };
}

export interface HeroData {
  title: string;
  subtitle?: string;
  description?: string;
  variant?: 'default' | 'gradient' | 'dark' | 'minimal';
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

// Función para decodificar HTML entities
function decodeHtmlEntities(text: string): string {
  if (!text) return '';
  return text
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
}

// Query para obtener datos de una página específica
const GET_PAGE_QUERY = gql`
  query GetPage($slug: String!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      excerpt
      slug
      seo {
        title
        metaDesc
      }
    }
  }
`;

// Query para obtener datos generales del sitio
const GET_SITE_INFO_QUERY = gql`
  query GetSiteInfo {
    generalSettings {
      title
      description
      url
    }
  }
`;

// Función principal para obtener datos de página
export async function getPageData(slug: string): Promise<{
  pageData: PageData | null;
  heroData: HeroData;
  siteTitle: string;
}> {
  let pageData: PageData | null = null;
  let siteTitle = 'Blixel';
  
  try {
    console.log(`🔍 Obteniendo datos para la página: ${slug}`);
    
    // Obtener información del sitio
    const siteResult = await graphQLClient.query({
      query: GET_SITE_INFO_QUERY,
      fetchPolicy: 'no-cache'
    });
    
    if (siteResult.data?.generalSettings?.title) {
      siteTitle = decodeHtmlEntities(siteResult.data.generalSettings.title);
    }
    
    // Obtener datos de la página específica
    const pageResult = await graphQLClient.query({
      query: GET_PAGE_QUERY,
      variables: { slug },
      fetchPolicy: 'no-cache'
    });
    
    if (pageResult.data?.page) {
      const page = pageResult.data.page;
      pageData = {
        id: page.id,
        title: decodeHtmlEntities(page.title || ''),
        content: page.content || '',
        excerpt: page.excerpt || '',
        slug: page.slug || slug,
        seo: {
          title: page.seo?.title ? decodeHtmlEntities(page.seo.title) : undefined,
          description: page.seo?.metaDesc ? decodeHtmlEntities(page.seo.metaDesc) : undefined
        }
      };
      
      console.log(`✅ Página encontrada: ${pageData.title}`);
    } else {
      console.log(`❌ No se encontró página con slug: ${slug}`);
    }
    
  } catch (error) {
    console.error('Error obteniendo datos de página:', error);
  }
  
  // Generar datos del Hero basados en la página o valores por defecto
  const heroData = generateHeroData(slug, pageData, siteTitle);
  
  return { pageData, heroData, siteTitle };
}

// Función para generar datos del Hero según la página
function generateHeroData(slug: string, pageData: PageData | null, siteTitle: string): HeroData {
  // Configuraciones específicas por página
  const pageConfigs: Record<string, Partial<HeroData>> = {
    'home': {
      title: 'Transformamos tu empresa con IA',
      subtitle: 'Bienvenido a Blixel',
      description: 'Implementamos soluciones de inteligencia artificial que revolucionan la forma en que las empresas operan y crecen.',
      variant: 'gradient',
      ctaText: 'Automatiza tu Empresa',
      ctaLink: '/contacto'
    },
    'inicio': {
      title: 'Transformamos tu empresa con IA',
      subtitle: 'Bienvenido a Blixel',
      description: 'Implementamos soluciones de inteligencia artificial que revolucionan la forma en que las empresas operan y crecen.',
      variant: 'gradient',
      ctaText: 'Automatiza tu Empresa',
      ctaLink: '/contacto'
    },
    'servicios': {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones de IA',
      description: 'Descubre cómo nuestras soluciones de inteligencia artificial pueden transformar tu negocio.',
      variant: 'dark',
      ctaText: 'Ver Servicios',
      ctaLink: '/contacto'
    },
    'contacto': {
      title: 'Hablemos de tu proyecto',
      subtitle: 'Contacto',
      description: 'Estamos aquí para ayudarte a implementar la solución perfecta para tu empresa.',
      variant: 'minimal',
      ctaText: 'Llamar Ahora',
      ctaLink: 'tel:+34900000000'
    },
    'sobre-nosotros': {
      title: 'Sobre Nosotros',
      subtitle: 'Quiénes Somos',
      description: 'Conoce al equipo detrás de las innovaciones que están transformando empresas.',
      variant: 'default',
      ctaText: 'Conocer Más',
      ctaLink: '/servicios'
    },
    'blog': {
      title: 'Blog & Recursos',
      subtitle: 'Conocimiento',
      description: 'Mantente al día con las últimas tendencias en IA y automatización empresarial.',
      variant: 'gradient',
      ctaText: 'Explorar Artículos',
      ctaLink: '/blog'
    }
  };
  
  // Usar configuración específica de la página o la data de WordPress
  const pageConfig = pageConfigs[slug] || {};
  
  // Si tenemos datos de WordPress, usarlos como prioridad
  if (pageData) {
    return {
      title: pageData.title || pageConfig.title || `${siteTitle}`,
      subtitle: pageConfig.subtitle,
      description: pageData.excerpt || pageConfig.description,
      variant: pageConfig.variant || 'gradient',
      showCTA: true,
      ctaText: pageConfig.ctaText || 'Automatiza tu Empresa',
      ctaLink: pageConfig.ctaLink || '/contacto'
    };
  }
  
  // Fallback a configuración por defecto
  return {
    title: pageConfig.title || `Bienvenido a ${siteTitle}`,
    subtitle: pageConfig.subtitle,
    description: pageConfig.description || 'Soluciones innovadoras para tu empresa.',
    variant: pageConfig.variant || 'gradient',
    showCTA: true,
    ctaText: pageConfig.ctaText || 'Automatiza tu Empresa',
    ctaLink: pageConfig.ctaLink || '/contacto'
  };
}

// Función para obtener posts del blog
export async function getBlogPosts(limit: number = 6) {
  try {
    const POSTS_QUERY = gql`
      query GetPosts($limit: Int!) {
        posts(first: $limit, where: {status: PUBLISH}) {
          nodes {
            id
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    `;
    
    const result = await graphQLClient.query({
      query: POSTS_QUERY,
      variables: { limit },
      fetchPolicy: 'no-cache'
    });
    
    if (result.data?.posts?.nodes) {
      return result.data.posts.nodes.map(post => ({
        ...post,
        title: decodeHtmlEntities(post.title || ''),
        excerpt: post.excerpt || ''
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error obteniendo posts:', error);
    return [];
  }
}
