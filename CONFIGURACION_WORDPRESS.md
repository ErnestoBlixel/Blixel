# 🚀 Configuración Rápida de WordPress para la Plantilla

## ⚡ Pasos Inmediatos para Que Funcione

### 1. 📄 Crear Página Home
1. Ve a **WordPress Admin > Páginas > Añadir nueva**
2. **Título**: El título que quieres mostrar en el hero
3. **Slug**: Cambiarlo a `home` (muy importante)
4. **Contenido**: Puedes dejarlo vacío o añadir contenido

### 2. 🎯 Configurar Yoast SEO
1. En la página que creaste, baja al **panel de Yoast SEO**
2. **Título SEO**: El título exacto que quieres en el hero
3. **Meta descripción**: La descripción que quieres en el hero
4. **Guardar**

### 3. ⚙️ Configurar Sitio General
1. Ve a **Ajustes > Generales**
2. **Título del sitio**: Tu nombre de empresa
3. **Descripción**: Descripción de tu empresa
4. **Guardar cambios**

### 4. 🖼️ Configurar Icono del Sitio
1. Ve a **Apariencia > Personalizar**
2. Clic en **Identidad del sitio**
3. **Icono del sitio**: Subir tu logo (recomendado 512x512px)
4. **Publicar**

### 5. 🔗 Verificar GraphQL
1. Asegúrate de que el plugin **WPGraphQL** esté activo
2. Ve a `tu-sitio.com/graphql` - debería mostrar el playground de GraphQL
3. Si no funciona, instalar y activar **WPGraphQL**

## 🔍 Verificar que Funciona

### En la Plantilla:
1. Ejecuta `npm run dev`
2. Ve a `http://localhost:4321`
3. Mira el panel de debug en la esquina superior derecha
4. Debería mostrar tus datos reales de WordPress

### Solución de Problemas:

**Si ves "[Título no configurado...]":**
- Verifica que la página tenga slug "home"
- Verifica que Yoast SEO esté configurado
- Revisa que GraphQL esté activo

**Si no aparece el icono:**
- Verifica que esté configurado en WordPress
- Asegúrate de que sea accesible públicamente

**Si hay errores de conexión:**
- Verifica que tu sitio WordPress esté online
- Comprueba que no haya problemas de CORS
- Revisa la consola del navegador para errores específicos

## 📋 Checklist Rápido

- [ ] Página con slug "home" creada
- [ ] Título SEO configurado en Yoast
- [ ] Meta descripción configurada en Yoast
- [ ] Título del sitio configurado en Ajustes
- [ ] Icono del sitio configurado
- [ ] Plugin WPGraphQL activo
- [ ] Panel de debug muestra datos reales

## 🎯 Resultado Esperado

Después de estos pasos, tu plantilla debería mostrar:
- **Header**: Tu icono y navegación
- **Hero**: Tu título SEO como título principal
- **Hero**: Tu meta descripción como descripción
- **Footer**: Información de tu sitio

¡Una vez que funcione, puedes quitar el componente DebugInfo de la página!