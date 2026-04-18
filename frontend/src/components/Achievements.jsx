import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaTerminal, FaCode, FaExternalLinkAlt, FaPlus, FaTimes, FaTrophy } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import achievementData from "../data/achievements.json";

// Icon Mapping for JSON data
const iconMap = {
  graduation: FaGraduationCap,
  certificate: FaCertificate,
  terminal: FaTerminal,
  code: FaCode,
  leetcode: SiLeetcode,
  winner: FaTrophy
};

const AchievementCard = ({ iconName, title, subtitle, details, date, category, highlight, imageUrl, clickUrl, onPreview }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[iconName] || FaCertificate;

  // Detect type based on imageUrl (for card display) and clickUrl (for navigation)
  const isPdf = imageUrl && imageUrl.toLowerCase().endsWith('.pdf');
  const isImage = imageUrl && (imageUrl.toLowerCase().endsWith('.jpg') || imageUrl.toLowerCase().endsWith('.jpeg') || imageUrl.toLowerCase().endsWith('.png') || imageUrl.toLowerCase().endsWith('.webp'));

  const previewUrl = isPdf ? `${imageUrl}#toolbar=0&navpanes=0&scrollbar=0` : null;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => clickUrl && onPreview(clickUrl, title)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-silver-base/30 shadow-2xl flex flex-col h-[420px] ${clickUrl ? 'cursor-pointer' : ''}`}
    >
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-silver-base/5 rounded-full blur-3xl group-hover:bg-silver-base/10 transition-colors duration-500"></div>

      {/* Media/Content Section */}
      <div className="relative h-full flex flex-col overflow-hidden">
        {isPdf ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-neutral-900">
            {/* Live PDF Preview */}
            <iframe
              src={previewUrl}
              className={`w-full h-full border-none pointer-events-none transition-all duration-700 ${isHovered ? 'opacity-30 blur-[1px] scale-105' : 'opacity-100'}`}
              title={title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

          </div>
        ) : isImage ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-neutral-900">
            {/* Image Preview */}
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-30 blur-[1px] scale-105' : 'opacity-100'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
          </div>
        ) : (
          <div className="p-8 border-b border-white/5 bg-white/[0.02]">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Icon className="text-2xl text-silver-base" />
              </div>
              <span className="text-[8px] tracking-[0.3em] uppercase font-black text-white/30 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                {category}
              </span>
            </div>
          </div>
        )}


        {/* Text Content stays visible (unless overlay is active) */}
        <div className="relative z-10 p-8 flex flex-col flex-1">
          <div className={`mb-auto transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            {(isPdf || isImage) && (

                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                        <Icon className="text-2xl text-silver-base" />
                    </div>
                    <span className="text-[8px] tracking-[0.3em] uppercase font-black text-white/30 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                        {category}
                    </span>
                </div>
            )}
            
            <h3 className={`text-xl font-display font-bold text-white mb-1 transition-all duration-500 leading-tight uppercase tracking-tight`}>
                {title}
            </h3>
            <p className="text-silver-base/80 text-xs font-medium tracking-wide italic opacity-80 mb-2">
                {subtitle}
            </p>
             {highlight && (
              <span className="inline-block text-[9px] font-display font-black text-silver-base tracking-widest uppercase bg-silver-base/10 px-3 py-1 rounded border border-silver-base/20">
                {highlight}
              </span>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-center opacity-60 mt-auto">
            <span className="text-[8px] tracking-[0.4em] text-silver-muted uppercase font-black">
              Timeline
            </span>
            <span className="text-[10px] text-white font-display font-bold tracking-widest">
              {date}
            </span>
          </div>
        </div>

        {/* OVERLAY DESCRIPTION - Absolutely positioned */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-20 bg-black/90 backdrop-blur-md p-8 flex flex-col justify-center"
            >
              <div className="mb-6 flex items-center gap-4">
                 <Icon className="text-2xl text-silver-base" />
                 <h4 className="text-lg font-display font-bold text-white uppercase tracking-tight">{title}</h4>
              </div>

              <div className="space-y-4">
                {details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4 group/item">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-silver-base shadow-[0_0_8px_rgba(192,192,192,0.5)]"></div>
                    <p className="text-silver-muted text-[11px] leading-relaxed uppercase tracking-widest font-medium group-hover/item:text-white transition-all">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between group/link">
                 <span className="text-[9px] tracking-[0.3em] uppercase text-silver-base font-bold">View Full Document</span>
                 <FaExternalLinkAlt className="text-silver-base text-sm group-hover/link:scale-125 transition-transform" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Achievements() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedDoc, setSelectedDoc] = useState(null);
  
  const handlePreview = (clickUrl, title) => {
    const isPdf = clickUrl && clickUrl.toLowerCase().endsWith('.pdf');
    const isImage = clickUrl && (clickUrl.toLowerCase().endsWith('.jpg') || clickUrl.toLowerCase().endsWith('.jpeg') || clickUrl.toLowerCase().endsWith('.png') || clickUrl.toLowerCase().endsWith('.webp'));
    
    if (isPdf || isImage) {
      setSelectedDoc({ url: clickUrl, title, isPdf, isImage });
    } else {
      window.open(clickUrl, "_blank");
    }
  };

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  const currentAchievements = achievementData.slice(0, visibleCount);
  const hasMore = achievementData.length > visibleCount;

  return (
    <section id="achievements" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 rotate-90 select-none pointer-events-none opacity-[0.02] transform origin-right hidden md:block">
        <span className="text-[15rem] font-display font-black text-white whitespace-nowrap">
          ACHIEVEMENTS
        </span>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-silver-base/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 w-full relative z-10">
        <div className="mb-10 md:mb-20 text-center md:text-left">
          <h2 className="text-white text-2xl md:text-4xl font-display font-bold tracking-widest border-b border-white/10 pb-4 inline-block mb-4 md:mb-6 uppercase">
             <span className="silver-text">Achievements</span>
          </h2>
          <p className="text-silver-muted text-xs tracking-[0.5em] uppercase font-bold pl-1">
            Technical Foundations & Certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentAchievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.id} 
              iconName={achievement.icon} 
              {...achievement} 
              onPreview={handlePreview}
            />
          ))}

          {/* See More Option as the 6th Slot (or next available slot) */}
          {hasMore && (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                onClick={handleSeeMore}
                className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-silver-base/30 shadow-xl flex flex-col items-center justify-center h-[420px] cursor-pointer"
            >
                <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="p-6 bg-silver-base/10 rounded-full border border-silver-base/20 group-hover:scale-110 group-hover:bg-silver-base/20 transition-all duration-500 shadow-[0_0_30px_rgba(192,192,192,0.1)]">
                        <FaPlus className="text-4xl text-silver-base animate-pulse" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-display font-bold text-white uppercase tracking-widest mb-2 group-hover:silver-text transition-colors">See More</h3>
                        <p className="text-silver-muted text-[10px] tracking-[0.3em] uppercase font-bold">Discover More Milestones</p>
                    </div>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* DOCUMENT PREVIEW MODAL */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh] md:h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg md:text-xl font-display font-bold uppercase tracking-widest">{selectedDoc.title}</h3>
                  <p className="text-silver-muted text-[10px] tracking-[0.4em] uppercase font-bold mt-1">Certificate Preview</p>
                </div>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300 hover:scale-110 active:scale-95 group"
                >
                  <FaTimes className="text-lg group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Content */}
              <div className="w-full h-full pt-20 pb-4 px-4 overflow-auto flex items-center justify-center">
                {selectedDoc.isPdf ? (
                  <iframe
                    src={`${selectedDoc.url}#toolbar=0`}
                    className="w-full h-full border-none rounded-lg"
                    title={selectedDoc.title}
                  />
                ) : (
                  <img
                    src={selectedDoc.url}
                    alt={selectedDoc.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

