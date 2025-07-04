// Configuración simple de idiomas
export const languages = {
  es: {
    code: 'es',
    name: 'Español',
    flag: '/images/ES.png',
    dir: 'ltr',
    locale: 'es-ES',
    default: true
  },
  ca: {
    code: 'ca',
    name: 'Català',
    flag: '/images/CA.png',
    dir: 'ltr',
    locale: 'ca-ES',
    default: false
  }
};

export const defaultLang = 'es';

// Rutas simples
export const routes = {
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
  }
};

// Función para obtener URL localizada
export function getLocalizedUrl(path, lang = defaultLang) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

// Función para obtener idioma desde URL
export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang;
  }
  return defaultLang;
}

// Función para remover locale de URL
export function removeLocaleFromUrl(pathname) {
  const segments = pathname.split('/');
  if (segments[1] && segments[1] in languages) {
    segments.splice(1, 1);
  }
  return segments.join('/') || '/';
}

// Función para obtener rutas alternativas
export function getAlternateUrls(currentPath, currentLang) {
  const cleanPath = removeLocaleFromUrl(currentPath);
  const alternates = {};
  
  Object.keys(languages).forEach(lang => {
    alternates[lang] = getLocalizedUrl(cleanPath, lang);
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
    title: 'Blixel - Intel·ligencia Artificial per a Empreses',
    description: 'Automatitza la teva empresa amb IA. Solucions personalitzades d\'intel·ligencia artificial per optimitzar processos, reduir costos i augmentar l\'eficiencia.',
    keywords: 'intel·ligencia artificial, automatitzacio, IA empresarial, chatbots, analisi de dades, Catalunya',
    author: 'Blixel'
  }
};
