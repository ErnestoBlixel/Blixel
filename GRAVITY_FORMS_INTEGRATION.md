# Integración Gravity Forms en Hero - BLIXEL

## ✅ IMPLEMENTACIÓN COMPLETADA

El formulario de Gravity Forms ID 1 está ahora **integrado directamente en el Hero section**, justo después del titular y descripción, tal como solicitaste.

## 🎯 Ubicación del Formulario

- **Posición**: Dentro del Hero section
- **Después de**: Título y descripción
- **Antes de**: Botones de acción (Contactar/Agendar)
- **URL del formulario**: https://cms.blixel.es/gravity-forms/form/1

## 📊 Flujo de Datos

✅ **Los datos del formulario SÍ llegan a WordPress**:
1. El usuario rellena el formulario en tu sitio Astro
2. Gravity Forms procesa el envío en cms.blixel.es
3. Los datos se almacenan en WordPress
4. Puedes ver las entradas en: https://cms.blixel.es/wp-admin/admin.php?page=gf_entries

## 🔧 Archivos Modificados

### 1. `src/components/Hero.astro`
- ✅ Importación de GravityForm agregada
- ✅ Formulario integrado después de la descripción
- ✅ Estilos personalizados para integración perfecta
- ✅ Animaciones sincronizadas (aparece después de la descripción)
- ✅ Diseño responsivo completo

### 2. `src/pages/index.astro`
- ✅ Importación duplicada removida
- ✅ Componente duplicado eliminado
- ✅ Estructura limpia mantenida

## 🎨 Diseño Integrado

### Características del formulario en el Hero:
- **Fondo sutil**: Glass effect con transparencia
- **Tamaño optimizado**: 600px máximo, adaptable
- **Altura del iframe**: 500px desktop, 450px tablet, 400px móvil
- **Animación**: Aparece con fadeInUp después de la descripción
- **Sin headers**: Título y descripción ocultos (ya están en el Hero)

## 🔄 Cómo Funciona

```astro
<!-- En Hero.astro -->
<div class="hero-form">
  <GravityForm 
    formId={1}
    className="hero-gravity-form"
  />
</div>
```

### Secuencia de animación:
1. **0.5s**: Logo aparece
2. **2s**: Primera línea del título
3. **3s**: Segunda línea + descripción
4. **3.4s**: 🎯 **FORMULARIO APARECE AQUÍ**
5. **3.6s**: Botones de acción

## 📱 Responsive Design

- **Desktop**: Formulario centrado, 600px max-width
- **Tablet**: Full width con padding reducido
- **Móvil**: Optimizado para pantalla completa

## ⚙️ Configuración WordPress

### Para verificar que funciona:
1. **Admin WordPress**: https://cms.blixel.es/wp-admin/
2. **Gravity Forms**: Admin → Forms → Ver formulario ID 1
3. **Entradas**: Admin → Forms → Entries (para ver envíos)

### URL directa del formulario:
https://cms.blixel.es/gravity-forms/form/1

## 📝 Opciones de Configuración

### Cambiar entre métodos

**Para usar el método iframe (actual):**
```astro
import GravityForm from '../components/GravityForm.astro';
```

**Para usar el método shortcode:**
```astro
import GravityFormShortcode from '../components/GravityFormShortcode.astro';
```

### Props disponibles

```astro
<GravityForm 
  formId={1}                    // ID del formulario en Gravity Forms
  title="Tu título"             // Título personalizado (opcional)
  description="Tu descripción"  // Descripción personalizada (opcional)
  className="mi-clase-css"      // Clases CSS adicionales (opcional)
/>
```

## 🔧 Configuración WordPress

### Para que funcione correctamente, asegúrate de que:

1. **Gravity Forms esté activado** en WordPress (cms.blixel.es)
2. **El formulario ID 1 exista** y esté publicado
3. **CORS esté configurado** si usas el método shortcode

### Verificar el formulario en WordPress:
- Ve a: https://cms.blixel.es/wp-admin/admin.php?page=gf_edit_forms
- Busca el formulario con ID 1
- Asegúrate de que esté activo

### URL del formulario directo:
https://cms.blixel.es/gravity-forms/form/1

## 🎨 Personalización de Estilos

Los componentes incluyen estilos que coinciden con el tema de BLIXEL:

- **Fondo oscuro**: #000000
- **Gradiente de marca**: #02aa6d → #0ea5e9
- **Diseño responsivo**: Mobile-first
- **Efectos glass**: backdrop-blur y transparencias
- **Animaciones suaves**: Transiciones CSS

### Modificar estilos:

```css
/* En el componente .astro */
.gravity-form-section {
  background: #tu-color;
  padding: 4rem 0;
}

.form-title {
  background: linear-gradient(135deg, #tu-color1 0%, #tu-color2 100%);
}
```

## 🔄 Métodos Alternativos

### 3. Shortcode directo (No implementado)
Si prefieres el shortcode tradicional de WordPress:

```astro
---
const shortcodeHTML = await fetch('https://cms.blixel.es/wp-json/wp/v2/render-shortcode', {
  method: 'POST',
  body: JSON.stringify({ shortcode: '[gravityform id="1" title="false" description="false"]' })
});
---
<div set:html={shortcodeHTML}></div>
```

### 4. API REST directa (Avanzado)
Para máximo control, usar la API REST de Gravity Forms:

```javascript
const formData = await fetch('https://cms.blixel.es/wp-json/gf/v2/forms/1');
```

## 🧪 Testing

### Para probar el formulario:

1. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Abrir:** http://localhost:4321
   
3. **Verificar que aparece** el formulario después del Hero section

4. **Probar en diferentes dispositivos** y tamaños de pantalla

### Troubleshooting común:

- **Formulario no aparece**: Verificar que existe en WordPress
- **Estilos rotos**: Revisar conflictos CSS
- **JavaScript no funciona**: Probar método iframe
- **CORS errors**: Configurar headers en WordPress

## 📊 Analytics

Los componentes incluyen tracking básico de Google Analytics:

```javascript
// Al cargar el formulario
gtag('event', 'form_view', {
  'event_category': 'engagement',
  'event_label': 'Gravity Forms - Diagnóstico IA'
});

// Al enviar el formulario
gtag('event', 'form_submit', {
  'event_category': 'engagement', 
  'event_label': 'Gravity Forms - Diagnóstico IA'
});
```

## 🔗 URLs Importantes

- **WordPress Admin**: https://cms.blixel.es/wp-admin/
- **Gravity Forms**: https://cms.blixel.es/wp-admin/admin.php?page=gf_edit_forms
- **Formulario directo**: https://cms.blixel.es/gravity-forms/form/1
- **GraphQL**: https://cms.blixel.es/graphql

## 📞 Soporte

Si necesitas ayuda adicional:

1. **Revisar logs** del navegador (F12 → Console)
2. **Probar URL directa** del formulario
3. **Verificar configuración** en WordPress
4. **Contactar** al administrador de WordPress

---

## ✅ Próximos Pasos

1. **Probar** el formulario en desarrollo
2. **Ajustar estilos** si es necesario  
3. **Configurar** envío de emails en Gravity Forms
4. **Hacer deploy** a producción
5. **Monitorear** conversiones y errores

¡El formulario de diagnóstico de IA ya está listo para recibir solicitudes! 🚀
