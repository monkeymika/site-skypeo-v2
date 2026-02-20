"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";

export function CTA() {
  return (
    <section className="py-24 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-3xl overflow-hidden py-20 px-8 sm:px-16 text-center"
          style={{ background: "linear-gradient(135deg, #2D1B69 0%, #1A0D3D 40%, #2A0A20 100%)" }}
        >
          {/* Grid */}
          <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" />
          {/* Glows */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(123,47,190,0.35) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(233,30,140,0.2) 0%, transparent 70%)" }} />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-light/60 mb-5">
              Passez à l'action
            </p>

            <div className="overflow-hidden mb-2">
              <TextReveal className="font-bebas text-white block" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" } as React.CSSProperties}>
                PRÊT À GAGNER DU TEMPS
              </TextReveal>
            </div>
            <div className="overflow-hidden mb-8">
              <TextReveal delay={0.12} className="font-bebas block" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" } as React.CSSProperties}>
                <span className="gradient-text-rev">CHAQUE SEMAINE ?</span>
              </TextReveal>
            </div>

            <p className="text-white/50 text-base max-w-lg mx-auto mb-10">
              Premier échange gratuit de 30 minutes. On analyse votre situation et
              on vous propose les meilleures solutions — sans engagement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-glow">
                <span>Prendre contact gratuitement</span>
              </Link>
              <a href="tel:+33660534389"
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 text-white/70 hover:border-white/30 hover:text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-px">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +33 6 60 53 43 89
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
