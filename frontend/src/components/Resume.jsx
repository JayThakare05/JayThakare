import { motion } from "framer-motion";
import {
  FaCode, FaTerminal, FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaBootstrap, FaGithub, FaDatabase, FaServer, FaBrain, FaRobot,
  FaCogs, FaTools, FaCloud, FaLaptopCode, FaLayerGroup
} from "react-icons/fa";
import {
  SiJavascript, SiCplusplus, SiTailwindcss, SiExpress, SiMongodb,
  SiMysql, SiSqlite, SiFastapi, SiStreamlit, SiLangchain, SiGooglecolab
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
export default function Resume() {
  const primarySkills = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <FaCode className="text-silver-muted" /> },
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> }
      ]
    },
    {
      title: "AI / ML / GenAI",
      skills: [
        { name: "ML Models", icon: <FaBrain className="text-[#FF6F61]" /> },
        { name: "AI Agents", icon: <FaRobot className="text-silver-base" /> },
        { name: "GenAI Apps", icon: <SiLangchain className="text-[#13B67A]" /> },
        { name: "NLP", icon: <FaTerminal className="text-silver-muted" /> }
      ]
    }
  ];

  const secondarySkills = [
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        // { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> }
      ]
    },
    {
      title: "Tools & Tech",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Vs Code ", icon: <VscVscode className="text-white" /> },
        { name: "Google Colab", icon: <SiGooglecolab className="text-white" /> },
        //{ name: "REST APIs", icon: <FaCogs className="text-silver-muted" /> },
        //{ name: "Streamlit", icon: <SiStreamlit className="text-[#FF4B4B]" /> },
        //{ name: "FastAPI", icon: <SiFastapi className="text-[#05998B]" /> },
        //{ name: "Cloud Deployment", icon: <FaCloud className="text-[#232F3E]" /> }
      ]
    },
    {
      title: "Problem Solving",
      skills: [
        { name: "Data Structures", icon: <FaLayerGroup className="text-silver-base" /> },
        { name: "Algorithms", icon: <FaCogs className="text-silver-muted" /> },
        { name: "C++ Solving", icon: <SiCplusplus className="text-[#00599C]" /> }
      ]
    }
  ];

  const marqueeSkills = [
    "React", "Node.js", "Python", "AI", "ML", "Git", "C++", "DSA", "SQL", "MongoDB", "Tailwind", "REST APIs", "FastAPI"
  ];

  return (
    <section id="resume" className="py-32 bg-black relative overflow-hidden">
      {/* Subtle Background Mark */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-silver-base/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="mb-24">
          <h2 className="text-white text-4xl font-display font-bold tracking-widest border-b border-white/10 pb-4 inline-block mb-6 uppercase">
            Tech <span className="silver-text italic">Stack</span>
          </h2>
          <p className="text-silver-muted text-xs tracking-[0.5em] uppercase font-bold pl-1">Engineering Excellence</p>
        </div>

        {/* Primary Categories */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-24 mb-32">
          {primarySkills.map((category, idx) => (
            <div key={idx} className="group">
              <h3 className="text-white text-[11px] tracking-[0.4em] font-bold uppercase mb-12 border-b border-white/10 pb-2 inline-block group-hover:border-silver-base transition-all duration-500">
                {category.title}
              </h3>
              <div className="space-y-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5 group/item"
                  >
                    <div className="text-2xl filter grayscale opacity-40 group-hover/item:opacity-100 group-hover/item:grayscale-0 transition-all duration-500">
                      {skill.icon}
                    </div>
                    <span className="text-silver-muted text-[12px] tracking-[0.1em] uppercase group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Enhancement */}
        <div className="relative py-24 border-y border-white/5 bg-white/[0.01] -mx-12 px-12 mb-32 overflow-hidden">
          <motion.div
            className="flex gap-24 whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span key={i} className="text-silver-muted/20 text-5xl md:text-7xl font-display font-black uppercase hover:text-silver-base transition-all duration-700 cursor-default px-4">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Secondary Categories */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          {secondarySkills.map((category, idx) => (
            <div key={idx} className="group">
              <h3 className="text-white text-[11px] tracking-[0.4em] font-bold uppercase mb-12 border-b border-white/10 pb-2 inline-block group-hover:border-silver-base transition-all duration-500">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="text-xl opacity-20 filter grayscale group-hover/item:opacity-80 group-hover/item:grayscale-0 transition-all duration-500">
                      {skill.icon}
                    </div>
                    <span className="text-silver-muted text-[12px] tracking-[0.1em] uppercase font-display group-hover/item:text-white transition-colors cursor-default">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


