"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TiltCard } from "@/components/ui/TiltCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    n:    "01",
    href: "/automatisations",
    title: "Automatisations",
    sub:   "sur-mesure",
    desc:  "Devis automatiques, relances clients, confirmations de RDV, suivi de chantier — tout tourne en pilote automatique pendant que vous travaillez.",
    tags:  ["Devis auto", "Relances", "CRM", "Rappels SMS"],
    glow:  "rgba(0,143,120,0.15)",
  },
  {
    n:    "02",
    href: "/sites-web",
    title: "Sites internet",
    sub:   "professionnels",
    desc:  "Sites vitrines modernes, rapides, pensés pour Google et pour convertir vos visiteurs en clients. Livraison en 7 jours.",
    tags:  ["Site vitrine", "SEO local", "Google My Business", "Responsive"],
    glow:  "rgba(43,52,117,0.18)",
  },
];

export function ExpertsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* ── Big heading: line clip-path reveal ───────── */
    const headingLines = section.querySelectorAll(".heading-line");
    gsap.from(headingLines, {
      yPercent: 110,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.14,
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
        once: true,
      },
    });

    /* ── Heading scrub parallax ───────────────────── */
    gsap.to(".experts-heading-wrap", {
      x: -30,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    /* ── Cards stagger ────────────────────────────── */
    gsap.from(section.querySelectorAll(".service-card"), {
      y: 80,
      opacity: 0,
      scale: 0.96,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.18,
      scrollTrigger: {
        trigger: section.querySelector(".cards-grid"),
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-5 sm:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header — overflow-hidden per line for clip reveal */}
        <div className="experts-heading-wrap mb-16">
          <div className="overflow-hidden">
            <div className="heading-line font-bebas fg-6 block"
              style={{ fontSize: "clamp(1.5rem, 9vw, 7rem)", lineHeight: 1 }}>
              EXPERTS EN
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="heading-line font-bebas block"
              style={{ fontSize: "clamp(1.5rem, 9vw, 7rem)", lineHeight: 1 }}>
              <span className="gradient-text">AUTOMATISATION</span>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="cards-grid grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.n} className="service-card">
              <TiltCard className="group h-full" intensity={6}>
                <div className="glass-card grad-border p-8 relative overflow-hidden h-full">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 40%, ${s.glow} 0%, transparent 60%)` }}
                  />

                  <div className="relative">
                    {/* Number + Arrow */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-bebas text-5xl gradient-text leading-none">{s.n}</span>
                      <Link
                        href={s.href}
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 fg-4 group-hover:text-[#008f78] group-hover:border-[#008f78]/40"
                        style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }}
                      >
                        <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </Link>
                    </div>

                    <h3 className="font-bebas fg-1 mb-1" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                      {s.title}
                    </h3>
                    <p className="font-bebas fg-4 mb-5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                      {s.sub}
                    </p>
                    <p className="text-sm fg-3 leading-relaxed mb-6">{s.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t}
                          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{ border: "1px solid rgba(0,143,120,0.30)", color: "#008f78" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
