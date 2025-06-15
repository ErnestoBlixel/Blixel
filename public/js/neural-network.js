// Efecto de Red Neuronal Animada para Blixel AI
class NeuralNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.connections = [];
    this.pulses = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.isMouseOver = false;
    
    this.init();
    this.animate();
    this.setupEventListeners();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    // Crear nodos en capas
    this.createNetwork();
  }

  createNetwork() {
    const layers = 4;
    const nodesPerLayer = [5, 8, 8, 5]; // Diferentes cantidades por capa
    const layerSpacing = this.canvas.width / (layers + 1);
    
    // Crear nodos
    for (let layer = 0; layer < layers; layer++) {
      const nodeCount = nodesPerLayer[layer];
      const layerHeight = this.canvas.height * 0.6; // Usar solo el 60% de la altura
      const startY = (this.canvas.height - layerHeight) / 2;
      
      for (let node = 0; node < nodeCount; node++) {
        const x = (layer + 1) * layerSpacing;
        const y = startY + (node + 1) * (layerHeight / (nodeCount + 1));
        
        this.nodes.push({
          x: x,
          y: y,
          vx: 0,
          vy: 0,
          radius: 4 + Math.random() * 2,
          layer: layer,
          id: `${layer}-${node}`,
          pulse: Math.random() * Math.PI * 2,
          activity: Math.random(),
          color: this.getNodeColor(layer)
        });
      }
    }
    
    // Crear conexiones entre capas adyacentes
    for (let layer = 0; layer < layers - 1; layer++) {
      const currentLayerNodes = this.nodes.filter(n => n.layer === layer);
      const nextLayerNodes = this.nodes.filter(n => n.layer === layer + 1);
      
      currentLayerNodes.forEach(node1 => {
        // Conectar con algunos nodos de la siguiente capa (no todos)
        const connectionsCount = 2 + Math.floor(Math.random() * 3);
        const shuffled = [...nextLayerNodes].sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < Math.min(connectionsCount, shuffled.length); i++) {
          const node2 = shuffled[i];
          this.connections.push({
            from: node1,
            to: node2,
            strength: 0.2 + Math.random() * 0.3,
            active: false
          });
        }
      });
    }
  }

  getNodeColor(layer) {
    const colors = [
      '#60a5fa', // Azul
      '#a855f7', // Púrpura
      '#34d399', // Verde
      '#fbbf24'  // Amarillo
    ];
    return colors[layer % colors.length];
  }

  setupEventListeners() {
    // Seguimiento del mouse
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      this.isMouseOver = true;
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.isMouseOver = false;
    });

    // Redimensionar
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.nodes = [];
      this.connections = [];
      this.createNetwork();
    });
  }

  update() {
    // Actualizar nodos
    this.nodes.forEach(node => {
      // Movimiento flotante sutil
      node.vx += (Math.random() - 0.5) * 0.1;
      node.vy += (Math.random() - 0.5) * 0.1;
      
      // Atracción/repulsión del mouse
      if (this.isMouseOver) {
        const dx = this.mouseX - node.x;
        const dy = this.mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          node.vx += (dx / distance) * force * 0.5;
          node.vy += (dy / distance) * force * 0.5;
        }
      }
      
      // Aplicar fricción
      node.vx *= 0.95;
      node.vy *= 0.95;
      
      // Limitar velocidad
      const maxSpeed = 2;
      const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
      if (speed > maxSpeed) {
        node.vx = (node.vx / speed) * maxSpeed;
        node.vy = (node.vy / speed) * maxSpeed;
      }
      
      // Actualizar posición con límites elásticos
      const margin = 50;
      if (node.x + node.vx < margin || node.x + node.vx > this.canvas.width - margin) {
        node.vx *= -0.5;
      }
      if (node.y + node.vy < margin || node.y + node.vy > this.canvas.height - margin) {
        node.vy *= -0.5;
      }
      
      node.x += node.vx;
      node.y += node.vy;
      
      // Actualizar pulso
      node.pulse += 0.05;
      node.activity = 0.5 + Math.sin(node.pulse) * 0.5;
    });
    
    // Activar conexiones aleatoriamente para simular actividad
    this.connections.forEach(conn => {
      if (Math.random() < 0.02) {
        conn.active = true;
        // Crear pulso que viaja por la conexión
        this.createPulse(conn);
      }
      if (conn.active && Math.random() < 0.1) {
        conn.active = false;
      }
    });
    
    // Actualizar pulsos
    this.pulses = this.pulses.filter(pulse => {
      pulse.progress += pulse.speed;
      return pulse.progress <= 1;
    });
  }

  createPulse(connection) {
    this.pulses.push({
      connection: connection,
      progress: 0,
      speed: 0.02 + Math.random() * 0.02
    });
  }

  draw() {
    // Limpiar canvas
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Dibujar conexiones
    this.connections.forEach(conn => {
      const opacity = conn.active ? 0.6 : 0.1;
      
      // Gradiente para la conexión
      const gradient = this.ctx.createLinearGradient(
        conn.from.x, conn.from.y,
        conn.to.x, conn.to.y
      );
      gradient.addColorStop(0, conn.from.color + Math.floor(opacity * 255).toString(16));
      gradient.addColorStop(1, conn.to.color + Math.floor(opacity * 255).toString(16));
      
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = conn.strength * 2;
      this.ctx.beginPath();
      this.ctx.moveTo(conn.from.x, conn.from.y);
      this.ctx.lineTo(conn.to.x, conn.to.y);
      this.ctx.stroke();
    });
    
    // Dibujar pulsos
    this.pulses.forEach(pulse => {
      const conn = pulse.connection;
      const x = conn.from.x + (conn.to.x - conn.from.x) * pulse.progress;
      const y = conn.from.y + (conn.to.y - conn.from.y) * pulse.progress;
      
      // Glow del pulso
      const glowGradient = this.ctx.createRadialGradient(x, y, 0, x, y, 15);
      glowGradient.addColorStop(0, conn.to.color + 'ff');
      glowGradient.addColorStop(1, conn.to.color + '00');
      
      this.ctx.fillStyle = glowGradient;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 15, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Núcleo del pulso
      this.ctx.fillStyle = '#ffffff';
      this.ctx.beginPath();
      this.ctx.arc(x, y, 3, 0, Math.PI * 2);
      this.ctx.fill();
    });
    
    // Dibujar nodos
    this.nodes.forEach(node => {
      const glowRadius = node.radius + 10 * node.activity;
      
      // Glow del nodo
      const glowGradient = this.ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, glowRadius
      );
      glowGradient.addColorStop(0, node.color + Math.floor(node.activity * 128).toString(16));
      glowGradient.addColorStop(1, node.color + '00');
      
      this.ctx.fillStyle = glowGradient;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Núcleo del nodo
      this.ctx.fillStyle = node.color;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Borde brillante
      this.ctx.strokeStyle = '#ffffff' + Math.floor(node.activity * 64).toString(16);
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    });
  }

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Crear canvas para la red neuronal
  const canvas = document.createElement('canvas');
  canvas.id = 'neural-network-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '0';
  canvas.style.pointerEvents = 'auto'; // Permitir interacción con el mouse
  canvas.style.opacity = '0.3'; // Sutil
  
  // Insertar antes del canvas de Matrix
  const matrixCanvas = document.getElementById('matrix-canvas');
  matrixCanvas.parentNode.insertBefore(canvas, matrixCanvas);
  
  // Inicializar la red neuronal
  new NeuralNetwork('neural-network-canvas');
});
