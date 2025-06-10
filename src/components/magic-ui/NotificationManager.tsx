import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NotificationCard, type Notification } from './NotificationCard';

interface NotificationManagerProps {
  notifications: Notification[];
  onClose: (id: string | number) => void;
  style?: 'magic' | 'neon' | 'glitch' | 'classic';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
}

export const NotificationManager: React.FC<NotificationManagerProps> = ({
  notifications,
  onClose,
  style = 'magic',
  position = 'top-right'
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'fixed top-4 right-4 z-50';
      case 'top-left':
        return 'fixed top-4 left-4 z-50';
      case 'bottom-right':
        return 'fixed bottom-4 right-4 z-50';
      case 'bottom-left':
        return 'fixed bottom-4 left-4 z-50';
      case 'center':
        return 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50';
      default:
        return 'fixed top-4 right-4 z-50';
    }
  };

  return (
    <div className={getPositionClasses()}>
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              layout
              initial={{ 
                x: position.includes('right') ? 300 : -300, 
                opacity: 0 
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ 
                x: position.includes('right') ? 300 : -300, 
                opacity: 0 
              }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <NotificationCard
                notification={notification}
                onClose={() => onClose(notification.id)}
                style={style}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
