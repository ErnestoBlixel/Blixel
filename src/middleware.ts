import { defineMiddleware } from 'astro:middleware';

// Idiomas soportados
const supportedLangs = ['es', 'ca'];
const defaultLang = 'es';

// Rutas que no necesitan redirección de idioma
const excludedPaths = [
  '/api/',
  '/admin/',
  '/_astro/',
  '/favicon',
  '/robots.txt',
  '/sitemap',
  '/wp-',
  '/.well-known/',
  '/legal/',
  '/logos/',
  '/images/'
];

// Función para verificar si la ruta debe ser excluida
function shouldExclude(pathname: string): boolean {
  return excludedPaths.some(excluded => pathname.startsWith(excluded));
}

// Función para obtener el idioma de la URL
function getLangFromUrl(url: URL): string {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && supportedLangs.includes(segments[0])) {
    return segments[0];
  }
  
  return defaultLang;
}

// Función para detectar idioma preferido del navegador
function getPreferredLang(acceptLanguageHeader: string | null): string {
  if (!acceptLanguageHeader) return defaultLang;
  
  // Parsear el header Accept-Language
  const languages = acceptLanguageHeader
    .split(',')
    .map(lang => {
      const [code, q = '1'] = lang.trim().split(';q=');
      return { code: code.toLowerCase(), quality: parseFloat(q) };
    })
    .sort((a, b) => b.quality - a.quality);
  
  // Buscar coincidencias con idiomas soportados
  for (const lang of languages) {
    if (lang.code.startsWith('ca')) return 'ca';
    if (lang.code.startsWith('es')) return 'es';
  }
  
  return defaultLang;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request } = context;
  const pathname = url.pathname;
  
  // Excluir rutas que no necesitan redirección
  if (shouldExclude(pathname)) {
    return next();
  }
  
  // Obtener idioma actual de la URL
  const currentLang = getLangFromUrl(url);
  
  // Si la URL ya tiene un idioma válido, continuar
  if (currentLang !== defaultLang) {
    return next();
  }
  
  // Para la ruta raíz, detectar idioma preferido y redirigir si es necesario
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLang = getPreferredLang(acceptLanguage);
    
    // Si el idioma preferido no es el por defecto, redirigir
    if (preferredLang !== defaultLang) {
      // NO redirigir automáticamente, solo dejar que la página principal maneje las traducciones
      // Esto evita problemas de SEO y permite que una sola página maneje múltiples idiomas
      return next();
    }
  }
  
  // Para rutas específicas de idioma como /ca/
  if (pathname.startsWith('/ca')) {
    return next();
  }
  
  // Continuar con la petición normal
  return next();
});

// Exportar funciones útiles para usar en otras partes de la aplicación
export { getLangFromUrl, supportedLangs, defaultLang };