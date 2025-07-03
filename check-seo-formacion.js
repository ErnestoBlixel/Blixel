#!/usr/bin/env node

// Script de verificación SEO para la página de Formación IA Empresas
// Verifica que todos los elementos SEO estén correctamente implementados

import fs from 'fs';
import path from 'path';

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

console.log(`${colors.blue}${colors.bold}🔍 Verificación SEO - Formación IA Empresas${colors.reset}\n`);

const pageFile = './src/pages/formacion-ia-empresas.astro';
let passed = 0;
let failed = 0;

function check(condition, message) {
  if (condition) {
    console.log(`${colors.green}✅ ${message}${colors.reset}`);
    passed++;
  } else {
    console.log(`${colors.red}❌ ${message}${colors.reset}`);
    failed++;
  }
}

function warning(message) {
  console.log(`${colors.yellow}⚠️ ${message}${colors.reset}`);
}

function info(message) {
  console.log(`${colors.blue}ℹ️ ${message}${colors.reset}`);
}

try {
  const content = fs.readFileSync(pageFile, 'utf8');
  
  console.log(`${colors.bold}📋 Verificaciones de Meta Tags:${colors.reset}`);
  
  // Verificar meta tags básicos
  check(
    content.includes("pageTitle = 'Formación IA Empresas"),
    "Title contiene keyword principal 'Formación IA Empresas'"
  );
  
  check(
    content.includes("pageDescription = 'Formación IA empresas práctica"),
    "Description optimizada con keyword principal"
  );
  
  check(
    content.includes("pageKeywords = 'formación IA empresas"),
    "Keywords definidas correctamente"
  );
  
  console.log(`\n${colors.bold}🏗️ Verificaciones de Estructura:${colors.reset}`);
  
  // Verificar estructura H1, H2, H3
  check(
    content.includes('<h1 class="hero-title">') && content.includes('Formación IA Empresas'),
    "H1 único y optimizado presente"
  );
  
  const h2Count = (content.match(/<h2 class="[^"]*title">/g) || []).length;
  check(
    h2Count >= 5,
    `Múltiples H2 para estructura (encontrados: ${h2Count})`
  );
  
  // Verificar breadcrumbs
  check(
    content.includes('nav class="breadcrumbs"') && content.includes('aria-label="Breadcrumb"'),
    "Breadcrumbs implementados correctamente"
  );
  
  console.log(`\n${colors.bold}📊 Verificaciones de Schema.org:${colors.reset}`);
  
  // Verificar Schema.org
  check(
    content.includes('"@type": "Course"') && content.includes('"name": "Formación IA Empresas"'),
    "Schema Course implementado"
  );
  
  check(
    content.includes('"@type": "FAQPage"') && content.includes('"mainEntity"'),
    "Schema FAQPage implementado"
  );
  
  check(
    content.includes('"offers":') && content.includes('"price":'),
    "Schema Offers con precios incluido"
  );
  
  console.log(`\n${colors.bold}🖼️ Verificaciones de Imágenes:${colors.reset}`);
  
  // Verificar imágenes
  check(
    content.includes('alt="Formación IA para empresas') && content.includes('loading="eager"'),
    "Imagen hero con alt text optimizado y loading eager"
  );
  
  console.log(`\n${colors.bold}🎯 Verificaciones de CTAs:${colors.reset}`);
  
  // Verificar CTAs
  const ctaCount = (content.match(/href="#contacto"/g) || []).length;
  check(
    ctaCount >= 2,
    `Múltiples CTAs al formulario (encontrados: ${ctaCount})`
  );
  
  check(
    content.includes('href="tel:+34872003245"'),
    "CTA telefónico presente"
  );
  
  console.log(`\n${colors.bold}❓ Verificaciones de FAQs:${colors.reset}`);
  
  // Verificar FAQs
  const faqCount = (content.match(/class="faq-item"/g) || []).length;
  check(
    faqCount >= 6,
    `Suficientes FAQs para featured snippets (encontrados: ${faqCount})`
  );
  
  check(
    content.includes('¿Qué nivel técnico necesita') && content.includes('¿Es realmente práctica'),
    "FAQs con keywords long-tail implementadas"
  );
  
  console.log(`\n${colors.bold}⚡ Verificaciones Técnicas:${colors.reset}`);
  
  // Verificar optimizaciones técnicas
  check(
    content.includes('fadeIn') && content.includes('animation'),
    "Animaciones CSS para mejor UX"
  );
  
  check(
    content.includes('@media (max-width:') && (content.match(/@media/g) || []).length >= 3,
    "Responsive design implementado"
  );
  
  // Verificar que no hay errores comunes
  check(
    !content.includes('lorem ipsum') && !content.includes('TODO') && !content.includes('FIXME'),
    "Sin contenido placeholder o pendiente"
  );
  
  console.log(`\n${colors.bold}📄 Verificaciones de Archivos Relacionados:${colors.reset}`);
  
  // Verificar sitemap
  try {
    const sitemapContent = fs.readFileSync('./src/pages/sitemap.xml.ts', 'utf8');
    check(
      sitemapContent.includes('/formacion-ia-empresas'),
      "Página incluida en sitemap.xml"
    );
  } catch (e) {
    failed++;
    console.log(`${colors.red}❌ No se pudo verificar sitemap.xml${colors.reset}`);
  }
  
  // Verificar robots.txt
  try {
    const robotsContent = fs.readFileSync('./src/pages/robots.txt.ts', 'utf8');
    check(
      robotsContent.includes('Allow: /') && robotsContent.includes('Sitemap:'),
      "Robots.txt configurado correctamente"
    );
  } catch (e) {
    failed++;
    console.log(`${colors.red}❌ No se pudo verificar robots.txt${colors.reset}`);
  }
  
  console.log(`\n${colors.bold}📈 Resumen de Verificación:${colors.reset}`);
  console.log(`${colors.green}✅ Verificaciones pasadas: ${passed}${colors.reset}`);
  console.log(`${colors.red}❌ Verificaciones fallidas: ${failed}${colors.reset}`);
  
  const totalChecks = passed + failed;
  const successRate = Math.round((passed / totalChecks) * 100);
  
  console.log(`\n${colors.bold}📊 Puntuación SEO: ${successRate}%${colors.reset}`);
  
  if (successRate >= 95) {
    console.log(`${colors.green}${colors.bold}🏆 EXCELENTE - Optimización SEO completa${colors.reset}`);
  } else if (successRate >= 85) {
    console.log(`${colors.yellow}${colors.bold}⭐ BUENO - Optimización SEO sólida${colors.reset}`);
  } else if (successRate >= 75) {
    console.log(`${colors.yellow}${colors.bold}⚠️ REGULAR - Necesita mejoras${colors.reset}`);
  } else {
    console.log(`${colors.red}${colors.bold}❌ NECESITA TRABAJO - Faltan elementos críticos${colors.reset}`);
  }
  
  console.log(`\n${colors.blue}💡 Próximos pasos recomendados:${colors.reset}`);
  console.log(`1. Enviar sitemap a Google Search Console`);
  console.log(`2. Verificar en Google PageSpeed Insights`);
  console.log(`3. Solicitar indexación de la página`);
  console.log(`4. Monitorear rankings para "formación IA empresas"`);
  
  if (failed > 0) {
    console.log(`\n${colors.red}⚠️ Se encontraron ${failed} problemas que necesitan atención.${colors.reset}`);
    process.exit(1);
  } else {
    console.log(`\n${colors.green}🎉 ¡Todas las verificaciones SEO pasaron exitosamente!${colors.reset}`);
  }
  
} catch (error) {
  console.error(`${colors.red}❌ Error al verificar el archivo: ${error.message}${colors.reset}`);
  process.exit(1);
}
