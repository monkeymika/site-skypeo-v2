import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const articles: Record<string, {
  slug: string;
  cat: string;
  catColor: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  author: string;
  content: { type: "p" | "h2" | "h3" | "ul" | "callout"; text?: string; items?: string[] }[];
}> = {
  "automatiser-devis-artisan": {
    slug: "automatiser-devis-artisan",
    cat: "Automatisation",
    catColor: "text-[#008f78] border-[#008f78]/30 bg-[#008f78]/10",
    title: "Comment automatiser l'envoi de devis quand vous êtes artisan",
    excerpt: "Envoyer un devis prend en moyenne 45 minutes. Voici comment réduire ça à 2 minutes sans perdre en qualité.",
    date: "12 jan. 2025",
    read: "5 min",
    author: "Mika",
    content: [
      { type: "p", text: "Vous rentrez d'un chantier, il est 19h, et vous avez encore trois devis à envoyer. Chaque devis vous prend 45 minutes : retrouver le modèle Word, remplir les informations client, calculer les totaux, exporter en PDF, envoyer par mail. Multiplié par 15 devis par mois, c'est plus de 11 heures perdues chaque mois sur une tâche que votre ordinateur peut faire à votre place." },
      { type: "h2", text: "Pourquoi la plupart des artisans ne passent pas à l'automatisation" },
      { type: "p", text: "La réponse la plus fréquente qu'on entend : \"Mon activité est trop spécifique, ça ne peut pas être automatisé.\" C'est faux dans 90% des cas. Un devis de plombier suit toujours le même schéma : infos client, description des travaux, matériaux, main d'œuvre, TVA, total. Ce schéma répétitif est exactement ce que les outils d'automatisation adorent." },
      { type: "h2", text: "La solution en 3 étapes" },
      { type: "h3", text: "1. Un formulaire de prise d'informations" },
      { type: "p", text: "Au lieu d'appeler le client pour collecter ses informations, vous lui envoyez un lien vers un formulaire. Il remplit : nom, adresse, type de travaux, photos si besoin. Ces données alimentent automatiquement votre système." },
      { type: "h3", text: "2. La génération automatique du document" },
      { type: "p", text: "À partir des données du formulaire, un outil comme Make (anciennement Integromat) ou n8n génère votre devis en remplissant votre modèle. Le document est créé, numéroté et prêt à être envoyé en quelques secondes." },
      { type: "h3", text: "3. L'envoi et le suivi" },
      { type: "p", text: "Le devis part automatiquement par email au client, avec une relance programmée à J+3 si aucune réponse. Vous recevez une notification quand il est consulté, et une autre quand il est accepté ou refusé." },
      { type: "callout", text: "Résultat concret chez un de nos clients (plombier à Nancy) : de 45 minutes par devis à moins de 3 minutes. Sur 20 devis par mois, c'est 14 heures récupérées." },
      { type: "h2", text: "Les outils qu'on recommande" },
      { type: "ul", items: [
        "Make (Integromat) : le plus flexible, idéal pour les flux complexes",
        "Google Forms + Google Docs : solution gratuite pour démarrer",
        "Notion + Zapier : si vous gérez déjà vos clients sur Notion",
        "Pennylane ou Axonaut : si vous voulez aussi gérer la comptabilité",
      ]},
      { type: "h2", text: "Par où commencer ?" },
      { type: "p", text: "On conseille toujours de commencer par auditer votre processus actuel. Notez chaque étape de votre envoi de devis et le temps que ça prend. Vous identifierez rapidement les étapes répétitives à automatiser en priorité." },
      { type: "p", text: "Si vous voulez qu'on le fasse à votre place, c'est exactement le genre de mission qu'on traite chez Skypeo. Prenez contact pour un audit gratuit — on vous dit en 30 minutes ce qu'on peut automatiser dans votre activité." },
    ],
  },
  "site-web-plombier-nancy": {
    slug: "site-web-plombier-nancy",
    cat: "Sites web",
    catColor: "text-[#2b3475] border-[#2b3475]/30 bg-[#2b3475]/10",
    title: "Pourquoi votre site web est votre meilleur commercial à Nancy",
    excerpt: "87% des gens cherchent un artisan sur Google avant d'appeler. Voici ce que doit contenir votre site pour qu'ils vous choisissent.",
    date: "28 déc. 2024",
    read: "7 min",
    author: "Mika",
    content: [
      { type: "p", text: "À Nancy et dans toute la Métropole du Grand Nancy, quand un propriétaire a une fuite d'eau un samedi matin, son premier réflexe n'est plus d'appeler un ami pour demander un numéro. Il tape \"plombier urgence Nancy\" sur Google. Si vous n'apparaissez pas dans les premiers résultats, vous n'existez pas pour lui." },
      { type: "h2", text: "La réalité du marché artisanal en 2025" },
      { type: "p", text: "87% des consommateurs recherchent en ligne avant de contacter un artisan local. C'est une statistique que les commerçants ont intégrée depuis longtemps, mais que beaucoup d'artisans ignorent encore. Résultat : vos concurrents qui ont investi dans leur présence digitale captent des clients qui auraient pu être les vôtres." },
      { type: "h2", text: "Ce que doit absolument contenir votre site" },
      { type: "h3", text: "1. Vos services en clair, avec des mots que vos clients utilisent" },
      { type: "p", text: "\"Intervention sur le système d'alimentation en eau potable\" ne parle à personne. \"Réparation fuite d'eau à Nancy — intervention le jour même\" parle à tout le monde. Utilisez le langage de vos clients, pas le vocabulaire technique du métier." },
      { type: "h3", text: "2. Une zone d'intervention clairement affichée" },
      { type: "p", text: "Google doit savoir où vous intervenez pour vous afficher dans les résultats locaux. Mentionnez explicitement Nancy, Vandœuvre, Laxou, Essey, Maxéville, et toutes les communes où vous travaillez. Cela améliore votre référencement local de façon significative." },
      { type: "h3", text: "3. Des avis clients visibles" },
      { type: "p", text: "82% des gens lisent les avis en ligne avant de choisir un artisan. Intégrez vos avis Google sur votre site, ou au minimum un lien vers votre fiche Google My Business. Trois avis positifs bien mis en avant font souvent la différence face à un concurrent sans avis." },
      { type: "h3", text: "4. Un formulaire de contact ou un numéro en évidence" },
      { type: "p", text: "Le prospect est sur votre site. Il est convaincu. Et là, il ne trouve pas comment vous contacter. Chaque seconde de recherche augmente le risque qu'il ferme et aille voir le concurrent. Numéro de téléphone en haut de page, bouton de contact visible sans scroller : c'est non négociable." },
      { type: "callout", text: "Chez Sundgau Paysages, un de nos clients, le site génère en moyenne 8 demandes de devis par mois via le formulaire en ligne. Ce sont des leads qui arrivent tout seuls, sans publicité." },
      { type: "h2", text: "Le SEO local, votre meilleur investissement" },
      { type: "p", text: "Le référencement local n'est pas réservé aux grandes entreprises. Un artisan sérieux, avec un site bien structuré et une fiche Google My Business complète, peut dépasser des concurrents établis depuis des années en quelques mois." },
      { type: "ul", items: [
        "Balises title et meta description optimisées pour votre métier et votre ville",
        "Pages dédiées à chaque service principal",
        "Contenu mentionnant les communes où vous intervenez",
        "Fiche Google My Business synchronisée avec votre site",
        "Avis clients régulièrement mis à jour",
      ]},
      { type: "h2", text: "Combien ça coûte et combien ça rapporte ?" },
      { type: "p", text: "Un site vitrine professionnel avec SEO local coûte entre 990 € et 1 790 € chez Skypeo. Si une seule mission supplémentaire par mois est générée grâce au site, il est rentabilisé en quelques semaines. La plupart de nos clients rentabilisent leur investissement dans les 2 premiers mois." },
    ],
  },
  "google-my-business-artisan": {
    slug: "google-my-business-artisan",
    cat: "SEO local",
    catColor: "text-amber-600 dark:text-amber-400 border-amber-400/30 bg-amber-400/10",
    title: "Google My Business pour les artisans : le guide complet 2025",
    excerpt: "Votre fiche GMB bien remplie, c'est de la visibilité gratuite sur Google. Comment la configurer en 30 minutes.",
    date: "10 déc. 2024",
    read: "8 min",
    author: "Mika",
    content: [
      { type: "p", text: "Google My Business (désormais appelé \"Profil d'établissement Google\") est probablement l'outil marketing le plus sous-exploité par les artisans français. Il est gratuit, il génère des appels directs, et une fiche bien remplie peut vous placer devant des concurrents qui ont des sites plus anciens que le vôtre." },
      { type: "h2", text: "Pourquoi GMB est si puissant pour les artisans locaux" },
      { type: "p", text: "Quand quelqu'un tape \"électricien Nancy\" sur Google, les trois premiers résultats ne sont pas des sites web — ce sont des fiches Google My Business. C'est le \"pack local\" ou \"3-pack\". Ces trois entreprises reçoivent 60% des clics. Apparaître là est plus important que d'être en première page des résultats organiques." },
      { type: "h2", text: "Créer et revendiquer votre fiche" },
      { type: "p", text: "Rendez-vous sur business.google.com et recherchez votre entreprise. Si elle existe déjà (Google crée parfois des fiches automatiquement), revendiquez-la. Sinon, créez-la. Vous recevrez un code de vérification par courrier ou par téléphone." },
      { type: "h2", text: "Les 8 champs à remplir absolument" },
      { type: "ul", items: [
        "Nom de l'entreprise : votre nom commercial, sans mots-clés ajoutés artificiellement",
        "Catégorie principale : choisissez la plus précise possible (\"Plombier\", pas \"Entrepreneur\")",
        "Catégories secondaires : ajoutez toutes vos spécialités",
        "Adresse et zone de service : listez toutes les villes où vous intervenez",
        "Horaires : incluez les horaires d'urgence si vous en faites",
        "Numéro de téléphone : vérifiez qu'il est correct",
        "Site web : le lien vers votre site professionnel",
        "Description : 750 caractères pour décrire votre activité avec vos mots-clés naturellement intégrés",
      ]},
      { type: "h2", text: "Les photos, le secret le plus négligé" },
      { type: "p", text: "Les fiches avec photos reçoivent 42% de demandes d'itinéraire en plus et 35% de clics vers le site en plus. Ajoutez au minimum : une photo de votre véhicule ou local, deux ou trois photos de réalisations, et une photo de vous ou de votre équipe. Renouvelez-les régulièrement." },
      { type: "callout", text: "Astuce : nommez vos photos avant de les uploader. \"plombier-nancy-remplacement-chauffe-eau.jpg\" est bien mieux que \"IMG_4521.jpg\" pour le référencement." },
      { type: "h2", text: "Les avis : comment en avoir plus" },
      { type: "p", text: "Demandez un avis à chaque client satisfait. La façon la plus simple : créez un lien court vers votre fiche d'avis (disponible dans votre tableau de bord GMB) et envoyez-le par SMS juste après la fin d'un chantier. Avec un message simple : \"Bonjour [prénom], merci pour votre confiance. Si vous êtes satisfait de notre intervention, un avis Google nous aidera beaucoup : [lien]\"." },
      { type: "h2", text: "Les posts GMB : tenez votre fiche vivante" },
      { type: "p", text: "Google favorise les fiches actives. Publiez un \"Post Google\" par mois minimum : une réalisation récente, une promotion saisonnière, un conseil pratique. Ça prend 5 minutes et ça signale à Google que votre activité est bien réelle et en cours." },
      { type: "h2", text: "Mesurer vos résultats" },
      { type: "p", text: "Votre tableau de bord GMB vous donne des données précieuses : combien de personnes ont vu votre fiche, combien ont appelé, combien ont demandé votre adresse. Consultez-les chaque mois pour suivre l'évolution de votre visibilité locale." },
    ],
  },
  "relances-clients-automatiques": {
    slug: "relances-clients-automatiques",
    cat: "Automatisation",
    catColor: "text-[#008f78] border-[#008f78]/30 bg-[#008f78]/10",
    title: "Relances clients automatiques : récupérez 40% de vos devis perdus",
    excerpt: "Un devis sans relance a 60% de chances de rester sans réponse. Voici comment mettre en place des relances automatiques en 1 heure.",
    date: "1 déc. 2024",
    read: "6 min",
    author: "Mika",
    content: [
      { type: "p", text: "Vous envoyez un devis. Pas de réponse. Vous l'oubliez. Le client aussi. Et pourtant, il avait besoin de vos services — il a juste été distrait, débordé, ou il attendait que vous reveniez vers lui. Les études sur le comportement d'achat B2C et B2B sont unanimes : 60% des prospects ne répondent pas au premier contact, mais 40% finissent par convertir après une relance." },
      { type: "h2", text: "Pourquoi les artisans ne relancent pas" },
      { type: "p", text: "Pas par manque de motivation — par manque de temps et par gêne. Relancer un client manuellement demande de retrouver le dossier, de se souvenir quand le devis a été envoyé, et de prendre le risque de paraître insistant. L'automatisation résout les deux problèmes : c'est le système qui relance, pas vous, au bon moment et avec le bon message." },
      { type: "h2", text: "Le calendrier de relance idéal" },
      { type: "ul", items: [
        "J+3 : premier rappel doux (\"Avez-vous eu le temps de consulter notre devis ?\")",
        "J+7 : deuxième rappel avec une valeur ajoutée (ajout d'une précision technique, d'une disponibilité)",
        "J+14 : dernière tentative avec une légère urgence (\"Notre agenda pour ce mois est presque complet\")",
      ]},
      { type: "p", text: "Au-delà de J+14, vous pouvez archiver le prospect et prévoir un contact à plus long terme (3 mois) pour un maintien de lien." },
      { type: "h2", text: "Ce que doit contenir un bon message de relance" },
      { type: "h3", text: "Le ton : professionnel mais humain" },
      { type: "p", text: "Évitez les messages trop formels (\"Je me permets de revenir vers vous suite à l'envoi de notre devis en date du...\"). Préférez quelque chose de direct et chaleureux : \"Bonjour [prénom], je voulais savoir si vous aviez des questions sur le devis qu'on vous a envoyé la semaine dernière. N'hésitez pas à revenir vers moi. — [Votre prénom]\"." },
      { type: "h3", text: "La personnalisation minimale" },
      { type: "p", text: "Même une automatisation doit sembler personnelle. Au minimum : le prénom du client, le type de travaux concernés, et le montant ou la référence du devis. Ces données doivent être dans votre outil de gestion pour être injectées automatiquement." },
      { type: "callout", text: "Chez un de nos clients carrossier, la mise en place de relances automatiques à J+3 et J+7 a permis de récupérer 3 à 4 missions supplémentaires par mois. Sur une activité où le panier moyen est de 800 €, c'est 2 400 à 3 200 € de CA récupéré chaque mois." },
      { type: "h2", text: "Les outils pour mettre ça en place" },
      { type: "ul", items: [
        "Make + Gmail : la solution la plus flexible, idéale si vous utilisez déjà Gmail",
        "Brevo (ex-Sendinblue) : excellente option pour les séquences email avec suivi d'ouverture",
        "Zapier + votre CRM : si vous utilisez déjà un outil type HubSpot ou Pipedrive",
        "Solution sur-mesure Skypeo : si vous voulez une intégration totale avec votre processus de devis",
      ]},
      { type: "h2", text: "Et pour les relances de factures impayées ?" },
      { type: "p", text: "Le même principe s'applique. Une facture impayée à 30 jours peut bénéficier d'une relance automatique douce à J+35, puis d'un rappel plus ferme à J+45. La plupart des impayés ne sont pas dus à une mauvaise volonté du client — juste à l'oubli. Une relance automatique règle 80% des cas avant qu'il ne faille passer à une procédure plus formelle." },
      { type: "p", text: "Si vous voulez qu'on mette ça en place pour vous, contactez-nous pour un audit gratuit. On vous montrera exactement comment intégrer les relances dans votre processus existant." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.title} – Blog Skypeo`,
    description: article.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-10 px-5 sm:px-8 lg:px-10 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,143,120,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs fg-4 mb-6">
            <Link href="/blog" className="hover:text-[#008f78] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span
              className={`border px-2.5 py-0.5 rounded-full font-bold uppercase tracking-[0.15em] text-[10px] ${article.catColor}`}
            >
              {article.cat}
            </span>
          </div>

          <h1
            className="font-bebas fg-1 mb-5"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)", lineHeight: 1 }}
          >
            {article.title}
          </h1>

          <p className="fg-3 text-lg leading-relaxed mb-8">{article.excerpt}</p>

          <div className="flex items-center gap-4 text-xs fg-4 pb-8" style={{ borderBottom: "1px solid var(--divider)" }}>
            <span>Par <strong className="fg-2">{article.author}</strong></span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.read} de lecture</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="pb-24 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5">
            {article.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="font-bebas fg-1 mt-10"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3
                    key={i}
                    className="font-bebas fg-1 mt-6"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
                  >
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "p") {
                return (
                  <p key={i} className="fg-2 leading-relaxed text-base">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-2.5 pl-1">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 fg-2 text-base">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#008f78] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "callout") {
                return (
                  <div
                    key={i}
                    className="my-8 rounded-2xl p-6"
                    style={{
                      background: "rgba(0,143,120,0.07)",
                      border: "1px solid rgba(0,143,120,0.25)",
                    }}
                  >
                    <p className="fg-1 leading-relaxed text-base font-medium">
                      {block.text}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div
            className="mt-16 rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,143,120,0.10), rgba(43,52,117,0.10))",
              border: "1px solid rgba(0,143,120,0.20)",
            }}
          >
            <p className="section-tag justify-center mb-3">Passer à l'action</p>
            <h3
              className="font-bebas fg-1 mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              ON FAIT ÇA POUR VOUS ?
            </h3>
            <p className="fg-3 mb-6 max-w-sm mx-auto">
              Audit gratuit de 30 minutes. On identifie ce qu'on peut automatiser dans votre activité — sans engagement.
            </p>
            <Link href="/contact" className="btn-glow inline-flex">
              <span>Prendre contact →</span>
            </Link>
          </div>

          {/* Back */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm fg-3 hover:text-[#008f78] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Retour au blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
