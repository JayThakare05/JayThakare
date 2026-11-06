import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const TypewriterText = ({ text, className, spanClassName = "", delay = 0, speed = 0.05 }) => {
  return (
    <div className={className}>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          className={spanClassName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + i * speed,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

const TypewriterGradientText = ({ text, className, delay = 0, speed = 0.08 }) => {
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    timeoutId = setTimeout(() => {
      let count = 0;
      intervalId = setInterval(() => {
        count++;
        setDisplayedCount(count);
        if (count >= text.length) {
          clearInterval(intervalId);
        }
      }, speed * 1000);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, speed]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder matching exact font size and line-height */}
      <span className="invisible select-none opacity-0 pointer-events-none italic" aria-hidden="true">
        {text}
      </span>
      {/* Continuous typed string with background padding to prevent clipping without affecting layout */}
      <span
        className={`absolute left-0 -top-2 whitespace-nowrap italic pt-2 pb-1 pr-6 select-none ${className}`}
      >
        {text.slice(0, displayedCount)}
      </span>
    </span>
  );
};

export default function Hero() {
  const socials = [
    {
      icon: <FaGithub />,
      url: import.meta.env.VITE_GITHUB_URL || "https://github.com/JayThakare05",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      url: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/jay-thakare05",
      label: "LinkedIn",
    },
    {
      icon: <SiLeetcode />,
      url: import.meta.env.VITE_LEETCODE_URL || "https://leetcode.com/u/Jay_Thakare/",
      label: "LeetCode",
    },
    {
      icon: <FaEnvelope />,
      url: import.meta.env.VITE_GMAIL_URL || "mailto:thakarejay3103@gmail.com",
      label: "Gmail",
    },
  ];

  // Timing calculations
  const hiDelay = 0.5;
  const jayDelay = hiDelay + "Hii, I'm".length * 0.05 + 0.2;
  const thakareDelay = jayDelay + "Jay".length * 0.08 + 0.2;
  const socialsDelay = thakareDelay + "Thakare".length * 0.08 + 0.3;
  const taglineDelay = socialsDelay + 0.5;
  const buttonDelay = taglineDelay + "Full Stack Web Developer | AI & Machine Learning Enthusiast".length * 0.03 + 0.2;

  return (
    <section
      id="home"
      className="min-h-screen bg-[#050505] relative flex flex-col justify-start overflow-hidden pt-20 sm:pt-22 md:pt-24 lg:pt-28 pb-12"
    >
      {/* Cinematic Background Image — vivid cobalt blue workspace */}
      <div
        className="absolute inset-0 z-0 opacity-85 bg-cover bg-right md:bg-center transform scale-100"
        style={{ backgroundImage: "url('/image.png?v=2')" }}
      ></div>

      {/* Ambient Cobalt Blue Glow behind workspace elements */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#0A2472]/20 rounded-full blur-[140px] pointer-events-none mix-blend-screen"></div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent"></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-12 flex flex-col items-start gap-4 md:gap-5">
        <div className="flex flex-col items-start w-full">
          <TypewriterText
            text="Hii, I'm"
            className="text-white font-display font-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl uppercase mb-1 md:mb-2 tracking-wide"
            delay={hiDelay}
          />

          <div className="flex flex-col items-start w-full">
            {/* Name — scales gracefully on mobile */}
            <div className="text-[3.2rem] leading-[0.85] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] md:leading-[0.8] font-display font-black tracking-tight mb-2 md:mb-3 text-white uppercase text-left w-full">
              <TypewriterText text="Jay" speed={0.08} delay={jayDelay} />
              <div className="relative inline-block">
                <TypewriterGradientText
                  text="Thakare"
                  speed={0.08}
                  delay={thakareDelay}
                  className="bg-gradient-to-b from-white via-[#C0C0C0] to-[#7f9ecf] bg-clip-text text-transparent font-black"
                />
                {/* Glowing Underline beneath THAKARE in #0A2472 palette */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: thakareDelay + 0.5, duration: 0.8, ease: "easeOut" }}
                  className="origin-left h-[3px] md:h-[4px] w-full bg-gradient-to-r from-[#1A53C0] via-[#0A2472] to-transparent shadow-[0_0_18px_#1A53C0] rounded-full mt-1"
                />
              </div>
            </div>

            {/* Social Icons Row — styled circular buttons with #0A2472 hover glow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: socialsDelay, duration: 0.8 }}
              className="flex gap-3.5 md:gap-5 items-center justify-start w-full mt-2 md:mt-3"
            >
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center text-silver-light text-base md:text-lg hover:border-[#1A53C0] hover:text-[#2264E5] hover:bg-[#0A2472]/20 hover:shadow-[0_0_20px_rgba(26,83,192,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="w-full max-w-2xl space-y-4 md:space-y-6 mt-1 md:mt-2">
          <TypewriterText
            text="Full Stack Web Developer | AI & Machine Learning Enthusiast"
            className="text-silver-muted text-sm md:text-lg font-medium leading-relaxed"
            delay={taglineDelay}
            speed={0.03}
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: buttonDelay, duration: 0.8 }}
            className="flex flex-wrap gap-4 md:gap-8 items-center pt-1"
          >
            {/* Primary CTA button in solid #0A2472 sapphire blue with white text and subtle blue glow */}
            <a
              href="#about"
              className="btn-cobalt px-7 md:px-9 py-3 md:py-3.5 text-[11px] font-display font-black tracking-[0.2em] uppercase"
            >
              <span>Explore More</span>
              <FaChevronRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Accent divider line in #0A2472 palette */}
            <div className="hidden md:flex items-center gap-6 border-l border-white/10 pl-8">
              <div className="w-12 h-[2px] bg-[#1A53C0] shadow-[0_0_10px_#1A53C0] rounded-full"></div>
              <p className="text-silver-muted text-[10px] tracking-[0.4em] uppercase">Building scalable &amp; intelligent systems</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
