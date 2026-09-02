import Link from "next/link";

export default function PreFooterBanner() {
  return (
    <section className="relative w-full h-[90vh] md:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/services/homepage-hero.png" 
          alt="Architectural Millwork"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-black/60" />
        {/* Soft radial gradient to focus center text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mt-12">
        
        {/* Editorial Label (Replaces Pill) */}
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <div className="w-6 md:w-8 border-t border-zinc-500 mb-4" />
          <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] text-zinc-300">
            Get Started
          </span>
        </div>

        {/* Massive Serif Headline */}
        <h2 className="font-serif text-[11vw] md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-zinc-50 mb-8 md:mb-10">
          Count On Us To<br className="hidden md:block"/> Get It Done Right.
        </h2>

        {/* Description Paragraph */}
        <p className="font-sans text-sm md:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto mb-14 md:mb-20">
          Whether you require a small local crew or a major installation team across Canada, we are here to help. Fill out the contact form and let us know what your needs are—we’ll get down to business.
        </p>

        {/* Editorial CTA Link */}
        <Link 
          href="/contact" 
          className="inline-flex items-center w-fit bg-white text-zinc-950 px-6 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-zinc-200 transition-all duration-300 group"
        >
          Get a Quote
          <span className="ml-4 flex items-center justify-center bg-zinc-950 text-white w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </span>
        </Link>

      </div>
    </section>
  );
}
