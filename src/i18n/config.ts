// Configuración de idiomas y URLs
export const languages = {
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
    locale: 'es-ES',
    default: true
  },
  ca: {
    code: 'ca',
    name: 'Català',
    flag: '🇪🇸', // Bandera de Cataluña: podríamos usar 🏴󠁥󠁳󠁣󠁴󠁿 o mantener 🇪🇸
    dir: 'ltr',
    locale: 'ca-ES',
    default: false
  }
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = 'es';

// Rutas para cada idioma
export const routes = {
  // Páginas principales
  home: {
    es: '/',
    ca: '/ca'
  },
  about: {
    es: '/sobre-nosotros',
    ca: '/ca/sobre-nosaltres'
  },
  services: {
    es: '/servicios',
    ca: '/ca/serveis'
  },
  contact: {
    es: '/contacto',
    ca: '/ca/contacte'
  },
  // Servicios específicos
  automation: {
    es: '/servicios/automatizacion',
    ca: '/ca/serveis/automatitzacio'
  },
  chatbots: {
    es: '/servicios/chatbots',
    ca: '/ca/serveis/chatbots'
  },
  analytics: {
    es: '/servicios/analitica',
    ca: '/ca/serveis/analitica'
  },
  // Páginas legales
  privacy: {
    es: '/legal/privacidad',
    ca: '/ca/legal/privacitat'
  },
  terms: {
    es: '/legal/terminos',
    ca: '/ca/legal/termes'
  },
  cookies: {
    es: '/legal/cookies',
    ca: '/ca/legal/cookies'
  }
} as const;

// Función para obtener la URL según el idioma
export function getLocalizedUrl(path: string, lang: SupportedLanguage = defaultLang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

// Función para obtener el idioma desde la URL
export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

// Función para remover el prefijo de idioma de una URL
export function removeLocaleFromUrl(pathname: string): string {
  const segments = pathname.split('/');
  if (segments[1] && segments[1] in languages) {
    segments.splice(1, 1);
  }
  return segments.join('/') || '/';
}

// Función para obtener rutas alternativas
export function getAlternateUrls(currentPath: string, currentLang: SupportedLanguage) {
  const cleanPath = removeLocaleFromUrl(currentPath);
  const alternates: Record<SupportedLanguage, string> = {} as any;
  
  Object.keys(languages).forEach(lang => {
    const langCode = lang as SupportedLanguage;
    alternates[langCode] = getLocalizedUrl(cleanPath, langCode);
  });
  
  return alternates;
}

// Meta información por idioma
export const siteInfo = {
  es: {
    name: 'Blixel',
    title: 'Blixel - Inteligencia Artificial para Empresas',
    description: 'Automatiza tu empresa con IA. Soluciones personalizadas de inteligencia artificial para optimizar procesos, reducir costos y aumentar la eficiencia.',
    keywords: 'inteligencia artificial, automatización, IA empresarial, chatbots, análisis de datos, España',
    author: 'Blixel'
  },
  ca: {
    name: 'Blixel',
    title: 'Blixel - Intel·ligència Artificial per a Empreses',
    description: 'Automatitza la teva empresa amb IA. Solucions personalitzades d\'intel·ligència artificial per optimitzar processos, reduir costos i augmentar l\'eficiència.',
    keywords: 'intel·ligència artificial, automatització, IA empresarial, chatbots, anàlisi de dades, Catalunya',
    author: 'Blixel'
  }
} as const;
