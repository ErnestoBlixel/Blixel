// src/config/template-config.ts
// Configuración de la plantilla - Personaliza aquí los valores por defecto

export const TEMPLATE_CONFIG = {
  // Configuración del sitio
  site: {
    defaultTitle: "Blixel",
    defaultDescription: "Transformamos tu empresa con inteligencia artificial",
    defaultLanguage: "es",
    url: "https://blixel.es"
  },

  // Configuración del Hero
  hero: {
    defaultTitle: "Transformamos tu empresa con IA",
    defaultDescription: "Implementamos soluciones de inteligencia artificial que revolucionan la forma en que las empresas operan y crecen.",
    ctaText: "Empezar Ahora",
    ctaLink: "/contacto"
  },

  // Configuración de navegación
  navigation: {
    mainLinks: [
      { href: "/", label: "Inicio" },
      { href: "/servicios", label: "Servicios" },
      { href: "/sobre-nosotros", label: "Sobre Nosotros" },
      { href: "/blog", label: "Blog" },
      { href: "/contacto", label: "Contacto" }
    ],
    ctaButton: {
      text: "Automatiza tu Empresa",
      href: "/contacto"
    }
  },

  // Configuración del Footer
  footer: {
    contactInfo: {
      email: "info@blixel.es",
      phone: "+34 900 000 000",
      location: "Madrid, España"
    },
    quickLinks: [
      { href: "/servicios", label: "Servicios" },
      { href: "/sobre-nosotros", label: "Sobre Nosotros" },
      { href: "/blog", label: "Blog" },
      { href: "/contacto", label: "Contacto" }
    ]
  },

  // Configuración de WordPress
  wordpress: {
    graphqlEndpoint: "https://blixel.es/graphql",
    restApiBase: "https://blixel.es/wp-json",
    homeSlugs: ["home", "inicio", "principal"], // Orden de prioridad para buscar la página home
  },

  // Configuración de colores (para CSS variables)
  colors: {
    primary: "#0a0a0a",
    secondary: "#1a1a1a",
    textPrimary: "rgba(255, 255, 255, 0.9)",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textMuted: "rgba(255, 255, 255, 0.5)",
    border: "rgba(255, 255, 255, 0.1)",
    accent: "#4a5bff",
    accentHover: "#3a4bef"
  },

  // Configuración SEO
  seo: {
    defaultImage: "/og-image.jpg",
    twitterHandle: "@blixel_es",
    siteName: "Blixel"
  }
};

export default TEMPLATE_CONFIG;