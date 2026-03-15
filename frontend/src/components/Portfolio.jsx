export default function Portfolio() {
  const projects = [
    { title: "Smart Attendance", desc: "Face recognition + QR attendance system", category: "AI / ML" },
    { title: "Fraud Detection", desc: "ML model to detect banking fraud", category: "Data Science" },
    { title: "Streaming UI", desc: "Responsive high-performance entertainment UI", category: "Full Stack" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="mb-20">
          <h2 className="text-white text-3xl font-display font-bold tracking-widest border-b border-white/10 pb-2 inline-block mb-4">
            WORKS
          </h2>
          <p className="text-silver-muted text-xs tracking-[0.4em] uppercase">Featured Projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-10 group cursor-pointer hover:border-white/30 transition-all duration-500 hover:-translate-y-3"
            >
              <p className="text-silver-muted text-[10px] tracking-[0.3em] uppercase mb-6 group-hover:text-silver transition-colors">
                {project.category}
              </p>
              <h2 className="text-2xl font-display font-black text-white mb-4 group-hover:silver-text transition-all duration-500">
                {project.title}
              </h2>
              <p className="text-silver-muted text-sm leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                {project.desc}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-widest uppercase font-bold text-white group-hover:translate-x-2 transition-transform duration-500">View Project</span>
                <div className="w-8 h-[1px] bg-silver/30 group-hover:w-12 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}