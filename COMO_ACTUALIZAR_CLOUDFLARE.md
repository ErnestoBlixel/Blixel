# 🚀 CÓMO ACTUALIZAR TU SITIO EN CLOUDFLARE

## Resumen rápido
Tu sitio está configurado con **Cloudflare Pages** + **GitHub**. 
Cada vez que haces `git push`, Cloudflare automáticamente detecta los cambios y actualiza tu sitio.

## 📋 Métodos de actualización:

### Método 1: Script automático completo (RECOMENDADO)
```bash
deploy-to-cloudflare.bat
```
- ✅ Hace build local para verificar errores
- ✅ Sube cambios a GitHub
- ✅ Cloudflare actualiza automáticamente

### Método 2: Script rápido (sin verificación)
```bash
update-cloudflare-quick.bat
```
- ⚡ Sube cambios directamente
- ⚠️ No verifica errores antes

### Método 3: Manual (control total)
```bash
# 1. Construir localmente (opcional pero recomendado)
npm run build

# 2. Añadir cambios
git add .

# 3. Hacer commit con mensaje descriptivo
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push
```

## 🔍 Verificar el despliegue:

1. **Panel de Cloudflare Pages**:
   - Ve a: https://dash.cloudflare.com/pages
   - Busca tu proyecto: `blixel-ai-website`
   - Verás el estado del build en tiempo real

2. **Historial de deploys**:
   - Cada push crea un nuevo deployment
   - Puedes ver logs si algo falla
   - Rollback fácil a versiones anteriores

## ⏱️ Tiempos estimados:
- Build en Cloudflare: 1-2 minutos
- Propagación global: 1-3 minutos
- **Total**: Tu sitio estará actualizado en ~5 minutos máximo

## 🚨 Solución de problemas:

### Si el build falla en Cloudflare:
1. Revisa los logs en el panel de Cloudflare
2. Ejecuta `npm run build` localmente para ver errores
3. Los errores más comunes:
   - Imports incorrectos
   - Archivos faltantes
   - Errores de TypeScript

### Si los cambios no aparecen:
1. Limpia caché del navegador (Ctrl+F5)
2. Verifica en modo incógnito
3. Cloudflare tiene caché agresivo, espera 5 minutos

## 📝 Buenas prácticas:

1. **Siempre haz build local primero**:
   ```bash
   npm run build
   ```

2. **Commits descriptivos**:
   ```bash
   git commit -m "feat: Añadir sección Por qué IA ahora"
   git commit -m "fix: Corregir responsive en móvil"
   git commit -m "update: Actualizar textos de servicios"
   ```

3. **Verifica antes de pushear**:
   ```bash
   npm run preview
   ```
   Abre http://localhost:4321 para ver el sitio como quedará

## 🔐 Configuración (ya está hecha):
- **Repositorio GitHub**: Conectado a Cloudflare
- **Build command**: `npm run build`
- **Build output**: `dist`
- **Node version**: 18.x
- **Variables de entorno**: Configuradas en Cloudflare

---

💡 **TIP**: Guarda este archivo para referencia futura. 
El proceso es siempre el mismo: editar → git push → Cloudflare actualiza automáticamente.
