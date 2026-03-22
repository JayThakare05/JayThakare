import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaUser, FaPhoneAlt, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });

  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setStatus("Thank you! Jay will reach out to you shortly ✨");
        setFormData({ name: "", contact: "", message: "" });
        setTimeout(() => { setIsSent(false); setStatus(""); }, 5000);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Something went wrong. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-40 bg-black relative overflow-hidden">

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-silver-base/5 rounded-full blur-[150px] translate-y-[-20%] translate-x-[20%] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-silver-base/5 rounded-full blur-[120px] translate-y-[20%] translate-x-[-20%] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-5 md:px-12 w-full relative z-20">

        {/* Section Header */}
        <div className="mb-12 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-normal md:tracking-wide border-b border-white/10 pb-4 md:pb-8 mb-4 md:mb-6 uppercase w-full text-center">
              Get In <span className="silver-text italic">Touch</span>
            </h2>
            <p className="text-silver-muted text-[10px] md:text-xs tracking-[0.5em] md:tracking-[0.8em] uppercase font-black opacity-60">
              Let's build something extraordinary together
            </p>
          </motion.div>
        </div>

        {/* Main grid — stacked on mobile, side-by-side on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-display font-bold uppercase tracking-widest mb-4 md:mb-6">Contact Info</h3>
              <p className="text-silver-muted text-sm leading-relaxed mb-6 md:mb-8">
                Have a project in mind? Reach out and let's discuss how we can bring your ideas to life.
              </p>

              <div className="space-y-4 md:space-y-6">
                <a href="mailto:thakarejay3103@gmail.com" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-silver-base/50 transition-all duration-300 flex-shrink-0">
                    <FaEnvelope className="text-lg md:text-xl text-silver-muted group-hover:text-silver-base transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-silver-muted text-[10px] tracking-[0.2em] uppercase font-black block mb-1 opacity-50">Email Me</span>
                    <span className="text-white text-xs md:text-sm font-bold tracking-wider hover:text-silver-base transition-colors break-all">thakarejay3103@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 md:gap-6 group cursor-default">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-silver-base/50 transition-all duration-300 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                  <div className="min-w-0">
                    <span className="text-silver-muted text-[10px] tracking-[0.2em] uppercase font-black block mb-1 opacity-50">Current Status</span>
                    <span className="text-white text-xs md:text-sm font-bold tracking-wider">Available for globally remote roles</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name + Contact — stacked on mobile, 2-col on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="text-silver-muted text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block pl-1">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-silver-muted/50 transition-colors text-sm" />
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="E.g. Jay Thakare"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm font-medium focus:outline-none focus:border-silver-base/50 focus:bg-white/[0.05] transition-all placeholder:text-white/10"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-silver-muted text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block pl-1">
                      Contact Info
                    </label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-silver-muted/50 transition-colors text-sm" />
                      <input
                        required
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Email or Phone"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm font-medium focus:outline-none focus:border-silver-base/50 focus:bg-white/[0.05] transition-all placeholder:text-white/10"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="text-silver-muted text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block pl-1">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project idea..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-white text-sm font-medium focus:outline-none focus:border-silver-base/50 focus:bg-white/[0.05] transition-all placeholder:text-white/10 resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    type="submit"
                    className="w-full relative group/btn overflow-hidden rounded-xl p-[2px] disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-silver-muted via-silver-base to-silver-muted opacity-30 group-hover/btn:opacity-100 transition-opacity"></div>
                    <div className="relative bg-black rounded-xl py-4 px-6 flex justify-center items-center gap-3 transition-colors group-hover/btn:bg-transparent">
                      <span className="text-white text-[11px] tracking-[0.35em] uppercase font-black transition-colors group-hover/btn:text-black">
                        {isLoading ? "Sending..." : isSent ? "Message Sent!" : "Send Message"}
                      </span>
                      {!isLoading && !isSent && (
                        <FaPaperPlane className="text-silver-base text-xs transition-all group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 group-hover/btn:text-black" />
                      )}
                      {isSent && (
                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-black text-[9px] font-bold">✓</span>
                        </div>
                      )}
                    </div>
                  </motion.button>

                  {status && (
                    <p className={`text-center text-[10px] tracking-widest uppercase font-bold ${isSent ? "text-green-500" : "text-red-400"}`}>
                      {status}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 group"
        >
          <div className="relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8 hover:border-silver-base/30 transition-all duration-700 shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-silver-base/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-silver-base/10 transition-colors pointer-events-none"></div>

            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-silver-base/30 transition-all duration-500 shadow-xl overflow-hidden relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-silver-base/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <FaFileDownload className="text-2xl text-silver-muted group-hover:text-silver-base group-hover:scale-110 transition-all duration-500" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-white text-lg md:text-2xl font-display font-bold uppercase tracking-widest mb-1">Career Portfolio</h3>
                <p className="text-silver-muted text-[10px] tracking-[0.4em] uppercase font-black opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">Download my latest resume · PDF</p>
              </div>
            </div>

            <motion.a
              href="/resume/RESUME.pdf"
              target="_blank"
              download="Jay_Thakare_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-4 md:py-5 bg-silver-base rounded-2xl text-black font-display font-black text-[11px] tracking-[0.3em] uppercase shadow-[0_0_30px_rgba(192,192,192,0.2)] hover:shadow-[0_0_50px_rgba(192,192,192,0.4)] transition-all duration-500 relative z-10 block whitespace-nowrap"
            >
              Get Resume
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
