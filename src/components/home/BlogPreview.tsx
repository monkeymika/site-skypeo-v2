"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";

const posts = [
  {
    slug:     "automatiser-devis-artisan",
    cat:      "Automatisation",
    title:    "Comment automatiser l'envoi de devis quand vous êtes artisan",
    excerpt:  "Envoyer un devis prend en moyenne 45 minutes. Voici comment réduire ça à 2 minutes sans perdre en qualité.",
    date:     "12 jan. 2025",
    read:     "5 min",
    catColor: "text-violet-mid border-violet-mid/30 bg-violet-mid/10",
  },
  {
    slug:     "site-web-plombier-nancy",
    cat:      "Sites web",
    title:    "Pourquoi votre site web est votre meilleur commercial à Nancy",
    excerpt:  "87% des gens cherchent un artisan sur Google avant d'appeler. Voici ce que doit contenir votre site pour qu'ils vous choisissent.",
    date:     "28 déc. 2024",
    read:     "7 min",
    catColor: "text-rose border-rose/30 bg-rose/10",
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="section-tag mb-3">Blog</p>
            <h2 className="font-bebas fg-1" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              DERNIERS{" "}
              <span className="gradient-text">ARTICLES.</span>
            </h2>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-2 text-sm fg-4 hover:text-violet-mid transition-colors group">
            Tous les articles
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-5"
        >
          {posts.map((p) => (
            <motion.div key={p.slug} variants={fadeUp}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block glass-card p-7 h-full hover:border-violet-mid/30"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] border px-2.5 py-1 rounded-full ${p.catColor}`}>
                    {p.cat}
                  </span>
                  <span className="text-[10px] fg-5">{p.read} de lecture</span>
                </div>

                <h3 className="font-bebas fg-1 group-hover:text-violet-mid transition-colors mb-3"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p className="text-sm fg-3 leading-relaxed mb-6">{p.excerpt}</p>

                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--divider)" }}>
                  <span className="text-xs fg-5">{p.date}</span>
                  <span className="text-xs font-semibold text-violet-mid group-hover:text-rose transition-colors flex items-center gap-1">
                    Lire
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
