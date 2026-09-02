"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Hero Text Reveal
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title-word",
        { y: "110%" },
        { y: "0%", duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2 }
      );
      
      tl.fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      );

      // Inset Image parallax
      gsap.to(".hero-inset-img", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Intro Text Fade
      gsap.fromTo(
        ".intro-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".intro-section",
            start: "top 80%",
          },
        }
      );

      // Services overlapping images parallax
      const serviceImages = document.querySelectorAll(".service-bg-img");
      serviceImages.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".service-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Services text fade
      const serviceTexts = document.querySelectorAll(".service-text-reveal");
      serviceTexts.forEach((text) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text.closest(".service-card"),
              start: "top 80%",
            },
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Structured Zig-Zag Layout (Left, Right, Left)
  // Cards are sized reasonably to fill the space without being oversized.
  const services = [
    {
      id: "01",
      slug: "millwork",
      title: "Custom\nMillwork",
      image: "/images/services/service_trim_hero.jpg",
      cardWidth: "w-full lg:w-[713px]",
      imgWidth: "w-full lg:w-[570px]",
      imgHeight: "h-[300px] lg:h-[360px]",
      alignSelf: "self-start", // Left
    },
    {
      id: "02",
      slug: "commercial",
      title: "Commercial\nInstallation",
      image: "/images/services/service_commercial_hero.jpg",
      cardWidth: "w-full lg:w-[680px]",
      imgWidth: "w-full lg:w-[540px]",
      imgHeight: "h-[300px] lg:h-[420px]",
      alignSelf: "self-end", // Right
    },
    {
      id: "03",
      slug: "residential",
      title: "Residential\nCase Goods",
      image: "/images/services/service_paneling_hero.jpg",
      cardWidth: "w-full lg:w-[650px]",
      imgWidth: "w-full lg:w-[500px]",
      imgHeight: "h-[300px] lg:h-[400px]",
      alignSelf: "self-start", // Left
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-zinc-950 overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section relative w-full h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/paneling-ceiling.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar className="px-6 lg:px-12 py-8" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full mt-24">
          <h1 className="font-serif text-[18vw] md:text-[14vw] leading-[0.8] tracking-tight text-white uppercase flex flex-col md:flex-row gap-0 md:gap-8 overflow-hidden items-center">
            <span className="block overflow-hidden"><span className="block hero-title-word">OUR</span></span>
            <span className="block overflow-hidden"><span className="block hero-title-word">SERVICES</span></span>
          </h1>
          <p className="hero-sub mt-8 text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            At National Carpentry & Installation, every service is designed to elevate the environments where you live, work, and experience life.
          </p>
        </div>
      </section>

      {/* 2. INTRO TEXT SECTION */}
      <section className="intro-section relative w-full pt-48 md:pt-64 pb-24 px-6 lg:px-12 bg-white z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24 intro-text">
          <div className="w-full md:w-1/4">
            <span className="text-zinc-900 font-sans tracking-[0.05em] text-sm md:text-base uppercase">
              Our Services
            </span>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.3] tracking-normal text-zinc-950 max-w-3xl">
              From initial concept to final execution, our installations are engineered for a worry-free experience.
            </h2>
          </div>
        </div>
      </section>

      {/* 3. OVERLAPPING SERVICES LIST */}
      <div className="flex flex-col w-full bg-white px-6 lg:px-12 pb-48 pt-16">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-24 md:gap-32 items-start">
          
          {services.map((svc) => (
            <Link 
              href={`/services/${svc.slug}`} 
              key={svc.id}
              className={`${svc.alignSelf} max-w-full block`}
            >
              <div 
                className={`service-card flex flex-col-reverse lg:flex-row justify-end relative ${svc.cardWidth} group cursor-pointer gap-6 lg:gap-0`}
              >
                
                {/* Image Container */}
                <div className={`${svc.imgWidth} ${svc.imgHeight} relative overflow-hidden bg-zinc-900 max-w-full w-full`}>
                  <img 
                    src={svc.image} 
                    alt={svc.title.replace('\n', ' ')}
                    className="service-bg-img w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Text Overlay */}
                {/* Positioned relatively on mobile (above image), absolutely on desktop (overlapping) */}
                <div className="relative lg:absolute top-0 lg:top-[20%] left-0 z-10 text-zinc-950 lg:text-white lg:mix-blend-difference pointer-events-none service-text-reveal flex flex-col max-w-full lg:max-w-[400px]">
                  <p className="font-sans text-sm tracking-widest mb-4 lg:mb-6">Services {svc.id}</p>
                  <h2 className="font-serif text-5xl md:text-[5rem] lg:text-[5.5rem] leading-[1] tracking-tighter uppercase whitespace-pre-line group-hover:-translate-y-2 transition-transform duration-500">
                    {svc.title}
                  </h2>
                </div>
                
              </div>
            </Link>
          ))}

        </div>
      </div>

      {/* 4. CTA SECTION */}
      <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/CTA.png" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Frosted Glass Block */}
        <div className="relative z-10 w-full max-w-[860px] mx-4 p-12 md:p-16 lg:p-24 bg-black/40 backdrop-blur-md flex flex-col items-center text-center">
          <div className="mb-6">
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1]">
              Let’s bring your vision to life with creativity
            </h3>
          </div>
          <div className="mb-12 max-w-2xl">
            <p className="text-zinc-200 text-lg md:text-xl font-light">
              At NCI, we craft millwork that goes beyond decoration—spaces that tell stories and shape experiences.
            </p>
          </div>
          <div className="flex justify-center">
            <a href="/contact" className="group inline-flex items-center gap-4 bg-white text-zinc-950 px-8 py-4 hover:bg-zinc-200 transition-colors duration-300">
              <span className="uppercase tracking-widest text-sm font-medium">Book a consultation</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="w-full bg-zinc-950 py-32 px-6 lg:px-12 text-white">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
          
          {/* Top Block - Centered Title */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-white"></div>
              <span className="font-sans text-sm uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter capitalize">
              Frequently asked
            </h2>
          </div>

          {/* Bottom Block - Accordion List */}
          <div className="flex flex-col border-t border-zinc-900 mt-8">
            {[
              { q: "What services does NCI provide?", a: "We specialize in architectural millwork, commercial and residential case goods, turnkey project execution, and specialized installations across North America." },
              { q: "How does the design and installation process work?", a: "Our process is structured and collaborative. We begin with a consultation, followed by concept development and material selection. After approvals, we proceed with detailed shop drawings and final execution, keeping you updated at every stage." },
              { q: "Do you provide end-to-end project execution?", a: "Yes, we handle everything from the initial design and millwork engineering to the final on-site installation, ensuring a seamless and worry-free experience." },
              { q: "How long does a typical installation take?", a: "Timelines vary depending on the scope of the project, but typical commercial rollouts or residential millwork installations range from 4 to 12 weeks from shop drawings to final sign-off." },
              { q: "Where do you operate?", a: "We operate seamlessly across Canada, the USA, and the Caribbean, maintaining the same rigorous standards in every territory." },
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="py-6 md:py-8 group cursor-pointer border-b border-zinc-900 transition-colors"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex justify-between items-center text-[1.1rem] md:text-xl font-sans text-zinc-200 group-hover:text-white transition-colors">
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 ml-6 group-hover:bg-zinc-700 transition-colors">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                </div>
                {/* Accordion Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-zinc-400 font-sans text-base leading-relaxed pr-12">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
