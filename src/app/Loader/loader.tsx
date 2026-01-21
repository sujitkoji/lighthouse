"use client";

import { motion } from "framer-motion";
import { useProgress } from "@react-three/drei";

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const { progress } = useProgress();

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      onAnimationComplete={() => progress === 100 && onComplete?.()}
      style={{ pointerEvents: progress === 100 ? "none" : "auto" }}
    >
      {/* 🌌 CINEMATIC EVENING SKY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,#020617 0%,#071c33 35%,#3a1a08 65%,#050200 100%)",
        }}
      />

      {/* ☀️ SUN DISC (LOW HORIZON) */}
      <motion.div
        className="absolute left-1/2 top-[68%] -translate-x-1/2 w-[38vw] max-w-[420px] aspect-square rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,210,140,0.95) 0%, rgba(255,160,80,0.55) 35%, transparent 70%)",
          filter: "blur(8px)",
        }}
        animate={{ opacity: [0.75, 0.95, 0.75] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌊 OCEAN LIGHT REFLECTION */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, rgba(255,180,110,0.10) 75%, transparent)",
        }}
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔦 LIGHTHOUSE BEAM */}
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background:
            "conic-gradient(from 210deg at 50% 72%, rgba(255,220,160,0.55), transparent 42%)",
          filter: "blur(70px)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />

      {/* 🎞️ FILM GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          background:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\"/></filter><rect width=\"120\" height=\"120\" filter=\"url(%23n)\"/></svg>')",
        }}
      />

      {/* 🧊 PREMIUM UI */}
      <div className="relative w-[78vw] max-w-[520px] backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-xl p-6 shadow-[0_0_80px_rgba(255,180,100,0.08)]">
        {/* LABEL */}
        <div className="mb-5 flex justify-between items-end">
          <span className="text-[10px] tracking-[0.5em] text-white/45">
            LIGHTHOUSE SYSTEM
          </span>
          <span className="text-[11px] tracking-[0.35em] text-white/70">
            {Math.floor(progress)}%
          </span>
        </div>

        {/* PROGRESS BAR */}
        <div className="relative h-[1px] bg-white/15 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, rgba(255,190,120,0.35), rgba(255,235,200,1))",
            }}
          />

          {/* traveling highlight */}
          <motion.div
            className="absolute top-[-14px] h-[28px] w-[140px]"
            style={{
              left: `${progress - 10}%`,
              background:
                "radial-gradient(closest-side, rgba(255,220,170,0.45), transparent)",
              filter: "blur(16px)",
            }}
          />
        </div>
      </div>

      {/* 🌑 VIGNETTE */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </motion.div>
  );
}
