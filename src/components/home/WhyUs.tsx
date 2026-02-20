"use client";

import { motion } from "framer-motion";
import { stagger as staggerContainer, fadeUp, fadeLeft, fadeRight } from "@/lib/animations";

const reasons = [
  { emoji: "⚡", title: "Automatisation intelligente", description: "On identifie les tâches qui vous volent du temps et on les automatise. Devis, relances, confirmations — géré." },
  { emoji: "🔍", title: "Visibilité en ligne", description: "Un site pro, optimisé SEO et Google My Business. Vos clients vous trouvent avant vos concurrents." },
  { emoji: "🤝", title: "Une autre façon de travailler", description: "Pas de jargon, pas de contrats pièges. On est là en tant que partenaire, pas prestataire distant." },
  { emoji: "🚀", title: "Mise en place rapide", description: "Pas besoin d'attendre 3 mois. On va vite, on livre vite, et vous voyez les résultats rapidement." },
];

export function WhyUs() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(249,115,22,0.04) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeLeft} className="section-tag mb-3">Pourquoi Skypeo</motion.p>
            <motion.h2
              variants={fadeLeft}
              className="display-heading text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              L'agence qui{" "}
              <span className="gradient-text">comprend votre métier.</span>
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-zinc-400 text-lg leading-relaxed">
              Chez Skypeo, on ne vous vend pas une solution générique. On s'immerge
              dans votre activité pour construire des outils qui s'adaptent à votre
              façon de travailler — pas l'inverse.
            </motion.p>
          </motion.div>

          {/* Right: reasons grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                variants={fadeRight}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="glass-card p-6 group"
              >
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {reason.emoji}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{reason.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
