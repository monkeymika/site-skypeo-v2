"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reasons = [
  {
    n: "01",
    title: "Automatisation intelligente",
    desc: "On identifie les tâches qui vous volent du temps — devis, relances, confirmations — et on les automatise. Vous vous concentrez sur votre vrai travail.",
    glow: "rgba(0,143,120,0.12)",
  },
  {
    n: "02",
    title: "Visibilité en ligne",
    desc: "Un site pro, optimisé SEO et Google My Business. Vos clients vous trouvent avant vos concurrents, même quand vous êtes en chantier.",
    glow: "rgba(43,52,117,0.14)",
  },
  {
    n: "03",
    title: "Une autre façon de travailler",
    desc: "Pas de jargon, pas de contrats pièges. On est là en partenaire, on s'immerge dans votre métier et on construit ce qui vous correspond.",
    glow: "rgba(0,143,120,0.08)",
  },
];

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
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <p className="px-6 pb-5 pl-[4.25rem] text-sm fg-3 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export function WhyAndFAQ() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* ── Heading reveal ─────────────────────── */
    gsap.from(section.querySelectorAll(".whyfaq-line"), {
      yPercent: 110,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.14,
      scrollTrigger: { trigger: section.querySelector(".whyfaq-heading"), start: "top 80%", once: true },
    });

    /* ── Reasons rows ───────────────────────── */
    section.querySelectorAll(".why-row").forEach((row, i) => {
      gsap.from(row, {
        x: -60, opacity: 0, duration: 0.75, ease: "power3.out",
        delay: i * 0.06,
        scrollTrigger: { trigger: row, start: "top 85%", once: true },
      });
    });

    /* ── FAQ items ──────────────────────────── */
    gsap.fromTo(
      section.querySelectorAll(".faq-item"),
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.55, ease: "power3.out", stagger: 0.07,
        scrollTrigger: { trigger: section.querySelector(".faq-list"), start: "top 82%", once: true },
      },
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-5 sm:px-8 lg:px-10 relative overflow-hidden">
      {/* Glow décoratif */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 100% 50%, rgba(43,52,117,0.07) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="whyfaq-heading mb-16">
          <p className="section-tag mb-4">Pourquoi Skypeo</p>
          <div className="overflow-hidden">
            <div className="whyfaq-line font-bebas fg-1 block" style={{ fontSize: "clamp(1.5rem, 6vw, 5rem)" }}>
              L&apos;AGENCE QUI
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="whyfaq-line font-bebas block" style={{ fontSize: "clamp(1.5rem, 6vw, 5rem)" }}>
              <span className="gradient-text">COMPREND VOTRE MÉTIER.</span>
            </div>
          </div>
        </div>

        {/* Layout 2 colonnes sur lg */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Colonne gauche : raisons */}
          <div className="space-y-0">
            {reasons.map((r) => (
              <div
                key={r.n}
                className="why-row group relative py-7 grid grid-cols-12 gap-6 items-start transition-colors duration-300"
                style={{ borderTop: "1px solid var(--divider)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 40% 100% at 0% 50%, ${r.glow} 0%, transparent 70%)` }} />
                <div className="col-span-2">
                  <span className="font-bebas text-3xl gradient-text">{r.n}</span>
                </div>
                <div className="col-span-10">
                  <h3 className="font-bebas fg-1 group-hover:text-[#008f78] transition-colors duration-200 mb-1"
                    style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)" }}>
                    {r.title}
                  </h3>
                  <p className="text-sm fg-3 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--divider)" }} />
          </div>

          {/* Colonne droite : FAQ */}
          <div>
            <p className="section-tag mb-6">Questions fréquentes</p>
            <div className="faq-list space-y-3">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="faq-item">
                  <FAQItem faq={faq} index={i} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
