import React, { ReactElement, useMemo } from "react";

interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.forwardRef<
  HTMLDivElement,
  AnimatedListProps
>(({ className, children, delay = 1000 }, ref) => {
  const [items, setItems] = React.useState<ReactElement[]>([]);

  const childrenArray = React.Children.toArray(children) as ReactElement[];

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (items.length < childrenArray.length) {
        setItems((prev) => [childrenArray[prev.length], ...prev].slice(0, 5));
      }
    }, delay);

    return () => clearInterval(interval);
  }, [items.length, childrenArray.length, delay, childrenArray]);

  return (
    <div className={`flex flex-col-reverse ${className}`} ref={ref}>
      {items.map((item, index) => (
        <AnimatedListItem key={index}>
          {item}
        </AnimatedListItem>
      ))}
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 }
  };

  return (
    <div
      style={{
        transform: `scale(${animations.animate.scale})`,
        opacity: animations.animate.opacity,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        marginBottom: "0.75rem"
      }}
    >
      {children}
    </div>
  );
}
