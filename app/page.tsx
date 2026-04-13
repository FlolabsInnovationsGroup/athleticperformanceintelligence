import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureSection } from "@/components/sections/architecture";
import { CaipoSection } from "@/components/sections/caipo";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ModelsSection } from "@/components/sections/models";
import { ProblemSection } from "@/components/sections/problem";
import { ReportingSection } from "@/components/sections/reporting";
import { SolutionSection } from "@/components/sections/solution";
import { TiersSection } from "@/components/sections/tiers";
import { WhySection } from "@/components/sections/why";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ModelsSection />
        <ArchitectureSection />
        <HowItWorksSection />
        <TiersSection />
        <ReportingSection />
        <CaipoSection />
        <WhySection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
