@echo off
echo.
echo ============================================
echo    LIMPIEZA DE PROYECTO BLIXEL WEB_ASTRO
echo ============================================
echo.

echo 🧹 Iniciando limpieza del proyecto...
echo.

REM Eliminar archivos de scripts y pruebas de la raíz
echo 📁 Limpiando archivos de la raíz...
if exist "activate-complete.ps1" del "activate-complete.ps1" && echo ✅ Eliminado: activate-complete.ps1
if exist "activate-simple.ps1" del "activate-simple.ps1" && echo ✅ Eliminado: activate-simple.ps1
if exist "astro.config.js" del "astro.config.js" && echo ✅ Eliminado: astro.config.js (duplicado)
if exist "CAMBIOS-FINALES.md" del "CAMBIOS-FINALES.md" && echo ✅ Eliminado: CAMBIOS-FINALES.md
if exist "cleanup.sh" del "cleanup.sh" && echo ✅ Eliminado: cleanup.sh
if exist "cleanup_final.js" del "cleanup_final.js" && echo ✅ Eliminado: cleanup_final.js
if exist "commit-nuevas-secciones.ps1" del "commit-nuevas-secciones.ps1" && echo ✅ Eliminado: commit-nuevas-secciones.ps1
if exist "contenido-secciones-html-puro.html" del "contenido-secciones-html-puro.html" && echo ✅ Eliminado: contenido-secciones-html-puro.html
if exist "d.ps1" del "d.ps1" && echo ✅ Eliminado: d.ps1
if exist "demo-efectos-particulas.html" del "demo-efectos-particulas.html" && echo ✅ Eliminado: demo-efectos-particulas.html

REM Eliminar scripts de deploy
echo.
echo 📦 Eliminando scripts de deploy...
if exist "deploy-colores-marca.ps1" del "deploy-colores-marca.ps1" && echo ✅ Eliminado: deploy-colores-marca.ps1
if exist "deploy-hero-restaurado.ps1" del "deploy-hero-restaurado.ps1" && echo ✅ Eliminado: deploy-hero-restaurado.ps1
if exist "deploy-hero-typing.ps1" del "deploy-hero-typing.ps1" && echo ✅ Eliminado: deploy-hero-typing.ps1
if exist "deploy-magic-notifications.ps1" del "deploy-magic-notifications.ps1" && echo ✅ Eliminado: deploy-magic-notifications.ps1
if exist "deploy-mejoras-hero.ps1" del "deploy-mejoras-hero.ps1" && echo ✅ Eliminado: deploy-mejoras-hero.ps1
if exist "deploy-quick.ps1" del "deploy-quick.ps1" && echo ✅ Eliminado: deploy-quick.ps1
if exist "deploy-to-cloudflare.ps1" del "deploy-to-cloudflare.ps1" && echo ✅ Eliminado: deploy-to-cloudflare.ps1
if exist "deploy-visual-improvements.ps1" del "deploy-visual-improvements.ps1" && echo ✅ Eliminado: deploy-visual-improvements.ps1
if exist "deploy-wordpress-hero.ps1" del "deploy-wordpress-hero.ps1" && echo ✅ Eliminado: deploy-wordpress-hero.ps1
if exist "deploy.cmd" del "deploy.cmd" && echo ✅ Eliminado: deploy.cmd
if exist "deploy.ps1" del "deploy.ps1" && echo ✅ Eliminado: deploy.ps1

REM Eliminar archivos de diagnóstico y pruebas
echo.
echo 🔍 Eliminando archivos de diagnóstico...
if exist "diagnose-form.js" del "diagnose-form.js" && echo ✅ Eliminado: diagnose-form.js
if exist "diagnose_wordpress.sh" del "diagnose_wordpress.sh" && echo ✅ Eliminado: diagnose_wordpress.sh
if exist "estilos-secciones.css" del "estilos-secciones.css" && echo ✅ Eliminado: estilos-secciones.css
if exist "example-backend-endpoint.js" del "example-backend-endpoint.js" && echo ✅ Eliminado: example-backend-endpoint.js
if exist "example-graphql-mutation.js" del "example-graphql-mutation.js" && echo ✅ Eliminado: example-graphql-mutation.js
if exist "find-duplicates.js" del "find-duplicates.js" && echo ✅ Eliminado: find-duplicates.js
if exist "find-home.js" del "find-home.js" && echo ✅ Eliminado: find-home.js
if exist "fix-form.js" del "fix-form.js" && echo ✅ Eliminado: fix-form.js
if exist "git_update.ps1" del "git_update.ps1" && echo ✅ Eliminado: git_update.ps1

