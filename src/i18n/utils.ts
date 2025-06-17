import { defaultLang, type SupportedLanguage } from './config';

// Importar traducciones
import es from './es/common.json';
import ca from './ca/common.json';

const translations = {
  es,
  ca
};

// Función principal de traducción
export function t(key: string, lang: SupportedLanguage = defaultLang): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
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
          console.warn(`Translation key "${key}" not found for language "${lang}"`);
          return key; // Devolver la key si no se encuentra
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// Función para obtener traducciones con interpolación
export function tt(key: string, variables: Record<string, string | number> = {}, lang: SupportedLanguage = defaultLang): string {
  let translation = t(key, lang);
  
  // Reemplazar variables en el formato {{variable}}
  Object.entries(variables).forEach(([variable, value]) => {
    translation = translation.replace(new RegExp(`{{${variable}}}`, 'g'), String(value));
  });
  
  return translation;
}

// Hook para usar en componentes Astro
export function useTranslations(lang: SupportedLanguage = defaultLang) {
  return {
    t: (key: string) => t(key, lang),
    tt: (key: string, variables?: Record<string, string | number>) => tt(key, variables, lang)
  };
}

// Función para obtener meta tags SEO traducidos
export function getLocalizedMeta(
  page: string, 
  lang: SupportedLanguage = defaultLang,
  customTitle?: string,
  customDescription?: string
) {
  const { t: translate } = useTranslations(lang);
  
  return {
    title: customTitle || translate(`meta.${page}.title`),
    description: customDescription || translate(`meta.${page}.description`),
    keywords: translate(`meta.${page}.keywords`),
  };
}

// Formatear fechas según el idioma
export function formatDate(date: Date, lang: SupportedLanguage = defaultLang): string {
  const locale = lang === 'ca' ? 'ca-ES' : 'es-ES';
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Formatear números según el idioma
export function formatNumber(number: number, lang: SupportedLanguage = defaultLang): string {
  const locale = lang === 'ca' ? 'ca-ES' : 'es-ES';
  return new Intl.NumberFormat(locale).format(number);
}

// Formatear moneda
export function formatCurrency(amount: number, lang: SupportedLanguage = defaultLang): string {
  const locale = lang === 'ca' ? 'ca-ES' : 'es-ES';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
}
