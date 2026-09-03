import React from 'react';
import Image from 'next/image';

export default function Logo({ className = "", darkText = false }: { className?: string, darkText?: boolean }) {
  return (
    <Image 
      src="/images/homepage/NCI-logo-new.png" 
      alt="National Carpentry & Installation"
      width={400}
      height={200}
      className={`${className} object-contain`}
      priority
    />
  );
}
