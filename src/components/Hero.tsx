interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 border-b border-[#EAE6DE]/70">
      <div className="max-w-4xl mx-auto px-6 text-left md:text-center">
        
        {/* Subtle academic tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E3DED4] bg-[#F4F0E8] text-[#5A554E] text-xs tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
          <span>Academic Digital Credential</span>
        </div>

        {/* Large editorial headline */}
        <h1 
          id="hero-title"
          className="text-5xl sm:text-6xl md:text-7xl font-light text-[#191919] tracking-tight leading-[1.08] mb-6 font-serif"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Your college identity,<br className="hidden sm:inline" /> digitally designed.
        </h1>

        {/* Small supporting text */}
        <p className="max-w-xl mx-auto text-lg text-[#615C54] font-normal leading-relaxed mb-10">
          Create a professional digital college ID card using your personal and academic details.
        </p>

        {/* Minimal CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4">
          <button
            type="button"
            onClick={onCtaClick}
            id="hero-create-btn"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#191919] text-[#FAF8F5] text-sm font-medium tracking-wide hover:bg-[#333333] transition-all cursor-pointer shadow-sm"
          >
            <span>Create your ID</span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </button>

          <span className="text-xs text-[#8A857D] sm:ml-2">
            No signup required · Real-time rendering
          </span>
        </div>

      </div>
    </section>
  );
}
