import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function Confidentialite() {
  return (
    <div className="min-h-screen pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
        <h1 className="text-3xl font-bold text-white mb-8 mt-24">
          Politique de confidentialité
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Responsable du traitement
          </h2>
          <p className="text-slate-400">
            <strong className="text-slate-300">Skypeo</strong>
            <br />
            Email : timothee.skypeo@gmail.com
            <br />
            Téléphone : +33 6 60 53 43 89
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Données collectées
          </h2>
          <p className="text-slate-400">
            Dans le cadre de notre formulaire de contact, nous collectons les
            données suivantes :
          </p>
          <ul className="text-slate-400 mt-2 space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (facultatif)</li>
            <li>Métier / activité professionnelle</li>
            <li>Message libre</li>
          </ul>
          <p className="text-slate-400 mt-3">
            Ces données sont utilisées uniquement pour répondre à vos demandes
            et ne sont jamais transmises à des tiers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Finalité du traitement
          </h2>
          <p className="text-slate-400">
            Les données collectées via notre formulaire de contact sont
            utilisées exclusivement pour :
          </p>
          <ul className="text-slate-400 mt-2 space-y-1">
            <li>Répondre à vos demandes d'information</li>
            <li>Vous recontacter dans le cadre d'un projet</li>
            <li>Réaliser un audit gratuit de votre activité</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Durée de conservation
          </h2>
          <p className="text-slate-400">
            Vos données sont conservées pendant une durée maximale de 3 ans à
            compter du dernier contact. Passé ce délai, elles sont supprimées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Vos droits
          </h2>
          <p className="text-slate-400">
            Conformément au RGPD, vous disposez des droits suivants sur vos
            données personnelles :
          </p>
          <ul className="text-slate-400 mt-2 space-y-1">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition</li>
          </ul>
          <p className="text-slate-400 mt-3">
            Pour exercer ces droits, contactez-nous à{" "}
            <a
              href="mailto:timothee.skypeo@gmail.com"
              className="text-[#008f78] hover:underline"
            >
              timothee.skypeo@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Cookies</h2>
          <p className="text-slate-400">
            Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls
            des cookies techniques essentiels au bon fonctionnement du site
            peuvent être déposés.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Réclamation
          </h2>
          <p className="text-slate-400">
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez
            adresser une réclamation auprès de la CNIL (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008f78] hover:underline"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </section>

        <p className="text-slate-500 text-xs mt-12">
          Dernière mise à jour : février 2026
        </p>
      </div>
    </div>
  );
}
