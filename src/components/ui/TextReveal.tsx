"use client";

import { motion } from "framer-motion";
import { anyflow } from "@/lib/animations";

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Use animate instead of whileInView (for hero / on-mount) */
  onMount?: boolean;
}

/**
 * Fades text in with a slide-up on scroll entry.
 * Uses opacity + translateY so it's not dependent on overflow clipping.
 */
export function TextReveal({ children, delay = 0, className = "", style, onMount = false }: TextRevealProps) {
  const anim = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: anyflow, delay } },
  };

  return (
    <motion.span
      className={`block ${className}`}
      style={style}
      variants={anim}
      initial="hidden"
      {...(onMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, amount: 0.2 } }
      )}
    >
      {children}
    </motion.span>
  );
}
