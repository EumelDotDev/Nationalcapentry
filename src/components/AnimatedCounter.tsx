"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  end: number;
  suffix?: React.ReactNode;
  className?: string;
}

export default function AnimatedCounter({ end, suffix, className = "" }: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const counter = { val: 0 };

      gsap.to(counter, {
        val: end,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
        onUpdate: () => {
          setValue(Math.round(counter.val));
        }
      });
    }, el);

    return () => ctx.revert();
  }, [end]);

  return (
    <span ref={containerRef} className={className}>
      {value}{suffix}
    </span>
  );
}
