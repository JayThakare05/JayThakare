import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const TypewriterText = ({ text, className, delay = 0, speed = 0.05 }) => {
  return (
    <div className={className}>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
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

export default function Hero() {
  const socials = [
    { icon: <FaGithub />, url: import.meta.env.VITE_GITHUB_URL, label: "GitHub" },
    { icon: <FaLinkedinIn />, url: import.meta.env.VITE_LINKEDIN_URL, label: "LinkedIn" },
    { icon: <SiLeetcode />, url: import.meta.env.VITE_LEETCODE_URL, label: "LeetCode" },
    { icon: <FaEnvelope />, url: import.meta.env.VITE_GMAIL_URL, label: "Gmail" },
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
      className="min-h-screen bg-black relative flex items-center overflow-hidden"
    >
      {/* Cinematic Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-60 mix-blend-luminosity grayscale bg-cover bg-right md:bg-center transform scale-105"
        style={{ backgroundImage: "url('/image.png')" }}
      ></div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-8">
        <div className="flex flex-col items-start">
          <TypewriterText 
            text="Hii, I'm" 
            className="text-white font-display font-black text-4xl md:text-6xl uppercase mb-4"
            delay={hiDelay}
          />

          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-[8.5rem] font-display font-black leading-[0.8] tracking-tight mb-8 text-white uppercase text-left w-full translate-x-[-4px]">
              <TypewriterText text="Jay" speed={0.08} delay={jayDelay} />
              <div className="silver-text pr-8 inline-block italic">
                <TypewriterText text="Thakare" speed={0.08} delay={thakareDelay} />
              </div>
            </div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: socialsDelay, duration: 0.8 }}
              className="flex gap-10 items-center justify-center w-full mt-2"
            >
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver-muted text-4xl md:text-5xl hover:text-white hover:scale-125 transition-all duration-300 ease-out"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl space-y-10">
          <TypewriterText 
            text="Full Stack Web Developer | AI & Machine Learning Enthusiast"
            className="text-silver-muted text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
            delay={taglineDelay}
            speed={0.03}
          />

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: buttonDelay, duration: 0.8 }}
            className="flex flex-wrap gap-8 items-center"
          >
            <a
              href="#about"
              className="silver-outline px-12 py-5 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all"
            >
              Explore More
            </a>
            <div className="hidden md:flex items-center gap-6 border-l border-white/10 pl-8">
              <div className="w-12 h-[1px] bg-white/20"></div>
              <p className="text-silver-muted text-[10px] tracking-[0.4em] uppercase">Building scalable & intelligent systems</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




