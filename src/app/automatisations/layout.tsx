import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatisations sur-mesure pour artisans et TPE à Nancy",
  description:
    "Devis automatiques, relances clients, rappels RDV, suivi de facturation — Skypeo automatise vos tâches répétitives pour vous faire gagner +150h par an. Nancy & Grand Est.",
  openGraph: {
    title: "Automatisations sur-mesure – Skypeo Nancy",
    description:
      "Devis, relances, rappels, facturation : on automatise ce qui vous vole du temps. Audit gratuit en 30 minutes.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
