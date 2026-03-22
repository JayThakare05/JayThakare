import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Projects", value: "3+ Done" },
    { label: "AI Focus", value: "GenAI/ML" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="bg-black relative py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative background text — hidden on small screens so it doesn't spill */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 select-none pointer-events-none opacity-[0.02] transform origin-left hidden md:block">
        <span className="text-[20rem] font-display font-black text-white whitespace-nowrap">
          WHO I AM
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 px-5 md:px-12 items-center relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="order-2 lg:order-1"
        >
          <motion.h2
            variants={itemVariants}
            className="text-white text-2xl md:text-3xl font-display font-bold tracking-widest border-b border-white/10 pb-2 inline-block mb-8 md:mb-12"
          >
            ABOUT ME
          </motion.h2>

          <div className="space-y-5 md:space-y-8">
            <motion.p
              variants={itemVariants}
              className="text-white text-xl md:text-3xl font-display font-medium leading-tight"
            >
              I am a <span className="silver-text">Passionate Developer</span> who enjoys building intelligent systems and modern web applications.
            </motion.p>

            <motion.p variants={itemVariants} className="text-silver-muted leading-relaxed text-base md:text-lg">
              My journey in programming started with foundational languages like <strong className="text-white border-b border-white/5 pb-0.5">C, Java, and Python</strong>, which helped me develop strong problem-solving skills and a deep understanding of software fundamentals.
            </motion.p>

            <motion.p variants={itemVariants} className="text-silver-muted leading-relaxed text-base md:text-lg">
              As I progressed, I developed a strong interest in <strong className="text-white border-b border-white/5 pb-0.5">Full Stack Development</strong> and began building dynamic applications using JavaScript, Node.js, and modern frontend frameworks like React.
            </motion.p>

            <motion.p variants={itemVariants} className="text-silver-muted leading-relaxed text-base md:text-lg">
              I also explore <strong className="text-white border-b border-white/5 pb-0.5">Artificial Intelligence</strong>, machine learning models, and Generative AI technologies to create smart applications that automate tasks and enhance user experience.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/5 items-center"
          >
            {stats.map((stat, index) => (
              <div key={index} className="group cursor-default">
                <p className="text-[9px] tracking-[0.3em] uppercase text-silver-muted mb-2 group-hover:text-white transition-colors">
                  {stat.label}
                </p>
                <p className="text-lg md:text-xl font-display font-bold text-white uppercase italic">
                  {stat.value}
                </p>
              </div>
            ))}

            <div className="col-span-2 md:col-span-2 flex justify-start md:justify-end mt-4 md:mt-0">
              <a
                href="/resume/RESUME.pdf"
                download="Jay_Thakare_Resume.pdf"
                className="px-10 py-4 bg-silver-base rounded-[1.5rem] text-black font-display font-black text-[12px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-white hover:scale-105 shadow-xl text-center block w-full sm:w-auto"
              >
                GET RESUME
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile image — shown first on mobile (order-1) and last on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 relative group max-w-sm mx-auto w-full lg:max-w-none"
        >
          {/* Abstract corner markers */}
          <div className="absolute top-0 left-0 w-10 h-10 md:w-12 md:h-12 border-l border-t border-white/20 -mt-3 -ml-3 group-hover:border-white/50 transition-all duration-500"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 md:w-12 md:h-12 border-r border-b border-white/20 -mb-3 -mr-3 group-hover:border-white/50 transition-all duration-500"></div>

          <div className="relative z-10 overflow-hidden rounded-sm border border-white/5">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="https://res.cloudinary.com/dbv0toshr/image/upload/v1774079549/me_zuz1f3.png"
              alt="Jay Thakare"
              className="w-full aspect-[4/5] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 contrast-110 brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 opacity-10 pointer-events-none select-none">
            <p className="text-[5rem] md:text-[8rem] font-display font-black text-white leading-none">J.T</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
