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
    n:     "01",
    title: "Automatisations\nsur-mesure",
    desc:  "Devis, relances, suivis client, rappels RDV — tout tourne seul.",
    href:  "/automatisations",
    accent: "#008f78",
    bg:    "rgba(0,143,120,0.06)",
    border: "rgba(0,143,120,0.20)",
    borderHover: "rgba(0,143,120,0.50)",
  },
  {
    n:     "02",
    title: "Création de\nsites web",
    desc:  "Sites vitrines modernes, rapides, pensés pour être trouvés sur Google.",
    href:  "/sites-web",
    accent: "#2b3475",
    bg:    "rgba(43,52,117,0.07)",
    border: "rgba(43,52,117,0.22)",
    borderHover: "rgba(43,52,117,0.50)",
  },
  {
    n:     "03",
    title: "Interfaces\npersonnalisées",
    desc:  "Centralisez infos clients, statuts et documents en un seul endroit.",
    href:  "/contact",
    accent: "#00b898",
    bg:    "rgba(0,184,152,0.05)",
    border: "rgba(0,184,152,0.18)",
    borderHover: "rgba(0,184,152,0.45)",
  },
  {
    n:     "04",
    title: "Formation &\nautonomie",
    desc:  "On vous forme pour rester autonome après la mise en place.",
    href:  "/contact",
    accent: "#3d49a0",
    bg:    "rgba(61,73,160,0.06)",
    border: "rgba(61,73,160,0.18)",
    borderHover: "rgba(61,73,160,0.45)",
  },
];

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* ── Header reveal ─────────────────────────── */
    gsap.from(section.querySelector(".services-header"), {
      y: 40,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true,
      },
    });

    /* ── Cards: stagger with slight rotation ──── */
    gsap.from(section.querySelectorAll(".service-card"), {
      y: 90,
      opacity: 0,
      rotation: 1.5,
      scale: 0.97,
      duration: 0.8,
      ease: "power3.out",
      stagger: {
        amount: 0.45,
        from: "start",
      },
      scrollTrigger: {
        trigger: section.querySelector(".services-grid"),
        start: "top 82%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="services-header flex items-end justify-between mb-12">
          <div>
            <p className="section-tag mb-3">Nos services</p>
            <h2 className="font-bebas fg-1" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              CE QU&apos;ON FAIT<br />
              <span className="gradient-text">POUR VOUS.</span>
            </h2>
          </div>
          <p className="hidden sm:block text-sm fg-4 max-w-xs text-right leading-relaxed">
            Des solutions concrètes, adaptées à votre métier.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div key={s.n} className="service-card">
              <TiltCard className="group h-full" intensity={5}>
                <div
                  className="relative rounded-2xl border p-7 overflow-hidden transition-all duration-300 h-full"
                  style={{
                    background: s.bg,
                    borderColor: s.border,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = s.borderHover;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = s.border;
                  }}
                >
                  {/* Arrow link */}
                  <Link
                    href={s.href}
                    className="absolute top-5 right-5 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 fg-4"
                    style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }}
                  >
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>

                  <span className="font-bebas text-4xl opacity-70 mb-5 block" style={{ color: s.accent }}>
                    {s.n}
                  </span>

                  <h3 className="font-bebas fg-1 mb-3 whitespace-pre-line"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}>
                    {s.title}
                  </h3>
                  <p className="text-sm fg-3 leading-relaxed">{s.desc}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
