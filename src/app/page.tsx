import Image from "next/image";
import { WearableBrandGrid } from "@/components/ui/WearableBrandGrid";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ComingSoonGrid } from "@/components/ui/ComingSoonGrid";
import { ContentCard } from "@/components/ui/ContentCard";
import { DataTable } from "@/components/ui/DataTable";
import { Lead } from "@/components/ui/Lead";
import { heroBackgroundScrimClass, sectionEyebrowOnSurfaceClass } from "@/components/ui/sectionBackgroundScrim";
import { Section } from "@/components/ui/Section";
import { SectionBlock, SectionBlocks } from "@/components/ui/SectionBlock";
import { StepFlow } from "@/components/ui/StepFlow";
import { TierCompareCard } from "@/components/ui/TierCompareCard";
import { sectionImages } from "@/content/section-images";
import {
  apiModels,
  caipo,
  challenge,
  comingSoon,
  flobrain,
  hero,
  howApiWorks,
  howNoWearable,
  howWithWearable,
  moodchanger,
  pricing,
  solution,
  tier1,
  tier1Deliverables,
  tier2,
  tier2Dashboards,
  tier2DeviceFlow,
  tier3,
  tiersCompare,
  whatIsApi,
  whyMoodchanger,
} from "@/content/site-content";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@flolabs.com";

