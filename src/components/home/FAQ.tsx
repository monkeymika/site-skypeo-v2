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
    a: "Chaque projet est unique, donc nous travaillons sur devis personnalisé. En moyenne, un site vitrine complet démarre à partir de 990 €. Nous proposons aussi des formules mensuelles pour les artisans qui préfèrent étaler le coût.",
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

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4 pr-4">
          <span className="font-bebas text-lg gradient-text shrink-0 w-7">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium fg-1 group-hover:text-[#008f78] transition-colors">
            {faq.q}
          </span>
        </div>
        <svg
          className={`w-4 h-4 fg-4 shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <p className="px-6 pb-5 pl-[4.25rem] text-sm fg-3 leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-24 px-5 sm:px-8 lg:px-10">
      <div className="max-w-3xl mx-auto">

        <div className="mb-14">
          <p className="section-tag mb-3">FAQ</p>
          <h2 className="font-bebas fg-1" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            VOS QUESTIONS,{" "}
            <span className="gradient-text">NOS RÉPONSES.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
