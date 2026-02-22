"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function AwwwardLighthouseLoader({ onComplete }: { onComplete?: () => void }) {
  const { progress } = useProgress();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFinished(true);
        onComplete?.();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  // Letters for the kinetic animation
  const title = "LIGHTHOUSE";

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#080808] flex items-center justify-center overflow-hidden"
          exit={{ 
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* 🌊 AMBIENT GRADIENT BLOB */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"
          />

          <div className="absolute top-[40%] flex flex-col items-center">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-16 h-16 mb-10"
             >
                <svg viewBox="0 0 100 100" className="fill-white overflow-visible">
                  {/* Subtle Glow behind logo */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <path 
                    style={{ filter: "url(#glow)" }}
                    d="M50 5 L40 25 L42 85 H58 L60 25 Z" 
                  />
                  {/* Light Beam from Logo */}
                  <motion.circle 
                    cx="50" cy="15" r="2" fill="gold"
                    animate={{ opacity: [0, 1, 0], scale: [1, 2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </svg>
             </motion.div>
          </div>

          {/* 🔡 KINETIC TEXT ENGINE */}
          <div className="relative flex flex-col items-center overflow-hidden py-10">
            <div className="flex overflow-hidden">
              {title.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-white text-[12vw] font-black leading-none tracking-tighter uppercase inline-block"
                  initial={{ y: "100%", rotate: 20 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ 
                    delay: i * 0.04, 
                    duration: 0.8, 
                    ease: [0.33, 1, 0.68, 1] 
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* PROGRESS METER - MINIMALIST */}
            <div className="mt-8 flex items-center gap-6 w-full px-4">
               <span className="text-white/30 text-[10px] tracking-[0.4em] uppercase">Status: Guiding</span>
               <div className="flex-1 h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: progress / 100 }}
                  />
               </div>
               <span className="text-white font-mono text-xs tabular-nums">
                  {Math.round(progress)}%
               </span>
            </div>
          </div>

          {/* 🎥 THE GRAIN & NOISE (Awwwards Secret Sauce) */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen overflow-hidden">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-[2]">
                <filter id="noiseFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
             </svg>
          </div>

          {/* 🌑 VIGNETTE MASK */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}