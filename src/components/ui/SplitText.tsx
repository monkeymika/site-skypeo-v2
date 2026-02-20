"use client";

import { motion } from "framer-motion";
import React from "react";
import { anyflow } from "@/lib/animations";

interface SplitTextProps {
  text: string;
  delay?: number;
  onMount?: boolean;
  className?: string;
  wordClass?: string;
  style?: React.CSSProperties;
  stagger?: number;
}

/**
 * Splits text into words, each revealed with a slide-up animation.
 * Compatible with gradient-text on wordClass (gradient applied per-word).
 */
export function SplitText({
  text,
  delay    = 0,
  onMount  = false,
  className = "",
  wordClass = "",
  style,
  stagger   = 0.09,
}: SplitTextProps) {
  const words = text.split(" ");

  const container = {
    hidden:  {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const word = {
    hidden:  { y: "112%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.62, ease: anyflow },
    },
  };

  return (
    <motion.span
      className={`block ${className}`}
      style={style}
      variants={container}
      initial="hidden"
      {...(onMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, margin: "-40px" } }
      )}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ paddingBottom: "0.08em", marginBottom: "-0.08em", marginRight: i < words.length - 1 ? "0.25em" : 0 }}
        >
          <motion.span variants={word} className={`inline-block ${wordClass}`}>
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
