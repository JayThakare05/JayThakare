import { motion } from "framer-motion";
import {
  FaCode,
  FaGlobe,
  FaServer,
  FaTerminal,
  FaBrain,
  FaRobot,
  FaLaptopCode,
  FaCloud
} from "react-icons/fa";

const evolutionStages = [
  {
    title: "Programming Foundations",
    tech: "C, Java, Python",
    description: "Focus: Logic building and problem solving",
    icon: <FaTerminal />,
  },
  {
    title: "Web Development",
    tech: "HTML, CSS, JavaScript",
    description: "Focus: Building responsive websites",
    icon: <FaGlobe />,
  },
  {
    title: "Backend Development",
    tech: "Node.js, Express.js",
    description: "Databases: MySQL, MongoDB",
    icon: <FaServer />,
  },
  {
    title: "Full Stack Development",
    tech: "React.js, Tailwind CSS",
    description: "Project: StayVista",
    icon: <FaLaptopCode />,
  },
  {
    title: "Problem Solving",
    tech: "C++ Data Structures & Algorithms",
    description: "Advanced computational logic & complexity",
    icon: <FaCode />,
  },
  {
    title: "Artificial Intelligence",
    tech: "Machine Learning, NLP",
    description: "Projects: AutoCareer AI, AI Quiz Generator",
    icon: <FaBrain />,
  },
  {
    title: "Generative AI",
    tech: "GenAI & AI Agents",
    description: "Intelligent automation & LLM systems",
    icon: <FaRobot />,
  },
];

/* ─────────────────────────────────────────────
   Mobile vertical timeline card
───────────────────────────────────────────── */
function MobileTimelineCard({ stage, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4"
    >
      {/* Left: connector line + node dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Node */}
        <div className="w-9 h-9 rounded-full bg-black border-2 border-silver-base shadow-[0_0_12px_rgba(192,192,192,0.6)] flex items-center justify-center z-10 flex-shrink-0">
          <span className="text-silver-base text-sm">{stage.icon}</span>
        </div>
        {/* Line below — hidden on last item */}
        {!isLast && (
          <div className="w-[2px] flex-1 min-h-[32px] bg-gradient-to-b from-silver-base/60 to-silver-base/10 mt-1" />
        )}
      </div>

      {/* Right: content card */}
      <div className="pb-8 flex-1">
        <div className="bg-neutral-900/50 border border-white/8 rounded-2xl p-4 hover:border-silver-base/30 transition-all duration-400 hover:bg-neutral-900/80 shadow-xl">
          {/* Step number badge */}
          <span className="text-[8px] tracking-[0.3em] uppercase font-black text-silver-base/50 mb-2 block">
            Step {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-white text-sm font-display font-bold uppercase tracking-wide mb-1 leading-tight">
            {stage.title}
          </h3>
          <p className="text-silver-base text-[10px] font-semibold tracking-wider uppercase mb-2">
            {stage.tech}
          </p>
          <p className="text-silver-muted text-[11px] leading-relaxed italic">
            {stage.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Desktop horizontal timeline card
───────────────────────────────────────────── */
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 4, ease: "linear", delay: 0.2 }
  }
};

const nodeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "backOut" }
  }
};

