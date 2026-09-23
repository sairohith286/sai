import React from 'react';
import { X, ShieldCheck, Zap, Laptop, Lock } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#FAF8F5] rounded-2xl border border-[#DDD7CD] shadow-2xl p-8 relative overflow-hidden"
        id="about-modal-card"
      >
        <button
          type="button"
          onClick={onClose}
          id="btn-close-about"
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#EAE5DA] text-[#4F4B43] hover:text-[#191919] hover:bg-[#DDD8CD] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C857B] block mb-2 font-mono">
          ABOUT THE PLATFORM
        </span>

        <h3 
          className="text-3xl font-light text-[#191919] mb-4 font-serif"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Campus ID
        </h3>

        <p className="text-sm text-[#5C574F] leading-relaxed mb-6">
          Campus ID is an academic credential generation tool engineered to eliminate convoluted administrative software. 
          Students and university departments can draft, customize, and preview authentic digital student credentials in real-time.
        </p>

        <div className="space-y-3.5 border-t border-[#EAE5DA] pt-5 text-xs text-[#524E46]">
          <div className="flex items-start gap-3">
            <Zap className="w-4 h-4 text-[#182848] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#191919]">Instant Live Binding:</strong> Every keystroke dynamically synchronizes to the preview using controlled React state without database delays.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Lock className="w-4 h-4 text-[#182848] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#191919]">Client-Side Privacy:</strong> Photographs and student credentials are processed in browser memory and are never uploaded to any remote server.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#182848] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#191919]">Print & PDF Ready:</strong> Styled directly to ISO/IEC 7810 ID-1 standard dimensions with embedded SVG verification matrix.
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#EAE5DA] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#191919] text-[#FAF8F5] text-xs font-medium hover:bg-[#333333] transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
