# GUÍA RÁPIDA DE DESPLIEGUE

## 🚀 Para actualizar Git y Cloudflare:

### Opción 1: Despliegue Rápido (Recomendado)
```bash
actualizar-git-cloudflare.bat
```
- Hace commit automático
- Sube a GitHub
- Despliega a Cloudflare
- Todo en un solo comando

### Opción 2: Despliegue Seguro
```bash
deploy-seguro.bat
```
- Muestra los cambios antes
- Pide confirmación
- Verifica errores en cada paso

### Opción 3: Verificar Estado
```bash
verificar-estado-git.bat
```
- Solo muestra el estado
- No hace cambios
- Útil para revisar antes de desplegar

## 📝 Cambios que se van a desplegar:

1. **Hero.astro**
   - Completamente recreado
   - Super compacto (padding mínimo)
   - Sin espacios grandes

2. **ServicesIASection.astro**
   - H2 alineado a la IZQUIERDA
   - Sin márgenes negativos

3. **WhyIANowSection.astro**
   - H2: "¿Por qué el momento es AHORA?"
   - Sin márgenes negativos

4. **Layout.astro**
   - Padding-top reducido a 80px

## 🌐 URLs del proyecto:

- **GitHub**: Se actualizará en tu repositorio
- **Cloudflare**: https://blixel-ai.pages.dev
- **Dominio personalizado**: https://blixel.es (si está configurado)

## ⏱️ Tiempos estimados:

- Git push: 10-30 segundos
- Build: 30-60 segundos
- Deploy Cloudflare: 30-60 segundos
- **Total**: 2-3 minutos

## ⚠️ Si algo falla:

1. **Error de Git**:
   ```bash
   git pull origin main
   git push origin main --force
   ```

2. **Error de Build**:
   ```bash
   npm install
   npm run build
   ```

3. **Error de Cloudflare**:
   ```bash
   npx wrangler login
   npx wrangler pages deploy ./dist --project-name blixel-ai
   ```

## 🔍 Para verificar el despliegue:

1. Abre https://blixel-ai.pages.dev en modo incógnito
2. Presiona Ctrl+F5 para limpiar caché
3. Los cambios deberían verse en 1-2 minutos
