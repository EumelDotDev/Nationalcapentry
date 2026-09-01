"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterBanner from "@/components/PreFooterBanner";
import { projectsData } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header Intro Animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    // Staggered reveal for project cards
    const cards = gsap.utils.toArray(".project-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="px-6 lg:px-16 pt-12">
        <Navbar />
      </div>

      <section className="pt-32 pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <span className="block text-zinc-500 font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Portfolio
          </span>
          <h1 ref={headerRef} className="font-serif text-6xl md:text-8xl tracking-tighter text-zinc-50 leading-none">
            Selected Works
          </h1>
        </div>

        {/* Dynamic Asymmetrical Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
          
          {/* Project 1: Large Span */}
          <Link href={`/projects/${projectsData[0].slug}`} className="project-card md:col-span-12 group block relative overflow-hidden">
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
              <Image 
                src={projectsData[0].thumbnail} 
                alt={projectsData[0].title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="font-serif text-3xl md:text-5xl text-zinc-100 group-hover:text-white transition-colors">
                {projectsData[0].title}
              </h3>
              <span className="font-sans text-sm text-zinc-400 uppercase tracking-widest">
                {projectsData[0].category}
              </span>
            </div>
          </Link>

          {/* Project 2: Left Column (Tall) */}
          <Link href={`/projects/${projectsData[1].slug}`} className="project-card md:col-span-5 group block relative overflow-hidden mt-12 md:mt-24">
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
              <Image 
                src={projectsData[1].thumbnail} 
                alt={projectsData[1].title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
            </div>
            <div className="mt-6">
              <h3 className="font-serif text-2xl md:text-3xl text-zinc-100 group-hover:text-white transition-colors">
                {projectsData[1].title}
              </h3>
              <span className="block mt-2 font-sans text-xs text-zinc-400 uppercase tracking-widest">
                {projectsData[1].category}
              </span>
            </div>
          </Link>

          {/* Project 3: Right Column (Square-ish, offset down) */}
          <Link href={`/projects/${projectsData[2].slug}`} className="project-card md:col-span-6 md:col-start-7 group block relative overflow-hidden mt-12 md:mt-48">
            <div className="relative w-full h-[50vh] md:h-[50vh] overflow-hidden">
              <Image 
                src={projectsData[2].thumbnail} 
                alt={projectsData[2].title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
            </div>
            <div className="mt-6">
              <h3 className="font-serif text-2xl md:text-3xl text-zinc-100 group-hover:text-white transition-colors">
                {projectsData[2].title}
              </h3>
              <span className="block mt-2 font-sans text-xs text-zinc-400 uppercase tracking-widest">
                {projectsData[2].category}
              </span>
            </div>
          </Link>

          {/* Project 4: Full Width */}
          <Link href={`/projects/${projectsData[3].slug}`} className="project-card md:col-span-12 group block relative overflow-hidden mt-12 md:mt-32">
            <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
              <Image 
                src={projectsData[3].thumbnail} 
                alt={projectsData[3].title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="font-serif text-3xl md:text-5xl text-zinc-100 group-hover:text-white transition-colors">
                {projectsData[3].title}
              </h3>
              <span className="font-sans text-sm text-zinc-400 uppercase tracking-widest">
                {projectsData[3].category}
              </span>
            </div>
          </Link>

        </div>
      </section>

      <PreFooterBanner />
      <Footer />
    </main>
  );
}
