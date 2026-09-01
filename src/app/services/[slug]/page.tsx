"use client";

import { useEffect, useRef, use } from "react";
import { notFound } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resolvedParams = use(params);
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clean, simple reveal animations for text
      gsap.fromTo(
        ".fade-up",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Section triggers for scroll reveal
      const sections = document.querySelectorAll(".scroll-section");
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
            },
          }
        );
      });

      // Pinned Process Section (Additive Assembly)
      const processTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".process-section",
          start: "top top",
          end: "+=2000", // Pin section for 2000px of scrolling
          pin: true,
          scrub: 1,
        }
      });

      // Card 01 remains static in its natural grid position.
      // Cards 02, 03, 04 start from below the screen.
      gsap.set(".process-card-anim", {
        y: "100vh",
        opacity: 0,
      });

      // As you scroll down, cards 02, 03, 04 slide up into their grid positions sequentially
      processTl.to(".process-card-anim", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, [resolvedParams.slug]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-zinc-950 overflow-hidden font-sans">
      
      {/* Navbar with dark text because background is white */}
      {/* We need to pass a prop or class to Navbar if it defaults to white text, 
          assuming Navbar uses mix-blend-difference or can handle it */}
      <div className="w-full mix-blend-difference text-white z-50 relative">
        <Navbar className="px-6 lg:px-12 py-8" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-16 md:pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col">
          
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16 fade-up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase w-full lg:w-1/2">
              {service.title}
            </h1>
            <div className="w-full lg:w-1/3 flex flex-col justify-end pb-2">
              <p className="text-zinc-900 text-lg md:text-xl font-light leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>

          <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden fade-up">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="scroll-section w-full py-24 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-sans tracking-tight">
              Service overview
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-light">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (Capabilities) */}
      <section className="scroll-section w-full pb-24 md:pb-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 items-start">
          
          {/* Left: Portrait Image */}
          <div className="w-full lg:w-[45%]">
            <div className="aspect-[3/4] relative overflow-hidden w-full max-w-[500px]">
              <img 
                src={service.projects[0]?.image || service.image} 
                alt="Capability Focus" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: What we do list */}
          <div className="w-full lg:w-1/2 pt-12 lg:pt-32">
            <h2 className="text-3xl md:text-4xl font-sans tracking-tight mb-6">
              What we do
            </h2>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-light mb-12 max-w-lg">
              Your space is more than a place — it’s a living expression of your identity, your lifestyle, and the moments you treasure.
            </p>
            
            <div className="flex flex-col">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="py-4 border-b border-zinc-200 flex items-center gap-4">
                  <div className="w-1 h-1 rounded-full bg-zinc-950 flex-shrink-0"></div>
                  <span className="text-zinc-900 font-sans text-base">{cap}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* 4. MORE ABOUT THE SERVICE */}
      <section className="scroll-section w-full pb-24 md:pb-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col">
          
          <h2 className="text-3xl md:text-4xl font-sans tracking-tight mb-8">
            More about {service.title.replace('\n', ' ')}
          </h2>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-light max-w-5xl mb-16">
            In environments where every square foot matters, thoughtful execution brings order to daily life. By shaping layouts and utilizing premium materials that encourage movement, function, and visual clarity, our well-planned spaces reduce friction and create environments that feel intuitive, open, and effortlessly livable.
          </p>

          <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden">
            <img 
              src={service.projects[1]?.image || service.image} 
              alt="More about service" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* 5. PROCESS SECTION (Additive Assembly Pinned Scroll) */}
      <section className="process-section relative w-full h-screen bg-[#000000] text-white flex flex-col justify-center overflow-hidden px-6 lg:px-12">
        
        {/* Heading */}
        <div className="max-w-[1400px] mx-auto w-full mb-12 md:mb-24 z-10 relative process-heading">
          <p className="text-zinc-500 font-sans tracking-[0.1em] text-sm md:text-xs uppercase mb-4 font-semibold">
            Our Process
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight uppercase tracking-tighter max-w-4xl">
            Our structured yet flexible process ensures that every project.
          </h2>
        </div>

        {/* 4-Column Seamless Grid */}
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative z-20">
          
          {/* Step 1 - Static */}
          <div className="process-card bg-[#151515] p-8 lg:p-12 flex flex-col justify-between h-[300px] md:h-[380px]">
            <span className="text-4xl font-sans text-zinc-500 font-light">01</span>
            <div>
              <h3 className="text-2xl lg:text-3xl font-serif mb-4 tracking-tight leading-snug">
                Discovery &<br/>Consultation
              </h3>
              <p className="text-zinc-400 font-light text-sm lg:text-base leading-relaxed pr-4">
                Understanding your goals, timeline, and vision. We explore material palettes, structural requirements, and precise logistical needs.
              </p>
            </div>
          </div>

          {/* Step 2 - Animated */}
          <div className="process-card-anim bg-[#151515] p-8 lg:p-12 flex flex-col justify-between h-[300px] md:h-[380px]">
            <span className="text-4xl font-sans text-zinc-500 font-light">02</span>
            <div>
              <h3 className="text-2xl lg:text-3xl font-serif mb-4 tracking-tight leading-snug">
                Concept &<br/>Visualization
              </h3>
              <p className="text-zinc-400 font-light text-sm lg:text-base leading-relaxed pr-4">
                Drafting shop drawings, 3D models, and material samples to bring your ideas to life and ensure every measurement is perfectly aligned.
              </p>
            </div>
          </div>

          {/* Step 3 - Animated */}
          <div className="process-card-anim bg-[#151515] p-8 lg:p-12 flex flex-col justify-between h-[300px] md:h-[380px]">
            <span className="text-4xl font-sans text-zinc-500 font-light">03</span>
            <div>
              <h3 className="text-2xl lg:text-3xl font-serif mb-4 tracking-tight leading-snug">
                Engineering &<br/>Development
              </h3>
              <p className="text-zinc-400 font-light text-sm lg:text-base leading-relaxed pr-4">
                Detailed fabrication and spatial layouts. Transforming raw materials in our facility to meet exact specifications and aesthetic demands.
              </p>
            </div>
          </div>

          {/* Step 4 - Animated */}
          <div className="process-card-anim bg-[#151515] p-8 lg:p-12 flex flex-col justify-between h-[300px] md:h-[380px]">
            <span className="text-4xl font-sans text-zinc-500 font-light">04</span>
            <div>
              <h3 className="text-2xl lg:text-3xl font-serif mb-4 tracking-tight leading-snug">
                Execution &<br/>Delivery
              </h3>
              <p className="text-zinc-400 font-light text-sm lg:text-base leading-relaxed pr-4">
                On-site coordination, flawless material handling, and turnkey implementation. Final styling, walkthrough, and absolute client satisfaction.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
