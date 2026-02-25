"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { stagger as staggerContainer, fadeUp } from "@/lib/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    client: "Sundgau Paysages",
    category: "Paysagiste",
    description:
      "Site vitrine complet avec galerie de réalisations, formulaire de devis automatisé et référencement local. Multiplication des demandes entrantes en 2 mois.",
    tags: ["Site vitrine", "Formulaire devis", "SEO local"],
    highlight: "×3 demandes de devis",
    highlightColor: "text-emerald-400",
    tagBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    border: "rgba(52, 211, 153, 0.15)",
  },
  {
    client: "Swag Auto",
    category: "Garage automobile",
    description:
      "Automatisation complète du suivi client : rappels d'entretien, confirmations de rendez-vous et relances devis envoyés automatiquement par SMS et email.",
    tags: ["Automatisation CRM", "Rappels SMS", "Suivi client"],
    highlight: "8h/semaine économisées",
    highlightColor: "text-blue-400",
    tagBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "rgba(59, 130, 246, 0.15)",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll(".project-card"),
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=700",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.from(cards[0], { x: () => window.innerWidth, opacity: 0, duration: 1 })
          .from(cards[1], { x: () => window.innerWidth, opacity: 0, duration: 1 }, ">-0.4");
      });

      mm.add("(max-width: 767px)", () => {
        gsap.from(section.querySelectorAll(".project-card"), {
          y: 80,
          opacity: 0,
          scale: 0.96,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <motion.p variants={fadeUp} className="section-tag mb-3">Projets récents</motion.p>
            <motion.h2
              variants={fadeUp}
              className="display-heading text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Ils nous ont fait{" "}
              <span className="gradient-text">confiance.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-zinc-500 text-sm max-w-xs">
            Des résultats concrets pour de vraies entreprises autour de Nancy.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.client}
              className="project-card glass-card p-8 relative overflow-hidden group"
              style={{ borderColor: project.border }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 50%, ${project.border} 0%, transparent 60%)`,
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">{project.client}</h3>
                  </div>
                  <span className={`text-sm font-bold ${project.highlightColor} text-right shrink-0 ml-4`}>
                    {project.highlight}
                  </span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-zinc-600 text-sm">
            Votre entreprise pourrait être la prochaine.{" "}
            <a href="/contact" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
              Parlons-en →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
