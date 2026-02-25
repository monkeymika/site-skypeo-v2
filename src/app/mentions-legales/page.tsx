import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Skypeo",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-5 sm:px-8 lg:px-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="font-bebas fg-1 mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Mentions légales
        </h1>
        <p className="fg-4 text-sm mb-12">Dernière mise à jour : 2025</p>

        {/* Définitions */}
        <Section title="Définitions">
          <Dl>
            <Dt>Client</Dt>
            <Dd>Tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.</Dd>

            <Dt>Prestations et Services</Dt>
            <Dd><a href="https://skypeo.fr/" className="text-[#008f78] hover:underline">https://skypeo.fr/</a> met à disposition des Clients ses prestations et services.</Dd>

            <Dt>Contenu</Dt>
            <Dd>Ensemble des éléments constituants l'information présente sur le Site, notamment textes – images – vidéos.</Dd>

            <Dt>Informations clients</Dt>
            <Dd>Ci après dénommé « Information(s) » qui correspondent à l'ensemble des données personnelles susceptibles d'être détenues par skypeo.fr pour la gestion de votre compte, de la gestion de la relation client et à des fins d'analyses et de statistiques.</Dd>

            <Dt>Utilisateur</Dt>
            <Dd>Internaute se connectant, utilisant le site susnommé.</Dd>

            <Dt>Informations personnelles</Dt>
            <Dd>« Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</Dd>
          </Dl>
          <p className="fg-3 text-sm mt-4">
            Les termes « données à caractère personnel », « personne concernée », « sous-traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
          </p>
        </Section>

        {/* 1 */}
        <Section title="1. Présentation du site internet">
          <p className="fg-3 text-sm mb-4">
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://skypeo.fr/" className="text-[#008f78] hover:underline">https://skypeo.fr/</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <Dl>
            <Dt>Propriétaire</Dt>
            <Dd>SARL SKYPEO — Capital social de 1 000,00 € (fixe) — N° TVA : FR79979509676 — 37 RUE GAMBETTA 54000 Nancy</Dd>

            <Dt>Responsable publication</Dt>
            <Dd>Timothée TROUILLARD-MASSOT — <a href="mailto:Timothee.skypeo@gmail.com" className="text-[#008f78] hover:underline">Timothee.skypeo@gmail.com</a></Dd>

            <Dt>Webmaster</Dt>
            <Dd>Michael Aubras — <a href="mailto:michael.skypeo@gmail.com" className="text-[#008f78] hover:underline">michael.skypeo@gmail.com</a></Dd>

            <Dt>Hébergeur</Dt>
            <Dd>Hostinger — 61 Lordou Vironos Street, 6023 Larnaca, Chypre</Dd>

            <Dt>Délégué à la protection des données</Dt>
            <Dd>
              <a href="mailto:Michael.aubras@gmail.com" className="text-[#008f78] hover:underline">Michael.aubras@gmail.com</a>
              {" / "}
              <a href="mailto:michael.skypeo@gmail.com" className="text-[#008f78] hover:underline">michael.skypeo@gmail.com</a>
            </Dd>
          </Dl>
        </Section>

        {/* 2 */}
        <Section title="2. Conditions générales d'utilisation du site et des services proposés">
          <p className="fg-3 text-sm mb-3">
            Le Site constitue une œuvre de l'esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.
          </p>
          <p className="fg-3 text-sm mb-3">
            L'utilisation du site <a href="https://skypeo.fr/" className="text-[#008f78] hover:underline">https://skypeo.fr/</a> implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
          </p>
          <p className="fg-3 text-sm">
            Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par skypeo.fr, qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention. Les mentions légales peuvent être modifiées à tout moment : elles s'imposent néanmoins à l'utilisateur qui est invité à s'y référer le plus souvent possible afin d'en prendre connaissance.
          </p>
        </Section>

        {/* 3 */}
        <Section title="3. Description des services fournis">
          <p className="fg-3 text-sm mb-3">
            Le site internet <a href="https://skypeo.fr/" className="text-[#008f78] hover:underline">https://skypeo.fr/</a> a pour objet de fournir une information concernant l'ensemble des activités de la société. skypeo.fr s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p className="fg-3 text-sm">
            Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
          </p>
        </Section>

        {/* 4 */}
        <Section title="4. Limitations contractuelles sur les données techniques">
          <p className="fg-3 text-sm mb-3">
            Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.
          </p>
          <p className="fg-3 text-sm mb-3">
            Le site <a href="https://skypeo.fr/" className="text-[#008f78] hover:underline">https://skypeo.fr/</a> est hébergé chez un prestataire sur le territoire de l'Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679). L'hébergeur assure la continuité de son service 24h/24, tous les jours de l'année. Il se réserve néanmoins la possibilité d'interrompre le service d'hébergement pour des durées les plus courtes possibles notamment à des fins de maintenance, d'amélioration de ses infrastructures ou en cas de défaillance.
          </p>
          <p className="fg-3 text-sm">
            skypeo.fr et l'hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l'encombrement du réseau empêchant l'accès au serveur.
          </p>
        </Section>

        {/* 5 */}
        <Section title="5. Propriété intellectuelle et contrefaçons">
          <p className="fg-3 text-sm mb-3">
            skypeo.fr est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de skypeo.fr.
          </p>
          <p className="fg-3 text-sm">
            Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
        </Section>

        {/* 6 */}
        <Section title="6. Limitations de responsabilité">
          <p className="fg-3 text-sm mb-3">
            skypeo.fr agit en tant qu'éditeur du site et est responsable de la qualité et de la véracité du Contenu qu'il publie.
          </p>
          <p className="fg-3 text-sm mb-3">
            skypeo.fr ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site internet, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>
          <p className="fg-3 text-sm">
            skypeo.fr ne pourra également être tenu responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site. skypeo.fr se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans l'espace contact qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
          </p>
        </Section>

        {/* 7 */}
        <Section title="7. Gestion des données personnelles">
          <p className="fg-3 text-sm mb-6">
            Le Client est informé des réglementations concernant la communication marketing, la loi du 21 juin 2014 pour la confiance dans l'Économie Numérique, la Loi Informatique et Liberté du 06 août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
          </p>

          <h3 className="font-bebas fg-1 mb-3 text-lg">7.1 Responsables de la collecte des données personnelles</h3>
          <p className="fg-3 text-sm mb-6">
            Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l'Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : SKYPEO, représenté par Timothée TROUILLARD-MASSOT, son représentant légal. skypeo.fr s'engage à respecter le cadre des dispositions légales en vigueur et à prendre toutes les mesures raisonnables pour s'assurer de l'exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles il les traite.
          </p>

          <h3 className="font-bebas fg-1 mb-3 text-lg">7.2 Finalité des données collectées</h3>
          <p className="fg-3 text-sm mb-3">skypeo.fr est susceptible de traiter tout ou partie des données :</p>
          <ul className="fg-3 text-sm space-y-2 mb-3 list-none">
            {[
              "Pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l'utilisateur : données de connexion et d'utilisation du Site, facturation, historique des commandes, etc.",
              "Pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l'adresse IP, le mot de passe (hashé).",
              "Pour améliorer la navigation sur le Site : données de connexion et d'utilisation.",
              "Pour mener des enquêtes de satisfaction facultatives : adresse email.",
              "Pour mener des campagnes de communication (SMS, mail) : numéro de téléphone, adresse email.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#008f78] shrink-0 mt-0.5">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="fg-3 text-sm mb-6">
            skypeo.fr ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d'analyses.
          </p>

          <h3 className="font-bebas fg-1 mb-3 text-lg">7.3 Droit d'accès, de rectification et d'opposition</h3>
          <p className="fg-3 text-sm mb-3">Conformément à la réglementation européenne en vigueur, les Utilisateurs de skypeo.fr disposent des droits suivants :</p>
          <ul className="fg-3 text-sm space-y-2 mb-4 list-none">
            {[
              "Droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données.",
              "Droit de verrouillage ou d'effacement des données à caractère personnel (article 17 RGPD), lorsqu'elles sont inexactes, incomplètes, périmées ou dont la collecte est interdite.",
              "Droit de retirer à tout moment un consentement (article 13-2c RGPD).",
              "Droit à la limitation du traitement des données (article 18 RGPD).",
              "Droit d'opposition au traitement des données (article 21 RGPD).",
              "Droit à la portabilité des données (article 20 RGPD).",
              "Droit de définir le sort des données après le décès de l'Utilisateur.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#008f78] shrink-0 mt-0.5">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="fg-3 text-sm mb-3">
            Pour exercer ces droits, l'Utilisateur peut contacter skypeo.fr par écrit :
          </p>
          <div className="glass-card p-5 text-sm fg-3 mb-4">
            <p><strong className="fg-2">SKYPEO – DPO</strong></p>
            <p><a href="mailto:Michael.aubras@gmail.com" className="text-[#008f78] hover:underline">Michael.aubras@gmail.com</a></p>
            <p>37 RUE GAMBETTA, 54000 Nancy</p>
          </div>
          <p className="fg-3 text-sm mb-6">
            Les Utilisateurs peuvent également déposer une réclamation auprès de la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-[#008f78] hover:underline">CNIL</a>.
          </p>

          <h3 className="font-bebas fg-1 mb-3 text-lg">7.4 Non-communication des données personnelles</h3>
          <p className="fg-3 text-sm mb-3">
            skypeo.fr s'interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l'Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client.
          </p>
          <p className="fg-3 text-sm">
            skypeo.fr s'engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations. Si un incident impactant l'intégrité ou la confidentialité des Informations du Client est porté à la connaissance de skypeo.fr, celui-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. skypeo.fr ne collecte aucune « donnée sensible ».
          </p>
        </Section>

        {/* 8 */}
        <Section title="8. Notification d'incident">
          <p className="fg-3 text-sm mb-3">
            Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées.
          </p>
          <p className="fg-3 text-sm mb-3">
            Nos procédures de notification d'incident tiennent compte de nos obligations légales, qu'elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.
          </p>
          <p className="fg-3 text-sm mb-6">
            Aucune information personnelle de l'utilisateur du site skypeo.fr n'est publiée à son insu, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de skypeo.fr permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données.
          </p>

          <h3 className="font-bebas fg-1 mb-3 text-lg">Sécurité</h3>
          <p className="fg-3 text-sm">
            Pour assurer la sécurité et la confidentialité des Données Personnelles, skypeo.fr utilise des réseaux protégés par des dispositifs standards tels que pare-feu, pseudonymisation, encryption et mot de passe. Lors du traitement des Données Personnelles, skypeo.fr prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.
          </p>
        </Section>

        {/* 9 */}
        <Section title="9. Liens hypertextes, cookies et balises internet">
          <p className="fg-3 text-sm mb-6">
            Le site skypeo.fr contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation de skypeo.fr. Cependant, skypeo.fr n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
          </p>

          <h3 className="font-bebas fg-1 mb-3 text-lg">9.1 Cookies</h3>
          <p className="fg-3 text-sm mb-3">
            Un « cookie » est un petit fichier d'information envoyé sur le navigateur de l'Utilisateur et enregistré au sein du terminal de l'Utilisateur (ex : ordinateur, smartphone). Ce fichier comprend des informations telles que le nom de domaine de l'Utilisateur, le fournisseur d'accès Internet, le système d'exploitation, ainsi que la date et l'heure d'accès. Les Cookies ne risquent en aucun cas d'endommager le terminal de l'Utilisateur.
          </p>
          <p className="fg-3 text-sm mb-3">
            skypeo.fr est susceptible de traiter les informations de l'Utilisateur concernant sa visite du Site, telles que les pages consultées et les recherches effectuées. Ces informations permettent à skypeo.fr d'améliorer le contenu du Site et la navigation de l'Utilisateur.
          </p>
          <p className="fg-3 text-sm mb-3">
            L'Utilisateur peut configurer son navigateur pour décider s'il souhaite ou non accepter les cookies. Si l'Utilisateur refuse l'enregistrement de Cookies dans son terminal, sa navigation et son expérience sur le Site peuvent être limitées. skypeo.fr décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site résultant du refus de Cookies par l'Utilisateur.
          </p>
          <p className="fg-3 text-sm mb-6">
            Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies gratuitement à partir des possibilités de désactivation qui vous sont offertes dans les paramètres de votre navigateur.
          </p>

          <h3 className="font-bebas fg-1 mb-3 text-lg">9.2 Balises internet (« tags »)</h3>
          <p className="fg-3 text-sm">
            skypeo.fr peut employer occasionnellement des balises Internet (également appelées « tags », GIF à un pixel, GIF transparents ou GIF invisibles) et les déployer par l'intermédiaire d'un partenaire spécialiste d'analyses Web. Ces balises permettent à skypeo.fr d'évaluer les réponses des visiteurs face au Site et l'efficacité de ses actions, ainsi que l'utilisation de ce Site par l'Utilisateur.
          </p>
        </Section>

        {/* 10 */}
        <Section title="10. Droit applicable et attribution de juridiction">
          <p className="fg-3 text-sm">
            Tout litige en relation avec l'utilisation du site <a href="https://skypeo.fr/" className="text-[#008f78] hover:underline">https://skypeo.fr/</a> est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Nancy.
          </p>
        </Section>

      </div>
    </div>
  );
}

/* ── Helpers ─────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 pb-10" style={{ borderBottom: "1px solid var(--divider)" }}>
      <h2
        className="font-bebas fg-1 mb-5"
        style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Dl({ children }: { children: React.ReactNode }) {
  return <dl className="space-y-3">{children}</dl>;
}

function Dt({ children }: { children: React.ReactNode }) {
  return (
    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#008f78]">
      {children}
    </dt>
  );
}

function Dd({ children }: { children: React.ReactNode }) {
  return <dd className="fg-3 text-sm pl-3 mb-2">{children}</dd>;
}
