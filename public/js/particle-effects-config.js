// Configuración de efectos de partículas para Blixel AI
// Puedes cambiar entre diferentes efectos modificando la variable EFFECT_TYPE

const PARTICLE_EFFECTS_CONFIG = {
  // Tipo de efecto activo: 'matrix', 'neural', 'code-particles', 'constellation'
  EFFECT_TYPE: 'neural', // Cambia esto para usar diferentes efectos
  
  // Configuración general
  OPACITY: 0.3, // Opacidad del efecto (0-1)
  ENABLE_MOUSE_INTERACTION: true,
  
  // Configuración específica de Matrix
  MATRIX: {
    fontSize: 14,
    speed: 50, // Milisegundos entre frames
    characters: "01<>{}[]()=+-*/%;:.AIMLNeuralNetworkDeepLearningModelTrainingDataProcessing",
    colors: ['#60a5fa', '#a855f7', '#02aa6d', '#251863']
  },
  
  // Configuración de Red Neuronal
  NEURAL: {
    layers: 4,
    nodesPerLayer: [5, 8, 8, 5],
    nodeColors: ['#60a5fa', '#a855f7', '#34d399', '#fbbf24'],
    pulseSpeed: 0.02,
    mouseInfluenceRadius: 150,
    connectionDensity: 0.6 // 0-1, qué tan conectada está la red
  },
  
  // Configuración de Partículas de Código (para implementar)
  CODE_PARTICLES: {
    particleCount: 30,
    snippets: [
      'const AI = true;',
      '<div class="future">',
      'if(success) {',
      'transform: scale(10x);',
      'async function grow()',
      'return ROI * 3;',
      '// Automatizar todo',
      'while(working) {',
      '</innovation>',
      'npm run success',
      'import { AI } from "blixel";',
      'model.predict(future);',
      'data.transform();',
      'neural.train();',
      'optimization.run();'
    ],
    floatSpeed: 0.5,
    fadeInOut: true
  },
  
  // Configuración de Constelación (para implementar)
  CONSTELLATION: {
    starCount: 100,
    connectionDistance: 150,
    twinkleSpeed: 0.05,
    colors: ['#60a5fa', '#a855f7', '#ffffff']
  }
};

// Función para cambiar el efecto activo
function switchParticleEffect(effectType) {
  // Remover canvas existentes
  const existingCanvases = document.querySelectorAll('canvas[id$="-canvas"]');
  existingCanvases.forEach(canvas => canvas.remove());
  
  // Crear nuevo efecto basado en el tipo
  switch(effectType) {
    case 'matrix':
      createMatrixEffect();
      break;
    case 'neural':
      createNeuralEffect();
      break;
    case 'code-particles':
      createCodeParticlesEffect();
      break;
    case 'constellation':
      createConstellationEffect();
      break;
  }
}

// Exportar configuración para uso en otros scripts
window.PARTICLE_EFFECTS_CONFIG = PARTICLE_EFFECTS_CONFIG;
window.switchParticleEffect = switchParticleEffect;
