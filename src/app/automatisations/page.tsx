"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { stagger, fadeUp } from "@/lib/animations";

const useCases = [
  {
    n: "01",
    emoji: "📋",
    title: "Génération de devis automatique",
    impact: "−2h/devis",
    desc: "Vos clients remplissent un formulaire, reçoivent un devis en quelques minutes. Sans que vous leviez le petit doigt.",
  },
  {
    n: "02",
    emoji: "🔔",
    title: "Relances clients",
    impact: "+40% de réponses",
    desc: "Un prospect n'a pas répondu à votre devis ? Relance automatique à J+3 et J+7. Finis les oublis.",
  },
  {
    n: "03",
    emoji: "📅",
    title: "Confirmations & rappels RDV",
    impact: "−80% de no-shows",
    desc: "SMS/email de confirmation dès la prise de RDV + rappel 24h avant. Zéro no-show, zéro coup de fil.",
  },
  {
    n: "04",
    emoji: "📊",
    title: "Suivi de chantier client",
    impact: "−5h/semaine",
    desc: "Vos clients reçoivent des mises à jour automatiques. Moins d'appels entrants, relation client au top.",
  },
  {
    n: "05",
    emoji: "💳",
    title: "Suivi de facturation",
    impact: "−15j de délai",
    desc: "Relances de factures impayées envoyées automatiquement. Pas de gêne, vos paiements arrivent plus vite.",
  },
  {
    n: "06",
    emoji: "⭐",
    title: "Collecte d'avis Google",
    impact: "+12 avis/mois",
    desc: "Après chaque chantier, vos clients reçoivent un message pour laisser un avis. Réputation en pilote auto.",
  },
];

export default function AutomatisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end pb-16 px-5 sm:px-8 lg:px-10 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-50 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(123,47,190,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto w-full pt-40">
          <p className="section-tag mb-6">Automatisations</p>
          <h1
            className="font-bebas fg-1 mb-6"
            style={{ fontSize: "clamp(1.5rem, 8vw, 4rem)", lineHeight: 0.95 }}
          >
            <TextReveal onMount delay={0.1}>
              ARRÊTEZ DE PERDRE VOTRE
            </TextReveal>
            <TextReveal onMount delay={0.25}>
              <span className="gradient-text">
                TEMPS SUR LES TÂCHES RÉPÉTITIVES.
              </span>
            </TextReveal>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-8 mt-10"
          >
            <div className="glass-card grad-border px-8 py-5 text-center">
              <p className="font-bebas text-5xl gradient-text">+150H</p>
              <p className="text-xs fg-3 mt-1">économisées en moyenne</p>
            </div>
            <div className="max-w-lg">
              <p className="fg-3 text-lg leading-relaxed mb-6">
                Skypeo identifie ce qui vous vole du temps chaque semaine et le
                supprime. Devis, relances, rappels, facturation — tout ça peut
                tourner seul.
              </p>
              <div className="flex gap-3">
                <Link href="/contact" className="btn-glow">
                  <span>Audit gratuit →</span>
                </Link>
                <a href="tel:+33660534389" className="btn-outline">
                  +33 6 60 53 43 89
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="section-tag mb-3">Cas d'usage</p>
            <h2
              className="font-bebas fg-1"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              CE QU'ON PEUT <span className="gradient-text">AUTOMATISER.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {useCases.map((u) => (
              <motion.div
                key={u.n}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="group glass-card p-7 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-bebas text-3xl gradient-text">
                    {u.n}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border border-[#008f78]/25 text-[#008f78] bg-[#008f78]/10">
                    {u.impact}
                  </span>
                </div>
                <div className="text-2xl mb-3">{u.emoji}</div>
                <h3
                  className="font-bebas fg-1 group-hover:text-[#008f78] transition-colors mb-2"
                  style={{ fontSize: "clamp(1.2rem,2vw,1.5rem)" }}
                >
                  {u.title}
                </h3>
                <p className="text-sm fg-3 leading-relaxed flex-1">{u.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-bebas fg-1 mb-4"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            QUELLE TÂCHE VOUS PÈSE LE PLUS ?
          </h2>
          <p className="fg-3 mb-8 max-w-lg mx-auto">
            On fait un audit gratuit de votre activité et on vous dit exactement
            ce qu'on peut automatiser.
          </p>
          <Link href="/contact" className="btn-glow inline-flex">
            <span>Démarrer l'audit gratuit →</span>
          </Link>
        </div>
      </section>
    </>
  );
}
