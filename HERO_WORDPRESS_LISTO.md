# 🎯 HERO CONECTADO CON WORDPRESS - LISTO

## ✅ Cambios aplicados:

### 1. **Hero toma datos de WordPress automáticamente**
- **H1**: Título de la página en WordPress
- **Descripción**: Meta descripción de Yoast SEO

### 2. **GraphQL habilitado en producción**
- Ya no solo en desarrollo
- Funciona en el sitio desplegado

## 📝 Cómo funciona:

```
WordPress (cms.blixel.es)          →    Tu sitio web
├── Título de página               →    H1 del Hero
└── Yoast SEO meta descripción    →    Descripción bajo el H1
```

## 🚀 Para probar localmente:

### Opción 1: Aplicar y ver cambios
```bash
aplicar-wordpress-hero.bat
```

### Opción 2: Solo probar conexión
```bash
node test-wordpress.js
```

## 🌐 Para desplegar:

```powershell
.\deploy-wordpress-hero.ps1
```

## 📋 Para cambiar el contenido:

1. **Entra a WordPress**: https://cms.blixel.es/wp-admin
2. **Edita la página principal** (Home)
3. **Cambia**:
   - **Título**: Será tu H1
   - **Yoast SEO > Snippet > Meta descripción**: Será tu descripción

## 🎨 Ejemplo real:

Si en WordPress pones:
- **Título**: "Inteligencia Artificial para hacer crecer tu empresa"
- **Meta descripción**: "Inteligencia artificial en tu empresa: ROI en 90 días o te devolvemos todo. Mientras lees esto, 3 competidores nos llamaron. ¿Quieres sobrevivir?"

Tu Hero mostrará:
```
Inteligencia Artificial para
hacer crecer tu empresa
────────────────────────────
Inteligencia artificial en tu empresa: ROI en 90 días o te devolvemos todo...
[Contactar] [Agendar Llamada]
```

## ⚡ Ventajas:

- ✅ Cambias el contenido sin tocar código
- ✅ SEO optimizado automáticamente
- ✅ Un solo lugar para gestionar contenido
- ✅ Funciona en producción

---

**¡Tu Hero ahora es dinámico y se actualiza desde WordPress!** 🎉

Ya no necesitas editar código para cambiar el título o descripción.
