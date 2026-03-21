import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechEvolution from "./components/TechEvolution";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";


const CursorGlow = () => {
  const [mousePos, setMousePos]   = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Smooth lagging position for the outer ring
  const ringX = useSpring(-200, { stiffness: 80, damping: 20 });
  const ringY = useSpring(-200, { stiffness: 80, damping: 20 });

  // Ambient glow follows even more lazily
  const glowX = useSpring(-200, { stiffness: 40, damping: 18 });
  const glowY = useSpring(-200, { stiffness: 40, damping: 18 });

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setMousePos({ x, y });
      setIsVisible(true);
      ringX.set(x);
      ringY.set(y);
      glowX.set(x);
      glowY.set(y);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    // Detect hovering over interactive elements
    const onOver = (e) => {
      const tag = e.target.tagName;
      const role = e.target.getAttribute("role");
      setIsHovering(
        ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"].includes(tag) ||
        role === "button"
      );
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
    };
  }, [ringX, ringY, glowX, glowY]);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* ── Layer 1: Sharp silver dot (instant follow) ── */}
      <div
        className="pointer-events-none fixed z-[9999] transition-opacity duration-300"
        style={{
          left: mousePos.x,
          top:  mousePos.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="rounded-full bg-white transition-all duration-150"
          style={{
            width:  isHovering ? "10px" : "6px",
            height: isHovering ? "10px" : "6px",
            boxShadow: "0 0 8px 2px rgba(220,220,220,0.9)",
          }}
        />
      </div>

      {/* ── Layer 2: Lagging outer ring with slow spin ── */}
      <motion.div
        className="pointer-events-none fixed z-[9998]"
        style={{ left: ringX, top: ringY, opacity: isVisible ? 1 : 0 }}
      >
        {/* Spinning dashed ring */}
        <div
          style={{
            position: "absolute",
            width:  isHovering ? "52px" : "36px",
            height: isHovering ? "52px" : "36px",
            border: "1.5px solid rgba(192,192,192,0.5)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            transition: "width 0.25s ease, height 0.25s ease",
            animation: "spin-slow 4s linear infinite",
            boxShadow: "0 0 10px 1px rgba(192,192,192,0.25), inset 0 0 8px rgba(192,192,192,0.1)",
          }}
        />
        {/* Static pulsing halo ring */}
        <div
          style={{
            position: "absolute",
            width:  isHovering ? "64px" : "46px",
            height: isHovering ? "64px" : "46px",
            border: "1px solid rgba(192,192,192,0.15)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            transition: "width 0.25s ease, height 0.25s ease",
            animation: "ring-pulse 2.5s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* ── Layer 3: Large soft ambient silver glow ── */}
      <motion.div
        className="pointer-events-none fixed z-[9997]"
        style={{
          left: glowX,
          top:  glowY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.18 : 0,
          width:  "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,200,200,0.3) 0%, rgba(150,150,150,0.08) 50%, transparent 75%)",
          filter: "blur(2px)",
          transition: "opacity 0.4s ease",
        }}
      />
    </>
  );
};


const RevealSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black min-h-screen selection:bg-silver-base selection:text-black">
      <CursorGlow />

      {/* Mobile bottom nav */}
      <MobileNav />

      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-silver-base z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <Hero />

      <RevealSection>
        <About />
      </RevealSection>

      <RevealSection>
        <TechEvolution />
      </RevealSection>

      <RevealSection>
        <Resume />
      </RevealSection>

      <RevealSection>
        <Projects />
      </RevealSection>

      <RevealSection>
        <Achievements />
      </RevealSection>

      <RevealSection>
        <Contact />
      </RevealSection>

      {/* Aesthetic Footer */}
      <footer className="py-8 md:py-10 border-t border-white/5 text-center bg-black mb-14 md:mb-0">
        <p className="text-silver-muted text-[10px] tracking-[0.4em] uppercase">
          &copy; {new Date().getFullYear()} Jay Thakare. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;