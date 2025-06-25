# 📋 Configuración de Cookies - Instrucciones

## 🚨 IMPORTANTE: Configurar IDs de Analytics

Antes de publicar tu sitio web, debes configurar los IDs reales de Google Analytics y Facebook Pixel.

### 1. Google Analytics ✅ YA CONFIGURADO

1. Ve al archivo: `src/components/CookieBanner.astro`
2. Ya está configurado con tu ID: `G-GN6G2XHNTL`

### 2. Facebook Pixel ✅ YA CONFIGURADO

1. Ve al archivo: `src/components/CookieBanner.astro`
2. Ya está configurado con tu ID: `709784485169854`

## 📱 Cómo funciona el sistema de cookies

### Banner de consentimiento
- Se muestra automáticamente a usuarios nuevos
- Permite aceptar todas, rechazar o configurar
- Cumple con RGPD/GDPR

### Opciones disponibles:
1. **Cookies técnicas**: Siempre activas (necesarias)
2. **Cookies de análisis**: Google Analytics (opcional)
3. **Cookies publicitarias**: Facebook Pixel (opcional)

### Gestión de preferencias:
- Los usuarios pueden cambiar sus preferencias en cualquier momento
- Botón flotante 🍪 en la esquina inferior izquierda
- Las preferencias se guardan durante 1 año

## 🔧 Personalización

### Cambiar duración del consentimiento:
En `CookieBanner.astro`, modifica:
```javascript
consentDuration: 365, // días
```

### Cambiar posición del botón flotante:
En los estilos CSS, busca `.cookie-settings-float` y modifica:
```css
bottom: 20px;  /* distancia desde abajo */
left: 20px;    /* distancia desde la izquierda */
```

## ✅ Checklist antes de publicar

- [✓] Configurar ID de Google Analytics (G-GN6G2XHNTL)
- [✓] Configurar ID de Facebook Pixel (709784485169854)
- [ ] Probar el banner en modo incógnito
- [ ] Verificar que los scripts se cargan solo con consentimiento
- [ ] Comprobar que las preferencias se guardan correctamente

## 🆘 Soporte

Si tienes dudas sobre la configuración, contacta con el equipo de desarrollo.
