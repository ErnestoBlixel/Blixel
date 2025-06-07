## 🎯 RESUMEN DE LOS CAMBIOS

He actualizado tu código para que:

1. **Busque la página principal** en lugar de "blixel-ai"
2. **Use el título de tu página de WordPress** como H1 en el Hero
3. **Use la imagen destacada** para Open Graph (cuando compartas en redes)

## 🚀 PRÓXIMOS PASOS:

### 1. Ejecuta estos comandos para diagnosticar:
```bash
# Ver qué páginas tienes disponibles
node test-pages.js

# Encontrar tu página principal
find-home.bat

# Ver el diagnóstico visual completo
check-visual.bat
```

### 2. En WordPress:
1. Edita tu página "Formación de inteligencia artificial empresas"
2. En el campo **Slug** (que está vacío):
   - Déjalo vacío para que sea la página principal
   - O escribe: `home`
3. Agrega una **imagen destacada** (1200x630px ideal)
4. Guarda los cambios

### 3. Configurar página principal (si es necesario):
1. Ve a **Ajustes → Lectura** en WordPress
2. En "Tu página de inicio muestra" selecciona "Una página estática"
3. En "Página de inicio" selecciona tu página
4. Guarda cambios

### 4. Reinicia el servidor:
```bash
npm run dev
```

## ✅ VERIFICACIÓN:

Cuando todo esté bien configurado, en el debug info verás:
- ✅ Conectado
- 📄 Página encontrada
- H1: "Formación de inteligencia artificial empresas" (o el título que pongas)
- ✅ Imagen destacada configurada

## 🔍 Si aún no funciona:

Ejecuta `find-home.bat` y copia el URI que te muestre. 
Luego actualiza en `index.astro` línea 14:
```javascript
page(id: "URI_QUE_TE_MOSTRÓ", idType: URI)
```
