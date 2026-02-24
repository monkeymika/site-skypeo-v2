"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const NUM_BANDS = 9;

/* ═══════════════════════════════════════════════════════════════
   CTA — Panel reveal + pin + carousel scroll

   ST1 : N bandes horizontales montent en décalé (stagger random)
         → transition hachée, pas d'un seul bloc
   ST2 : section épinglée :
         - Line 1 (chars) apparaît puis disparaît
         - Line 2 (chars) idem — NOTE: pas de gradient-text sur les
           éléments SplitText (background-clip: text incompatible avec
           position:relative des char spans)
         - 3 phrases courtes (words) apparaissent l'une après l'autre
         - La 3ème phrase + le bouton apparaissent simultanément
═══════════════════════════════════════════════════════════════ */
export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const bandsRef = useRef<(HTMLDivElement | null)[]>([]);

  const line1TextRef = useRef<HTMLDivElement>(null);
  const line2TextRef = useRef<HTMLDivElement>(null);

  const phrase1Ref = useRef<HTMLParagraphElement>(null);
  const phrase2Ref = useRef<HTMLParagraphElement>(null);
  const phrase3Ref = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const panel = panelRef.current;
      if (!section || !panel) return;

      /* ── SplitText ──────────────────────────────────────────── */
      const split1 = SplitText.create(line1TextRef.current!, { type: "chars" });
      const split2 = SplitText.create(line2TextRef.current!, { type: "chars" });
      const splitP1 = SplitText.create(phrase1Ref.current!, { type: "words" });
      const splitP2 = SplitText.create(phrase2Ref.current!, { type: "words" });
      const splitP3 = SplitText.create(phrase3Ref.current!, { type: "words" });

      /* ── États initiaux ─────────────────────────────────────── */
      const bandEls = bandsRef.current.filter(Boolean) as HTMLDivElement[];
      gsap.set(bandEls, { y: window.innerHeight });

      gsap.set([...split1.chars, ...split2.chars], { autoAlpha: 0, y: 100 });
      gsap.set([...splitP1.words, ...splitP2.words, ...splitP3.words], {
        autoAlpha: 0,
        y: 40,
      });
      gsap.set(btnsRef.current, { autoAlpha: 0, y: 30 });

      /* ══════════════════════════════════════════════════════════
       ST1 — Bandes hachées montent pendant le scroll d'entrée
    ══════════════════════════════════════════════════════════ */
      gsap.to(bandEls, {
        y: 0,
        ease: "none",
        stagger: { each: 0.14, from: "random" },
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: 1.5,
        },
      });

      /* ══════════════════════════════════════════════════════════
       ST2 — Section épinglée
    ══════════════════════════════════════════════════════════ */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: "+=4800",
          scrub: 1.5,
          anticipatePin: 1,
        },
      });

      /* ── Line 1 in ───────────────────────────────────────────── */
      tl.to(split1.chars, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.03,
      });
      tl.to({}, { duration: 0.5 });

      /* ── Line 1 out ──────────────────────────────────────────── */
      tl.to(split1.chars, {
        autoAlpha: 0,
        y: -100,
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.02,
      });

      /* ── Line 2 in ───────────────────────────────────────────── */
      tl.to(split2.chars, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.03,
      });
      tl.to({}, { duration: 0.5 });

      /* ── Line 2 out ──────────────────────────────────────────── */
      tl.to(split2.chars, {
        autoAlpha: 0,
        y: -100,
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.02,
      });

      /* ── Phrase 1 in ─────────────────────────────────────────── */
      tl.to(splitP1.words, {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.07,
      });
      tl.to({}, { duration: 0.5 });

      /* ── Phrase 1 out ────────────────────────────────────────── */
      tl.to(splitP1.words, {
        autoAlpha: 0,
        y: -40,
        duration: 0.4,
        ease: "power3.in",
        stagger: 0.04,
      });

      /* ── Phrase 2 in ─────────────────────────────────────────── */
      tl.to(splitP2.words, {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.07,
      });
      tl.to({}, { duration: 0.5 });

      /* ── Phrase 2 out ────────────────────────────────────────── */
      tl.to(splitP2.words, {
        autoAlpha: 0,
        y: -40,
        duration: 0.4,
        ease: "power3.in",
        stagger: 0.04,
      });

      /* ── Phrase 3 in + bouton simultanément ─────────────────── */
      tl.to(splitP3.words, {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.07,
      });
      tl.to(
        btnsRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "<0.2",
      );

      tl.to({}, { duration: 1.8 }); // hold final avant unpin

      /* ── Cleanup ─────────────────────────────────────────────── */
      return () => {
        split1.revert();
        split2.revert();
        splitP1.revert();
        splitP2.revert();
        splitP3.revert();
      };
    },
    { scope: sectionRef },
  );

  const itemStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 clamp(20px, 5vw, 80px)",
    textAlign: "center",
    pointerEvents: "none",
  };

  return (
    <section
      ref={sectionRef}
      style={{ height: "100vh", overflow: "hidden", position: "relative" }}
    >
      {/* ── Bandes d'entrée hachées ──────────────────────────── */}
      {Array.from({ length: NUM_BANDS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { bandsRef.current[i] = el; }}
          className="bg-white dark:bg-black"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${(i / NUM_BANDS) * 100}%`,
            width: `${100 / NUM_BANDS}%`,
            borderRight: "1px solid rgba(0,0,0,0.04)",
            zIndex: 0,
          }}
        />
      ))}

      {/* ── Contenu (au-dessus des bandes) ───────────────────── */}
      <div
        ref={panelRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,143,120,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,143,120,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,143,120,0.09) 0%, transparent 70%)",
          }}
        />

        {/* ── LINE 1 : "ON S'OCCUPE DE TOUT." ─────────────── */}
        <div style={itemStyle}>
          <div
            ref={line1TextRef}
            className="font-bebas fg-1"
            style={{ fontSize: "clamp(1rem, 7.5vw, 5rem)", lineHeight: 0.9 }}
          >
            ON S&apos;OCCUPE DE TOUT.
          </div>
        </div>

        {/* ── LINE 2 : "VOUS TRAVAILLEZ." ──────────────────── */}
        {/* Couleur solide (pas gradient-text) : background-clip:text
            est incompatible avec position:relative des char spans GSAP */}
        <div style={itemStyle}>
          <div
            ref={line2TextRef}
            className="font-bebas"
            style={{
              fontSize: "clamp(1rem, 7.5vw, 5rem)",
              lineHeight: 0.9,
              color: "#008f78",
            }}
          >
            VOUS TRAVAILLEZ.
          </div>
        </div>

        {/* ── PHRASE 1 ─────────────────────────────────────── */}
        <div style={itemStyle}>
          <p
            ref={phrase1Ref}
            className="font-bebas fg-1 text-center"
            style={{ fontSize: "clamp(1rem, 7.5vw, 5rem)", lineHeight: 0.9 }}
          >
            Automatisations sur mesure.
          </p>
        </div>

        {/* ── PHRASE 2 ─────────────────────────────────────── */}
        <div style={itemStyle}>
          <p
            ref={phrase2Ref}
            className="font-bebas fg-1 text-center"
            style={{ fontSize: "clamp(1rem, 7.5vw, 5rem)", lineHeight: 0.9 }}
          >
            +150 heures récupérées chaque année.
          </p>
        </div>

        {/* ── PHRASE 3 + BOUTON ────────────────────────────── */}
        <div
          style={{
            ...itemStyle,
            flexDirection: "column",
            gap: "2rem",
            pointerEvents: "none",
          }}
        >
          <p
            ref={phrase3Ref}
            className="font-bebas fg-1 text-center"
            style={{ fontSize: "clamp(1rem, 7.5vw, 5rem)", lineHeight: 0.9 }}
          >
            Premier échange offert.
          </p>
          <div ref={btnsRef} style={{ pointerEvents: "auto" }}>
            <Link
              href="/contact"
              className="btn-glow px-8 py-4 rounded-2xl font-semibold text-sm block"
            >
              <span>Prendre contact gratuitement</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
