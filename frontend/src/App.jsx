import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechEvolution from "./components/TechEvolution";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Force scroll to top on refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 opacity-30"
      animate={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(192, 192, 192, 0.1), transparent 80%)`,
      }}
    />
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
        <Portfolio />
      </RevealSection>

      {/* Aesthetic Footer */}
      <footer className="py-10 border-t border-white/5 text-center bg-black">
        <p className="text-silver-muted text-[10px] tracking-[0.4em] uppercase">
          &copy; {new Date().getFullYear()} Jay Thakare. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;