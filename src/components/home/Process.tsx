"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TiltCard } from "@/components/ui/TiltCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  { n: "01", title: "Analyse",       desc: "On écoute, on comprend votre métier, vos douleurs et vos objectifs. Aucune solution générique.", accent: "#008f78" },
  { n: "02", title: "Conception",    desc: "On conçoit la solution sur-mesure : site, automatisation ou interface — adaptée à vous.",          accent: "#00a88e" },
  { n: "03", title: "Mise en place", desc: "On déploie, on connecte, on teste. Vous n'avez rien à gérer techniquement.",                       accent: "#2b3475" },
  { n: "04", title: "Livraison",     desc: "Vous prenez en main avec une formation claire. On reste disponibles après.",                        accent: "#3d49a0" },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* ── Header line reveal ────────────────────── */
    gsap.from(section.querySelectorAll(".process-line"), {
      yPercent: 110,
      opacity: 0,
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: section.querySelector(".process-header"),
        start: "top 80%",
        once: true,
      },
    });

    /* ── Cards: cascade from bottom ───────────── */
    const cards = section.querySelectorAll(".process-card");
    gsap.from(cards, {
      y: 100,
      opacity: 0,
      scale: 0.94,
      duration: 0.85,
      ease: "power3.out",
      stagger: {
        amount: 0.5,
        from: "start",
      },
      scrollTrigger: {
        trigger: section.querySelector(".process-grid"),
        start: "top 82%",
        once: true,
      },
    });

    /* ── Top accent line: width expand ────────── */
    gsap.from(section.querySelectorAll(".card-accent-line"), {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: section.querySelector(".process-grid"),
        start: "top 80%",
        once: true,
      },
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-5 sm:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="process-header mb-16">
          <p className="section-tag mb-3">Notre processus</p>
          <div className="overflow-hidden">
            <div className="process-line font-bebas fg-1" style={{ fontSize: "clamp(1.8rem, 8vw, 4.5rem)" }}>
              SIMPLE, RAPIDE,{" "}
              <span className="gradient-text">SANS PRISE DE TÊTE.</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="process-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="process-card">
              <TiltCard className="group h-full" intensity={6} glare>
                <div className="glass-card relative overflow-hidden p-7 h-full">

                  {/* Top accent line */}
                  <div
                    className="card-accent-line absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
                  />

                  {/* Watermark number */}
                  <span
                    className="absolute -bottom-4 -right-2 font-bebas text-8xl select-none pointer-events-none"
                    style={{ color: `${s.accent}14`, lineHeight: 1 }}
                  >
                    {i + 1}
                  </span>

                  {/* Step badge */}
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg font-bebas text-sm text-white mb-5"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}60, ${s.accent}20)`,
                      border: `1px solid ${s.accent}30`,
                    }}
                  >
                    {s.n}
                  </span>

                  <h3
                    className="font-bebas fg-1 mb-3 group-hover:text-[#008f78] transition-colors"
                    style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm fg-3 leading-relaxed relative">{s.desc}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
