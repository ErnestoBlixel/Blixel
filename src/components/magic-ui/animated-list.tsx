import React, { ReactElement, useMemo } from "react";
import { cn } from "../utils/cn";

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
      } else {
        // Reset and start over when all items are shown
        setItems([]);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [items.length, childrenArray.length, delay, childrenArray]);

  return (
    <div className={cn("flex flex-col-reverse", className)} ref={ref}>
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
  return (
    <div className="mx-auto w-full opacity-0 mb-3 animate-in slide-in-from-top duration-500 ease-out [animation-fill-mode:forwards]">
      {children}
    </div>
  );
}
