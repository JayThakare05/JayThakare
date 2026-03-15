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

export default function TechEvolution() {
  const lineSegmentDuration = 0.8;

  return (
    <section id="evolution" className="min-h-screen bg-black relative py-40 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-0 select-none pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap">
        <span className="text-[15rem] font-display font-black text-white uppercase tracking-tighter block translate-x-1/4">
          EVOLUTION
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-white text-3xl md:text-5xl font-display font-bold tracking-widest uppercase mb-4">
            MY TECH <span className="silver-text">EVOLUTION</span>
          </h2>
          <div className="w-24 h-1 bg-silver-base"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mb-40">
          {/* Connecting Line - Desktop Only */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] hidden xl:block z-0 -translate-y-1/2">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: evolutionStages.length * lineSegmentDuration, 
                ease: "linear" 
              }}
              className="w-full h-full bg-gradient-to-r from-silver-base/5 via-silver-base to-silver-base/5 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-12 xl:gap-4 relative xl:min-h-[500px]">
            {evolutionStages.map((stage, index) => {
              const currentDelay = index * lineSegmentDuration;
              const isUp = index % 2 !== 0;

              return (
                <div key={index} className="relative flex flex-col items-center group">
                  
                  {/* node dot - Stays on the line */}
                  <div className="hidden xl:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: currentDelay,
                        ease: "backOut"
                      }}
                      className="w-5 h-5 rounded-full bg-black border-2 border-silver-base shadow-[0_0_15px_rgba(192,192,192,0.8)]"
                    />
                  </div>

                  {/* Card content - Alternating Top/Bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: isUp ? -40 : 40 }}
                    whileInView={{ opacity: 1, y: isUp ? -30 : 30 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: currentDelay + 0.3,
                      ease: "easeOut"
                    }}
                    className={`w-full max-w-[180px] xl:max-w-none relative z-10 p-5 rounded-sm bg-neutral-900/40 border border-white/5 backdrop-blur-sm
                      transition-all duration-500 hover:border-silver-base/20 hover:bg-neutral-900/80
                      hover:scale-105 group flex flex-col min-h-[200px] shadow-2xl
                      ${isUp ? 'xl:absolute xl:bottom-1/2 xl:mb-10' : 'xl:absolute xl:top-1/2 xl:mt-10'}
                    `}
                  >
                    {/* Glow Effect */}
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

                    <div className="absolute top-2 right-4 text-xl font-display font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors pointer-events-none text-right">
                      {index + 1}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Working/Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (evolutionStages.length - 1) * lineSegmentDuration + 0.5 }}
          className="flex flex-col items-center justify-center text-center space-y-6"
        >
          <div className="relative group cursor-default">
            {/* Animated Pulse Ring */}
            <div className="absolute -inset-4 bg-silver-base/10 rounded-full blur-2xl group-hover:bg-silver-base/20 transition-all duration-700 animate-pulse"></div>
            
            <div className="relative flex flex-col items-center">
              <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-silver-base/30 bg-white/5 backdrop-blur-md mb-4 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                <span className="text-white text-[10px] tracking-[0.4em] uppercase font-display font-bold">
                  Currently Learning & Working
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <FaCloud className="text-silver-base text-4xl group-hover:rotate-12 transition-transform duration-500" />
                <div className="h-10 w-[1px] bg-white/10"></div>
                <div className="text-left">
                  <h4 className="text-white text-2xl font-display font-black tracking-tighter silver-text uppercase">
                    Deep Learning & Cloud
                  </h4>
                  <p className="text-silver-muted text-xs tracking-widest font-medium uppercase mt-1">
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


