import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  href: string;
  className?: string;
}

export default function ServiceCard({ title, imageSrc, href, className = '' }: ServiceCardProps) {
  return (
    <Link href={href} className={`group block relative overflow-hidden rounded-2xl ${className}`}>
      {/* Background Image with slight scale on hover */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-900/30 to-transparent transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Content positioning */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="flex items-end justify-between">
          <h3 className="font-serif text-3xl md:text-4xl text-white max-w-[80%] leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            {title}
          </h3>
          <div className="w-12 h-12 rounded-full border border-zinc-500/50 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-zinc-950 group-hover:scale-110">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
