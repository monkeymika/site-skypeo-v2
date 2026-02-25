"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    category: "Plomberie",
    title: "PlombiPro – Site & réservation en ligne",
    description:
      "Site vitrine complet avec système de réservation et devis automatisé pour un plombier indépendant à Bordeaux.",
    metrics: ["+240% de demandes", "4.9★ Google", "Site en 6 jours"],
    tags: ["Site vitrine", "Devis auto", "SEO local"],
    gradient: "from-brand-600/20 to-brand-900/40",
    accent: "brand",
  },
  {
    category: "Électricité",
    title: "ElecPro Sud – CRM & automatisation",
    description:
      "Mise en place d'un CRM sur mesure et d'un système de relances automatiques pour une équipe de 4 électriciens à Marseille.",
    metrics: ["-8h/semaine", "+65% de conversions", "ROI en 3 mois"],
    tags: ["CRM", "Automatisation", "Équipe"],
    gradient: "from-accent-500/20 to-slate-900/40",
    accent: "accent",
  },
  {
    category: "Rénovation",
    title: "Rénov'Expert – Présence digitale complète",
    description:
      "Refonte totale de l'identité digitale : site, Google My Business, avis clients et campagne SEO locale pour un entrepreneur en rénovation.",
    metrics: ["#1 sur Google local", "+320% de trafic", "15 avis 5★"],
    tags: ["Site web", "SEO", "GMB"],
    gradient: "from-purple-600/20 to-slate-900/40",
    accent: "brand",
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      /* ── 3 colonnes desktop : breakpoint lg ─────── */
      gsap.fromTo(
        section.querySelectorAll(".portfolio-card"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="realisations" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Réalisations
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Des résultats concrets
            <br />
            <span className="gradient-text">pour de vraies entreprises</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Voici quelques projets réalisés pour des artisans qui ont fait confiance à Skypeo.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`portfolio-card rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${project.gradient} hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group`}
            >
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      project.accent === "brand"
                        ? "bg-brand-500/20 text-brand-300"
                        : "bg-accent-500/20 text-accent-300"
                    }`}
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-slate-500 px-2 py-0.5 rounded bg-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-4">
            Votre projet pourrait être le prochain
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl text-sm font-medium transition-all duration-200"
          >
            Discutons de votre projet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
