const testimonials = [
  {
    name: "Thomas Renard",
    role: "Plombier indépendant",
    location: "Lyon (69)",
    content:
      "Skypeo a complètement transformé ma façon de travailler. Je reçois maintenant 3 fois plus de demandes en ligne et mes devis partent automatiquement. J'ai récupéré mes soirées !",
    initials: "TR",
    rating: 5,
    result: "+180% de demandes de devis",
  },
  {
    name: "Sophie Marchand",
    role: "Électricienne",
    location: "Nantes (44)",
    content:
      "Je ne savais pas par où commencer pour ma présence en ligne. L'équipe de Skypeo a tout géré, du site au référencement. En 2 mois, j'apparais en premier sur Google dans ma ville.",
    initials: "SM",
    rating: 5,
    result: "#1 sur Google local",
  },
  {
    name: "Laurent Petit",
    role: "Entrepreneur en rénovation",
    location: "Toulouse (31)",
    content:
      "Le système de devis en ligne a changé ma vie. Mes clients reçoivent leur devis en quelques minutes, signent directement depuis leur téléphone. Le taux de conversion a explosé.",
    initials: "LP",
    rating: 5,
    result: "+65% de conversions",
  },
  {
    name: "Isabelle Moreau",
    role: "Maçonne artisane",
    location: "Bordeaux (33)",
    content:
      "J'avais peur que ce soit trop compliqué ou trop cher. En réalité, le site est rentabilisé en 4 mois et je n'ai rien à gérer. Skypeo s'occupe de tout, j'adore !",
    initials: "IM",
    rating: 5,
    result: "ROI en 4 mois",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ce que disent
            <br />
            <span className="gradient-text">nos artisans</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Des résultats réels, vérifiables. Ce sont eux qui parlent le mieux de notre travail.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed italic flex-1 mb-4">
                "{t.content}"
              </p>

              {/* Result badge */}
              <div className="mb-4 px-3 py-1.5 rounded-lg bg-brand-500/15 border border-brand-500/20 inline-block">
                <p className="text-xs font-semibold text-brand-300">{t.result}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-600 to-accent-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-slate-500 text-xs">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Avis vérifiés
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            50+ avis clients
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Note moyenne : 4.9/5
          </div>
        </div>
      </div>
    </section>
  );
}