REM Eliminar documentación temporal
echo.
echo 📄 Eliminando documentación temporal...
if exist "HERO-RESTAURADO.md" del "HERO-RESTAURADO.md" && echo ✅ Eliminado: HERO-RESTAURADO.md
if exist "IMPLEMENTACION-MEJORAS.md" del "IMPLEMENTACION-MEJORAS.md" && echo ✅ Eliminado: IMPLEMENTACION-MEJORAS.md
if exist "LIMPIAR_SRC.ps1" del "LIMPIAR_SRC.ps1" && echo ✅ Eliminado: LIMPIAR_SRC.ps1
if exist "optimize-structure.ps1" del "optimize-structure.ps1" && echo ✅ Eliminado: optimize-structure.ps1
if exist "restart-server.sh" del "restart-server.sh" && echo ✅ Eliminado: restart-server.sh
if exist "restore-hero.ps1" del "restore-hero.ps1" && echo ✅ Eliminado: restore-hero.ps1
if exist "restore-hero.sh" del "restore-hero.sh" && echo ✅ Eliminado: restore-hero.sh
if exist "secciones-guardadas.html" del "secciones-guardadas.html" && echo ✅ Eliminado: secciones-guardadas.html
if exist "start-dev.bat" del "start-dev.bat" && echo ✅ Eliminado: start-dev.bat
if exist "tailwind.config.js" del "tailwind.config.js" && echo ✅ Eliminado: tailwind.config.js (duplicado)

REM Eliminar archivos de pruebas
echo.
echo 🧪 Eliminando archivos de pruebas...
if exist "test-animaciones.html" del "test-animaciones.html" && echo ✅ Eliminado: test-animaciones.html
if exist "test-form-submission.js" del "test-form-submission.js" && echo ✅ Eliminado: test-form-submission.js
if exist "test-graphql.js" del "test-graphql.js" && echo ✅ Eliminado: test-graphql.js
if exist "test-gravity-forms.js" del "test-gravity-forms.js" && echo ✅ Eliminado: test-gravity-forms.js
if exist "test-neural-network.html" del "test-neural-network.html" && echo ✅ Eliminado: test-neural-network.html
if exist "test-pages.js" del "test-pages.js" && echo ✅ Eliminado: test-pages.js
if exist "test-schema.js" del "test-schema.js" && echo ✅ Eliminado: test-schema.js
if exist "test-visual.js" del "test-visual.js" && echo ✅ Eliminado: test-visual.js
if exist "test-wordpress.js" del "test-wordpress.js" && echo ✅ Eliminado: test-wordpress.js
if exist "verify-changes.js" del "verify-changes.js" && echo ✅ Eliminado: verify-changes.js
if exist "verify-fix.js" del "verify-fix.js" && echo ✅ Eliminado: verify-fix.js

REM Eliminar directorio de scripts
echo.
echo 📂 Eliminando directorios no utilizados...
if exist "scripts" rmdir /s /q "scripts" && echo ✅ Eliminado directorio: scripts/

REM Limpiar componentes no utilizados
echo.
echo 🧩 Limpiando componentes no utilizados...
cd src\components

REM Eliminar componentes de backup y pruebas
if exist "ContactForm-Fake.astro" del "ContactForm-Fake.astro" && echo ✅ Eliminado: ContactForm-Fake.astro
if exist "ContactForm-HTML-Native.astro" del "ContactForm-HTML-Native.astro" && echo ✅ Eliminado: ContactForm-HTML-Native.astro
if exist "Hero.astro.backup" del "Hero.astro.backup" && echo ✅ Eliminado: Hero.astro.backup
if exist "HeroMinimal.astro" del "HeroMinimal.astro" && echo ✅ Eliminado: HeroMinimal.astro
if exist "HeaderMinimal.astro" del "HeaderMinimal.astro" && echo ✅ Eliminado: HeaderMinimal.astro
if exist "HomePage.astro" del "HomePage.astro" && echo ✅ Eliminado: HomePage.astro
if exist "HomePageBackup.astro.bak" del "HomePageBackup.astro.bak" && echo ✅ Eliminado: HomePageBackup.astro.bak
if exist "HowWeApplyIASection.astro.backup" del "HowWeApplyIASection.astro.backup" && echo ✅ Eliminado: HowWeApplyIASection.astro.backup
if exist "HowWeApplyIASection.astro.deleted" del "HowWeApplyIASection.astro.deleted" && echo ✅ Eliminado: HowWeApplyIASection.astro.deleted

