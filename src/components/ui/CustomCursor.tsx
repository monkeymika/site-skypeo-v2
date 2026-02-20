"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden,  setHidden]  = useState(true);

  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);

  // Ring follows with spring lag — more dramatic = lower stiffness
  const sx = useSpring(mx, { damping: 22, stiffness: 400, mass: 0.5 });
  const sy = useSpring(my, { damping: 22, stiffness: 400, mass: 0.5 });

  // Center the ring (28px default) on the cursor
  const rx = useTransform(sx, v => v - 14);
  const ry = useTransform(sy, v => v - 14);
  // Center the dot (5px)
  const dx = useTransform(mx, v => v - 2.5);
  const dy = useTransform(my, v => v - 2.5);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Touch devices: keep native cursor
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setHidden(false);
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);
    const over  = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovered(!!el.closest("a, button, [role='button'], label, select, [data-hover]"));
    };

    window.addEventListener("mousemove",  move,  { passive: true });
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseover",  over,  { passive: true });

    return () => {
      window.removeEventListener("mousemove",  move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseover",  over);
    };
  }, [mx, my]);

  return (
    <>
      {/* Outer ring — spring, slow follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{ x: rx, y: ry }}
        animate={{
          width:   hovered ? 44 : 28,
          height:  hovered ? 44 : 28,
          opacity: hidden ? 0 : 1,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: hovered ? "rgba(233,30,140,0.75)" : "rgba(123,47,190,0.6)",
        }}
        transition={{
          width:  { type: "spring", damping: 18, stiffness: 250 },
          height: { type: "spring", damping: 18, stiffness: 250 },
          opacity: { duration: 0.18 },
          borderColor: { duration: 0.2 },
        }}
      />
      {/* Inner dot — direct, immediate */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{ x: dx, y: dy, width: 5, height: 5 }}
        animate={{
          background: hovered ? "#E91E8C" : "#7B2FBE",
          scale:  hovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          background: { duration: 0.15 },
          scale:   { type: "spring", stiffness: 400, damping: 20 },
          opacity: { duration: 0.15 },
        }}
      />
    </>
  );
}
