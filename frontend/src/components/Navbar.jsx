export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center pointer-events-none">
      <div className="flex items-center gap-8">
        <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 pointer-events-auto">
          <span className="text-white font-display font-bold tracking-widest text-sm">JAY<span className="text-silver-base">.DEV</span></span>
        </div>
        
        <div className="flex gap-8 items-center bg-black/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 pointer-events-auto">
          <a href="#home" className="text-[10px] tracking-[0.3em] uppercase font-bold text-white hover:text-silver-base transition-colors">Home</a>
          <a href="#about" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">About</a>
          <a href="#evolution" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">Evolution</a>
          <a href="#resume" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">Resume</a>
          <a href="#portfolio" className="text-[10px] tracking-[0.3em] uppercase font-bold text-silver-muted hover:text-white transition-colors">Portfolio</a>
        </div>
      </div>

      <div className="hidden md:flex gap-6 items-center bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 pointer-events-auto">
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-silver-muted">
          Available for projects
        </span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>
    </nav>
  );
}