REM Eliminar componentes de secciones no utilizadas
if exist "CasesIASection.astro" del "CasesIASection.astro" && echo ✅ Eliminado: CasesIASection.astro
if exist "CTAIASection.astro" del "CTAIASection.astro" && echo ✅ Eliminado: CTAIASection.astro
if exist "DebugInfo.astro" del "DebugInfo.astro" && echo ✅ Eliminado: DebugInfo.astro
if exist "ExamplesAnimated.astro" del "ExamplesAnimated.astro" && echo ✅ Eliminado: ExamplesAnimated.astro
if exist "ExamplesIASection.astro" del "ExamplesIASection.astro" && echo ✅ Eliminado: ExamplesIASection.astro
if exist "ExamplesIASectionV2.astro" del "ExamplesIASectionV2.astro" && echo ✅ Eliminado: ExamplesIASectionV2.astro
if exist "ExamplesInline.astro" del "ExamplesInline.astro" && echo ✅ Eliminado: ExamplesInline.astro
if exist "ExamplesSimple.astro" del "ExamplesSimple.astro" && echo ✅ Eliminado: ExamplesSimple.astro
if exist "ExamplesUltraSimple.astro" del "ExamplesUltraSimple.astro" && echo ✅ Eliminado: ExamplesUltraSimple.astro
if exist "FAQSection.astro" del "FAQSection.astro" && echo ✅ Eliminado: FAQSection.astro
if exist "Footer.astro" del "Footer.astro" && echo ✅ Eliminado: Footer.astro
if exist "GraphQLTest.astro" del "GraphQLTest.astro" && echo ✅ Eliminado: GraphQLTest.astro
if exist "Header.astro" del "Header.astro" && echo ✅ Eliminado: Header.astro
if exist "IntroSection.astro" del "IntroSection.astro" && echo ✅ Eliminado: IntroSection.astro
if exist "LogosSlider.astro" del "LogosSlider.astro" && echo ✅ Eliminado: LogosSlider.astro

REM Eliminar componentes Magic UI no utilizados
if exist "MagicNotifications.astro" del "MagicNotifications.astro" && echo ✅ Eliminado: MagicNotifications.astro
if exist "MagicNotificationsDemo.tsx" del "MagicNotificationsDemo.tsx" && echo ✅ Eliminado: MagicNotificationsDemo.tsx
if exist "MagicUICards.astro" del "MagicUICards.astro" && echo ✅ Eliminado: MagicUICards.astro
if exist "MagicUICards5.astro" del "MagicUICards5.astro" && echo ✅ Eliminado: MagicUICards5.astro
if exist "MagicUICardsFinal.astro" del "MagicUICardsFinal.astro" && echo ✅ Eliminado: MagicUICardsFinal.astro
if exist "MagicUICardsImproved.astro" del "MagicUICardsImproved.astro" && echo ✅ Eliminado: MagicUICardsImproved.astro
if exist "MagicUICardsOfficial.astro" del "MagicUICardsOfficial.astro" && echo ✅ Eliminado: MagicUICardsOfficial.astro
if exist "MagicUICardsSimple.astro" del "MagicUICardsSimple.astro" && echo ✅ Eliminado: MagicUICardsSimple.astro
if exist "MagicUICardsTailwind.astro" del "MagicUICardsTailwind.astro" && echo ✅ Eliminado: MagicUICardsTailwind.astro

REM Eliminar más componentes de secciones
if exist "MethodologyIASection.astro" del "MethodologyIASection.astro" && echo ✅ Eliminado: MethodologyIASection.astro
if exist "MethodologySection.astro" del "MethodologySection.astro" && echo ✅ Eliminado: MethodologySection.astro
if exist "ProblemIASection.astro" del "ProblemIASection.astro" && echo ✅ Eliminado: ProblemIASection.astro
if exist "ProblemSection.astro" del "ProblemSection.astro" && echo ✅ Eliminado: ProblemSection.astro
if exist "QuoteSection-optimized.astro" del "QuoteSection-optimized.astro" && echo ✅ Eliminado: QuoteSection-optimized.astro
if exist "QuoteSection.astro" del "QuoteSection.astro" && echo ✅ Eliminado: QuoteSection.astro
if exist "ServicesIASection.astro" del "ServicesIASection.astro" && echo ✅ Eliminado: ServicesIASection.astro
if exist "ServicesSection.astro" del "ServicesSection.astro" && echo ✅ Eliminado: ServicesSection.astro
if exist "TestConnection.astro" del "TestConnection.astro" && echo ✅ Eliminado: TestConnection.astro
if exist "WhyIANowSection.astro" del "WhyIANowSection.astro" && echo ✅ Eliminado: WhyIANowSection.astro
if exist "WordPressPosts.astro" del "WordPressPosts.astro" && echo ✅ Eliminado: WordPressPosts.astro
if exist "WordPressPosts.tsx" del "WordPressPosts.tsx" && echo ✅ Eliminado: WordPressPosts.tsx

