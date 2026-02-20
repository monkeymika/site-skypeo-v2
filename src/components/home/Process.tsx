"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";
import { stagger, fadeUp } from "@/lib/animations";

const steps = [
  { n: "01", title: "Analyse",       desc: "On écoute, on comprend votre métier, vos douleurs et vos objectifs. Aucune solution générique.", accent: "#7B2FBE" },
  { n: "02", title: "Conception",    desc: "On conçoit la solution sur-mesure : site, automatisation ou interface — adaptée à vous.",          accent: "#A04FC0" },
  { n: "03", title: "Mise en place", desc: "On déploie, on connecte, on teste. Vous n'avez rien à gérer techniquement.",                       accent: "#C83FA0" },
  { n: "04", title: "Livraison",     desc: "Vous prenez en main avec une formation claire. On reste disponibles après.",                        accent: "#E91E8C" },
];

export function Process() {
  return (
    <section className="py-24 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-tag mb-3">Notre processus</p>
          <h2 className="font-bebas fg-1" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            SIMPLE, RAPIDE,{" "}
            <span className="gradient-text">SANS PRISE DE TÊTE.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {steps.map((s, i) => (
            <motion.div key={s.n} variants={fadeUp}>
              <TiltCard className="group h-full" intensity={6} glare>
                <div className="glass-card relative overflow-hidden p-7 h-full">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }} />

                  {/* Watermark number */}
                  <span className="absolute -bottom-4 -right-2 font-bebas text-8xl select-none pointer-events-none"
                    style={{ color: `${s.accent}14`, lineHeight: 1 }}>
                    {i + 1}
                  </span>

                  {/* Step badge */}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg font-bebas text-sm text-white mb-5"
                    style={{ background: `linear-gradient(135deg, ${s.accent}60, ${s.accent}20)`, border: `1px solid ${s.accent}30` }}>
                    {s.n}
                  </span>

                  <h3 className="font-bebas fg-1 mb-3 group-hover:text-violet-mid transition-colors"
                    style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm fg-3 leading-relaxed relative">{s.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
