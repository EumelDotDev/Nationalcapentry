"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: "01",
    title: "Commercial Cabinetry",
    client: "Toronto Financial District",
    image: "https://images.unsplash.com/photo-1541604193435-22287d70b2b2?q=80&w=2070&auto=format&fit=crop",
    style: "w-full h-full inset-0", // Base full screen
    zImage: 0,
    zText: 10,
  },
  {
    id: "02",
    title: "On-Site Trim & Finish",
    client: "Luxury Residence, Vancouver",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    style: "w-[85vw] md:w-[45vw] h-[60vh] bottom-0 right-0 md:right-[10vw]", // Offset bottom right
    zImage: 20,
    zText: 30,
  },
  {
    id: "03",
    title: "Bespoke Paneling",
    client: "Boutique Hotel, Saint Lucia",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    style: "w-[90vw] md:w-[50vw] h-[70vh] top-[10vh] left-0 md:left-[5vw]", // Offset top left
    zImage: 40,
    zText: 50,
  }
];

export default function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // 3 screens of scrolling
          pin: true,
          scrub: 1,
        }
      });

      // Animate Project 2 in
      tl.fromTo(imagesRef.current[1], 
        { y: "100%", rotate: 2 },
        { y: "0%", rotate: -1, ease: "power2.out" }
      )
      .fromTo(textsRef.current[0], { opacity: 1, y: 0 }, { opacity: 0, y: -50 }, "<") // Fade out Project 1 text
      .fromTo(textsRef.current[1], { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<0.2"); // Fade in Project 2 text

      // Animate Project 3 in
      tl.fromTo(imagesRef.current[2], 
        { y: "100%", rotate: -3 },
        { y: "0%", rotate: 1, ease: "power2.out" }
      )
      .fromTo(textsRef.current[1], { opacity: 1, y: 0 }, { opacity: 0, y: -50 }, "<") // Fade out Project 2 text
      .fromTo(textsRef.current[2], { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<0.2"); // Fade in Project 3 text

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-zinc-950 overflow-hidden">
      
      {/* Absolute Header */}
      <div className="absolute top-8 left-6 md:left-12 z-50 mix-blend-difference text-white">
        <span className="font-sans font-bold uppercase tracking-[0.2em] text-sm opacity-80">
          Our Installations
        </span>
      </div>

      {projects.map((project, idx) => (
        <div key={project.id}>
          {/* THE IMAGE */}
          <div 
            ref={el => { imagesRef.current[idx] = el; }}
            className={`absolute overflow-hidden shadow-2xl ${project.style}`}
            style={{ zIndex: project.zImage }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          </div>

          {/* THE TEXT (Sandwiched between z-indexes) */}
          <div 
            ref={el => { textsRef.current[idx] = el; }}
            className={`absolute inset-0 flex flex-col justify-center items-center pointer-events-none px-4 text-center ${idx !== 0 ? 'opacity-0' : 'opacity-100'}`}
            style={{ zIndex: project.zText }}
          >
            <h2 className="font-serif text-5xl md:text-8xl lg:text-[10vw] text-zinc-50 leading-[0.85] tracking-tighter mix-blend-difference drop-shadow-2xl">
              {project.title}
            </h2>
            <p className="mt-6 text-zinc-300 font-sans tracking-[0.2em] uppercase text-xs md:text-sm mix-blend-difference">
              [{project.id}] — {project.client}
            </p>
          </div>
        </div>
      ))}
      
    </section>
  );
}
