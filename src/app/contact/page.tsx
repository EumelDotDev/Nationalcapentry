"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in text
      gsap.fromTo(
        ".fade-in-up",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
      
      // Image reveal
      gsap.fromTo(
        ".image-reveal",
        { clipPath: "inset(100% 0 0 0)" },
        { clipPath: "inset(0% 0 0 0)", duration: 1.5, ease: "power4.inOut" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* Absolute Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar className="px-6 lg:px-12 py-8" />
      </div>

      {/* Main Content Area */}
      <section className="w-full pt-48 pb-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          
          {/* Centered Intro Text */}
          <div className="w-full max-w-3xl text-center mb-24 fade-in-up">
            <h1 className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed font-sans">
              Your space is more than just a building — it's a living expression of your brand, your craft, and the moments you treasure.
            </h1>
          </div>

          {/* Split Layout: Image & Form */}
          <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
            
            {/* Left: Image Block */}
            <div className="w-full lg:w-1/2 flex justify-start fade-in-up">
              <div className="w-full max-w-[600px] aspect-[4/5] relative overflow-hidden bg-zinc-900 image-reveal">
                <img 
                  src="/images/services/contact-us.png" 
                  alt="Millwork Interior"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>

            {/* Right: Form Block */}
            <div className="w-full lg:w-1/2 flex justify-end fade-in-up">
              <div className="w-full max-w-[640px] bg-[#0a0a0a] border border-zinc-900 p-8 md:p-12">
                <form className="flex flex-col gap-8">
                  
                  {/* Name Row */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="text-sm text-zinc-300 font-medium">First Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter first name"
                        className="w-full bg-[#111111] border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="text-sm text-zinc-300 font-medium">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter last name"
                        className="w-full bg-[#111111] border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="text-sm text-zinc-300 font-medium">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="Enter Email"
                        className="w-full bg-[#111111] border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="text-sm text-zinc-300 font-medium">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="Enter Phone"
                        className="w-full bg-[#111111] border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-3">
                    <label className="text-sm text-zinc-300 font-medium">Message</label>
                    <textarea 
                      placeholder="Write about your project"
                      rows={6}
                      className="w-full bg-[#111111] border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 outline-none focus:border-zinc-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <button 
                      type="submit"
                      className="bg-white text-black font-mono uppercase tracking-widest text-xs font-bold px-8 py-4 hover:bg-zinc-200 transition-colors"
                    >
                      Submit Message
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rebuilt Footer will go here */}
      <Footer />

    </main>
  );
}
