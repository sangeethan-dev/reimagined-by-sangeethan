"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";

interface GsapMagneticProps {
  children: ReactNode;
}

const GsapMagnetic: React.FC<GsapMagneticProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        ref.current?.getBoundingClientRect() || {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
        };
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Use GSAP to apply movement on mouse move
      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      // Reset position to 0 when mouse leaves
      xTo(0);
      yTo(0);
    };

    // Capture the ref in a variable to avoid using a potentially outdated ref in the cleanup function
    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener("mousemove", mouseMove);
      currentRef.addEventListener("mouseleave", mouseLeave);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", mouseMove);
        currentRef.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default GsapMagnetic;
