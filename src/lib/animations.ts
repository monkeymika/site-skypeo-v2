import type { Variants } from "framer-motion";

// Anyflow-style cubic bezier: strong ease in/out
export const anyflow = [0.76, 0, 0.24, 1] as const;
export const smooth  = [0.25, 0.46, 0.45, 0.94] as const;

// ── Text line reveal (signature Anyflow animation) ────────────────
export const lineReveal: Variants = {
  hidden:  { y: "105%" },
  visible: (delay: number = 0) => ({
    y: "0%",
    transition: { duration: 0.75, ease: anyflow, delay },
  }),
};

// ── Fade up ───────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: smooth, delay },
  }),
};

// ── Fade in ───────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: smooth, delay },
  }),
};

// ── Fade from left/right ──────────────────────────────────────────
export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: smooth } },
};
export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: smooth } },
};

// ── Scale in ─────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: smooth } },
};

// ── Stagger containers ────────────────────────────────────────────
export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};
