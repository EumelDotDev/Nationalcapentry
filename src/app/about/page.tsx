"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import PreFooterBanner from "@/components/PreFooterBanner";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Hero Reveal Animation
      const tl = gsap.timeline();
      tl.fromTo(
        ".reveal-text",
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.3 }
      );
      
      tl.fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      );

      // 2. Animated Counters
      const counters = document.querySelectorAll(".counter-value");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        gsap.fromTo(
          counter,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 90%",
            },
          }
        );
      });

      // 3. Parallax Images
      const parallaxImages = document.querySelectorAll(".parallax-img");
      parallaxImages.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // 4. Staggered Grid Reveal
      gsap.fromTo(
        ".value-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".values-grid",
            start: "top 80%",
          },
        }
      );

      // 5. Fade Up Elements
      const fadeElements = document.querySelectorAll(".fade-up");
      fadeElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans">
      <Navbar className="px-6 lg:px-12 py-8" />
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-48 pb-24 px-6 lg:px-12 flex flex-col justify-end min-h-[70vh]">
        <div className="max-w-7xl">
          <p className="hero-sub opacity-0 text-zinc-500 uppercase tracking-[0.2em] text-xs md:text-sm mb-8">
            Our Services & Approach
          </p>
          <h1 className="font-serif text-[15vw] md:text-[10vw] leading-[0.85] tracking-tighter">
            <span className="block overflow-hidden"><span className="block reveal-text">WE ARE</span></span>
            <span className="block overflow-hidden"><span className="block reveal-text text-zinc-400">NCI.</span></span>
          </h1>
          <p className="hero-sub opacity-0 mt-12 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Crafting enduring millwork with absolute precision. We bridge the gap between architectural vision and flawless execution across North America.
          </p>
        </div>
      </section>

      {/* 2. ANIMATED COUNTERS / METRICS */}
      <section className="w-full border-y border-zinc-900 bg-zinc-950 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="flex flex-col border-l border-zinc-800 pl-6">
            <div className="font-serif text-6xl md:text-7xl tracking-tighter mb-2">
              <span className="counter-value" data-target="45">0</span><span className="text-red-600">+</span>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Years Exp.</span>
          </div>
          
          <div className="flex flex-col border-l border-zinc-800 pl-6">
            <div className="font-serif text-6xl md:text-7xl tracking-tighter mb-2">
              <span className="counter-value" data-target="20">0</span><span className="text-red-600">+</span>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Max Crew Size</span>
          </div>

          <div className="flex flex-col border-l border-zinc-800 pl-6">
            <div className="font-serif text-6xl md:text-7xl tracking-tighter mb-2">
              <span className="counter-value" data-target="3">0</span>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Markets</span>
          </div>

          <div className="flex flex-col border-l border-zinc-800 pl-6">
            <div className="font-serif text-6xl md:text-7xl tracking-tighter mb-2">
              <span className="counter-value" data-target="100">0</span><span className="text-red-600">%</span>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Certified</span>
          </div>

        </div>
      </section>

      {/* 3. BRAND STORY & PARALLAX */}
      <section className="w-full py-32 md:py-48 px-6 lg:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-center max-w-[1600px] mx-auto">
        <div className="w-full md:w-1/2 overflow-hidden h-[60vh] md:h-[80vh] relative rounded-sm border border-zinc-800">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" 
            alt="Carpentry Workshop"
            className="parallax-img absolute inset-0 w-full h-[130%] object-cover object-center"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl fade-up">
          <span className="block w-12 border-t border-zinc-600 mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] tracking-tight mb-8">
            A reputation built on top quality workmanship since 1978.
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed mb-8">
            National Carpentry & Installation has been in the finish carpentry business for over four decades. We work all across Canada, as well as Saint Lucia W.I., Bermuda, and the USA. 
          </p>
          <p className="text-zinc-400 text-xl leading-relaxed">
            Whether it's a small one-man job or a massive project requiring crews of 20 or more carpenters, you can count on us to get it done right.
          </p>
        </div>
      </section>

      {/* 4. CORE VALUES / PILLARS (STICKY PATTERN) */}
      <section className="w-full bg-zinc-950 py-32 md:py-48 px-6 lg:px-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="fade-up mb-24 max-w-3xl">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6">Service Pillars</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tighter text-zinc-50 leading-[1.05]">
              Crafting a space is a precise journey & trust is our foundation.
            </h2>
          </div>

          {/* Sticky Content Wrapper */}
          <div className="relative flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
            
            {/* Left: Sticky Image */}
            <div className="w-full md:w-5/12 md:sticky md:top-32 h-[50vh] md:h-[70vh] rounded-sm overflow-hidden border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Carpentry Details" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Scrolling List */}
            <div className="w-full md:w-7/12 flex flex-col gap-24 md:py-12">
              
              {/* Item 1 */}
              <div className="fade-up flex flex-col pb-16 border-b border-zinc-900">
                <span className="font-serif text-5xl text-zinc-800 mb-8 block">01</span>
                <h3 className="text-4xl font-serif tracking-tight text-zinc-50 mb-6">Commercial Excellence</h3>
                <p className="text-zinc-400 text-xl leading-relaxed">
                  Extensive experience in commercial and architectural installation, dedicated to getting the job done in a professional manner with the highest possible quality.
                </p>
              </div>

              {/* Item 2 */}
              <div className="fade-up flex flex-col pb-16 border-b border-zinc-900">
                <span className="font-serif text-5xl text-zinc-800 mb-8 block">02</span>
                <h3 className="text-4xl font-serif tracking-tight text-zinc-50 mb-6">Residential Precision</h3>
                <p className="text-zinc-400 text-xl leading-relaxed">
                  Installing prebuilt millwork and case goods, or manufacturing and installing to the customer’s exact specifications on site in almost any condition.
                </p>
              </div>

              {/* Item 3 */}
              <div className="fade-up flex flex-col pb-16 border-b border-zinc-900">
                <span className="font-serif text-5xl text-zinc-800 mb-8 block">03</span>
                <h3 className="text-4xl font-serif tracking-tight text-zinc-50 mb-6">Safety & Sustainability</h3>
                <p className="text-zinc-400 text-xl leading-relaxed">
                  Our carpenters are WHMIS certified, COR certified, and highly trained to execute complex architectural woodwork while participating in LEED Projects.
                </p>
              </div>

              {/* Item 4 */}
              <div className="fade-up flex flex-col">
                <span className="font-serif text-5xl text-zinc-800 mb-8 block">04</span>
                <h3 className="text-4xl font-serif tracking-tight text-zinc-50 mb-6">Local Workforce</h3>
                <p className="text-zinc-400 text-xl leading-relaxed">
                  We believe in using the local workforce as much as possible, combining knowledgeable carpenters with top quality equipment to scale to your project's needs.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER & FOOTER */}
      <PreFooterBanner />
      <Footer />
    </main>
  );
}
