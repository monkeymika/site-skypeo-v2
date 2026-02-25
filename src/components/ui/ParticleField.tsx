"use client";

import { motion } from "framer-motion";

// Deterministic pseudo-random positions (stable across SSR & client)
const ORBS = [
  { x: "15%",  y: "20%",  size: 420, color: "rgba(123,47,190,0.12)", dur: 22, delay: 0 },
  { x: "70%",  y: "60%",  size: 320, color: "rgba(233,30,140,0.09)", dur: 17, delay: 4 },
  { x: "45%",  y: "-10%", size: 260, color: "rgba(123,47,190,0.08)", dur: 25, delay: 8 },
];

const SPARKS = Array.from({ length: 22 }, (_, i) => {
  const a = i * 137.508; // golden-angle distribution
  return {
    id:    i,
    left:  `${((a * 3.7) % 100).toFixed(1)}%`,
    top:   `${((a * 2.3 + 11) % 100).toFixed(1)}%`,
    size:  1.5 + (i % 3) * 0.8,
    color: i % 3 === 0 ? "#008f78" : i % 3 === 1 ? "#2b3475" : "#00b898",
    opMin: 0.05 + (i % 5) * 0.04,
    opMax: 0.20 + (i % 4) * 0.08,
    dur:   3.5 + (i % 5) * 1.2,
    delay: (i % 8) * 0.5,
  };
});

export function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            left:   orb.x,
            top:    orb.y,
            width:  orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            x: [0, 40, -20, 10, 0],
            y: [0, -30, 20, -10, 0],
            scale: [1, 1.08, 0.95, 1.03, 1],
          }}
          transition={{
            duration: orb.dur,
            delay:    orb.delay,
            repeat:   Infinity,
            ease:     "easeInOut",
          }}
        />
      ))}

      {/* Sparkle dots */}
      {SPARKS.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left:   s.left,
            top:    s.top,
            width:  s.size,
            height: s.size,
            background: s.color,
          }}
          animate={{
            opacity: [s.opMin, s.opMax, s.opMin],
            scale:   [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: s.dur,
            delay:    s.delay,
            repeat:   Infinity,
            ease:     "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
