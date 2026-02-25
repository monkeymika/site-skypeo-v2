import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ThreeBackground } from "@/components/ui/ThreeBackground";

/* Orbitron — headings. Maps to --font-syne (= font-bebas in Tailwind for Navbar compat) */
const syne = Orbitron({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

/* Inter — body text */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://skypeo.fr/#organization",
      name: "Skypeo",
      url: "https://skypeo.fr",
      logo: "https://skypeo.fr/icon.png",
      email: "timothee.skypeo@gmail.com",
      telephone: "+33660534389",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nancy",
        addressRegion: "Grand Est",
        addressCountry: "FR",
      },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://skypeo.fr/#localbusiness",
      name: "Skypeo",
      description:
        "Création de sites web professionnels et automatisation de tâches répétitives pour artisans, TPE et pros débordés. Nancy & Grand Est.",
      url: "https://skypeo.fr",
      telephone: "+33660534389",
      email: "timothee.skypeo@gmail.com",
      image: "https://skypeo.fr/icon.png",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nancy",
        addressRegion: "Grand Est",
        postalCode: "54000",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.6921,
        longitude: 6.1844,
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 48.6921,
          longitude: 6.1844,
        },
        geoRadius: "80000",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Skypeo",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatisation sur-mesure",
              description:
                "Automatisation de devis, relances clients, rappels RDV et suivi de facturation pour artisans et TPE.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Création de site web professionnel",
              description:
                "Sites vitrines modernes, rapides et optimisés SEO pour artisans et TPE. À partir de 990 €.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <ThreeBackground />
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
