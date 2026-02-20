"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { fadeUp } from "@/lib/animations";

const reasons = [
  {
    n:     "01",
    title: "Automatisation intelligente",
    desc:  "On identifie les tâches qui vous volent du temps — devis, relances, confirmations — et on les automatise. Vous vous concentrez sur votre vrai travail.",
    glow:  "rgba(123,47,190,0.12)",
  },
  {
    n:     "02",
    title: "Visibilité en ligne",
    desc:  "Un site pro, optimisé SEO et Google My Business. Vos clients vous trouvent avant vos concurrents, même quand vous êtes en chantier.",
    glow:  "rgba(233,30,140,0.10)",
  },
  {
    n:     "03",
    title: "Une autre façon de travailler",
    desc:  "Pas de jargon, pas de contrats pièges. On est là en partenaire, on s'immerge dans votre métier et on construit ce qui vous correspond.",
    glow:  "rgba(123,47,190,0.08)",
  },
];

export function WhySkypeo() {
  return (
    <section className="py-24 px-5 sm:px-8 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 100% 50%, rgba(233,30,140,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Large heading */}
        <div className="mb-20">
          <p className="section-tag mb-4">Pourquoi Skypeo</p>
          <TextReveal className="font-bebas fg-1 block" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" } as React.CSSProperties}>
            L'AGENCE QUI
          </TextReveal>
          <TextReveal delay={0.12} className="font-bebas block" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" } as React.CSSProperties}>
            <span className="gradient-text">COMPREND VOTRE MÉTIER.</span>
          </TextReveal>
        </div>

        {/* Reasons — numbered list */}
        <div className="space-y-0">
          {reasons.map((r, i) => (
            <motion.div
              key={r.n}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i * 0.1}
              className="group relative py-8 grid grid-cols-12 gap-6 items-start hover:border-violet-mid/30 transition-colors duration-300"
              style={{ borderTop: "1px solid var(--divider)" }}
            >
              {/* Hover bg */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 40% 100% at 0% 50%, ${r.glow} 0%, transparent 70%)` }} />

              {/* Number */}
              <div className="col-span-2 sm:col-span-1">
                <span className="font-bebas text-3xl sm:text-4xl gradient-text">{r.n}</span>
              </div>

              {/* Title */}
              <div className="col-span-10 sm:col-span-4">
                <h3 className="font-bebas fg-1 group-hover:text-violet-mid transition-colors duration-200"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                  {r.title}
                </h3>
              </div>

              {/* Desc */}
              <div className="col-span-12 sm:col-span-7">
                <p className="text-sm fg-3 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--divider)" }} />
        </div>
      </div>
    </section>
  );
}
