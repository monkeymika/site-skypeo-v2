"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { TiltCard }   from "@/components/ui/TiltCard";
import { stagger, fadeUp } from "@/lib/animations";

const services = [
  {
    n:    "01",
    href: "/automatisations",
    title: "Automatisations",
    sub:   "sur-mesure",
    desc:  "Devis automatiques, relances clients, confirmations de RDV, suivi de chantier — tout tourne en pilote automatique pendant que vous travaillez.",
    tags:  ["Devis auto", "Relances", "CRM", "Rappels SMS"],
    glow:  "rgba(123,47,190,0.12)",
  },
  {
    n:    "02",
    href: "/sites-web",
    title: "Sites internet",
    sub:   "professionnels",
    desc:  "Sites vitrines modernes, rapides, pensés pour Google et pour convertir vos visiteurs en clients. Livraison en 7 jours.",
    tags:  ["Site vitrine", "SEO local", "Google My Business", "Responsive"],
    glow:  "rgba(233,30,140,0.10)",
  },
];

export function ExpertsSection() {
  return (
    <section className="py-24 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <TextReveal className="font-bebas fg-6 block"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1 } as React.CSSProperties}>
            EXPERTS EN
          </TextReveal>
          <TextReveal delay={0.12} className="font-bebas block"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1 } as React.CSSProperties}>
            <span className="gradient-text">AUTOMATISATION</span>
          </TextReveal>
        </div>

        {/* Service cards with 3D tilt */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-5"
        >
          {services.map((s) => (
            <motion.div key={s.n} variants={fadeUp}>
              <TiltCard className="group h-full" intensity={6}>
                <div className="glass-card grad-border p-8 relative overflow-hidden h-full">
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 40%, ${s.glow} 0%, transparent 60%)` }} />

                  <div className="relative">
                    {/* Number + Arrow */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-bebas text-5xl gradient-text leading-none">{s.n}</span>
                      <Link href={s.href}
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 fg-4 group-hover:text-violet-mid group-hover:border-violet-mid/40"
                        style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }}>
                        <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </Link>
                    </div>

                    <h3 className="font-bebas fg-1 mb-1" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                      {s.title}
                    </h3>
                    <p className="font-bebas fg-4 mb-5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                      {s.sub}
                    </p>
                    <p className="text-sm fg-3 leading-relaxed mb-6">{s.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-violet-deep/40 text-violet-mid">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
