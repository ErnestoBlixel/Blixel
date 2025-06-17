import { defaultLang } from './config';

// Importar traducciones
import es from './es/common.json';
import ca from './ca/common.json';

const translations = {
  es,
  ca
};

// Función principal de traducción
export function t(key, lang = defaultLang) {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback al idioma por defecto
      value = translations[defaultLang];
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Devolver la key si no se encuentra
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// Hook para usar en componentes
export function useTranslations(lang = defaultLang) {
  return {
    t: (key) => t(key, lang)
  };
}

// Función para obtener meta tags SEO traducidos
export function getLocalizedMeta(page, lang = defaultLang, customTitle, customDescription) {
  const translate = (key) => t(key, lang);
  
  return {
    title: customTitle || translate(`meta.${page}.title`),
    description: customDescription || translate(`meta.${page}.description`),
    keywords: translate(`meta.${page}.keywords`),
  };
}
