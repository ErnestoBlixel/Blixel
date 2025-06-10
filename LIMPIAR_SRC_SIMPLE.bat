@echo off
echo ==========================================
echo 🧹 LIMPIEZA SRC/ - BLIXEL AI
echo ==========================================
echo.

cd /d "C:\Users\nestu\Desktop\🏢 Blixel\BLIXEL AI\.Astro"

echo [1/3] ELIMINANDO ARCHIVOS BACKUP EN SRC...
echo ----------------------------------------

if exist "src\components\Hero.astro.backup" del "src\components\Hero.astro.backup" & echo ✓ Eliminado: Hero.astro.backup
if exist "src\components\HomePageBackup.astro.bak" del "src\components\HomePageBackup.astro.bak" & echo ✓ Eliminado: HomePageBackup.astro.bak
if exist "src\components\HowWeApplyIASection.astro.backup" del "src\components\HowWeApplyIASection.astro.backup" & echo ✓ Eliminado: HowWeApplyIASection.astro.backup
if exist "src\components\HowWeApplyIASection.astro.deleted" del "src\components\HowWeApplyIASection.astro.deleted" & echo ✓ Eliminado: HowWeApplyIASection.astro.deleted
if exist "src\graphql\client-backup.ts" del "src\graphql\client-backup.ts" & echo ✓ Eliminado: client-backup.ts

echo.
echo [2/3] ELIMINANDO COMPONENTES DUPLICADOS...
echo ----------------------------------------

if exist "src\components\ExamplesIASectionV2.astro" del "src\components\ExamplesIASectionV2.astro" & echo ✓ Eliminado: ExamplesIASectionV2.astro
if exist "src\components\ExamplesAnimated.astro" del "src\components\ExamplesAnimated.astro" & echo ✓ Eliminado: ExamplesAnimated.astro
if exist "src\components\ExamplesSimple.astro" del "src\components\ExamplesSimple.astro" & echo ✓ Eliminado: ExamplesSimple.astro
if exist "src\components\HeaderMinimal.astro" del "src\components\HeaderMinimal.astro" & echo ✓ Eliminado: HeaderMinimal.astro
if exist "src\components\HeroMinimal.astro" del "src\components\HeroMinimal.astro" & echo ✓ Eliminado: HeroMinimal.astro

echo.
echo [3/3] ELIMINANDO ARCHIVOS DE PRUEBA EN UTILS...
echo ----------------------------------------

if exist "src\utils\check-pages.js" del "src\utils\check-pages.js" & echo ✓ Eliminado: check-pages.js
if exist "src\utils\debug-wordpress.js" del "src\utils\debug-wordpress.js" & echo ✓ Eliminado: debug-wordpress.js
if exist "src\utils\test-apollo.js" del "src\utils\test-apollo.js" & echo ✓ Eliminado: test-apollo.js
if exist "src\utils\testGraphQL.js" del "src\utils\testGraphQL.js" & echo ✓ Eliminado: testGraphQL.js

echo.
echo ==========================================
echo ✅ LIMPIEZA SRC/ COMPLETADA
echo ==========================================
echo.
echo 📁 ESTRUCTURA FINAL DE SRC/:
echo.
echo src/
echo ├── components/
echo │   ├── magic-ui/          # ✨ Magic UI Components
echo │   ├── Hero.astro         # 🏠 Hero principal
echo │   ├── ServicesIASection.astro
echo │   ├── ExamplesIASection.astro
echo │   ├── FAQSection.astro
echo │   └── Footer.astro
echo ├── pages/
echo │   └── index.astro        # 📄 Página principal
echo ├── layouts/
echo │   └── Layout.astro       # 🎨 Layout principal
echo ├── graphql/
echo │   └── client.ts          # 🔌 Cliente GraphQL
echo └── utils/
echo     └── getPageData.ts     # 🛠️  Funciones utilidad
echo.
echo 🚀 SRC/ OPTIMIZADO Y LIMPIO
echo.
pause
