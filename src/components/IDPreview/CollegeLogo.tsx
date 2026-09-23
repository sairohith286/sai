import React from 'react';

interface CollegeLogoProps {
  accentColorClass?: string;
  className?: string;
}

export default function CollegeLogo({ accentColorClass = 'text-[#182848]', className = 'w-7 h-7' }: CollegeLogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Refined Academic Crest Vector */}
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Shield */}
        <path 
          d="M24 4L7 10V22C7 32.5 14.3 42.1 24 44.5C33.7 42.1 41 32.5 41 22V10L24 4Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="currentColor"
          fillOpacity="0.06"
        />
        {/* Inner Shield contour */}
        <path 
          d="M24 8L11 12.6V21.5C11 29.8 16.5 37.4 24 39.5C31.5 37.4 37 29.8 37 21.5V12.6L24 8Z" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeOpacity="0.5"
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Open Book in Crest */}
        <path 
          d="M17 24C19 23.5 22 23.8 24 25.5C26 23.8 29 23.5 31 24V32C29 31.5 26 31.8 24 33.5C22 31.8 19 31.5 17 32V24Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M24 25.5V33.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Academic Star / Torch at top */}
        <circle cx="24" cy="16" r="2" fill="currentColor" />
        <path d="M24 12V14M24 18V20M20 16H22M26 16H28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}
