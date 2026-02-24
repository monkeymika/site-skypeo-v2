"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { anyflow } from "@/lib/animations";

const LETTERS = "SKYPEO".split("");

const letterCtr = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const letterAnim = {
  hidden:  { y: "110%", opacity: 0 },
  visible: { y: "0%",   opacity: 1, transition: { duration: 0.55, ease: anyflow } },
};

export function LoadingScreen() {
  const [count,   setCount]   = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let frame  = 0;
    const TOTAL = 110; // ~1.85s at 60fps

    const tick = () => {
      frame++;
      const t      = frame / TOTAL;
      const eased  = 1 - Math.pow(1 - Math.min(t, 1), 3);
      setCount(Math.round(eased * 100));
      if (frame < TOTAL) {
        requestAnimationFrame(tick);
      } else {
        setCount(100);
        setTimeout(() => setVisible(false), 300);
      }
    };

    // Delay start slightly so letters animate first
    const timer = setTimeout(() => requestAnimationFrame(tick), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ y: "-100%", transition: { duration: 0.85, ease: anyflow } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#0b0117" }}
        >
          {/* Grid */}
          <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />

          {/* Violet glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(0,143,120,0.14) 0%, transparent 70%)" }}
          />

          {/* ── Logo letters ───────────────────────── */}
          <div className="relative text-center">
            <motion.div
              variants={letterCtr}
              initial="hidden"
              animate="visible"
              className="flex items-end justify-center"
              style={{ gap: "0.04em" }}
            >
              {LETTERS.map((char, i) => (
                <span
                  key={i}
                  className="block overflow-hidden"
                  style={{ lineHeight: 1, paddingBottom: "0.04em" }}
                >
                  <motion.span
                    variants={letterAnim}
                    className="block font-bebas text-[#F8F4FF] tracking-[0.06em]"
                    style={{ fontSize: "clamp(4rem, 14vw, 11rem)" }}
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: anyflow }}
              className="flex items-center justify-center gap-3 mt-3"
            >
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#008f78]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#008f78]">
                Digitalisation & Automatisation
              </span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#008f78]" />
            </motion.div>
          </div>

          {/* ── Progress bar ───────────────────────── */}
          <div className="absolute bottom-10 inset-x-8 sm:inset-x-16 max-w-md mx-auto">
            {/* Counter + label */}
            <div className="flex justify-between items-baseline mb-2.5">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25"
              >
                Chargement
              </motion.span>
              <span className="font-bebas text-3xl text-[#F8F4FF] tabular-nums" style={{ lineHeight: 1 }}>
                {String(count).padStart(2, "0")}%
              </span>
            </div>

            {/* Track */}
            <div className="h-[1px] w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#008f78] to-[#2b3475]"
                style={{ width: `${count}%`, transition: "width 0.06s linear" }}
              />
            </div>

            {/* Decorative tick marks */}
            <div className="flex justify-between mt-1.5">
              {[0, 25, 50, 75, 100].map(n => (
                <span key={n} className="text-[8px] font-mono text-white/15">{n}</span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
