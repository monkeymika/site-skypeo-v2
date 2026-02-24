"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reasons = [
  {
    n:    "01",
    title: "Automatisation intelligente",
    desc:  "On identifie les tâches qui vous volent du temps — devis, relances, confirmations — et on les automatise. Vous vous concentrez sur votre vrai travail.",
    glow:  "rgba(0,143,120,0.12)",
  },
  {
    n:    "02",
    title: "Visibilité en ligne",
    desc:  "Un site pro, optimisé SEO et Google My Business. Vos clients vous trouvent avant vos concurrents, même quand vous êtes en chantier.",
    glow:  "rgba(43,52,117,0.14)",
  },
  {
    n:    "03",
    title: "Une autre façon de travailler",
    desc:  "Pas de jargon, pas de contrats pièges. On est là en partenaire, on s'immerge dans votre métier et on construit ce qui vous correspond.",
    glow:  "rgba(0,143,120,0.08)",
  },
];

export function WhySkypeo() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* ── Heading lines: clip-path reveal ──────── */
    const headLines = section.querySelectorAll(".why-line");
    gsap.from(headLines, {
      yPercent: 110,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.14,
      scrollTrigger: {
        trigger: section.querySelector(".why-heading"),
        start: "top 80%",
        once: true,
      },
    });

    /* ── Horizontal scrub on heading ──────────── */
    gsap.to(section.querySelector(".why-heading"), {
      x: 20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "center top",
        scrub: 2,
      },
    });

    /* ── Rows: slide from left, stagger ────────── */
    const rows = section.querySelectorAll(".why-row");
    rows.forEach((row, i) => {
      gsap.from(row, {
        x: -60,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
          once: true,
        },
        delay: i * 0.06,
      });
    });

    /* ── Number: count scrub effect ───────────── */
    gsap.from(section.querySelectorAll(".why-number"), {
      opacity: 0,
      scale: 0.6,
      duration: 0.5,
      ease: "back.out(1.8)",
      stagger: 0.12,
      scrollTrigger: {
        trigger: section.querySelector(".why-list"),
        start: "top 80%",
        once: true,
      },
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-5 sm:px-8 lg:px-10 relative overflow-hidden">

      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 100% 50%, rgba(43,52,117,0.07) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto">

        {/* Large heading with overflow-hidden for clip reveal */}
        <div className="why-heading mb-20">
          <p className="section-tag mb-4">Pourquoi Skypeo</p>
          <div className="overflow-hidden">
            <div className="why-line font-bebas fg-1 block"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              L&apos;AGENCE QUI
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="why-line font-bebas block"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              <span className="gradient-text">COMPREND VOTRE MÉTIER.</span>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="why-list space-y-0">
          {reasons.map((r) => (
            <div
              key={r.n}
              className="why-row group relative py-8 grid grid-cols-12 gap-6 items-start transition-colors duration-300"
              style={{ borderTop: "1px solid var(--divider)" }}
            >
              {/* Hover bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 40% 100% at 0% 50%, ${r.glow} 0%, transparent 70%)` }}
              />

              {/* Number */}
              <div className="col-span-2 sm:col-span-1">
                <span className="why-number font-bebas text-3xl sm:text-4xl gradient-text">{r.n}</span>
              </div>

              {/* Title */}
              <div className="col-span-10 sm:col-span-4">
                <h3
                  className="font-bebas fg-1 group-hover:text-[#008f78] transition-colors duration-200"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                >
                  {r.title}
                </h3>
              </div>

              {/* Desc */}
              <div className="col-span-12 sm:col-span-7">
                <p className="text-sm fg-3 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--divider)" }} />
        </div>
      </div>
    </section>
  );
}
