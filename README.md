# 🚀 BLIXEL AI - Agencia de Automatización con IA

> **Sitio web corporativo desarrollado con Astro + WordPress Headless + Magic UI**  
> 🌐 **Deploy**: https://blixel.pages.dev  
> 💻 **Stack**: Astro 4.x + React 19 + Cloudflare Pages

---

## 📋 **INFORMACIÓN DEL PROYECTO**

### 🎯 **Descripción**
Sitio web corporativo para **Blixel AI**, agencia especializada en automatización empresarial mediante Inteligencia Artificial. El sitio presenta servicios, casos de éxito y ejemplos de implementación de IA.

### 🏗️ **Arquitectura Técnica**
- **Framework**: Astro 4.x (Static Site Generation)
- **Frontend**: React 19.1.0 + TypeScript
- **CMS**: WordPress Headless (GraphQL API)
- **Animaciones**: Magic UI + Motion React
- **Deploy**: Cloudflare Pages (automático)
- **Dominio**: blixel.pages.dev

---

## 🛠️ **TECNOLOGÍAS IMPLEMENTADAS**

### **Core Stack**
```json
{
  "astro": "^4.0.0",
  "react": "^19.1.0",
  "typescript": "^5.0.0",
  "@astrojs/cloudflare": "^8.0.0",
  "@astrojs/react": "^4.3.0"
}
```

### **WordPress Integration**
```json
{
  "@apollo/client": "^3.13.8",
  "graphql": "^16.11.0",
  "graphql-request": "^6.0.0"
}
```

### **UI & Animations**
```json
{
  "framer-motion": "^11.18.2",
  "lucide-react": "^0.460.0"
}
```

---

## 🎨 **CARACTERÍSTICAS PRINCIPALES**

### ✨ **Magic UI Components**
- **Notification Cards**: 4 estilos (Magic Spotlight, Neon Ripple, Cyber Glitch, Classic)
- **Border Beam**: Rayos animados en bordes
- **Particles**: Partículas flotantes dinámicas  
- **Ripple Effects**: Ondas expansivas de fondo
- **Spotlight**: Efectos de luz que siguen el cursor

### 🏠 **Secciones del Sitio**
1. **Hero Section**: Presentación principal con efectos typing
2. **Services**: Servicios de automatización con IA
3. **Examples**: Casos de éxito y implementaciones
4. **Methodology**: Proceso de trabajo de la agencia
5. **FAQ**: Preguntas frecuentes
6. **Contact**: Formulario de contacto

### 📱 **WordPress Integration**
- **Posts dinámicos**: Contenido gestionado desde WordPress
- **GraphQL API**: Consultas optimizadas
- **Caché inteligente**: Rendimiento optimizado
- **Headless CMS**: Total flexibilidad de diseño

---

## 🚀 **CONFIGURACIÓN DE DESARROLLO**

### **Instalación**
```bash
npm install
```

### **Desarrollo Local**
```bash
npm run dev
# Servidor: http://localhost:4321
```

### **Build de Producción**
```bash
npm run build
```

### **Deploy a Cloudflare**
```bash
./DEPLOY.bat
# O manualmente:
git add .
git commit -m "feat: nuevas características"
git push origin main
```

---

## 🌍 **CONFIGURACIÓN DE WORDPRESS**

### **Endpoint GraphQL**
```
URL: https://blixel.com/graphql
Consultas: Posts, Pages, Media
```

### **Variables de Entorno**
```env
WORDPRESS_API_URL=https://blixel.com/graphql
WORDPRESS_AUTH_TOKEN=your_token_here
```

---

## 📁 **ESTRUCTURA DEL PROYECTO**

```
📦 blixel-ai/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 magic-ui/          # Componentes Magic UI
│   │   │   ├── NotificationCard.tsx
│   │   │   ├── BorderBeam.tsx
│   │   │   ├── Particles.tsx
│   │   │   └── ...
│   │   ├── Hero.astro            # Sección principal
│   │   ├── ServicesSection.astro # Servicios
│   │   ├── ExamplesSection.astro # Ejemplos
│   │   └── ...
│   ├── 📁 layouts/
│   │   └── Layout.astro          # Layout principal
│   ├── 📁 pages/
│   │   ├── index.astro           # Página principal
│   │   └── [...slug].astro       # Páginas dinámicas
│   └── 📁 utils/
│       └── wordpress.ts          # Funciones WordPress
├── 📁 public/
│   ├── favicon.ico
│   └── assets/
├── astro.config.mjs              # Configuración Astro
├── package.json                  # Dependencias
├── tsconfig.json                 # Configuración TypeScript
└── DEPLOY.bat                    # Script de deploy
```

---

## ⚡ **CARACTERÍSTICAS TÉCNICAS**

### **Rendimiento**
- ✅ **Lighthouse Score**: 95+
- ✅ **Core Web Vitals**: Optimizado
- ✅ **Image Optimization**: Automática
- ✅ **Code Splitting**: Astro automático

### **SEO & Accesibilidad**
- ✅ **Meta Tags**: Dinámicos desde WordPress
- ✅ **Schema Markup**: Implementado
- ✅ **Sitemap**: Generado automáticamente
- ✅ **Accessibility**: WCAG 2.1 AA

### **Deploy & CI/CD**
- ✅ **Auto Deploy**: GitHub → Cloudflare Pages
- ✅ **Preview Builds**: Branches automáticos
- ✅ **Environment Variables**: Configuradas
- ✅ **SSL**: Certificado automático

---

## 🛡️ **SEGURIDAD**

- ✅ **HTTPS**: Forzado por Cloudflare
- ✅ **Headers**: Security headers configurados
- ✅ **API**: WordPress protegido con autenticación
- ✅ **Environment**: Variables sensibles protegidas

---

## 📞 **CONTACTO & SOPORTE**

**Blixel AI - Agencia de Automatización**
- 🌐 **Web**: https://blixel.pages.dev
- 📧 **Email**: info@blixel.com
- 💼 **Servicios**: Automatización empresarial con IA

---

## 📝 **COMANDOS ÚTILES**

```bash
# Desarrollo
npm run dev              # Servidor local
npm run build           # Build producción
npm run preview         # Preview build local

# Deploy
./DEPLOY.bat            # Deploy rápido
git push origin main    # Deploy automático

# Maintenance
npm update              # Actualizar dependencias
npm audit               # Verificar seguridad
```

---

## 🏆 **ESTADO DEL PROYECTO**

✅ **Completado**: Sitio web funcional con todas las características  
✅ **Deploy**: Automático en Cloudflare Pages  
✅ **WordPress**: Integración headless funcionando  
✅ **Magic UI**: Animaciones espectaculares implementadas  
✅ **Performance**: Optimizado para producción  

---

**🚀 Proyecto desarrollado y optimizado para Blixel AI**  
*Última actualización: Diciembre 2024*
