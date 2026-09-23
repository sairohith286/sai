import React from 'react';
import { User, ShieldCheck } from 'lucide-react';

interface StudentPhotoProps {
  photoUrl: string;
  name: string;
}

export default function StudentPhoto({ photoUrl, name }: StudentPhotoProps) {
  return (
    <div className="relative group shrink-0">
      {/* Photo Frame Container with subtle card bevel */}
      <div className="w-28 sm:w-32 h-36 sm:h-40 rounded-md bg-[#F2EFE8] border border-[#DDD7CC] overflow-hidden relative shadow-sm flex items-center justify-center">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={name ? `${name}'s photo` : 'Student identity'}
            className="w-full h-full object-cover select-none"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-b from-[#ECE7DD] to-[#DDD7CB]">
            <div className="w-12 h-12 rounded-full bg-[#D5CEC2] flex items-center justify-center text-[#787165] mb-2 shadow-inner">
              <User className="w-7 h-7 stroke-[1.25]" />
            </div>
            <span className="text-[9px] uppercase tracking-wider text-[#6B655B] font-medium leading-tight">
              Official Photo
            </span>
          </div>
        )}

        {/* Security watermark overlay badge in bottom-right corner */}
        <div className="absolute bottom-1 right-1 bg-white/80 backdrop-blur-[2px] px-1.5 py-0.5 rounded text-[8px] tracking-widest uppercase font-mono text-[#524E47] border border-white/60 flex items-center gap-0.5">
          <ShieldCheck className="w-2.5 h-2.5 text-[#2B5E41]" />
          <span>VERIFIED</span>
        </div>
      </div>

      {/* Subtle corner registration marks (like authentic print credentials) */}
      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#8C8578] pointer-events-none" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#8C8578] pointer-events-none" />
    </div>
  );
}
