"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Overlay() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12 overflow-hidden">
      
       <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

       <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4)_100%)]" />

       <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-0 right-0 h-full w-full md:w-[450px] bg-black/80 backdrop-blur-2xl z-50 pointer-events-auto border-l border-white/5 p-12 flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-[0.5em] text-red-500 font-bold uppercase">Archive / 01</span>
                <button 
                  onClick={() => setShowInfo(false)}
                  className="text-white/60 hover:text-white transition-colors text-[10px] tracking-widest uppercase"
                >
                  [ Close ]
                </button>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
                  The Lighthouse <br /> Legacy
                </h2>
                <div className="h-[2px] w-12 bg-red-600" />
                <p className="text-white/50 text-xs leading-relaxed tracking-wide font-light">
                  Lighthouse is not merely a structure; it is a digital sentinel. Standing at the edge of the network, it filters the noise of the vast oceanic data streams. 
                </p>
                <p className="text-white/50 text-xs leading-relaxed tracking-wide font-light">
                  Every pulse of its light represents a packet of truth delivered to the distant shores of the user interface.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-[8px] text-white/20 uppercase tracking-widest mb-1">Optics</p>
                  <p className="text-white font-mono text-xs italic underline underline-offset-4">Fresnel Gen-V</p>
                </div>
                <div>
                  <p className="text-[8px] text-white/20 uppercase tracking-widest mb-1">Range</p>
                  <p className="text-white font-mono text-xs">24 Nautical Miles</p>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-white/20 font-mono tracking-tighter">
              © 2026 SUJIT KOJI // ALL RIGHTS RESERVED
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-start z-10">
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
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            className="h-[1px] bg-gradient-to-r from-transparent to-white/30" 
          />
        </div>
      </div>

      <div className="relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <h1 className="text-[11vw] leading-[0.8] font-black text-transparent stroke-text tracking-tighter mix-blend-overlay opacity-40 uppercase">
            OCEANIC
          </h1>
          <h1 className="text-[14vw] leading-[0.8] font-black text-white tracking-tighter -mt-[5vw] drop-shadow-2xl uppercase">
            GUIDE
          </h1>

          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-white/20 blur-[1px] z-20"
          />
        </motion.div>
      </div>

      <div className="flex justify-between items-end border-t border-white/10 pt-6 z-10">
        <div className="max-w-xs">
          <p className="text-[8px] leading-relaxed text-white/50 uppercase tracking-[0.3em] font-mono">
            [ system_status: optimal ] <br />
            illuminating the path for those lost at sea.
          </p>
        </div>

         <div className="flex items-center gap-8">
            <div className="hidden md:block">
                <span className="text-[8px] text-white/50 tracking-widest block mb-1 uppercase text-right">Signal Strength</span>
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
            onClick={() => setShowInfo(true)}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="relative px-0 py-1 md:px-6 md:py-4 bg-white text-black text-[10px] font-bold tracking-[0.4em] uppercase rounded-sm overflow-hidden pointer-events-auto group shadow-2xl transition-all duration-500"
          >
            <motion.div
              variants={{ hover: { x: 0 } }}
              initial={{ x: "-105%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-red-600"
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Explore Horizon
            </span>
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .stroke-text { -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4); }
        .vertical-text { writing-mode: vertical-rl; }
      `}</style>
    </div>
  );
}