const cardVariants = (isUp) => ({
  hidden: { opacity: 0, y: isUp ? -40 : 40 },
  visible: {
    opacity: 1,
    y: isUp ? -30 : 30,
    transition: { duration: 0.6, ease: "easeOut" }
  }
});

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.6, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export default function TechEvolution() {
  return (
    <section id="evolution" className="bg-black relative py-16 md:py-40 overflow-hidden">
      {/* Background text — desktop only */}
      <div className="absolute top-10 right-0 select-none pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap hidden md:block">
        <span className="text-[15rem] font-display font-black text-white uppercase tracking-tighter block translate-x-1/4">
          EVOLUTION
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-32"
        >
          <h2 className="text-white text-2xl md:text-5xl font-display font-bold tracking-widest uppercase mb-4">
            MY TECH <span className="silver-text">EVOLUTION</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-silver-base"></div>
        </motion.div>

        {/* ── MOBILE: vertical timeline ── */}
        <div className="md:hidden mb-12">
          {evolutionStages.map((stage, index) => (
            <MobileTimelineCard
              key={index}
              stage={stage}
              index={index}
              isLast={index === evolutionStages.length - 1}
            />
          ))}
        </div>

        {/* ── DESKTOP: horizontal alternating timeline ── */}
        <div className="hidden md:block">
          <motion.div
            className="relative mb-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0 } } }}
          >
            {/* Horizontal connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] hidden xl:block z-0 -translate-y-1/2">
              <motion.div
                variants={lineVariants}
                className="w-full h-full bg-gradient-to-r from-silver-base/5 via-silver-base to-silver-base/5 origin-left"
              />
            </div>

            <motion.div
              variants={gridVariants}
              className="grid xl:grid-cols-7 gap-12 xl:gap-4 relative xl:min-h-[500px]"
            >
              {evolutionStages.map((stage, index) => {
                const isUp = index % 2 !== 0;
                return (
                  <motion.div key={index} variants={itemVariants} className="relative flex flex-col items-center group">
                    {/* Node dot on line */}
                    <div className="hidden xl:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <motion.div
                        variants={nodeVariants}
                        className="w-5 h-5 rounded-full bg-black border-2 border-silver-base shadow-[0_0_15px_rgba(192,192,192,0.8)]"
                      />
                    </div>

                    {/* Card */}
                    <motion.div
                      variants={cardVariants(isUp)}
                      className={`w-full relative z-10 p-5 rounded-sm bg-neutral-900/40 border border-white/5 backdrop-blur-sm
                        transition-all duration-500 hover:border-silver-base/20 hover:bg-neutral-900/80
                        hover:scale-105 group flex flex-col shadow-2xl xl:min-h-[200px]
                        ${isUp ? "xl:absolute xl:bottom-1/2 xl:mb-10" : "xl:absolute xl:top-1/2 xl:mt-10"}
                      `}
                    >
                      <div className="absolute -inset-1 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="text-silver-base text-2xl mb-3 group-hover:scale-110 transition-transform duration-500 origin-left inline-block">
                          {stage.icon}
                        </div>
                        <h3 className="text-white text-xs lg:text-sm font-display font-bold mb-1.5 group-hover:text-silver-base transition-colors leading-tight uppercase">
                          {stage.title}
                        </h3>
                        <p className="text-silver-base font-semibold text-[9px] mb-2 tracking-wider uppercase">
                          {stage.tech}
                        </p>
                        <p className="text-silver-muted text-[10px] leading-relaxed tracking-wide italic mt-auto">
                          {stage.description}
                        </p>
                      </div>
                      <div className="absolute top-2 right-4 text-xl font-display font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors pointer-events-none">
                        {index + 1}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Currently Learning — shown on both */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center space-y-6"
        >
          <div className="relative group cursor-default">
            <div className="absolute -inset-4 bg-silver-base/10 rounded-full blur-2xl group-hover:bg-silver-base/20 transition-all duration-700 animate-pulse"></div>

            <div className="relative flex flex-col items-center">
              <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-silver-base/30 bg-white/5 backdrop-blur-md mb-4 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                <span className="text-white text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-display font-bold">
                  Currently Learning &amp; Working
                </span>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <FaCloud className="text-silver-base text-3xl md:text-4xl group-hover:rotate-12 transition-transform duration-500" />
                <div className="h-8 md:h-10 w-[1px] bg-white/10"></div>
                <div className="text-left">
                  <h4 className="text-white text-lg md:text-2xl font-display font-black tracking-tighter silver-text uppercase">
                    Deep Learning &amp; Cloud
                  </h4>
                  <p className="text-silver-muted text-[10px] tracking-widest font-medium uppercase mt-1">
                    Neural Networks <span className="mx-2 opacity-30">|</span> Advanced AWS Scaling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
