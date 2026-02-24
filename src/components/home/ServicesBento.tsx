"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { stagger as staggerContainer, fadeUp, scaleIn } from "@/lib/animations";

export function ServicesBento() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.p variants={fadeUp} className="section-tag mb-3">Nos services</motion.p>
          <motion.h2
            variants={fadeUp}
            className="display-heading text-white max-w-xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Tout ce dont vous avez besoin,{" "}
            <span className="gradient-text">rien de superflu.</span>
          </motion.h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Card 1 – Automatisations (wide, blue bg) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 rounded-3xl bg-blue-600 p-8 text-white flex flex-col justify-between min-h-[300px] group relative overflow-hidden"
          >
            {/* Shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)" }} />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-black mb-3 leading-tight">
                Automatisations sur-mesure
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
                Générez vos devis, relances et suivis client automatiquement.
                Fini les tâches répétitives — concentrez-vous sur votre vrai travail.
              </p>
            </div>
            <Link
              href="/automatisations"
              className="relative mt-6 self-start inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 font-semibold rounded-xl text-sm hover:bg-blue-50 transition-all duration-200 hover:-translate-y-px"
            >
              En savoir plus
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Card 2 – Stat */}
          <motion.div
            variants={scaleIn}
            className="rounded-3xl bg-orange-500 p-8 text-white flex flex-col justify-center items-center text-center min-h-[300px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)" }} />
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-black text-white leading-none mb-3"
              style={{ fontSize: "clamp(2.5rem, 11vw, 5rem)" }}
            >
              +150h
            </motion.p>
            <p className="text-orange-100 text-sm leading-relaxed relative">
              économisées en moyenne grâce à nos automatisations personnalisées
            </p>
          </motion.div>

          {/* Card 3 – Sites web */}
          <motion.div variants={fadeUp} className="glass-card gradient-border p-7 flex flex-col justify-between min-h-[240px] group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl mb-5">
                🌐
              </div>
              <h3 className="text-base font-bold text-white mb-2">Création de sites web</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Sites vitrines modernes, rapides et pensés pour être visibles sur Google.
              </p>
            </div>
            <Link href="/sites-web" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-2">
              Voir les offres
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Card 4 – Interfaces */}
          <motion.div variants={fadeUp} className="glass-card p-7 flex flex-col justify-between min-h-[240px] group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-white/[0.06] flex items-center justify-center text-xl mb-5">
                🗂️
              </div>
              <h3 className="text-base font-bold text-white mb-2">Interfaces personnalisées</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Centralisez vos infos client, statuts et documents. Interface adaptée à votre activité.
              </p>
            </div>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-zinc-400 hover:text-white transition-colors group-hover:gap-2">
              Nous contacter
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Card 5 – Formation */}
          <motion.div variants={fadeUp} className="glass-card p-7 flex flex-col justify-between min-h-[240px] group"
            style={{ background: "rgba(255,255,255,0.025)" }}>
            <div>
              <div className="w-11 h-11 rounded-2xl bg-white/[0.06] flex items-center justify-center text-xl mb-5">
                🎓
              </div>
              <h3 className="text-base font-bold text-white mb-2">Formation & autonomie</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                On vous forme à vos outils pour rester autonome, même après la mise en place.
              </p>
            </div>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-zinc-400 hover:text-white transition-colors group-hover:gap-2">
              En savoir plus
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
