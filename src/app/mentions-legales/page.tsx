import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
        <h1 className="text-3xl font-bold text-white mb-8">Mentions légales</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Éditeur du site</h2>
          <p className="text-slate-400">
            <strong className="text-slate-300">Skypeo</strong>
            <br />
            Adresse : [À compléter]
            <br />
            Email : contact@skypeo.fr
            <br />
            Téléphone : +33 1 23 45 67 89
            <br />
            SIRET : [À compléter]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Hébergement</h2>
          <p className="text-slate-400">
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
            CA 91723, USA.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Propriété intellectuelle
          </h2>
          <p className="text-slate-400">
            L'ensemble du contenu de ce site (textes, images, graphismes, logo) est
            la propriété exclusive de Skypeo. Toute reproduction est interdite sans
            autorisation préalable.
          </p>
        </section>
      </div>
    </div>
  );
}
