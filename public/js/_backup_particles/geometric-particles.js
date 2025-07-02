// Sistema de Partículas Geométricas 3D para Blixel AI
class GeometricParticles {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.connections = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.time = 0;
    
    // Configuración
    this.config = {
      particleCount: 80,
      connectionDistance: 150,
      mouseInfluence: 200,
      rotationSpeed: 0.001,
      colors: {
        particles: ['#60a5fa', '#a855f7', '#34d399', '#fbbf24'],
        connections: 'rgba(96, 165, 250, 0.2)',
        glow: 'rgba(168, 85, 247, 0.5)'
      }
    };
    
    this.init();
    this.animate();
    this.setupEventListeners();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    // Crear partículas
    for (let i = 0; i < this.config.particleCount; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const shapes = ['tetrahedron', 'cube', 'octahedron', 'icosahedron'];
    const particle = {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      z: Math.random() * 200 - 100, // Profundidad 3D simulada
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 20 + 10,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: this.config.colors.particles[Math.floor(Math.random() * this.config.colors.particles.length)],
      rotation: {
        x: Math.random() * Math.PI * 2,
        y: Math.random() * Math.PI * 2,
        z: Math.random() * Math.PI * 2
      },
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      },
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01
    };
    
    this.particles.push(particle);
  }

  project3D(x, y, z) {
    const perspective = 500;
    const scale = perspective / (perspective + z);
    return {
      x: x * scale + this.canvas.width / 2,
      y: y * scale + this.canvas.height / 2,
      scale: scale
    };
  }

  drawShape(particle) {
    const { x, y, scale } = this.project3D(
      particle.x - this.canvas.width / 2,
      particle.y - this.canvas.height / 2,
      particle.z
    );
    
    const size = particle.size * scale;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Efecto de brillo
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, size);
    gradient.addColorStop(0, particle.color);
    gradient.addColorStop(0.5, particle.color + '88');
    gradient.addColorStop(1, 'transparent');
    
    // Dibujar según la forma
    switch (particle.shape) {
      case 'tetrahedron':
        this.drawTetrahedron(size, particle.rotation);
        break;
      case 'cube':
        this.drawCube(size, particle.rotation);
        break;
      case 'octahedron':
        this.drawOctahedron(size, particle.rotation);
        break;
      case 'icosahedron':
        this.drawIcosahedron(size, particle.rotation);
        break;
    }
    
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    
    // Contorno brillante
    this.ctx.strokeStyle = particle.color;
    this.ctx.lineWidth = 1 * scale;
    this.ctx.stroke();
    
    this.ctx.restore();
  }

  drawTetrahedron(size, rotation) {
    this.ctx.beginPath();
    
    // Proyección simple de tetraedro
    const points = [
      { x: 0, y: -size },
      { x: -size * 0.866, y: size * 0.5 },
      { x: size * 0.866, y: size * 0.5 }
    ];
    
    // Rotar y dibujar
    points.forEach((point, i) => {
      const rotatedX = point.x * Math.cos(rotation.z) - point.y * Math.sin(rotation.z);
      const rotatedY = point.x * Math.sin(rotation.z) + point.y * Math.cos(rotation.z);
      
      if (i === 0) this.ctx.moveTo(rotatedX, rotatedY);
      else this.ctx.lineTo(rotatedX, rotatedY);
    });
    
    this.ctx.closePath();
  }

  drawCube(size, rotation) {
    this.ctx.beginPath();
    
    // Proyección simple de cubo
    const halfSize = size / 2;
    this.ctx.rect(-halfSize, -halfSize, size, size);
  }

  drawOctahedron(size, rotation) {
    this.ctx.beginPath();
    
    // Proyección simple de octaedro (diamante)
    this.ctx.moveTo(0, -size);
    this.ctx.lineTo(size * 0.707, 0);
    this.ctx.lineTo(0, size);
    this.ctx.lineTo(-size * 0.707, 0);
    this.ctx.closePath();
  }

  drawIcosahedron(size, rotation) {
    this.ctx.beginPath();
    
    // Proyección simple de icosaedro (círculo con patrón)
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 / 6) * i + rotation.z;
      const x = Math.cos(angle) * size;
      const y = Math.sin(angle) * size;
      
      if (i === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);
    }
    
    this.ctx.closePath();
  }

  updateParticle(particle) {
    // Movimiento
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.z += particle.vz;
    
    // Rotación
    particle.rotation.x += particle.rotationSpeed.x;
    particle.rotation.y += particle.rotationSpeed.y;
    particle.rotation.z += particle.rotationSpeed.z;
    
    // Pulso
    particle.pulse += particle.pulseSpeed;
    particle.size = (Math.sin(particle.pulse) * 5 + 20);
    
    // Atracción del mouse
    const dx = this.mouseX - particle.x;
    const dy = this.mouseY - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < this.config.mouseInfluence) {
      const force = (this.config.mouseInfluence - distance) / this.config.mouseInfluence;
      particle.vx += (dx / distance) * force * 0.02;
      particle.vy += (dy / distance) * force * 0.02;
    }
    
    // Límites con rebote suave
    if (particle.x < 50 || particle.x > this.canvas.width - 50) {
      particle.vx *= -0.8;
      particle.x = Math.max(50, Math.min(this.canvas.width - 50, particle.x));
    }
    if (particle.y < 50 || particle.y > this.canvas.height - 50) {
      particle.vy *= -0.8;
      particle.y = Math.max(50, Math.min(this.canvas.height - 50, particle.y));
    }
    if (particle.z < -100 || particle.z > 100) {
      particle.vz *= -0.8;
    }
    
    // Fricción
    particle.vx *= 0.99;
    particle.vy *= 0.99;
    particle.vz *= 0.99;
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dz = p1.z - p2.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < this.config.connectionDistance) {
          const opacity = (1 - distance / this.config.connectionDistance) * 0.3;
          
          const proj1 = this.project3D(p1.x - this.canvas.width / 2, p1.y - this.canvas.height / 2, p1.z);
          const proj2 = this.project3D(p2.x - this.canvas.width / 2, p2.y - this.canvas.height / 2, p2.z);
          
          this.ctx.save();
          this.ctx.globalAlpha = opacity;
          
          // Gradiente para la conexión
          const gradient = this.ctx.createLinearGradient(proj1.x, proj1.y, proj2.x, proj2.y);
          gradient.addColorStop(0, p1.color);
          gradient.addColorStop(0.5, this.config.colors.connections);
          gradient.addColorStop(1, p2.color);
          
          this.ctx.strokeStyle = gradient;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(proj1.x, proj1.y);
          this.ctx.lineTo(proj2.x, proj2.y);
          this.ctx.stroke();
          
          this.ctx.restore();
        }
      }
    }
  }

  setupEventListeners() {
    // Mouse tracking
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    });

    // Click para crear explosión
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Crear ondas de partículas
      for (let i = 0; i < 5; i++) {
        const particle = {
          x: clickX,
          y: clickY,
          z: 0,
          vx: (Math.random() - 0.5) * 5,
          vy: (Math.random() - 0.5) * 5,
          vz: (Math.random() - 0.5) * 2,
          size: Math.random() * 30 + 20,
          shape: 'icosahedron',
          color: this.config.colors.particles[Math.floor(Math.random() * this.config.colors.particles.length)],
          rotation: { x: 0, y: 0, z: 0 },
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.1,
            y: (Math.random() - 0.5) * 0.1,
            z: (Math.random() - 0.5) * 0.1
          },
          pulse: 0,
          pulseSpeed: 0.05
        };
        
        this.particles.push(particle);
      }
      
      // Limitar partículas
      if (this.particles.length > 120) {
        this.particles = this.particles.slice(-120);
      }
    });

    // Resize
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  draw() {
    // Limpiar canvas
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Ordenar partículas por profundidad (Z)
    this.particles.sort((a, b) => b.z - a.z);
    
    // Dibujar conexiones
    this.drawConnections();
    
    // Dibujar partículas
    this.particles.forEach(particle => {
      this.updateParticle(particle);
      this.drawShape(particle);
    });
    
    this.time += 0.01;
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Inicializar cuando el DOM esté listo
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Crear canvas si no existe
    let canvas = document.getElementById('geometric-particles-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'geometric-particles-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '0';
      canvas.style.pointerEvents = 'auto';
      document.body.insertBefore(canvas, document.body.firstChild);
    }
    
    // Inicializar sistema de partículas
    new GeometricParticles('geometric-particles-canvas');
  });
}
