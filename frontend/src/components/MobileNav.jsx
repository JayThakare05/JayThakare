import { useEffect, useState, useCallback } from "react";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaTrophy } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";

const navItems = [
  { href: "#home",         sectionId: "home",         icon: <FaHome />,      label: "Home" },
  { href: "#about",        sectionId: "about",        icon: <FaUser />,      label: "About" },
  { href: "#evolution",    sectionId: "evolution",    icon: <MdTimeline />,  label: "Journey" },
  { href: "#resume",       sectionId: "resume",       icon: <FaCode />,      label: "Skills" },
  { href: "#projects",     sectionId: "projects",     icon: <FaBriefcase />, label: "Work" },
  { href: "#achievements", sectionId: "achievements", icon: <FaTrophy />,    label: "Awards" },
  { href: "#contact",      sectionId: "contact",      icon: <FaEnvelope />,  label: "Contact" },
];

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("home");

  const getActiveSection = useCallback(() => {
    // Use a trigger line at 40% from the top of the viewport.
    // The active section is the LAST one whose top edge has crossed that line.
    const triggerY = window.scrollY + window.innerHeight * 0.4;

    let currentSection = navItems[0].sectionId;

    for (const { sectionId } of navItems) {
      const el = document.getElementById(sectionId);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top <= triggerY) {
        currentSection = sectionId;
      }
    }

    return currentSection;
  }, []);

  useEffect(() => {
    // Set immediately on mount
    setActiveSection(getActiveSection());

    const onScroll = () => {
      setActiveSection(getActiveSection());
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [getActiveSection]);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-white/10">
      <div className="flex items-center justify-around px-1 py-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.sectionId;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all duration-200 ${
                isActive ? "text-white" : "text-white/30 hover:text-white/60"
              }`}
            >
              {/* Icon */}
              <span
                className={`transition-all duration-200 ${
                  isActive
                    ? "text-silver-base text-xl scale-110"
                    : "text-base scale-100"
                }`}
              >
                {item.icon}
              </span>

              {/* Label */}
              <span
                className={`text-[8px] tracking-widest uppercase transition-all duration-200 ${
                  isActive ? "font-black text-silver-base" : "font-medium"
                }`}
              >
                {item.label}
              </span>

              {/* Active dot */}
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-silver-base shadow-[0_0_6px_rgba(192,192,192,0.9)] mt-0.5" />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
