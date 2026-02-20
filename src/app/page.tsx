import { Hero }           from "@/components/home/Hero";
import { Marquee }        from "@/components/ui/Marquee";
import { ExpertsSection } from "@/components/home/ExpertsSection";
import { ServicesGrid }   from "@/components/home/ServicesGrid";
import { WhySkypeo }      from "@/components/home/WhySkypeo";
import { Process }        from "@/components/home/Process";
import { BlogPreview }    from "@/components/home/BlogPreview";
import { CTA }            from "@/components/home/CTA";
import type { Metadata }  from "next";

export const metadata: Metadata = {
  title: "Skypeo – N°1 sur les automatisations à Nancy",
  description:
    "Skypeo aide les artisans, TPE et pros débordés à simplifier leur quotidien. Création de sites web & automatisation des tâches répétitives à Nancy.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ExpertsSection />
      <ServicesGrid />
      <WhySkypeo />
      <Marquee />
      <Process />
      <BlogPreview />
      <CTA />
    </>
  );
}
