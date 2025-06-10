import React, { useState } from 'react';
import { NotificationManager, useNotifications, type Notification } from './magic-ui';

const MagicNotificationsDemo: React.FC = () => {
  const { notifications, addNotification, removeNotification, clearAllNotifications } = useNotifications();
  const [currentStyle, setCurrentStyle] = useState<'magic' | 'neon' | 'glitch' | 'classic'>('magic');
  const [autoGenerate, setAutoGenerate] = useState(false);

  const notificationTypes: Notification['type'][] = ['success', 'warning', 'error', 'info', 'star', 'zap', 'heart', 'gift'];
  const styles = [
    { value: 'magic' as const, label: '✨ Magic Spotlight' },
    { value: 'neon' as const, label: '🌈 Neon Ripple' },
    { value: 'glitch' as const, label: '⚡ Cyber Glitch' },
    { value: 'classic' as const, label: '🎯 Classic' }
  ];

  const sampleMessages = [
    { title: "¡Pago Recibido!", message: "Has recibido $1,250 de Magic UI" },
    { title: "Nueva Venta", message: "Producto vendido: Tarjeta Premium" },
    { title: "Usuario Registrado", message: "Nuevo usuario se ha unido a la plataforma" },
    { title: "Meta Alcanzada", message: "¡Has superado tu objetivo mensual!" },
    { title: "Premio Desbloqueado", message: "Insignia 'Desarrollador Ninja' obtenida" },
    { title: "Sistema Actualizado", message: "Nueva versión 2.0 disponible" },
    { title: "Feedback Positivo", message: "5 estrellas recibidas de cliente VIP" },
    { title: "Descuento Activado", message: "50% OFF en todos los productos" }
  ];

  const generateNotification = () => {
    const type = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
    const sample = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
    
    addNotification({
      type,
      title: sample.title,
      message: sample.message,
      time: "Ahora mismo"
    });
  };

  React.useEffect(() => {
    if (autoGenerate) {
      const interval = setInterval(generateNotification, 3000);
      return () => clearInterval(interval);
    }
  }, [autoGenerate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            🌟 Magic UI Notification Cards
          </h1>
          <p className="text-white/80 text-xl">Animaciones espectaculares para Blixel AI</p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex gap-2">
            {styles.map((style) => (
              <button
                key={style.value}
                onClick={() => setCurrentStyle(style.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentStyle === style.value
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {style.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={generateNotification}
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-200 shadow-lg"
          >
            🚀 Generar Notificación
          </button>
          
          <button
            onClick={() => setAutoGenerate(!autoGenerate)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
              autoGenerate
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
            }`}
          >
            {autoGenerate ? '⏹️ Detener Auto' : '▶️ Auto Generar'}
          </button>
          
          {notifications.length > 0 && (
            <button
              onClick={clearAllNotifications}
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🗑️ Limpiar Todo
            </button>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "✨", title: "Magic Spotlight", desc: "Efecto de luz que sigue el cursor" },
            { icon: "🌈", title: "Border Beam", desc: "Rayos animados en los bordes" },
            { icon: "🎆", title: "Particles", desc: "Partículas flotantes dinámicas" },
            { icon: "🌊", title: "Ripple Effect", desc: "Ondas expansivas de fondo" }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm text-center">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Notification Manager */}
        <NotificationManager
          notifications={notifications}
          onClose={removeNotification}
          style={currentStyle}
          position="top-right"
        />
      </div>
    </div>
  );
};

export default MagicNotificationsDemo;
