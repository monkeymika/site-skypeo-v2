import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Audit gratuit en 30 minutes",
  description:
    "Premier échange gratuit de 30 minutes. On analyse votre activité et on vous dit exactement ce qu'on peut automatiser ou améliorer. Réponse sous 24h.",
  openGraph: {
    title: "Contactez Skypeo – Audit gratuit",
    description:
      "Discutons de votre projet. Premier échange gratuit, sans engagement, réponse sous 24h.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
