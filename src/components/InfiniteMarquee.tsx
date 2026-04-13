import React, { useEffect, useRef } from "react";
import { cn } from "../utils/cn";

interface InfiniteMarqueeProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  speed?: number; // Duration in seconds for one full loop of a single set
  hoverSpeed?: number; // Target duration when hovering (used to calculate playback rate)
  className?: string;
  itemClassName?: string;
}

export const InfiniteMarquee = <T,>({
  items,
  renderItem,
  speed = 30,
  hoverSpeed = 60,
  className,
  itemClassName,
}: InfiniteMarqueeProps<T>) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scrollerContent = scrollerRef.current;

    // We duplicate the items 4 times to ensure we cover the viewport even if items are small.
    // The animation moves from 0% to -25% (which corresponds to the width of one set).
    // This creates a seamless loop.
    const animation = scrollerContent.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-25%)" }],
      {
        duration: speed * 1000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    animationRef.current = animation;

    return () => animation.cancel();
  }, [speed]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      // Calculate ratio: if normal speed is 30s and hover is 60s, rate is 0.5
      const rate = speed / hoverSpeed;
      animationRef.current.updatePlaybackRate(rate);
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.updatePlaybackRate(1);
    }
  };

  return (
    <div
      className={cn("w-full overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={scrollerRef} className="flex w-max">
        {/* Render 4 sets of items for robust seamless looping */}
        {[...Array(4)].map((_, setIndex) => (
          <div
            key={`set-${setIndex}`}
            className={cn(
              "flex shrink-0 items-center justify-around",
              itemClassName
            )}
          >
            {items.map((item, index) => (
              <React.Fragment key={`item-${setIndex}-${index}`}>
                {renderItem(item, index)}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
