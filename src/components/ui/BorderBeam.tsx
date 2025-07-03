// BorderBeam.tsx - Componente de borde animado para elementos
import type { CSSProperties } from 'react';

interface BorderBeamProps {
  /**
   * El tamaño del border beam
   */
  size?: number;
  /**
   * La duración del border beam
   */
  duration?: number;
  /**
   * El delay del border beam
   */
  delay?: number;
  /**
   * El color del border beam desde
   */
  colorFrom?: string;
  /**
   * El color del border beam hasta
   */
  colorTo?: string;
  /**
   * La clase CSS adicional
   */
  className?: string;
  /**
   * Si debe usar estilos absolutos
   */
  absolute?: boolean;
}

export function BorderBeam({
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = '#60a5fa',
  colorTo = '#3b82f6',
  className = '',
  absolute = true,
}: BorderBeamProps) {
  const style: CSSProperties = {
    '--size': size,
    '--duration': duration,
    '--delay': delay,
    '--color-from': colorFrom,
    '--color-to': colorTo,
  } as CSSProperties;

  return (
    <div
      style={style}
      className={`
        pointer-events-none
        ${absolute ? 'absolute' : 'relative'}
        inset-0
        rounded-[inherit]
        [border:calc(var(--size)*1px)_solid_transparent]
        
        ![mask-clip:padding-box,border-box]
        ![mask-composite:intersect]
        [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]
        
        after:absolute
        after:aspect-square
        after:w-[calc(var(--size)*1px)]
        after:animate-border-beam
        after:[animation-delay:var(--delay)]
        after:[animation-duration:calc(var(--duration)*1s)]
        after:[background:linear-gradient(to_left,var(--color-to),var(--color-from),transparent)]
        after:[offset-anchor:90%_50%]
        after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]
        
        ${className}
      `}
    />
  );
}

// CSS animation para el border-beam
export const borderBeamStyles = `
  @keyframes border-beam {
    to {
      offset-distance: 100%;
    }
  }
`;
