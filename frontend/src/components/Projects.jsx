import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import projectList from "../data/projects.json";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Decorative Text — desktop only to prevent overflow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 select-none pointer-events-none opacity-[0.02] transform origin-left hidden md:block">
        <span className="text-[20rem] font-display font-black text-white whitespace-nowrap">
          PROJECTS
        </span>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-silver-base/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 w-full relative z-10">
        <div className="mb-12 md:mb-24">
          <h2 className="text-white text-3xl md:text-4xl font-display font-bold tracking-widest border-b border-white/10 pb-4 inline-block mb-4 md:mb-6 uppercase">
            Featured <span className="silver-text">Projects</span>
          </h2>
          <p className="text-silver-muted text-xs tracking-[0.5em] uppercase font-bold pl-1">Selected Work &amp; Innovations</p>
        </div>

        {/* Single column on mobile, 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projectList.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => window.open(project.url, "_blank")}
              className="group cursor-pointer relative flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-white/10 mb-6 md:mb-10 bg-neutral-900 shadow-2xl">
                {/* Mobile: always full color */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover md:hidden"
                />
                {/* Desktop: grayscale → color on hover */}
                <motion.img
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                    opacity: hoveredIndex === index ? 1 : 0.6,
                    filter: hoveredIndex === index ? "grayscale(0%)" : "grayscale(100%)"
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hidden md:block"
                />

                {/* External Link Overlay — desktop hover only */}
                <motion.div
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute top-4 right-4 md:top-6 md:right-6 hidden md:block"
                >
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20">
                    <FaExternalLinkAlt className="text-white text-sm" />
                  </div>
                </motion.div>

                {/* Mobile: always-visible link icon */}
                <div className="absolute top-4 right-4 md:hidden">
                  <div className="bg-black/50 backdrop-blur-md p-2.5 rounded-full border border-white/20">
                    <FaExternalLinkAlt className="text-white text-xs" />
                  </div>
                </div>
              </div>


              {/* Content Section */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <p className="text-silver-muted text-[11px] tracking-[0.4em] uppercase font-bold">
                    {project.category}
                  </p>
                  <div className={`h-[1px] flex-1 bg-white/10 ${hoveredIndex === index ? 'bg-silver-base/30' : ''} transition-all duration-700`}></div>
                </div>

                <div className="mb-3">
                  <h3 className={`text-2xl md:text-4xl font-display font-black text-white ${hoveredIndex === index ? 'silver-text' : ''} transition-all duration-500 leading-tight mb-2 uppercase tracking-tight`}>
                    {project.title}
                  </h3>
                  <p className="text-silver-muted/80 text-xs md:text-sm tracking-wide italic font-medium uppercase font-display">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description — always shows on mobile (no hover on touch), animated on desktop */}
                <div className="mt-3 md:mt-0">
                  <p className="text-silver-muted text-sm leading-relaxed tracking-wide pt-3 md:pt-0 md:hidden border-t border-white/5 font-sans">
                    {project.desc}
                  </p>
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden hidden md:block"
                      >
                        <p className="text-silver-muted text-sm leading-relaxed tracking-wide pt-4 border-t border-white/5 font-sans">
                          {project.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className={`mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between ${hoveredIndex === index ? 'border-silver-base/30' : ''} transition-colors`}>
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className={`text-[10px] tracking-[0.4em] uppercase font-bold ${hoveredIndex === index ? 'text-silver-base' : 'text-white/40'} transition-colors`}>See Live Project</span>
                    <motion.div
                      animate={{ width: hoveredIndex === index ? 80 : 48 }}
                      className={`h-[1px] ${hoveredIndex === index ? 'bg-silver-base' : 'bg-white/10'} transition-all duration-700`}
                    />
                  </div>
                  <FaExternalLinkAlt className={`${hoveredIndex === index ? 'text-silver-base' : 'text-white/20'} transition-colors`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
