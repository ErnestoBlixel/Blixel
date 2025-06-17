import type { APIRoute } from 'astro';
import { languages, routes } from '../i18n/config';

// Configuración del sitemap
const site = 'https://blixel.es';
const changefreq = 'weekly';
const priority = {
  home: '1.0',
  main: '0.8',
  secondary: '0.6'
};

// Generar URLs para todos los idiomas
const urls: any[] = [];

// Páginas principales
Object.entries(routes).forEach(([routeKey, routeUrls]) => {
  Object.entries(routeUrls).forEach(([lang, url]) => {
    const fullUrl = `${site}${url}`;
    const langInfo = languages[lang as keyof typeof languages];
    
    // Determinar prioridad
    let pagePriority = priority.secondary;
    if (routeKey === 'home') {
      pagePriority = priority.home;
    } else if (['about', 'services', 'contact'].includes(routeKey)) {
      pagePriority = priority.main;
    }
    
    // Generar alternativas de idioma
    const alternates = Object.entries(routeUrls)
      .filter(([altLang]) => altLang !== lang)
      .map(([altLang, altUrl]) => ({
        hreflang: altLang === 'ca' ? 'ca-ES' : 'es-ES',
        href: `${site}${altUrl}`
      }));
    
    urls.push({
      url: fullUrl,
      changefreq,
      priority: pagePriority,
      lastmod: new Date().toISOString().split('T')[0],
      hreflang: langInfo.locale,
      alternates
    });
  });
});

export const GET: APIRoute = () => {
  // Generar XML del sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ url, changefreq, priority, lastmod, alternates }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates.map((alt: any) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
