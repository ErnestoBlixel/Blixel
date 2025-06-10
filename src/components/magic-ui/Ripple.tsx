import React from 'react';

interface RippleProps {
  mainCircleSize?: number;
  numCircles?: number;
  className?: string;
}

export const Ripple: React.FC<RippleProps> = ({
  mainCircleSize = 210,
  numCircles = 8,
  className = ""
}) => {
  const circles = Array.from({ length: numCircles }, (_, i) => ({
    id: i,
    size: mainCircleSize + i * 70,
    delay: i * 0.06,
    duration: 4 + i * 0.1,
    opacity: 1 - i * 0.1
  }));

  return (
    <div className={`absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl ${className}`}>
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            animationDelay: `${circle.delay}s`,
            animationDuration: `${circle.duration}s`,
            opacity: circle.opacity
          }}
        />
      ))}
    </div>
  );
};
