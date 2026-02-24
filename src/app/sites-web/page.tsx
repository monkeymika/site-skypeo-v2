"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { stagger, fadeUp } from "@/lib/animations";

const features = [
  { n: "01", title: "100% responsive",      desc: "Parfait sur mobile, tablette et desktop. Vos clients vous trouvent depuis n'importe quel appareil." },
  { n: "02", title: "Ultra-rapide",          desc: "Score PageSpeed élevé. Un site rapide améliore votre référencement et réduit le taux de rebond." },
  { n: "03", title: "SEO optimisé",          desc: "Structure technique, mots-clés métier, Google My Business — vous apparaissez devant vos concurrents." },
  { n: "04", title: "Facile à modifier",     desc: "Vous modifiez vos textes et photos vous-même, sans toucher une ligne de code." },
  { n: "05", title: "Sécurisé & hébergé",   desc: "HTTPS, sauvegardes automatiques, hébergement inclus. Aucune maintenance technique pour vous." },
  { n: "06", title: "Formulaire de contact", desc: "Vos prospects vous contactent directement. Chaque demande vous arrive par email ou SMS." },
];

const portfolio = [
  {
    name: "Sundgau Paysages",
    url: "sundgau-paysages68.fr",
    href: "https://sundgau-paysages68.fr",
    sector: "Paysagiste · Alsace",
    desc: "Site vitrine moderne pour un paysagiste alsacien. Galerie de réalisations, formulaire de devis et SEO local pour capter les clients du Haut-Rhin.",
    color: "from-emerald-900/40 to-emerald-950/20",
    tag: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
  {
    name: "Swag Auto",
    url: "swagauto.fr",
    href: "https://swagauto.fr",
    sector: "Carrosserie · Auto",
    desc: "Site professionnel pour un carrossier/préparateur automobile. Présentation des services, galerie avant/après et prise de contact simplifiée.",
    color: "from-blue-900/40 to-blue-950/20",
    tag: "text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/10",
  },
];

const offers = [
  {
    name: "Site Vitrine",
    price: "À partir de 990 €",
    desc: "L'essentiel pour être visible et professionnel.",
    items: [
      "5 pages (Accueil, Services, À propos, Galerie, Contact)",
      "Design personnalisé à votre activité",
      "100% responsive",
      "Formulaire de contact intégré",
      "Optimisation SEO de base",
      "Formation à la prise en main",
    ],
    highlight: false,
    cta: "Démarrer",
  },
  {
    name: "Site Pro",
    price: "À partir de 1 790 €",
    desc: "Pour les artisans qui veulent dominer leur zone.",
    items: [
      "Tout du Site Vitrine +",
      "Système de devis en ligne",
      "SEO local avancé + Google My Business",
      "Galerie réalisations dynamique",
      "Collecte d'avis Google automatisée",
      "Suivi des stats (Google Analytics)",
    ],
    highlight: true,
    cta: "Choisir Pro",
  },
  {
    name: "Site + Automatisation",
    price: "Sur devis",
    desc: "La solution complète pour les pros qui veulent tout automatiser.",
    items: [
      "Tout du Site Pro +",
      "Automatisations sur-mesure",
      "CRM simplifié intégré",
      "Rappels & relances automatiques",
      "Tableau de bord activité",
      "Support prioritaire inclus",
    ],
    highlight: false,
    cta: "Nous contacter",
  },
];

export default function SitesWebPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end pb-16 px-5 sm:px-8 lg:px-10 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(233,30,140,0.12) 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto w-full pt-16">
          <p className="section-tag mb-6">Sites web</p>
          <h1 className="font-bebas fg-1 mb-6" style={{ fontSize: "clamp(1.5rem, 9vw, 7rem)", lineHeight: 0.95 }}>
            <TextReveal onMount delay={0.1}>UN SITE QUI TRAVAILLE</TextReveal>
            <TextReveal onMount delay={0.25}>
              <span className="gradient-text-rev">POUR VOUS, 24H/24.</span>
            </TextReveal>
          </h1>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.8, duration:0.5 }}
            className="flex flex-col sm:flex-row items-start gap-8 mt-10">
            <div className="glass-card grad-border px-8 py-5 text-center">
              <p className="font-bebas text-5xl gradient-text-rev">87%</p>
              <p className="text-xs fg-4 mt-1">cherchent sur Google avant d'appeler</p>
            </div>
            <div className="max-w-lg">
              <p className="fg-3 text-lg leading-relaxed mb-6">
                Sites vitrines modernes, rapides et pensés pour convertir.
                Vos prospects vous trouvent, vous contactent, vous font confiance —
                même quand vous êtes en chantier.
              </p>
              <div className="flex gap-3">
                <Link href="/contact" className="btn-glow"><span>Devis gratuit →</span></Link>
                <a href="tel:+33660534389" className="btn-outline">+33 6 60 53 43 89</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.6 }} className="mb-14">
            <p className="section-tag mb-3">Ce qu'on inclut</p>
            <h2 className="font-bebas fg-1" style={{ fontSize:"clamp(2.5rem, 5vw, 4rem)" }}>
              CHAQUE SITE EST <span className="gradient-text">FAIT POUR CONVERTIR.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-60px" }}
            variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <motion.div key={f.n} variants={fadeUp} whileHover={{ y:-4, transition:{duration:0.22} }}
                className="glass-card p-7 flex flex-col gap-3">
                <span className="font-bebas text-3xl gradient-text">{f.n}</span>
                <h3 className="font-bebas fg-1" style={{ fontSize:"clamp(1.2rem,2vw,1.5rem)" }}>{f.title}</h3>
                <p className="text-sm fg-3 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.6 }} className="mb-14">
            <p className="section-tag mb-3">Portfolio</p>
            <h2 className="font-bebas fg-1" style={{ fontSize:"clamp(2.5rem, 5vw, 4rem)" }}>
              ILS NOUS ONT FAIT <span className="gradient-text">CONFIANCE.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-60px" }}
            variants={stagger} className="grid md:grid-cols-2 gap-5">
            {portfolio.map((p) => (
              <motion.div key={p.name} variants={fadeUp}>
                <a href={p.href} target="_blank" rel="noopener noreferrer"
                  className="group block glass-card overflow-hidden">
                  {/* Color band top */}
                  <div className={`h-32 bg-gradient-to-br ${p.color} relative flex items-center justify-center`}>
                    <div className="hero-grid absolute inset-0 opacity-40" />
                    <p className="relative font-bebas text-white/20 text-7xl select-none">{p.name[0]}</p>
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bebas fg-1 group-hover:text-violet-mid transition-colors"
                          style={{ fontSize:"clamp(1.3rem,2.5vw,1.8rem)" }}>{p.name}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded-full ${p.tag}`}>
                          {p.sector}
                        </span>
                      </div>
                      <span className="fg-5 group-hover:fg-3 transition-colors">
                        <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                    <p className="text-sm fg-3 leading-relaxed mb-4">{p.desc}</p>
                    <p className="text-xs text-violet-mid font-mono">{p.url}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.6 }} className="mb-14 text-center">
            <p className="section-tag mb-3 justify-center">Tarifs</p>
            <h2 className="font-bebas fg-1" style={{ fontSize:"clamp(2.5rem, 5vw, 4rem)" }}>
              TRANSPARENT, <span className="gradient-text">SANS MAUVAISE SURPRISE.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-60px" }}
            variants={stagger} className="grid md:grid-cols-3 gap-5">
            {offers.map((o) => (
              <motion.div key={o.name} variants={fadeUp}
                className={`relative flex flex-col p-8 rounded-2xl ${o.highlight ? "text-white" : "glass-card"}`}
                style={o.highlight ? { background: "linear-gradient(135deg, #7B2FBE 0%, #E91E8C 100%)" } : {}}>
                {o.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white text-violet-mid">
                    Le plus populaire
                  </span>
                )}
                <h3 className={`font-bebas mb-1 ${o.highlight ? "text-white" : "fg-1"}`}
                  style={{ fontSize:"clamp(1.5rem,2.5vw,2rem)" }}>{o.name}</h3>
                <p className={`text-xs mb-4 ${o.highlight ? "text-white/70" : "fg-4"}`}>{o.desc}</p>
                <p className={`font-bebas text-4xl mb-6 ${o.highlight ? "text-white" : "gradient-text"}`}>
                  {o.price}
                </p>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {o.items.map((item) => (
                    <li key={item} className={`flex items-start gap-2.5 text-sm ${o.highlight ? "text-white/80" : "fg-3"}`}>
                      <svg className={`w-4 h-4 shrink-0 mt-0.5 ${o.highlight ? "text-white" : "text-violet-mid"}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`block text-center px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${o.highlight
                    ? "bg-white text-violet-mid hover:bg-white/90"
                    : "btn-glow"}`}>
                  {o.highlight ? o.cta : <span>{o.cta}</span>}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bebas fg-1 mb-4" style={{ fontSize:"clamp(2rem,4vw,3.5rem)" }}>
            VOTRE SITE EN <span className="gradient-text">MOINS DE 3 SEMAINES.</span>
          </h2>
          <p className="fg-4 mb-8 max-w-lg mx-auto">
            Dites-nous ce que vous faites, on s'occupe du reste.
          </p>
          <Link href="/contact" className="btn-glow inline-flex">
            <span>Obtenir un devis gratuit →</span>
          </Link>
        </div>
      </section>
    </>
  );
}
