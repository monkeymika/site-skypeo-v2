"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Combien de temps pour avoir mon site en ligne ?",
    a: "En général, entre 5 et 10 jours ouvrés à partir du lancement du projet. On travaille vite et de façon structurée pour tenir nos délais. Vous êtes impliqué uniquement pour valider les étapes clés.",
  },
  {
    q: "Je ne suis pas à l'aise avec la technologie, est-ce un problème ?",
    a: "Pas du tout ! Nos solutions sont pensées pour être utilisées par des artisans, pas des informaticiens. Vous recevez une formation, un guide, et notre support est toujours disponible si vous avez la moindre question.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Chaque projet est unique, donc nous travaillons sur devis personnalisé. En moyenne, un site vitrine complet démarre à partir de 990€. Nous proposons aussi des formules mensuelle pour les artisans qui préfèrent étaler le coût.",
  },
  {
    q: "Que se passe-t-il si je ne suis pas satisfait ?",
    a: "Nous n'avons pas de contrat longue durée. Si pour une raison ou une autre vous n'êtes pas satisfait, vous êtes libre de partir. On préfère mériter votre fidélité plutôt que vous l'imposer.",
  },
  {
    q: "Vous travaillez avec quels types d'artisans ?",
    a: "Principalement des plombiers, électriciens, chauffagistes, maçons, menuisiers et entrepreneurs en rénovation. Mais toute activité artisanale ou de services peut bénéficier de nos solutions.",
  },
  {
    q: "Est-ce que je garde la propriété de mon site ?",
    a: "Absolument. Le site, le code, le nom de domaine — tout vous appartient. Nous vous livrons un site clé en main dont vous êtes le seul propriétaire.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
        <svg
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Questions fréquentes
          </h2>
          <p className="text-slate-400">
            Tout ce que vous devez savoir avant de vous lancer.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
