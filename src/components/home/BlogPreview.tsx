"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const posts = [
  {
    slug:     "automatiser-devis-artisan",
    cat:      "Automatisation",
    title:    "Comment automatiser l'envoi de devis quand vous êtes artisan",
    excerpt:  "Envoyer un devis prend en moyenne 45 minutes. Voici comment réduire ça à 2 minutes sans perdre en qualité.",
    date:     "12 jan. 2025",
    read:     "5 min",
    accentColor: "#008f78",
    borderColor: "rgba(0,143,120,0.25)",
    bgColor: "rgba(0,143,120,0.08)",
  },
  {
    slug:     "site-web-plombier-nancy",
    cat:      "Sites web",
    title:    "Pourquoi votre site web est votre meilleur commercial à Nancy",
    excerpt:  "87% des gens cherchent un artisan sur Google avant d'appeler. Voici ce que doit contenir votre site pour qu'ils vous choisissent.",
    date:     "28 déc. 2024",
    read:     "7 min",
    accentColor: "#2b3475",
    borderColor: "rgba(43,52,117,0.28)",
    bgColor: "rgba(43,52,117,0.08)",
  },
];

export function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* ── Header ────────────────────────────────── */
    gsap.from(section.querySelector(".blog-header"), {
      y: 36,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        once: true,
      },
    });

    /* ── Cards: from opposite sides ───────────── */
    const cards = section.querySelectorAll(".blog-card");
    gsap.from(cards[0], {
      x: -60,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section.querySelector(".blog-grid"),
        start: "top 82%",
        once: true,
      },
    });
    if (cards[1]) {
      gsap.from(cards[1], {
        x: 60,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: section.querySelector(".blog-grid"),
          start: "top 82%",
          once: true,
        },
      });
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-5 sm:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="blog-header flex items-end justify-between mb-12">
          <div>
            <p className="section-tag mb-3">Blog</p>
            <h2 className="font-bebas fg-1" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              DERNIERS{" "}
              <span className="gradient-text">ARTICLES.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-sm fg-4 hover:text-[#008f78] transition-colors group"
          >
            Tous les articles
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="blog-grid grid md:grid-cols-2 gap-5">
          {posts.map((p) => (
            <div key={p.slug} className="blog-card">
              <Link
                href={`/blog/${p.slug}`}
                className="group block glass-card p-7 h-full"
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] border px-2.5 py-1 rounded-full"
                    style={{ color: p.accentColor, borderColor: p.borderColor, background: p.bgColor }}
                  >
                    {p.cat}
                  </span>
                  <span className="text-[10px] fg-5">{p.read} de lecture</span>
                </div>

                <h3
                  className="font-bebas fg-1 group-hover:text-[#008f78] transition-colors mb-3"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", lineHeight: 1.2 }}
                >
                  {p.title}
                </h3>
                <p className="text-sm fg-3 leading-relaxed mb-6">{p.excerpt}</p>

                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--divider)" }}>
                  <span className="text-xs fg-5">{p.date}</span>
                  <span
                    className="text-xs font-semibold flex items-center gap-1 transition-colors group-hover:text-[#008f78]"
                    style={{ color: p.accentColor }}
                  >
                    Lire
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
