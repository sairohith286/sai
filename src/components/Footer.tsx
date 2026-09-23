import React from 'react';

interface FooterProps {
  onAboutClick: () => void;
}

export default function Footer({ onAboutClick }: FooterProps) {
  return (
    <footer className="w-full border-t border-[#EAE6DE] bg-[#F7F4EE] py-14">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Brand & Tagline */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#191919]" />
            <span className="font-semibold tracking-[0.2em] text-xs uppercase text-[#191919]">
              CAMPUS ID
            </span>
          </div>
          <p className="text-xs text-[#736E66]">
            Digital identity for modern campuses.
          </p>
        </div>

        {/* Minimal Navigation & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 text-xs text-[#6B665E]">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onAboutClick}
              className="hover:text-[#191919] transition-colors cursor-pointer"
            >
              About
            </button>
            <span>·</span>
            <a 
              href="#create-section" 
              className="hover:text-[#191919] transition-colors"
            >
              Create ID
            </a>
            <span>·</span>
            <span className="text-[#999285]">
              Privacy Notice
            </span>
          </div>

          <span className="text-[11px] text-[#A39D92]">
            © {new Date().getFullYear()} Campus ID Studio. Client-side rendered.
          </span>
        </div>

      </div>
    </footer>
  );
}