export default function HomePage() {
  return (
    <>
      <section
        id={hero.id}
        data-has-bg="true"
        className="relative h-[calc(100svh-var(--site-header-height))] scroll-mt-24 border-b border-card-border"
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={sectionImages.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className={`absolute inset-0 ${heroBackgroundScrimClass}`}
            aria-hidden
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center py-6 sm:py-8">
            <Container>
              <div className="mx-auto w-full max-w-5xl space-y-2 text-center sm:space-y-3 md:space-y-4">
                <p className={sectionEyebrowOnSurfaceClass}>
                  {hero.subtitle}
                </p>
                <h1 className="font-display text-[clamp(1.875rem,4vw+0.5rem,3.75rem)] font-semibold leading-[1.05] tracking-tight text-balance">
                  {hero.title}
                </h1>
                <Lead className="mx-auto max-w-4xl text-base md:text-lg">
                  {hero.delivered}
                </Lead>
                <p className="mx-auto max-w-4xl text-pretty text-sm leading-relaxed text-foreground/85 md:text-base">
                  {hero.powered}
                </p>
                <div className="flex justify-center pt-1 sm:pt-2">
                  <Button
                    href={`mailto:${contactEmail}?subject=Initial%20consultation`}
                    variant="accent"
                  >
                    Initial consultation
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <Section
        id={moodchanger.id}
        title={moodchanger.title}
        backgroundImage={sectionImages.moodchanger}
      >
        <SectionBlock>
          <Lead>{moodchanger.tagline}</Lead>
          <ul>
            {moodchanger.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </SectionBlock>
        <SectionBlocks>
          <SectionBlock title={moodchanger.whoAreWe.heading}>
            <p>{moodchanger.whoAreWe.body}</p>
            <p>{moodchanger.whoAreWe.detail}</p>
            <p className="text-foreground">Powered by FloBrain</p>
          </SectionBlock>
          <SectionBlock title={moodchanger.whatWeDo.heading}>
            <p>{moodchanger.whatWeDo.flow}</p>
            <p>{moodchanger.whatWeDo.goal}</p>
          </SectionBlock>
        </SectionBlocks>
      </Section>

      <Section
        id={flobrain.id}
        title={flobrain.title}
        backgroundImage={sectionImages.flobrain}
        backgroundScrim="heavy"
      >
        <SectionBlock>
          <Lead>{flobrain.intro}</Lead>
          <ul>
            {flobrain.designedTo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
        <SectionBlocks>
          <SectionBlock title={flobrain.dataStreams.heading}>
            <ol className="list-decimal space-y-2 pl-5">
              {flobrain.dataStreams.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="font-medium text-foreground">{flobrain.whatKindOfData}</p>
          </SectionBlock>
          <SectionBlock title={flobrain.howItWorks.heading}>
            <p>{flobrain.howItWorks.steps.join(" → ")}</p>
            <p>{flobrain.howItWorks.flow.join(" → ")}</p>
          </SectionBlock>
          <SectionBlock title={flobrain.whySports.heading}>
            <p>{flobrain.whySports.intro}</p>
            <p>{flobrain.whySports.connection}</p>
            <p>{flobrain.whySports.insight}</p>
            <ul>
              {flobrain.whySports.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
        </SectionBlocks>
      </Section>

      <Section
        id={whatIsApi.id}
        title={whatIsApi.title}
        backgroundImage={sectionImages.whatIsApi}
        backgroundScrim="subtle"
      >
        <SectionBlock>
          <ul>
            <li>
              <span className="font-medium text-brand">MoodChanger</span>
              &apos;s core system architecture for sports performance optimization
            </li>
            <li>{whatIsApi.overview[1]}</li>
            <li className="text-brand">{whatIsApi.overview[2]}</li>
          </ul>
        </SectionBlock>
        <div className="space-y-4">
          {whatIsApi.models.map((model) => (
            <div
              key={model.heading}
              className="grid gap-4 md:grid-cols-[minmax(10rem,12rem)_minmax(0,1fr)]"
            >
              <div className="flex items-center justify-center rounded-xl border border-card-border bg-card-border/35 px-4 py-5 text-center text-sm font-semibold leading-snug text-foreground">
                {model.heading}
              </div>
              <div className="content-surface rounded-xl p-5 md:p-6">
                <div className="section-block-body text-base leading-relaxed text-muted">
                  {"items" in model && model.items ? (
                    <ul>
                      {model.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        {model.enables.label}
                        <ul className="mt-2 list-disc pl-5">
                          {model.enables.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id={apiModels.id} title={apiModels.title}>
        <DataTable rows={apiModels.table} />
        <SectionBlock title={apiModels.frameworks.heading}>
          <ul>
            {apiModels.frameworks.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
        <SectionBlock title={apiModels.whyDifferent.heading}>
          <ul>
            <li>
              {apiModels.whyDifferent.specialization.intro}
              <ul className="mt-2 list-disc pl-5">
                {apiModels.whyDifferent.specialization.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
            <li>
              {apiModels.whyDifferent.keyPoints.heading}
              <ul className="mt-2 list-disc pl-5">
                {apiModels.whyDifferent.keyPoints.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </SectionBlock>
      </Section>

      <Section
        id={challenge.id}
        title={challenge.title}
        backgroundImage={sectionImages.challenge}
      >
        <SectionBlock title={challenge.coreProblem.heading}>
          <ul>
            {challenge.coreProblem.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {challenge.problems.map((problem) => (
            <ContentCard key={problem.title} title={problem.title}>
              <ul>
                {problem.points.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="font-medium text-brand">{problem.outcome}</p>
            </ContentCard>
          ))}
        </div>
        <SectionBlock title={challenge.whyMatters.heading}>
          <p>{challenge.whyMatters.intro}</p>
          <ul>
            {challenge.whyMatters.impacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="font-medium text-brand">{challenge.whyMatters.outcome}</p>
        </SectionBlock>
      </Section>

      <Section
        id={solution.id}
        title={solution.title}
        backgroundImage={sectionImages.solution}
      >
        <SectionBlock title={solution.overview.heading}>
          <ul>
            {solution.overview.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {solution.pillars.map((pillar) => (
            <ContentCard key={pillar.title} title={pillar.title}>
              <ul>
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ContentCard>
          ))}
        </div>
        <SectionBlock title={solution.keyBenefits.heading}>
          <ul>
            {solution.keyBenefits.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
      </Section>

      <Section
        id={howApiWorks.id}
        title={howApiWorks.title}
        backgroundImage={sectionImages.howApiWorksFlow}
        backgroundScrim="subtle"
      >
        <SectionBlock title={howApiWorks.hardwareHeading}>
          <p>{howApiWorks.intro}</p>
          <p>{howApiWorks.scale}</p>
        </SectionBlock>
        <SectionBlocks>
          <SectionBlock title={howApiWorks.unified.heading}>
            <p>{howApiWorks.unified.intro}</p>
            <ul>
              {howApiWorks.unified.steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title={howApiWorks.output.heading}>
            <ul>
              {howApiWorks.output.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
        </SectionBlocks>
        <h3 className="section-group-heading">{howApiWorks.twoPathways}</h3>
        <div className="grid gap-8 lg:grid-cols-2">
          <ContentCard title={howApiWorks.withoutWearables.heading}>
            <p className="font-medium text-foreground">Data sources</p>
            <ul>
              {howApiWorks.withoutWearables.dataSources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="font-medium text-foreground">Values</p>
            <ul>
              {howApiWorks.withoutWearables.values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ContentCard>
          <ContentCard title={howApiWorks.withWearables.heading}>
            <p className="font-medium text-foreground">Data sources</p>
            <ul>
              {howApiWorks.withWearables.dataSources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="font-medium text-foreground">Values</p>
            <ul>
              {howApiWorks.withWearables.values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ContentCard>
        </div>
        <SectionBlock title={howApiWorks.whyMatters.heading}>
          <ul>
            <li>{howApiWorks.whyMatters.body}</li>
            <li>{howApiWorks.whyMatters.detail}</li>
          </ul>
        </SectionBlock>
      </Section>

      <Section
        id={tier1.id}
        title={tier1.title}
        backgroundImage={sectionImages.tier1}
      >
        <p className="text-pretty text-lg italic leading-relaxed text-foreground md:text-xl">
          {tier1.tagline}
        </p>
        <SectionBlock title={tier1.tierOverview.heading}>
          <ul>
            {tier1.tierOverview.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
        <SectionBlock title={tier1.coreValue.heading}>
          <ul>
            <li>
              {tier1.coreValue.intro}
              <ul className="mt-2 list-disc pl-5">
                {tier1.coreValue.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
            <li>{tier1.coreValue.closing}</li>
          </ul>
        </SectionBlock>
        <StepFlow steps={tier1.processSteps} />
        <SectionBlocks className="lg:grid-cols-3">
          <SectionBlock title={tier1.keyBenefits.heading}>
            <ul>
              {tier1.keyBenefits.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title={tier1.whatWeAnalyze.heading}>
            <ul>
              {tier1.whatWeAnalyze.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title={tier1.wearableOpportunity.heading}>
            <ul>
              {tier1.wearableOpportunity.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
        </SectionBlocks>
      </Section>

      <Section
        id={tier1Deliverables.id}
        title={tier1Deliverables.title}
        backgroundImage={sectionImages.tier1Deliverables}
        backgroundScrim="heavy"
      >
        <SectionBlocks>
          <SectionBlock>
            <Lead>{tier1Deliverables.tailored}</Lead>
          </SectionBlock>
          <h3 className="section-group-heading">{tier1Deliverables.tailoredHeading}</h3>
          <SectionBlock title={tier1Deliverables.whatWeCollect.heading}>
            <ul>
              {tier1Deliverables.whatWeCollect.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{tier1Deliverables.whatWeCollect.method}</p>
            <p className="font-medium text-foreground">{tier1Deliverables.dataCollection}</p>
          </SectionBlock>
          <SectionBlock title={tier1Deliverables.reports.heading}>
            <ul>
              {tier1Deliverables.reports.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title={tier1Deliverables.tierRequirements.heading}>
            <ul>
              {tier1Deliverables.tierRequirements.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
        </SectionBlocks>
      </Section>

      <Section id={howNoWearable.id} title={howNoWearable.title}>
        <StepFlow steps={howNoWearable.steps} />
      </Section>

      <Section
        id={tier2.id}
        title={tier2.title}
        backgroundImage={sectionImages.tier2}
      >
        <SectionBlocks>
          <SectionBlock>
            <Lead>{tier2.intro}</Lead>
            <p>{tier2.focus}</p>
            <p className="font-medium text-brand">{tier2.tierLabel}</p>
            <p>{tier2.coreValue}</p>
          </SectionBlock>
          <SectionBlock title={tier2.wearableIntegration.heading}>
            <p>{tier2.wearableIntegration.body}</p>
          </SectionBlock>
          <SectionBlock title={tier2.advancedInsights.heading}>
            <p className="font-medium text-foreground">Athlete-level insights:</p>
            <ul>
              {tier2.advancedInsights.athlete.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="font-medium text-foreground">Team-level insights:</p>
            <ul>
              {tier2.advancedInsights.team.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title={tier2.keyBenefits.heading}>
            <ul>
              {tier2.keyBenefits.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
        </SectionBlocks>
      </Section>

      <Section id={tier2DeviceFlow.id} title={tier2DeviceFlow.title}>
        <WearableBrandGrid devices={[...sectionImages.tier2Wearables]} />
        <div className="grid gap-8 lg:grid-cols-2">
          {tier2DeviceFlow.steps.map((step) => (
            <ContentCard key={step.title} title={step.title}>
              <p>{step.body}</p>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section
        id={tier2Dashboards.id}
        title={tier2Dashboards.title}
        backgroundImage={sectionImages.tier2Dashboards}
        backgroundOpacity={0.55}
      >
        <SectionBlocks>
          <SectionBlock title={tier2Dashboards.reporting.heading}>
            <p>{tier2Dashboards.reporting.body}</p>
          </SectionBlock>
          <SectionBlock title={tier2Dashboards.dashboard.heading}>
            <p>{tier2Dashboards.dashboard.body}</p>
          </SectionBlock>
        </SectionBlocks>
        <div className="grid gap-8 lg:grid-cols-2">
          <ContentCard title={tier2Dashboards.athleteView.heading}>
            <ul>
              {tier2Dashboards.athleteView.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ContentCard>
          <ContentCard title={tier2Dashboards.coachView.heading}>
            <ul>
              {tier2Dashboards.coachView.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ContentCard>
        </div>
      </Section>

      <Section id={howWithWearable.id} title={howWithWearable.title}>
        <StepFlow steps={howWithWearable.steps} />
      </Section>

      <Section
        id={tier3.id}
        title={tier3.title}
        backgroundImage={sectionImages.tier3}
        backgroundOpacity={0.55}
      >
        <SectionBlocks>
          <SectionBlock>
            <Lead>{tier3.intro}</Lead>
            <p>{tier3.focus}</p>
            <p className="font-medium text-brand">{tier3.overview}</p>
            <p>{tier3.coreValue}</p>
            <p>{tier3.buildWith}</p>
          </SectionBlock>
          <SectionBlock title={tier3.customize.heading}>
            <ul>
              {tier3.customize.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title={tier3.keyBenefits.heading}>
            <ul>
              {tier3.keyBenefits.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
        </SectionBlocks>
      </Section>

      <Section id={tiersCompare.id} title={tiersCompare.title}>
        <Lead>{tiersCompare.intro}</Lead>
        <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-[repeat(5,auto)] lg:items-stretch lg:gap-8">
          {tiersCompare.tiers.map((tier, index) => (
            <TierCompareCard
              key={tier.tier}
              tier={tier.tier}
              title={tier.title}
              needs={tier.needs}
              includes={tier.plus}
              outcome={tier.outcome}
              progression={tiersCompare.progression[index] ?? ""}
            />
          ))}
        </div>
      </Section>

      <Section id={pricing.id} title={pricing.title}>
        <SectionBlocks>
          <SectionBlock title={pricing.customPricing.heading}>
            <p>{pricing.customPricing.basedOn}</p>
            <p>{pricing.customPricing.flexibility}</p>
            <p>{pricing.customPricing.detail}</p>
            <p className="font-medium text-foreground">{pricing.pricingFlexibility}</p>
          </SectionBlock>
          <SectionBlock title={pricing.valueBased.heading}>
            <p>{pricing.valueBased.body}</p>
          </SectionBlock>
          <SectionBlock title={pricing.scalable.heading}>
            <p>{pricing.scalable.body}</p>
          </SectionBlock>
          <SectionBlock title={pricing.whatsIncluded.heading}>
            <ul>
              {pricing.whatsIncluded.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title={pricing.cta.heading}>
            <ul>
              {pricing.cta.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button
              href={`mailto:${contactEmail}?subject=Initial%20consultation`}
              variant="accent"
            >
              Initial consultation
            </Button>
          </SectionBlock>
        </SectionBlocks>
      </Section>

      <Section
        id={caipo.id}
        title={caipo.title}
        backgroundImage={sectionImages.caipo}
      >
        <h3 className="section-group-heading">{caipo.keyCapabilities}</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          {caipo.capabilities.map((cap) => (
            <ContentCard key={cap.title} title={cap.title}>
              <p>{cap.body}</p>
            </ContentCard>
          ))}
        </div>
        <SectionBlocks>
          <SectionBlock>
            <p>{caipo.companion}</p>
          </SectionBlock>
          <SectionBlock title={caipo.role.heading}>
            <ul>
              {caipo.role.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title={caipo.hardware.heading}>
            <p>{caipo.hardware.body}</p>
            <ul>
              {caipo.hardware.formats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
        </SectionBlocks>
      </Section>

      <Section id={comingSoon.id} title={comingSoon.title}>
        <ComingSoonGrid products={comingSoon.products} />
      </Section>

      <Section
        id={whyMoodchanger.id}
        title={whyMoodchanger.title}
        backgroundImage={sectionImages.whyMoodchanger}
        backgroundOpacity={0.82}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {whyMoodchanger.items.map((item) => (
            <ContentCard key={item.title} title={item.title}>
              <p>{item.body}</p>
            </ContentCard>
          ))}
        </div>
        <SectionBlock>
          <p className="font-display text-lg font-medium tracking-tight text-foreground">
            {whyMoodchanger.tagline}
          </p>
        </SectionBlock>
      </Section>
    </>
  );
}
