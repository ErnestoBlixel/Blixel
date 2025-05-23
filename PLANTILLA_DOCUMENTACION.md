# 🎨 Plantilla Principal Minimalista - Blixel

Esta plantilla ha sido diseñada para crear una página limpia y minimalista con **modo oscuro** que consume datos directamente de WordPress vía GraphQL. Todo el contenido dinámico se obtiene automáticamente desde tu sitio de WordPress.

## 🚀 Características Principales

### ✅ Completamente Dinámico desde WordPress
- **Título del Hero**: Se obtiene del título SEO (Yoast) de la página "home" o "inicio"
- **Descripción del Hero**: Se obtiene de la meta descripción (Yoast) de la página "home" o "inicio"
- **Icono del sitio**: Se obtiene automáticamente desde WordPress
- **Título del sitio**: Se obtiene de la configuración general de WordPress
- **Descripción del sitio**: Se obtiene de la configuración general de WordPress

### 🎨 Diseño
- **Modo oscuro completo**: Toda la UI está optimizada para modo oscuro
- **Minimalista**: Solo Header, Hero y Footer - sin elementos innecesarios
- **Responsive**: Optimizado para todas las pantallas
- **Rápido**: Queries GraphQL optimizadas para máximo rendimiento

### 🏗️ Arquitectura Modular
- **Componentes separados**: Header, Hero y Footer como componentes independientes
- **Queries optimizadas**: Sistema de queries específico para la plantilla
- **Fallbacks inteligentes**: Si no encuentra datos, usa valores por defecto

## 📁 Estructura de Archivos Creados

```
src/
├── layouts/
│   └── MainTemplate.astro          # Plantilla principal
├── components/
│   ├── HeaderMinimal.astro         # Header minimalista
│   ├── HeroMinimal.astro          # Hero minimalista  
│   └── Footer.astro               # Footer minimalista
├── graphql/
│   └── template-queries.ts        # Queries optimizadas
└── pages/
    ├── index.astro                # Página principal actualizada
    └── template.astro             # Página de ejemplo
```

## 🔧 Cómo Usar la Plantilla

### 1. Página Principal (ya configurada)
```astro
---
import MainTemplate from '../layouts/MainTemplate.astro';
---

<MainTemplate 
  title="Blixel - Automatización con IA"
  description="Transformamos tu empresa con inteligencia artificial"
  className="home-page"
>
  <!-- Contenido adicional aquí (opcional) -->
</MainTemplate>
```

### 2. Crear Nuevas Páginas
```astro
---
import MainTemplate from '../layouts/MainTemplate.astro';
---

<MainTemplate 
  title="Tu Título Personalizado"
  description="Tu descripción personalizada"
  className="tu-clase-css"
>
  <div class="tu-contenido">
    <!-- Tu contenido aquí -->
  </div>
</MainTemplate>
```

## 🎯 Configuración en WordPress

Para que la plantilla funcione perfectamente, asegúrate de tener en WordPress:

### 1. Plugin Yoast SEO instalado y configurado
### 2. Una página con slug "home" o "inicio" que contenga:
   - **Título SEO**: El título que quieres mostrar en el Hero
   - **Meta descripción**: La descripción que quieres mostrar en el Hero

### 3. Configuración del sitio:
   - **Título del sitio**: En Ajustes > Generales
   - **Descripción**: En Ajustes > Generales  
   - **Icono del sitio**: En Apariencia > Personalizar > Identidad del sitio

## 🔍 Cómo Funciona la Obtención de Datos

### Prioridad para el Hero:
1. **Título**: Título SEO (Yoast) → Título de página → Título del sitio
2. **Descripción**: Meta descripción (Yoast) → Excerpt → Descripción por defecto

### Fallbacks:
- Si no encuentra la página "home", busca "inicio"
- Si no encuentra ninguna, usa valores por defecto
- Si falla GraphQL, usa valores de respaldo predefinidos

## 🎨 Personalización

### Colores (definidos en CSS variables):
```css
:root {
  --bg-primary: #0a0a0a;          /* Fondo principal */
  --bg-secondary: #1a1a1a;        /* Fondo secundario */
  --text-primary: rgba(255, 255, 255, 0.9);   /* Texto principal */
  --text-secondary: rgba(255, 255, 255, 0.7); /* Texto secundario */
  --accent-color: #4a5bff;         /* Color de acento */
  --accent-hover: #3a4bef;         /* Color de acento hover */
}
```

### Navegación:
Para cambiar los enlaces del menú, edita los archivos:
- `src/components/HeaderMinimal.astro`
- `src/components/Footer.astro`

## 🚀 Comandos de Desarrollo

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 📱 Responsive Design

La plantilla está optimizada para:
- **Desktop**: 1200px+ (diseño completo)
- **Tablet**: 768px-1199px (navegación adaptada)
- **Mobile**: <768px (menú hamburguesa)
- **Small Mobile**: <480px (ajustes adicionales)

## 🔧 Solución de Problemas

### Si no aparecen datos de WordPress:
1. Verifica que GraphQL esté activo en tu WordPress
2. Comprueba que la URL en `src/graphql/client.ts` sea correcta
3. Revisa la consola del navegador para errores de conexión

### Si no aparece el icono:
1. Verifica que tengas un icono configurado en WordPress
2. El icono debe ser accesible públicamente
3. Comprueba los permisos del archivo

### Si los estilos no se ven bien:
1. Verifica que las variables CSS estén definidas
2. Comprueba que no haya conflictos con otros estilos
3. Revisa la consola para errores de CSS

## 📞 Soporte

Esta plantilla está diseñada para ser:
- **Fácil de mantener**: Código limpio y bien documentado
- **Escalable**: Fácil agregar nuevas funcionalidades
- **Performante**: Optimizada para velocidad de carga
- **SEO-friendly**: Meta tags y estructura optimizada

¡Disfruta tu nueva plantilla minimalista! 🎉