"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees */
  intensity?: number;
  /** Show a moving glare overlay on hover */
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
  intensity = 7,
  glare     = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0); // -0.5 → 0.5
  const rawY = useMotionValue(0);

  const springCfg = { damping: 20, stiffness: 300, mass: 0.6 };
  const sx = useSpring(rawX, springCfg);
  const sy = useSpring(rawY, springCfg);

  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);

  // Glare position: maps raw mouse position to a radial gradient origin
  const glareX = useTransform(sx, [-0.5, 0.5], ["0%",  "100%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["0%",  "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.06) 0%, transparent 60%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width  - 0.5);
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div style={{ perspective: "900px" }} className={className}>
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "flat" }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative h-full w-full"
      >
        {children}

        {/* Glare overlay */}
        {glare && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: glareBackground,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
