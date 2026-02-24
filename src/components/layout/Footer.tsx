import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t-0"
      style={{ background: "#0b0117" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center font-bebas text-sm text-white"
                style={{ background: "linear-gradient(135deg, #008f78, #2b3475)" }}
              >
                S
              </div>
              <span className="font-bebas text-xl tracking-widest text-white">SKYPEO</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-5">
              Création de sites web & automatisations sur mesure pour artisans, TPE et pros débordés. Nancy, France.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:timothee.skypeo@gmail.com"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-[#008f78] transition-colors"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                timothee.skypeo@gmail.com
              </a>
              <a
                href="tel:+33660534389"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-[#008f78] transition-colors"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +33 6 60 53 43 89
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                ["/", "Accueil"],
                ["/automatisations", "Automatisations"],
                ["/sites-web", "Sites web"],
                ["/blog", "Blog"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
              Légal
            </h3>
            <ul className="space-y-2.5">
              {[
                ["/mentions-legales", "Mentions légales"],
                ["/confidentialite", "Politique de confidentialité"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col sm:flex-row justify-between gap-3"
          style={{ borderColor: "rgba(0,143,120,0.10)" }}
        >
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Skypeo — Nancy, France
          </p>
          <p className="text-xs text-white/20">
            Fait pour les pros qui n&apos;ont pas de temps à perdre
          </p>
        </div>
      </div>
    </footer>
  );
}
