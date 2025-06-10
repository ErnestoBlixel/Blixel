import React from 'react';
import { motion } from 'motion/react';
import { Bell, X, Check, AlertTriangle, Info, Star, Zap, Heart, Gift } from 'lucide-react';
import { BorderBeam } from './BorderBeam';
import { Particles } from './Particles';
import { Ripple } from './Ripple';
import { MagicCard } from './MagicCard';

export interface Notification {
  id: string | number;
  type: 'success' | 'warning' | 'error' | 'info' | 'star' | 'zap' | 'heart' | 'gift';
  title: string;
  message: string;
  time: string;
}

interface NotificationCardProps {
  notification: Notification;
  onClose: () => void;
  style?: 'magic' | 'neon' | 'glitch' | 'classic';
}

export const NotificationCard: React.FC<NotificationCardProps> = ({ 
  notification, 
  onClose, 
  style = 'magic' 
}) => {
  const getIcon = () => {
    const iconClass = "w-6 h-6";
    switch (notification.type) {
      case 'success': return <Check className={`${iconClass} text-green-400`} />;
      case 'warning': return <AlertTriangle className={`${iconClass} text-yellow-400`} />;
      case 'error': return <X className={`${iconClass} text-red-400`} />;
      case 'info': return <Info className={`${iconClass} text-blue-400`} />;
      case 'star': return <Star className={`${iconClass} text-yellow-400`} />;
      case 'zap': return <Zap className={`${iconClass} text-purple-400`} />;
      case 'heart': return <Heart className={`${iconClass} text-pink-400`} />;
      case 'gift': return <Gift className={`${iconClass} text-green-400`} />;
      default: return <Bell className={`${iconClass} text-blue-400`} />;
    }
  };

  const getGradient = () => {
    switch (notification.type) {
      case 'success': return 'from-emerald-500/20 via-green-500/10 to-teal-500/20';
      case 'warning': return 'from-yellow-500/20 via-orange-500/10 to-amber-500/20';
      case 'error': return 'from-red-500/20 via-rose-500/10 to-pink-500/20';
      case 'info': return 'from-blue-500/20 via-indigo-500/10 to-cyan-500/20';
      case 'star': return 'from-yellow-500/20 via-amber-500/10 to-orange-500/20';
      case 'zap': return 'from-purple-500/20 via-violet-500/10 to-indigo-500/20';
      case 'heart': return 'from-pink-500/20 via-rose-500/10 to-red-500/20';
      case 'gift': return 'from-green-500/20 via-emerald-500/10 to-teal-500/20';
      default: return 'from-blue-500/20 via-indigo-500/10 to-purple-500/20';
    }
  };

  const getBorderColors = () => {
    switch (notification.type) {
      case 'success': return { from: '#10b981', to: '#06b6d4' };
      case 'warning': return { from: '#f59e0b', to: '#f97316' };
      case 'error': return { from: '#ef4444', to: '#ec4899' };
      case 'info': return { from: '#3b82f6', to: '#8b5cf6' };
      case 'star': return { from: '#f59e0b', to: '#f97316' };
      case 'zap': return { from: '#8b5cf6', to: '#6366f1' };
      case 'heart': return { from: '#ec4899', to: '#ef4444' };
      case 'gift': return { from: '#10b981', to: '#06b6d4' };
      default: return { from: '#3b82f6', to: '#8b5cf6' };
    }
  };

  const renderCard = () => {
    const baseClasses = "relative w-96 p-6 rounded-xl shadow-2xl backdrop-blur-sm border";
    const gradientClasses = `bg-gradient-to-br ${getGradient()}`;
    
    switch (style) {
      case 'magic':
        return (
          <MagicCard className={`${baseClasses} ${gradientClasses} border-white/20`}>
            <BorderBeam 
              colorFrom={getBorderColors().from} 
              colorTo={getBorderColors().to}
              duration={12}
            />
            <Particles count={30} />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                    {getIcon()}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{notification.title}</h3>
                    <p className="text-white/80 text-sm">{notification.message}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                >
                  <X className="w-4 h-4 text-white/70" />
                </button>
              </div>
              <div className="text-xs text-white/60">{notification.time}</div>
            </div>
          </MagicCard>
        );

      case 'neon':
        return (
          <div className={`${baseClasses} ${gradientClasses} border-transparent relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
            <div 
              className="absolute inset-0 rounded-xl"
              style={{
                background: `linear-gradient(90deg, transparent, ${getBorderColors().from}40, ${getBorderColors().to}40, transparent)`,
                padding: '2px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude'
              }}
            />
            <Ripple />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm animate-pulse">
                    {getIcon()}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg drop-shadow-lg">{notification.title}</h3>
                    <p className="text-white/80 text-sm">{notification.message}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm hover:scale-110"
                >
                  <X className="w-4 h-4 text-white/70" />
                </button>
              </div>
              <div className="text-xs text-white/60">{notification.time}</div>
            </div>
          </div>
        );

      case 'glitch':
        return (
          <div className={`${baseClasses} ${gradientClasses} border-white/30 animate-pulse`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-magenta-500/10 animate-pulse" />
            <BorderBeam 
              colorFrom="#00ffff" 
              colorTo="#ff00ff"
              duration={8}
              size={150}
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 backdrop-blur-sm animate-spin">
                    {getIcon()}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg filter drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                      {notification.title}
                    </h3>
                    <p className="text-white/80 text-sm">{notification.message}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm hover:rotate-90"
                >
                  <X className="w-4 h-4 text-white/70" />
                </button>
              </div>
              <div className="text-xs text-white/60">{notification.time}</div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${baseClasses} ${gradientClasses} border-white/20`}>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-white/10">
                    {getIcon()}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{notification.title}</h3>
                    <p className="text-white/80 text-sm">{notification.message}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
                >
                  <X className="w-4 h-4 text-white/70" />
                </button>
              </div>
              <div className="text-xs text-white/60">{notification.time}</div>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotateY: 90 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      exit={{ scale: 0, opacity: 0, rotateX: 90 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.6
      }}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      className="transform-gpu"
    >
      {renderCard()}
    </motion.div>
  );
};
