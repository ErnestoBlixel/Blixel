import { defineMiddleware } from 'astro:middleware';
import { getLangFromUrl, defaultLang } from './i18n/config';

// Rutas que no necesitan redirección de idioma
const excludedPaths = [
  '/api/',
  '/admin/',
  '/_astro/',
  '/favicon',
  '/robots.txt',
  '/sitemap',
  '/wp-',
  '/.well-known/'
];

// Función para verificar si la ruta debe ser excluida
function shouldExclude(pathname: string): boolean {
  return excludedPaths.some(excluded => pathname.startsWith(excluded));
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { url } = context;
  const pathname = url.pathname;
  
  // Excluir rutas que no necesitan redirección
  if (shouldExclude(pathname)) {
    return next();
  }
  
  // Obtener idioma actual de la URL
  const currentLang = getLangFromUrl(url);
  
  // Si ya tiene un idioma válido en la URL, continuar
  if (currentLang !== defaultLang && pathname.startsWith(`/${currentLang}`)) {
    return next();
  }
  
  // Verificar que la ruta en catalán existe
  if (pathname.startsWith('/ca/')) {
    return next();
  }
  
  return next();
});
