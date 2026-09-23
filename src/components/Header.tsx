interface HeaderProps {
  onStartClick: () => void;
  onAboutClick: () => void;
  onReset: () => void;
}

export default function Header({ onStartClick, onAboutClick, onReset }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE6DE]">
      <div className="max-w-5xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Left: Brand */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-inherit no-underline"
          id="header-brand"
        >
          <span className="w-2.5 h-2.5 bg-[#191919] rounded-full group-hover:scale-125 transition-transform" />
          <span className="font-semibold tracking-[0.2em] text-sm uppercase text-[#191919]">
            CAMPUS ID
          </span>
        </a>

        {/* Center / Right Links */}
        <nav className="flex items-center gap-8 text-sm text-[#55524E]">
          <button 
            type="button"
            onClick={onStartClick}
            id="nav-create-id"
            className="hover:text-[#191919] transition-colors cursor-pointer"
          >
            Create ID
          </button>
          
          <button 
            type="button"
            onClick={onAboutClick}
            id="nav-about"
            className="hover:text-[#191919] transition-colors cursor-pointer"
          >
            About
          </button>

          <button 
            type="button"
            onClick={onReset}
            id="nav-reset"
            className="text-xs text-[#827D75] hover:text-[#191919] transition-colors cursor-pointer underline underline-offset-4 decoration-[#DCD6CA]"
            title="Reset to default example"
          >
            Reset
          </button>

          <button 
            type="button"
            onClick={onStartClick}
            id="header-start-btn"
            className="inline-flex items-center gap-2 pl-4 pr-5 py-2 rounded-full bg-[#191919] text-[#FAF8F5] text-xs font-medium tracking-wide hover:bg-[#333333] active:scale-95 transition-all cursor-pointer"
          >
            <span>Start</span>
            <span aria-hidden="true" className="text-sm">→</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
