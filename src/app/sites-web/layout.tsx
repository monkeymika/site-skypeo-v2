import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de sites web pour artisans à Nancy – À partir de 990 €",
  description:
    "Sites vitrines modernes, ultra-rapides et optimisés SEO pour artisans, TPE et pros. 100% responsive, formulaire de contact, livraison en moins de 3 semaines. Nancy & Grand Est.",
  openGraph: {
    title: "Sites web professionnels pour artisans – Skypeo Nancy",
    description:
      "87% des clients cherchent sur Google avant d'appeler. Soyez là. Devis gratuit en 24h.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
