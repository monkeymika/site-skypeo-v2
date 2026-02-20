import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skypeo.fr"),
  title: {
    default: "Skypeo – N°1 sur les automatisations à Nancy",
    template: "%s | Skypeo",
  },
  description:
    "Skypeo aide les artisans, TPE et pros débordés à simplifier leur quotidien. Création de sites web professionnels & automatisation de tâches répétitives à Nancy.",
  keywords: [
    "automatisation Nancy",
    "site web artisan Nancy",
    "agence digitale Nancy",
    "automatisation TPE",
    "création site web professionnel",
    "Skypeo",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://skypeo.fr",
    siteName: "Skypeo",
    title: "Skypeo – N°1 sur les automatisations à Nancy",
    description:
      "Sites web professionnels & automatisation pour artisans et TPE. Gagnez du temps, de l'efficacité et de la tranquillité d'esprit.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skypeo – N°1 sur les automatisations à Nancy",
    description: "Sites web & automatisation pour artisans et TPE à Nancy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${bebas.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <CustomCursor />
          <LoadingScreen />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
