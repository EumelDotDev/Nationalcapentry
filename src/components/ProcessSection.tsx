"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    id: "01",
    title: "Site Logistics & Staging",
    description: "Coordinating deliveries and preparing the site across Canada for efficient workflow.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Cabinetry Assembly",
    description: "Flawless, efficient installation of pre-built cabinetry systems and case goods.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Custom Wood Carpentry",
    description: "On-site finishing, intricate trim, and custom cuts requiring expert, steady hands.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Quality Walkthrough",
    description: "Upholding our national reputation by ensuring absolute perfection before final handover.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);
  const quadrandsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // We don't strictly need ScrollTrigger for hover effects, but we can animate the grid in on scroll
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in the grid
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Setup Hover Interactions
      quadrandsRef.current.forEach((quad, i) => {
        if (!quad) return;
        const img = imagesRef.current[i];
        if (!img) return;

        // Set initial clip path (hidden at the bottom)
        gsap.set(img, { clipPath: "inset(100% 0% 0% 0%)" });

        quad.addEventListener("mouseenter", () => {
          gsap.to(img, { 
            clipPath: "inset(0% 0% 0% 0%)", 
            duration: 0.6, 
            ease: "power4.out" 
          });
          // Dim the text slightly for contrast if needed, or leave it mix-blend
        });

        quad.addEventListener("mouseleave", () => {
          gsap.to(img, { 
            clipPath: "inset(0% 0% 100% 0%)", // Exits upward
            duration: 0.5, 
            ease: "power3.inOut" 
          });
          // Reset clipPath to bottom after animation completes for the next entrance
          gsap.delayedCall(0.5, () => {
            gsap.set(img, { clipPath: "inset(100% 0% 0% 0%)" });
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-zinc-950 pt-24 pb-12 px-4 md:px-12 flex flex-col items-center">
      
      <div className="w-full max-w-7xl mb-12 text-center">
        <span className="text-zinc-500 font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm block mb-4">
          Our Approach
        </span>
        <h2 className="font-serif text-4xl md:text-6xl tracking-tighter text-zinc-50">
          The Installation Standard
        </h2>
      </div>

      {/* 
        The Structural Grid 
        Uses gap-[1px] and a dark grey background to create the 1px borders (SiwaCap style)
      */}
      <div 
        ref={containerRef as any}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-zinc-800 border border-zinc-800"
      >
        {steps.map((step, idx) => (
          <div 
            key={step.id}
            ref={el => { quadrandsRef.current[idx] = el; }}
            className="group relative bg-zinc-950 aspect-square md:aspect-[4/3] flex flex-col justify-between p-6 md:p-12 overflow-hidden cursor-crosshair"
          >
            {/* Hover Reveal Image */}
            <div 
              ref={el => { imagesRef.current[idx] = el; }}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              <img 
                src={step.image} 
                alt={step.title}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content (Z-10) */}
            <div className="relative z-10 flex justify-between items-start text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
              <span className="font-sans font-medium text-sm md:text-base tracking-[0.1em]">
                {step.id}
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="relative z-10 flex flex-col gap-2 group-hover:text-zinc-50 transition-colors duration-300">
              <h3 className="font-serif text-2xl md:text-4xl tracking-tight text-zinc-300 group-hover:text-white">
                {step.title}
              </h3>
              <p className="font-sans text-xs md:text-sm tracking-wide text-zinc-500 group-hover:text-zinc-200 max-w-xs">
                {step.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
