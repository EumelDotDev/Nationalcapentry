"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Logo from "./Logo";

interface NavbarProps {
  className?: string;
  darkText?: boolean;
}

export default function Navbar({ className = "", darkText = false }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const textColorClass = darkText ? "text-zinc-950" : "text-zinc-50";
  const burgerBgClass = (darkText && !isMobileMenuOpen) ? "bg-zinc-950" : "bg-white";

  return (
    <>
      <header 
        ref={navRef} 
        className={`z-[100] flex justify-between items-center text-sm font-sans tracking-wide uppercase ${textColorClass} pointer-events-auto ${className}`}
      >
        <Link href="/" className={`relative z-[110]`}>
          <Logo className="h-12 md:h-14 w-auto hover:opacity-70 transition-opacity" darkText={darkText} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-12 relative z-[110]">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:opacity-60 transition-opacity">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden relative z-[110] p-2 focus:outline-none flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] ${burgerBgClass} transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] ${burgerBgClass} transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-[2px] ${burgerBgClass} transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] z-[90] flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link, idx) => (
            <div 
              key={link.name} 
              className={`overflow-hidden transition-all duration-500 delay-${(idx + 1) * 100}`}
            >
              <Link 
                href={link.href} 
                className="block text-4xl font-serif uppercase tracking-tighter text-white hover:text-zinc-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
