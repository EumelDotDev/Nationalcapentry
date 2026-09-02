"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import SelectedWorks from "@/components/SelectedWorks";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PreFooterBanner from "@/components/PreFooterBanner";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const trustBarRef = useRef<HTMLDivElement>(null);
  const servicesHeaderRef = useRef<HTMLHeadingElement>(null);
  const serviceCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial Load Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Massive text slide up reveal
      tl.fromTo(
        ".hero-char",
        { y: "100%" },
        {
          y: "0%",
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out",
        },
        0.4
      );

      // Subtext fade in
      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        1.0
      );

      // Image reveal (scale down from slight zoom)
      tl.fromTo(
        imageContainerRef.current,
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power4.inOut",
        },
        0.1
      );
      
      tl.fromTo(
        imageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 2, ease: "power3.out" },
        0.1
      );

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Trust Bar reveal
      gsap.fromTo(
        ".trust-stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trustBarRef.current,
            start: "top 85%",
          },
        }
      );

      // Services Header Marquee/Reveal
      gsap.fromTo(
        servicesHeaderRef.current,
        { x: "-10%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesHeaderRef.current,
            start: "top 90%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Service Cards Stagger Reveal
      gsap.fromTo(
        ".service-card-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: serviceCardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-[200vh]">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative w-full h-screen flex flex-col lg:flex-row bg-zinc-950 overflow-hidden"
      >
        {/* Left Side: The Void */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-between p-6 lg:p-16 relative z-20">
          
          {/* Navigation */}
          <Navbar className="w-full" />

          {/* Typography Content */}
          <div className="flex flex-col justify-end lg:justify-center flex-grow mt-20 lg:mt-0 relative">
            
            {/* Massive Heading breaking the grid */}
            <h1 
              ref={textRef}
              className="font-serif text-[25vw] lg:text-[22vw] leading-[0.8] tracking-tighter text-zinc-50 z-30 whitespace-nowrap py-4 -ml-2"
            >
              <span className="inline-block overflow-hidden">
                <span className="inline-block hero-char">N</span>
              </span>
              <span className="inline-block overflow-hidden">
                <span className="inline-block hero-char">C</span>
              </span>
              <span className="inline-block overflow-hidden">
                <span className="inline-block hero-char">I</span>
              </span>
              <span className="inline-block overflow-hidden text-red-600">
                <span className="inline-block hero-char">.</span>
              </span>
            </h1>

            {/* Subtext anchored below the giant text */}
            <div ref={subtextRef} className="mt-8 max-w-sm lg:pl-2">
              <p className="font-sans text-zinc-400 text-lg leading-relaxed">
                Our carpenters will get the job done. Highly experienced in mill working, high-end, and finish carpentry across Canada.
              </p>
              <Link 
                href="#quote" 
                className="inline-flex items-center mt-8 w-fit bg-white text-zinc-950 px-6 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-zinc-200 transition-all duration-300 group"
              >
                Get a Quote 
                <span className="ml-4 flex items-center justify-center bg-zinc-950 text-white w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: The Visual */}
        <div 
          ref={imageContainerRef}
          className="w-full lg:w-1/2 h-1/2 lg:h-full relative z-10 overflow-hidden"
        >

          <img
            ref={imageRef}
            src="/images/homepage/homepage_hero_1788301476427.jpg"
            alt="High-end Architectural Millwork"
            className="absolute inset-0 w-full h-[120%] object-cover object-center -top-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/40 to-black/90 lg:bg-black/20" />
        </div>
      </section>

      {/* The Renoria Trust Bar */}
      <section ref={trustBarRef} className="py-24 border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          <div className="trust-stat flex flex-col">
            <span className="font-serif text-5xl md:text-7xl text-zinc-50 tracking-tighter">40<span className="text-red-600">+</span></span>
            <span className="font-sans text-sm text-zinc-400 uppercase tracking-widest mt-2">Years of Experience</span>
          </div>
          <div className="trust-stat flex flex-col">
            <span className="font-serif text-5xl md:text-7xl text-zinc-50 tracking-tighter">250<span className="text-red-600">+</span></span>
            <span className="font-sans text-sm text-zinc-400 uppercase tracking-widest mt-2">Projects Completed</span>
          </div>
          <div className="trust-stat flex flex-col">
            <span className="font-serif text-5xl md:text-7xl text-zinc-50 tracking-tighter">98<span className="text-red-600">%+</span></span>
            <span className="font-sans text-sm text-zinc-400 uppercase tracking-widest mt-2">Client Satisfaction</span>
          </div>
        </div>
      </section>

      {/* The Poliform Services Grid */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        {/* Massive Ueno-style Header */}
        <h2 
          ref={servicesHeaderRef}
          className="font-serif text-[12vw] leading-[0.8] tracking-tighter whitespace-nowrap mb-16 pl-6 md:pl-12 text-zinc-50"
        >
          OUR EXPERTISE
        </h2>

        <div ref={serviceCardsRef} className="max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-6">
          
          {/* Card 1: Anchor (Tall Vertical) */}
          <div className="service-card-item md:row-span-2 h-[60vh] md:h-[90vh]">
            <ServiceCard 
              title="Commercial Cabinetry"
              imageSrc="/images/homepage/service_commercial_cabinetry_1788344008593.jpg"
              href="/services/commercial"
              className="w-full h-full"
            />
          </div>

          {/* Card 2: Top Right (Horizontal) */}
          <div className="service-card-item h-[40vh] md:h-[45vh] -mb-2 md:mb-0">
            <ServiceCard 
              title="Onsite Trim and Finish"
              imageSrc="/images/homepage/service_trim_finish_1788344028693.jpg"
              href="/services/millwork"
              className="w-full h-full"
            />
          </div>

          {/* Card 3: Bottom Right (Square-ish) */}
          <div className="service-card-item h-[40vh] md:h-[45vh]">
            <ServiceCard 
              title="Bespoke Paneling"
              imageSrc="/images/homepage/service_bespoke_paneling_1788344061960.jpg"
              href="/services/residential"
              className="w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* Selected Works Section */}
      <SelectedWorks />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pre-Footer Banner */}
      <PreFooterBanner />

      {/* Footer / CTA Section */}
      <Footer />
    </main>
  );
}
