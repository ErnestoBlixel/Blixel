import React from 'react';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  className?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
  className = ""
}) => {
  return (
    <>
      <div className={`absolute inset-0 overflow-hidden rounded-xl ${className}`}>
        <div
          className="absolute inset-0 rounded-xl animate-border-beam"
          style={{
            background: `linear-gradient(90deg, transparent, transparent, ${colorFrom}, ${colorTo}, transparent, transparent)`,
            backgroundSize: `${size}% 100%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            maskImage: `linear-gradient(to right, transparent, black ${borderWidth}px, black calc(100% - ${borderWidth}px), transparent)`,
            WebkitMaskImage: `linear-gradient(to right, transparent, black ${borderWidth}px, black calc(100% - ${borderWidth}px), transparent)`
          }}
        />
      </div>
      <style jsx>{`
        @keyframes border-beam {
          0% { background-position: -${size}% 0; }
          100% { background-position: ${size}% 0; }
        }
        .animate-border-beam {
          animation: border-beam ${duration}s linear infinite;
          animation-delay: ${delay}s;
        }
      `}</style>
    </>
  );
};
