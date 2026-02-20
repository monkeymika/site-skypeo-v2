"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "/", label: "Accueil", num: "01" },
  { href: "/automatisations", label: "Automatisations", num: "02" },
  { href: "/sites-web", label: "Sites web", num: "03" },
  { href: "/blog", label: "Blog", num: "04" },
  { href: "/contact", label: "Contact", num: "05" },
];

/* The clip-path expands from the pill's center (~50px from top of viewport) */
const CLIP_ORIGIN = "50% 50px";
const menuVariants = {
  closed: { clipPath: `circle(3% at ${CLIP_ORIGIN})` },
  open: { clipPath: `circle(160% at ${CLIP_ORIGIN})` },
};

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  /* Close on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ── 2-bar hamburger math ───────────────────────────────
   * Container: h = 1.5 + 6 + 1.5 = 9 px  → center at 4.5 px
   * Bar-1 center: 0.75 px  → Δy = +3.75 px
   * Bar-2 center: 7.5  px  → Δy = -3.75 px  (symmetric feel)
   */
  const bar1 = { closed: { y: 0, rotate: 0 }, open: { y: 3.75, rotate: 45 } };
  const bar2 = { closed: { y: 0, rotate: 0 }, open: { y: -3.75, rotate: -45 } };
  const barTransition = { duration: 0.32, ease: [0.76, 0, 0.24, 1] as const };

  return (
    <>
      {/* ════════════════════════════════════════════════
          FLOATING PILL
      ════════════════════════════════════════════════ */}
      {!menuOpen && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 2.0 }}
          className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
          /* keep pill above the full-screen menu */
          style={{ willChange: "transform" }}
        >
          <div
            className="flex items-center gap-2 p-3 rounded-[2.25rem] max-w-full"
            style={{
              maxWidth: "calc(100% - 32px)",
              background: "#0D0A1A",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: [
                "0 4px 6px rgba(0,0,0,0.25)",
                "0 12px 40px rgba(0,0,0,0.55)",
                "inset 0 1px 0 rgba(255,255,255,0.05)",
              ].join(", "),
            }}
          >
            {/* ── Left: Menu / Fermer ───────────────────── */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="flex items-center gap-3 pl-4 pr-5 py-3 rounded-[1.75rem]
                       transition-colors duration-200 hover:bg-white/[0.07] active:bg-white/[0.11]"
            >
              {/* 2-bar → X */}
              <span className="relative flex flex-col gap-[6px] w-[18px] h-[9px]">
                <motion.span
                  className="absolute top-0 left-0 w-full h-[1.5px] rounded-full bg-white"
                  style={{ originX: "50%", originY: "50%" }}
                  variants={bar1}
                  animate={menuOpen ? "open" : "closed"}
                  transition={barTransition}
                />
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[1.5px] rounded-full bg-white"
                  style={{ originX: "50%", originY: "50%" }}
                  variants={bar2}
                  animate={menuOpen ? "open" : "closed"}
                  transition={barTransition}
                />
              </span>

              {/* Label flips between Menu / Fermer */}
              <span className="text-[15px] font-medium text-white/80 tracking-wide leading-none w-[56px] text-left">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? "close" : "open"}
                    className="block"
                    initial={{ opacity: 0, y: menuOpen ? -8 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: menuOpen ? 8 : -8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    {menuOpen ? "Fermer" : "Menu"}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>

            {/* Divider */}
            <span className="block w-px h-6 rounded-full bg-white/[0.08]" />

            {/* ── Center: Logo ──────────────────────────── */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 rounded-[1.75rem] transition-colors duration-200
                       hover:bg-white/[0.07] active:bg-white/[0.11]"
            >
              <span className="font-bebas text-[1.125rem] tracking-[0.18em] text-white leading-none">
                SKYPEO
              </span>
            </Link>

            {/* Divider */}
            <span className="block w-px h-6 rounded-full bg-white/[0.08]" />

            {/* ── Right: Contact ────────────────────────── */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="pl-4 pr-4 py-3 rounded-[1.75rem] text-[15px] font-medium
                       text-white/80 transition-all duration-200
                       hover:text-white hover:bg-white/[0.07] active:bg-white/[0.11]"
              style={{ border: "1px solid rgba(255,255,255,0.14)" }}
            >
              Contact
            </Link>

            {/* Theme toggle inside pill */}
            <div className="ml-2 mr-0 pl-0">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}

      {/* ════════════════════════════════════════════════
          FULL-SCREEN MENU
          Clip-path expands outward from the pill center
      ════════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="fs-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-hidden"
            style={{ background: "#0D0A1A" }}
          >
            {/* Grain overlay */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-[0.025]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: "180px 180px",
              }}
            />

            {/* Subtle violet glow in corner */}
            <div
              aria-hidden
              className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(123,47,190,0.10) 0%, transparent 65%)",
              }}
            />

            {/* ── Top bar ─────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="relative flex items-center justify-between px-6 sm:px-12 lg:px-16 pt-6 pb-3 shrink-0"
            >
              <span className="font-bebas text-2xl tracking-[0.18em] text-white/10 select-none">
                SKYPEO
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-colors duration-150 hover:bg-white/[0.03]"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-lg leading-none">✕</span>
              </button>
            </motion.div>

            {/* ── Nav links ───────────────────────────── */}
            <nav className="relative flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 pb-28">
              {NAV.map(({ href, label, num }, i) => {
                const active =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <motion.div
                    key={href}
                    className="group"
                    initial={{ opacity: 0, y: 56 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 28 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.18 + i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Link
                      href={href}
                      className="flex items-baseline justify-between py-4 sm:py-5
                                 border-b border-white/[0.06] group-hover:border-white/[0.14]
                                 transition-colors duration-300"
                    >
                      {/* Number + label */}
                      <div className="flex items-baseline gap-3 sm:gap-5">
                        <span className="font-mono text-[10px] text-white/20 tabular-nums shrink-0">
                          {num}
                        </span>
                        <span
                          className={`font-bebas leading-none tracking-wide transition-colors duration-200 ${
                            active
                              ? "gradient-text"
                              : "text-white/60 group-hover:text-white"
                          }`}
                          style={{ fontSize: "clamp(2.4rem, 6.5vw, 5.5rem)" }}
                        >
                          {label}
                        </span>
                      </div>

                      {/* Arrow */}
                      <span
                        aria-hidden
                        className="text-white/20 group-hover:text-white/50
                                   transition-all duration-300
                                   group-hover:translate-x-1 group-hover:-translate-y-1
                                   hidden sm:block text-lg"
                      >
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* ── Footer strip ────────────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.55 }}
              className="relative flex items-center justify-between
                         px-6 sm:px-12 lg:px-16 py-5 shrink-0"
            >
              <p className="text-[10px] text-white/20 font-medium tracking-[0.28em] uppercase">
                Nancy · France
              </p>
              <p className="text-[10px] text-white/20 font-medium tracking-[0.28em] uppercase">
                © 2025 Skypeo
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