REM Eliminar directorios no utilizados
if exist "forms" rmdir /s /q "forms" && echo ✅ Eliminado directorio: forms/
if exist "magicui" rmdir /s /q "magicui" && echo ✅ Eliminado directorio: magicui/
if exist "OLD_GRAVITY_FORMS" rmdir /s /q "OLD_GRAVITY_FORMS" && echo ✅ Eliminado directorio: OLD_GRAVITY_FORMS/

cd ..\..

REM Limpiar páginas no utilizadas
echo.
echo 📄 Limpiando páginas no utilizadas...
cd src\pages
if exist "index-backup-full.astro" del "index-backup-full.astro" && echo ✅ Eliminado: index-backup-full.astro
if exist "index-complete.astro" del "index-complete.astro" && echo ✅ Eliminado: index-complete.astro
if exist "index-multisection.backup" del "index-multisection.backup" && echo ✅ Eliminado: index-multisection.backup
if exist "index-optimized.astro" del "index-optimized.astro" && echo ✅ Eliminado: index-optimized.astro
if exist "index-simple.astro" del "index-simple.astro" && echo ✅ Eliminado: index-simple.astro
if exist "magic-notifications.astro" del "magic-notifications.astro" && echo ✅ Eliminado: magic-notifications.astro
if exist "template.astro" del "template.astro" && echo ✅ Eliminado: template.astro
if exist "test.astro" del "test.astro" && echo ✅ Eliminado: test.astro
cd ..\..

REM Limpiar utilities no utilizadas
echo.
echo 🔧 Limpiando utilities no utilizadas...
cd src\utils
if exist "check-pages.js" del "check-pages.js" && echo ✅ Eliminado: check-pages.js
if exist "debug-wordpress-data.js" del "debug-wordpress-data.js" && echo ✅ Eliminado: debug-wordpress-data.js
if exist "debug-wordpress.js" del "debug-wordpress.js" && echo ✅ Eliminado: debug-wordpress.js
if exist "diagnose-connection.js" del "diagnose-connection.js" && echo ✅ Eliminado: diagnose-connection.js
if exist "diagnosticGraphQL.js" del "diagnosticGraphQL.js" && echo ✅ Eliminado: diagnosticGraphQL.js
if exist "getPageData.ts" del "getPageData.ts" && echo ✅ Eliminado: getPageData.ts
if exist "test-apollo.js" del "test-apollo.js" && echo ✅ Eliminado: test-apollo.js
if exist "test-template.js" del "test-template.js" && echo ✅ Eliminado: test-template.js
if exist "test-yoast-seo.js" del "test-yoast-seo.js" && echo ✅ Eliminado: test-yoast-seo.js
if exist "testGraphQL.js" del "testGraphQL.js" && echo ✅ Eliminado: testGraphQL.js
cd ..\..

REM Limpiar GraphQL y config no utilizados
echo.
echo 🗄️ Limpiando GraphQL y configuraciones...
if exist "src\graphql" rmdir /s /q "src\graphql" && echo ✅ Eliminado directorio: src\graphql/
if exist "src\config" rmdir /s /q "src\config" && echo ✅ Eliminado directorio: src\config/

echo.
echo ============================================
echo ✅ LIMPIEZA COMPLETADA EXITOSAMENTE!
echo ============================================
echo.
echo 📊 RESUMEN:
echo - Eliminados: ~50+ archivos de scripts y pruebas
echo - Eliminados: ~40+ componentes no utilizados  
echo - Eliminados: ~10+ páginas de prueba
echo - Eliminados: ~10+ utilidades no usadas
echo - Eliminados: Varios directorios completos
echo.
echo 🎯 PROYECTO LISTO PARA:
echo ✅ Commit limpio en Git
echo ✅ Deploy a producción  
echo ✅ Desarrollo futuro sin archivos legacy
echo.
echo 💡 SIGUIENTE PASO:
echo    git add . && git commit -m "Clean: Remove unused files and components"
echo.
pause
