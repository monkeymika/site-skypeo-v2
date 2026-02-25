"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

/* ── Word-by-word reveal animation ─────────────────── */
function WordReveal({
  text,
  delay = 0,
  className = "",
  accentWords = [] as string[],
}: {
  text: string;
  delay?: number;
  className?: string;
  accentWords?: string[];
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => {
        const isAccent = accentWords.includes(word);
        return (
          <span
            key={i}
            className="inline-block overflow-hidden mr-[0.22em] last:mr-0"
          >
            <motion.span
              className={`inline-block ${isAccent ? "gradient-text" : ""}`}
              initial={{ y: "105%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.72,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

/* ════════════════════════════════════════════════════
   HERO
════════════════════════════════════════════════════ */
export function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Hero grid pattern */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Radial glow — top center, brand green */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0,143,120,0.14) 0%, transparent 70%)",
        }}
      />
      {/* Radial glow — bottom right, brand blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 90% 100%, rgba(43,52,117,0.20) 0%, transparent 65%)",
        }}
      />

      {/* ── Top badge ─────────────────────────────── */}
      <div className="relative pt-36 sm:pt-40 px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="flex justify-between items-start"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#008f78]/25 bg-[#008f78]/10 text-[#008f78] text-[10px] font-bold uppercase tracking-[0.25em]">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[#008f78]"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            N°1 sur les automatisations à Nancy
          </span>

          {/* Desktop tagline top-right */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden md:block fg-3 text-sm max-w-[220px] text-right leading-relaxed"
          >
            Artisans · TPE · Pros débordés
          </motion.p>
        </motion.div>
      </div>

      {/* ── MEGA HEADING ──────────────────────────── */}
      <div className="relative flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-12 py-8">
        <h1
          className="font-bebas fg-1 leading-none tracking-tight uppercase"
          style={{ fontSize: "clamp(1rem, 9vw, 5.5rem)", lineHeight: 0.88 }}
        >
          {/* Line 1 */}
          <span className="block">
            <WordReveal
              text="AUTOMATISEZ"
              delay={0.3}
              accentWords={["AUTOMATISEZ"]}
            />
          </span>
          {/* Line 2 */}
          <span className="block">
            <WordReveal text="VOTRE" delay={0.5} />
          </span>
          {/* Line 3 */}
          <span className="block">
            <WordReveal text="BUSINESS." delay={0.7} />
          </span>
        </h1>

        {/* Animated divider */}
        <motion.div
          ref={lineRef}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="origin-left mt-8 mb-8 h-px max-w-2xl"
          style={{
            background: "linear-gradient(90deg, #008f78, #2b3475, transparent)",
          }}
        />

        {/* ── Bottom row: desc + stats + CTA ─────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end max-w-5xl">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="md:col-span-1"
          >
            <p className="fg-3 text-base leading-relaxed">
              On aide les artisans, TPE et pros débordés à simplifier leur
              quotidien grâce aux automatisations et aux sites web sur-mesure.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.35 }}
            className="md:col-span-1 flex gap-8"
          >
            <div>
              <p
                className="font-bebas gradient-text"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}
              >
                <AnimatedCounter to={150} prefix="+" suffix="H" />
              </p>
              <p className="text-[10px] fg-3 uppercase tracking-widest mt-1">
                économisées
              </p>
            </div>
            {/* <div>
              <p
                className="font-bebas text-[#008f78]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}
              >
                <AnimatedCounter to={7} suffix="j" />
              </p>
              <p className="text-[10px] fg-3 uppercase tracking-widest mt-1">
                de livraison
              </p>
            </div> */}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="md:col-span-1 flex flex-col sm:flex-row md:flex-col gap-3"
          >
            <Link href="/contact" className="btn-glow text-center">
              <span>Découvrir nos solutions</span>
            </Link>
            <Link href="/automatisations" className="btn-outline text-center">
              Voir les automatisations →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="relative pb-10 px-5 sm:px-8 lg:px-12 flex items-center gap-4"
      >
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 rounded-full"
          style={{
            background: "linear-gradient(to bottom, #008f78, transparent)",
          }}
        />
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] fg-5">
          Scroll pour découvrir
        </span>
      </motion.div>
    </section>
  );
}
