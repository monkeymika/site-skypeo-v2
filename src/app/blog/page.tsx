import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Conseils digitaux pour artisans",
  description:
    "Articles et conseils pratiques pour aider les artisans et TPE à utiliser le digital pour développer leur activité.",
};

const articles = [
  {
    slug: "automatiser-devis-artisan",
    cat: "Automatisation",
    title: "Comment automatiser l'envoi de devis quand vous êtes artisan",
    excerpt: "Envoyer un devis prend en moyenne 45 minutes. Voici comment réduire ça à 2 minutes sans perdre en qualité.",
    date: "12 jan. 2025",
    read: "5 min",
    catColor: "text-violet-mid border-violet-mid/30 bg-violet-mid/10",
    latest: true,
  },
  {
    slug: "site-web-plombier-nancy",
    cat: "Sites web",
    title: "Pourquoi votre site web est votre meilleur commercial à Nancy",
    excerpt: "87% des gens cherchent un artisan sur Google avant d'appeler. Voici ce que doit contenir votre site pour qu'ils vous choisissent.",
    date: "28 déc. 2024",
    read: "7 min",
    catColor: "text-rose border-rose/30 bg-rose/10",
    latest: false,
  },
  {
    slug: "google-my-business-artisan",
    cat: "SEO local",
    title: "Google My Business pour les artisans : le guide complet 2025",
    excerpt: "Votre fiche GMB bien remplie, c'est de la visibilité gratuite sur Google. Comment la configurer en 30 minutes.",
    date: "10 déc. 2024",
    read: "8 min",
    catColor: "text-amber-600 dark:text-amber-400 border-amber-400/30 bg-amber-400/10",
    latest: false,
  },
  {
    slug: "relances-clients-automatiques",
    cat: "Automatisation",
    title: "Relances clients automatiques : récupérez 40% de vos devis perdus",
    excerpt: "Un devis sans relance a 60% de chances de rester sans réponse. Voici comment mettre en place des relances automatiques en 1 heure.",
    date: "1 déc. 2024",
    read: "6 min",
    catColor: "text-violet-mid border-violet-mid/30 bg-violet-mid/10",
    latest: false,
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-5 sm:px-8 lg:px-10 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 70% 0%, rgba(233,30,140,0.10) 0%, transparent 65%)" }} />
        <div className="relative max-w-7xl mx-auto">
          <p className="section-tag mb-6">Blog</p>
          <h1 className="font-bebas fg-1 mb-4" style={{ fontSize: "clamp(2rem, 9vw, 6rem)", lineHeight: 0.95 }}>
            CONSEILS CONCRETS
            <br />
            <span className="gradient-text">POUR LES PROS DU TERRAIN.</span>
          </h1>
          <p className="fg-3 text-lg max-w-lg leading-relaxed">
            Articles pratiques sur l'automatisation, les sites web et le SEO local — écrits pour les artisans, pas pour les geeks.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-24 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {articles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`}
                className="group block glass-card p-7 h-full">
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] border px-2.5 py-1 rounded-full ${a.catColor}`}>
                    {a.cat}
                  </span>
                  <div className="flex items-center gap-2">
                    {a.latest && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold fg-4"
                        style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }}>
                        Dernier article
                      </span>
                    )}
                    <span className="text-[10px] fg-5">{a.read} de lecture</span>
                  </div>
                </div>

                <h2 className="font-bebas fg-1 group-hover:text-violet-mid transition-colors mb-3"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", lineHeight: 1.2 }}>
                  {a.title}
                </h2>
                <p className="text-sm fg-3 leading-relaxed mb-6">{a.excerpt}</p>

                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--divider)" }}>
                  <span className="text-xs fg-5">{a.date}</span>
                  <span className="text-xs font-semibold text-violet-mid group-hover:text-rose transition-colors flex items-center gap-1">
                    Lire
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
