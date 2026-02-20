"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";
import { stagger, fadeUp } from "@/lib/animations";

const services = [
  {
    n:     "01",
    title: "Automatisations\nsur-mesure",
    desc:  "Devis, relances, suivis client, rappels RDV — tout tourne seul.",
    href:  "/automatisations",
    lightBg: "bg-gradient-to-br from-violet-deep/10 to-violet-mid/5",
    darkBg:  "dark:bg-gradient-to-br dark:from-violet-deep dark:to-[#1A1530]",
    border:  "border-violet-mid/20 hover:border-violet-mid/50",
    accent:  "text-violet-mid dark:text-violet-light",
  },
  {
    n:     "02",
    title: "Création de\nsites web",
    desc:  "Sites vitrines modernes, rapides, pensés pour être trouvés sur Google.",
    href:  "/sites-web",
    lightBg: "bg-gradient-to-br from-rose/10 to-violet-mid/5",
    darkBg:  "dark:bg-gradient-to-br dark:from-[#2A0D2A] dark:to-[#1A1530]",
    border:  "border-rose/20 hover:border-rose/40",
    accent:  "text-rose",
  },
  {
    n:     "03",
    title: "Interfaces\npersonnalisées",
    desc:  "Centralisez infos clients, statuts et documents en un seul endroit.",
    href:  "/contact",
    lightBg: "bg-gradient-to-br from-blue-500/10 to-violet-mid/5",
    darkBg:  "dark:bg-gradient-to-br dark:from-[#0D1A2D] dark:to-[#1A1530]",
    border:  "border-blue-500/20 hover:border-blue-500/40",
    accent:  "text-blue-600 dark:text-blue-400",
  },
  {
    n:     "04",
    title: "Formation &\nautonomie",
    desc:  "On vous forme pour rester autonome après la mise en place.",
    href:  "/contact",
    lightBg: "bg-gradient-to-br from-amber-500/10 to-violet-mid/5",
    darkBg:  "dark:bg-gradient-to-br dark:from-[#1A1A0D] dark:to-[#1A1530]",
    border:  "border-amber-500/20 hover:border-amber-500/40",
    accent:  "text-amber-600 dark:text-amber-400",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="section-tag mb-3">Nos services</p>
            <h2 className="font-bebas fg-1" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              CE QU'ON FAIT<br />
              <span className="gradient-text">POUR VOUS.</span>
            </h2>
          </div>
          <p className="hidden sm:block text-sm fg-4 max-w-xs text-right">
            Des solutions concrètes, adaptées à votre métier.
          </p>
        </motion.div>

        {/* Grid with TiltCard */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {services.map((s) => (
            <motion.div key={s.n} variants={fadeUp}>
              <TiltCard className="group h-full" intensity={5}>
                <div
                  className={`relative rounded-2xl border p-7 overflow-hidden transition-colors duration-300 h-full ${s.lightBg} ${s.darkBg} ${s.border}`}
                >
                  {/* Arrow link */}
                  <Link href={s.href}
                    className="absolute top-5 right-5 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 fg-4 group-hover:text-violet-mid"
                    style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }}>
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>

                  <span className={`font-bebas text-4xl ${s.accent} opacity-70 mb-5 block`}>{s.n}</span>

                  <h3 className="font-bebas fg-1 mb-3 whitespace-pre-line"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}>
                    {s.title}
                  </h3>
                  <p className="text-sm fg-3 leading-relaxed">{s.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
