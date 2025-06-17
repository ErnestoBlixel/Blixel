import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  // Configuración de robots.txt
  const site = 'https://blixel.es';

  // Generar contenido del robots.txt
  const robotsContent = `User-agent: *
Allow: /

# Sitemap multiidioma
Sitemap: ${site}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-content/plugins/
Disallow: /wp-content/themes/

# Disallow temporary or test files
Disallow: /test/
Disallow: /temp/
Disallow: /tmp/

# Allow specific resources
Allow: /wp-content/uploads/
Allow: /_astro/
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /logos/

# Crawl delay (optional)
# Crawl-delay: 1`;

  return new Response(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};
