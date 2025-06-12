# Instrucciones para actualizar Git y Cloudflare

## 1. Actualizar Git (Terminal/CMD)

Abre una terminal en la carpeta del proyecto y ejecuta estos comandos uno por uno:

```bash
# Navegar al directorio del proyecto
cd "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

# Agregar todos los cambios
git add -A

# Hacer commit con mensaje descriptivo
git commit -m "Fix: H1 visible inmediatamente y logo bajado en Hero"

# Subir los cambios a GitHub
git push origin main
```

## 2. Actualizar en Cloudflare Pages

### Opción A: Despliegue Automático (Recomendado)
Si tienes configurado el despliegue automático desde GitHub:
- Los cambios se desplegarán automáticamente en 1-3 minutos después del push
- Puedes verificar el progreso en: https://dash.cloudflare.com/

### Opción B: Despliegue Manual
1. Ve a https://dash.cloudflare.com/
2. Selecciona tu proyecto "BLIXEL AI"
3. Ve a la pestaña "Deployments"
4. Click en "Create deployment"
5. Selecciona la rama "main"
6. Click en "Deploy"

## 3. Verificar los cambios

Después de 2-3 minutos, verifica los cambios en:
- https://blixel.pages.dev (o tu dominio personalizado)

## Cambios realizados:
✅ H1 ahora es visible inmediatamente (sin opacity: 0)
✅ Animaciones del título más rápidas (0.1s y 0.3s)
✅ Logo bajado más (margin-top: 3.5rem)
✅ Ajustes responsivos para móvil