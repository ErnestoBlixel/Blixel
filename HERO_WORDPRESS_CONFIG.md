# 📝 CONFIGURACIÓN: HERO CON DATOS DE WORDPRESS

## ✅ El Hero ahora toma automáticamente:

1. **H1 (Título principal)**: El título de tu página en WordPress
2. **Descripción**: La meta descripción de Yoast SEO

## 🔧 Configuración necesaria:

### 1. Archivo `.env`
Asegúrate de tener en tu archivo `.env`:
```
PUBLIC_WP_GRAPHQL_URL=https://cms.blixel.es/graphql
```

### 2. En WordPress (cms.blixel.es):
- Edita la página principal (Home)
- **Título de la página**: Este será tu H1
- **Yoast SEO > Meta descripción**: Esta será la descripción bajo el H1

## 🧪 Para probar la conexión:

### Opción 1: Test directo
```bash
node test-wordpress.js
```
Te mostrará exactamente qué datos está devolviendo WordPress.

### Opción 2: Verificar configuración
```bash
verificar-wordpress.bat
```

### Opción 3: Ver en desarrollo
```bash
npm run dev
```
Y revisa la consola del navegador (F12).

## 📋 Ejemplo de lo que verás:

Si en WordPress tienes:
- **Título**: "Aplica Inteligencia Artificial en tu empresa"
- **Meta descripción**: "Inteligencia artificial en tu empresa: ROI en 90 días o te devolvemos todo. Mientras lees esto, 3 competidores nos llamaron. ¿Quieres sobrevivir?"

El Hero mostrará:
```
Aplica Inteligencia Artificial
en tu empresa
────────────────────────────────
Inteligencia artificial en tu empresa: ROI en 90 días...
```

## 🚨 Si no funciona:

1. **Verifica el archivo .env**:
   - Debe existir
   - Debe tener PUBLIC_WP_GRAPHQL_URL

2. **Verifica WordPress**:
   - Plugin WPGraphQL activado
   - Página principal existe
   - Yoast SEO configurado

3. **Limpia caché**:
   ```bash
   rm -rf .astro dist
   npm run dev
   ```

## 🌐 Para desplegar:

Los cambios ya funcionan en producción. Solo despliega:
```powershell
.\deploy-wordpress-hero.ps1
```

---

**¡Tu Hero ahora se actualiza automáticamente desde WordPress!** 🎉
