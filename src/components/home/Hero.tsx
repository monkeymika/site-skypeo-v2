"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SplitText } from "@/components/ui/SplitText";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ParticleField } from "@/components/ui/ParticleField";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated particles + orbs */}
      <ParticleField />

      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0 pointer-events-none opacity-50" />

      {/* Top violet glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 50% at 50% -5%, rgba(123,47,190,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-20 pb-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center pt-12">
          {/* ── LEFT: main content ─────────────────── */}
          <div className="lg:col-span-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-mid/25 bg-violet-mid/10 text-violet-mid dark:text-violet-light text-[10px] font-bold uppercase tracking-[0.25em]">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-rose"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                N°1 sur les automatisations à Nancy
              </span>
            </motion.div>

            {/* ── Main heading: word-by-word ──────── */}
            <h1
              className="font-bebas fg-1 mb-6"
              style={{
                fontSize: "clamp(3.8rem, 9.5vw, 8rem)",
                lineHeight: 0.95,
              }}
            >
              {/* Line 1 */}
              <SplitText
                text="AUTOMATISATIONS"
                delay={0.3}
                onMount
                style={{ display: "block" }}
              />
              {/* Line 2 — gradient per word */}
              <SplitText
                text="& DIGITALISATION"
                delay={0.5}
                onMount
                wordClass="gradient-text"
                style={{ display: "block" }}
              />
            </h1>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="origin-left h-px mb-6"
              style={{
                background:
                  "linear-gradient(90deg, #7B2FBE, #E91E8C, transparent)",
              }}
            />

            {/* Tagline — word by word */}
            <div className="mb-10 max-w-xl">
              <SplitText
                text="On aide les artisans, TPE et pros débordés à simplifier leur quotidien."
                delay={1.1}
                onMount
                className="text-base sm:text-lg fg-3 leading-relaxed"
                stagger={0.04}
              />
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link href="/contact" className="btn-glow">
                <span>Découvrir nos solutions</span>
              </Link>
              <Link href="/automatisations" className="btn-outline">
                Voir les automatisations →
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: animated stat card ──────────── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="glass-card grad-border p-8 text-center">
              {/* Animated counter: +0H → +150H */}
              <div
                className="font-bebas gradient-text mb-2"
                style={{ fontSize: "clamp(4rem, 6vw, 6rem)" }}
              >
                <AnimatedCounter to={150} prefix="+" suffix="H" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] fg-4 mb-4">
                économisées en moyenne
              </p>
              <div
                className="h-px mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(123,47,190,.3), transparent)",
                }}
              />
              <p className="text-xs fg-4 leading-relaxed">
                grâce à nos automatisations personnalisées pour artisans et TPE
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile stats ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="lg:hidden mt-10 grid grid-cols-3 gap-3"
        >
          {[
            { prefix: "+", to: 150, suffix: "H", label: "économisées" },
            { prefix: "", to: 100, suffix: "%", label: "sur-mesure" },
            { prefix: "", to: 7, suffix: "j", label: "de livraison" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="font-bebas text-2xl gradient-text">
                <AnimatedCounter
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </p>
              <p className="text-[10px] fg-4 mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] fg-5">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-4 h-4 fg-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
