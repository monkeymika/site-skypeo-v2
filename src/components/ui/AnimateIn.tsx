"use client";

import { motion } from "framer-motion";
import { stagger as staggerContainer, fadeUp } from "@/lib/animations";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Fade-up on scroll — wraps a single child */
export function AnimateIn({ children, className, delay = 0 }: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger children fade-up on scroll */
export function AnimateStagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Single stagger child item */
export function AnimateItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
