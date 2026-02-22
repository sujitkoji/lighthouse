"use client";

import { motion } from "framer-motion";

export default function Overlay() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12">
      
      {/* 📡 TOP NAV EXPERIMENT */}
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-white/40 uppercase vertical-text mix-blend-difference"
        >
          Coordinates: 51.5074° N, 0.1278° W
        </motion.div>
        
        <div className="flex flex-col items-end gap-2 text-right">
          <motion.h3 
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-xs tracking-widest text-white/60 font-light"
          >
            LIGHTHOUSE / 2026
          </motion.h3>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white/30" />
        </div>
      </div>

      {/* 🗼 THE MASTER TYPOGRAPHY (Awwwards Style) */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Layered Text for Depth */}
          <h1 className="text-[11vw] leading-[0.8] font-black text-transparent stroke-text tracking-tighter mix-blend-overlay opacity-20">
            OCEANIC
          </h1>
          <h1 className="text-[14vw] leading-[0.8] font-black text-white tracking-tighter -mt-[5vw] drop-shadow-2xl">
            GUIDE
          </h1>
          
          {/* Abstract Scanning Line */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-white/20 blur-[1px] z-20"
          />
        </motion.div>
      </div>

      {/* 🌊 BOTTOM STATUS BAR */}
      <div className="flex justify-between items-end border-t border-white/10 pt-6">
        <div className="max-w-xs">
          <p className="text-[9px] leading-relaxed text-white/40 uppercase tracking-widest">
            A architectural beacon standing against the tides of time. 
            Illuminating the path for those lost at sea.
          </p>
        </div>

        <div className="flex items-center gap-8">
            <div className="hidden md:block">
                <span className="text-[8px] text-white/30 tracking-widest block mb-1 uppercase text-right">Signal Strength</span>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div 
                            key={i}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            className="w-1 h-3 bg-white/60"
                        />
                    ))}
                </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-[#28daff]/50 hover:text-white transition-colors duration-500 pointer-events-auto"
            >
              Explore Horizon
            </motion.button>
        </div>
      </div>

      {/* CSS for Stroke Text (Put in your globals.css) */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
}