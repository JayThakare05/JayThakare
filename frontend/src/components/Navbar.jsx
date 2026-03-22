export default function Navbar() {
  return (
    <>
      {/* JAY.DEV logo — always visible on all screen sizes */}
      <a
        href="#home"
        className="fixed top-0 left-0 z-50 px-5 py-4 md:px-6 md:py-4 pointer-events-auto"
      >
        <div className="bg-black/40 backdrop-blur-md px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10">
          <span className="text-white font-display font-bold tracking-widest text-sm">
            JAY<span className="text-silver-base">.DEV</span>
          </span>
        </div>
      </a>

      {/* Full nav — desktop only (1024px+) */}
      <nav className="hidden lg:flex fixed w-full z-50 top-0 left-0 px-6 py-4 md:px-12 md:py-6 justify-between items-center pointer-events-none">
        {/* Spacer to push links past the logo */}
        <div className="flex items-center gap-8">
          {/* Logo placeholder — actual logo rendered above */}
          <div className="opacity-0 pointer-events-none px-6 py-3">
            <span className="text-sm">JAY.DEV</span>
          </div>

          <div className="flex gap-8 items-center bg-black/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 pointer-events-auto">
            <a href="#home" className="text-[10px] tracking-[0.3em] uppercase font-bold text-white hover:text-silver-base transition-colors">Home</a>
            <a href="#about" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">About</a>
            <a href="#evolution" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">Evolution</a>
            <a href="#resume" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">Achievements</a>
            <a href="#contact" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex gap-6 items-center bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 pointer-events-auto">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-silver-muted">
            Available for projects
          </span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </nav>
    </>
  );
}
