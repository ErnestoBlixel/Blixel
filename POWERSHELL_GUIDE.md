# 🚀 CÓMO EJECUTAR EN POWERSHELL

## Tienes 3 opciones:

### Opción 1: Script PowerShell (RECOMENDADO)
```powershell
.\deploy.ps1
```
- Interfaz bonita con colores
- Hecho específicamente para PowerShell

### Opción 2: Deploy Rápido PowerShell
```powershell
.\deploy-quick.ps1
```
- Más rápido, sin pausas

### Opción 3: Archivos .bat (agregar .\ al inicio)
```powershell
.\deploy-visual.bat
.\deploy-rapido.bat
.\actualizar-git-cloudflare.bat
```

## Si PowerShell bloquea los scripts:

Ejecuta esto primero (como administrador):
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

O ejecuta el script directamente:
```powershell
powershell -ExecutionPolicy Bypass -File deploy.ps1
```

## 🎯 EJECUTA AHORA:

```powershell
.\deploy.ps1
```

## Alternativa: Cambiar a CMD
```powershell
cmd
deploy-visual.bat
```
