"use client";

import React, { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import Card from "@/components/scroll-card-parallax/Card";
import { projects } from "../../data/scroll-card-parallax";
import Lenis from "@studio-freight/lenis";

const Page: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container}>
      <div className="bg-black h-96 w-full"></div>
      <div>
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <Card
              key={index}
              i={index}
              {...project}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <div className="bg-black h-96 w-full"></div>
    </div>
  );
};

export default Page;
