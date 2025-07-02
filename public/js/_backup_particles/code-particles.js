// Efecto de Partículas de Código Flotante para Blixel AI
class CodeParticles {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    
    // Fragmentos de código relacionados con IA
    this.codeSnippets = [
      'const AI = new Model();',
      'await model.predict(data);',
      'neural.train({ epochs: 100 });',
      'if (accuracy > 0.95) deploy();',
      'data.preprocess().normalize();',
      'transformer.attention(query, key);',
      'loss = crossEntropy(y_true, y_pred);',
      'optimizer.minimize(loss);',
      'features = conv2d(input, filters);',
      'embeddings = word2vec(corpus);',
      'clusters = kmeans(data, k=5);',
      'return softmax(logits);',
      'batch = DataLoader(dataset, 32);',
      'model.compile("adam", "mse");',
      'accuracy = evaluate(model, test);',
      '<AIComponent trained={true} />',
      'pipeline.fit_transform(X);',
      'agent.act(state, reward);',
      'generateResponse(prompt);',
      '// TODO: Implement AGI'
    ];
    
    this.init();
    this.animate();
    this.setupEventListeners();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    // Crear partículas iniciales
    const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 50000);
    for (let i = 0; i < particleCount; i++) {
      this.createParticle();
    }
  }

  createParticle(x, y) {
    const particle = {
      x: x || Math.random() * this.canvas.width,
      y: y || Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      code: this.codeSnippets[Math.floor(Math.random() * this.codeSnippets.length)],
      size: 10 + Math.random() * 6,
      opacity: 0,
      targetOpacity: 0.3 + Math.random() * 0.4,
      fadeSpeed: 0.01 + Math.random() * 0.02,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      color: this.getRandomColor(),
      life: 0,
      maxLife: 300 + Math.random() * 300
    };
    
    this.particles.push(particle);
  }

  getRandomColor() {
    const colors = [
      '#60a5fa', // Azul
      '#a855f7', // Púrpura
      '#34d399', // Verde
      '#fbbf24', // Amarillo
      '#f87171', // Rojo suave
      '#ffffff'  // Blanco
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  setupEventListeners() {
    // Seguimiento del mouse
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    });

    // Click para crear nuevas partículas
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Crear explosión de partículas
      for (let i = 0; i < 5; i++) {
        this.createParticle(x + (Math.random() - 0.5) * 50, y + (Math.random() - 0.5) * 50);
      }
    });

    // Redimensionar
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  update() {
    // Actualizar partículas
    this.particles = this.particles.filter(particle => {
      // Física básica
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.life++;
      
      // Fade in/out
      if (particle.life < 50) {
        particle.opacity = Math.min(particle.opacity + particle.fadeSpeed, particle.targetOpacity);
      } else if (particle.life > particle.maxLife - 50) {
        particle.opacity = Math.max(particle.opacity - particle.fadeSpeed, 0);
      }
      
      // Interacción con el mouse
      const dx = this.mouseX - particle.x;
      const dy = this.mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx -= (dx / distance) * force * 0.2;
        particle.vy -= (dy / distance) * force * 0.2;
      }
      
      // Límites suaves
      if (particle.x < -100) particle.x = this.canvas.width + 100;
      if (particle.x > this.canvas.width + 100) particle.x = -100;
      if (particle.y < -100) particle.y = this.canvas.height + 100;
      if (particle.y > this.canvas.height + 100) particle.y = -100;
      
      // Fricción
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Eliminar partículas muertas
      return particle.life < particle.maxLife;
    });
    
    // Mantener número mínimo de partículas
    const minParticles = Math.floor((this.canvas.width * this.canvas.height) / 60000);
    while (this.particles.length < minParticles) {
      this.createParticle();
    }
  }

  draw() {
    // Limpiar canvas
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Dibujar partículas
    this.particles.forEach(particle => {
      this.ctx.save();
      
      // Posicionar y rotar
      this.ctx.translate(particle.x, particle.y);
      this.ctx.rotate(particle.rotation);
      
      // Configurar estilo
      this.ctx.font = `${particle.size}px 'Fira Code', 'Consolas', monospace`;
      this.ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      
      // Sombra/glow
      this.ctx.shadowColor = particle.color;
      this.ctx.shadowBlur = 10 * particle.opacity;
      
      // Dibujar código
      this.ctx.fillText(particle.code, 0, 0);
      
      this.ctx.restore();
    });
    
    // Dibujar conexiones entre partículas cercanas
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    this.ctx.lineWidth = 1;
    
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150 && p1.opacity > 0.2 && p2.opacity > 0.2) {
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }
  }

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Auto-inicializar si se usa como script independiente
if (typeof document !== 'undefined' && document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Crear canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'code-particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'auto';
    canvas.style.opacity = '0.4';
    
    document.body.insertBefore(canvas, document.body.firstChild);
    
    // Inicializar efecto
    new CodeParticles('code-particles-canvas');
  });
}
