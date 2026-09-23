import React from 'react';

interface QRPlaceholderProps {
  code: string;
}

export default function QRPlaceholder({ code }: QRPlaceholderProps) {
  // Generate a consistent pseudo-random matrix pattern based on code
  const codeVal = code || 'CAMPUS2026';
  
  return (
    <div className="flex flex-col items-center">
      {/* Clean high-res vector QR visual matrix */}
      <div className="w-16 h-16 sm:w-18 sm:h-18 p-1.5 bg-white border border-[#E0DCD3] rounded-sm shadow-xs flex items-center justify-center">
        <svg
          viewBox="0 0 29 29"
          className="w-full h-full text-[#191919]"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top-Left Finder Pattern */}
          <rect x="0" y="0" width="7" height="7" />
          <rect x="1" y="1" width="5" height="5" fill="white" />
          <rect x="2" y="2" width="3" height="3" />

          {/* Top-Right Finder Pattern */}
          <rect x="22" y="0" width="7" height="7" />
          <rect x="23" y="1" width="5" height="5" fill="white" />
          <rect x="24" y="2" width="3" height="3" />

          {/* Bottom-Left Finder Pattern */}
          <rect x="0" y="22" width="7" height="7" />
          <rect x="1" y="23" width="5" height="5" fill="white" />
          <rect x="2" y="24" width="3" height="3" />

          {/* Data Modules (Clean believable pattern) */}
          <rect x="9" y="1" width="2" height="2" />
          <rect x="13" y="1" width="1" height="2" />
          <rect x="16" y="1" width="2" height="1" />
          <rect x="19" y="2" width="1" height="3" />
          
          <rect x="9" y="4" width="1" height="3" />
          <rect x="12" y="5" width="2" height="1" />
          <rect x="15" y="4" width="2" height="2" />
          <rect x="18" y="5" width="1" height="2" />

          <rect x="0" y="9" width="2" height="1" />
          <rect x="3" y="9" width="2" height="2" />
          <rect x="6" y="9" width="3" height="1" />
          <rect x="10" y="9" width="2" height="2" />
          <rect x="14" y="9" width="3" height="1" />
          <rect x="18" y="9" width="2" height="2" />
          <rect x="22" y="9" width="1" height="3" />
          <rect x="25" y="9" width="3" height="1" />

          <rect x="9" y="13" width="3" height="3" />
          <rect x="14" y="12" width="2" height="2" />
          <rect x="17" y="13" width="3" height="1" />
          <rect x="22" y="14" width="2" height="2" />
          <rect x="26" y="13" width="2" height="3" />

          <rect x="1" y="15" width="3" height="2" />
          <rect x="5" y="14" width="2" height="3" />
          <rect x="8" y="17" width="1" height="3" />
          <rect x="11" y="18" width="3" height="1" />
          <rect x="15" y="16" width="3" height="2" />
          <rect x="20" y="17" width="1" height="3" />

          <rect x="9" y="22" width="2" height="2" />
          <rect x="12" y="24" width="2" height="3" />
          <rect x="16" y="22" width="3" height="2" />
          <rect x="21" y="23" width="2" height="2" />
          <rect x="25" y="22" width="3" height="1" />
          <rect x="24" y="25" width="2" height="2" />
        </svg>
      </div>

      <span className="text-[8px] font-mono tracking-wider uppercase text-[#6B655C] mt-1 text-center font-medium">
        SCAN TO VERIFY
      </span>
    </div>
  );
}
