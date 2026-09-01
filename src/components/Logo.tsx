import React from 'react';

export default function Logo({ className = "", darkText = false }: { className?: string, darkText?: boolean }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 400 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* N */}
      <path d="M10 10 H60 L140 120 V10 H180 V130 H130 L50 20 V130 H10 V10 Z" fill={darkText ? "#09090b" : "white"}/>
      
      {/* C */}
      <path d="M300 30 C280 10, 240 10, 220 30 C200 50, 200 90, 220 110 C240 130, 280 130, 300 110 V80 H260 V95 C250 105, 230 105, 225 95 C215 80, 215 60, 225 45 C230 35, 250 35, 260 45 V60 H300 V30 Z" fill={darkText ? "#09090b" : "white"}/>
      
      {/* I with cut corner */}
      <path d="M320 10 H360 L390 40 V130 H320 V10 Z" fill={darkText ? "#09090b" : "white"}/>
      
      {/* Red Triangle */}
      <path d="M365 10 H390 V35 Z" fill="#dc2626"/>

      {/* Subtitle */}
      <text x="10" y="155" fill={darkText ? "#09090b" : "white"} fontFamily="sans-serif" fontSize="20" fontWeight="bold" letterSpacing="0.2em">NATIONAL</text>
      <text x="10" y="175" fill={darkText ? "#09090b" : "white"} fontFamily="sans-serif" fontSize="20" fontWeight="bold" letterSpacing="0.2em">CARPENTRY</text>
      <text x="10" y="195" fill={darkText ? "#09090b" : "white"} fontFamily="sans-serif" fontSize="20" fontWeight="bold" letterSpacing="0.2em">INSTALLATION</text>
    </svg>
  );
}
