import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#evolution", label: "Evolution", id: "evolution" },
  { href: "#resume", label: "Skills", id: "resume" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#achievements", label: "Achievements", id: "achievements" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const getActiveSection = useCallback(() => {
    const triggerY = window.scrollY + window.innerHeight * 0.35;
    let current = navLinks[0].id;
    for (const link of navLinks) {
      const el = document.getElementById(link.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top <= triggerY) {
        current = link.id;
      }
    }
    return current;
  }, []);

  useEffect(() => {
    setActiveSection(getActiveSection());
    const onScroll = () => setActiveSection(getActiveSection());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [getActiveSection]);

  return (
    <>
      {/* JAY.DEV logo — always visible on all screen sizes with #0A2472 blue dot */}
      <a
        href="#home"
        className="fixed top-0 left-0 z-50 px-5 py-4 md:px-6 md:py-4 pointer-events-auto group"
      >
        <div className="bg-black/60 backdrop-blur-md px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10 group-hover:border-[#1A53C0]/40 group-hover:shadow-[0_0_15px_rgba(26,83,192,0.25)] transition-all duration-300">
          <span className="text-white font-display font-bold tracking-widest text-sm flex items-center">
            JAY<span className="text-[#1A53C0] drop-shadow-[0_0_8px_#1A53C0] font-black">.</span><span className="text-silver-base">DEV</span>
          </span>
        </div>
      </a>

      {/* Full nav — desktop only (1024px+) */}
      <nav className="hidden lg:flex fixed w-full z-50 top-0 left-0 px-6 py-4 md:px-12 md:py-6 justify-between items-center pointer-events-none">
        {/* Spacer to push links past the logo */}
        <div className="flex items-center gap-8">
          <div className="opacity-0 pointer-events-none px-6 py-3">
            <span className="text-sm">JAY.DEV</span>
          </div>

          <div className="flex gap-8 items-center bg-black/60 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 pointer-events-auto shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-200 group ${
                    isActive ? "text-white" : "text-silver-muted hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Active / Hover menu underline in #0A2472 palette */}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0A2472] to-[#1A53C0] shadow-[0_0_8px_#1A53C0] rounded-full transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Available for projects with #0A2472 Palette Status Dot */}
        <div className="flex gap-4 items-center bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 pointer-events-auto hover:border-[#1A53C0]/40 hover:shadow-[0_0_15px_rgba(26,83,192,0.2)] transition-all duration-300">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-silver-muted">
            Available for projects
          </span>
          <div className="w-2 h-2 rounded-full bg-[#1A53C0] shadow-[0_0_10px_#1A53C0] animate-pulse"></div>
        </div>
      </nav>
    </>
  );
}
