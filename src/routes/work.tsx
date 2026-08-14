import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink, SectionHeader } from "@/components/site/primitives";
import { CtaSection, PageHero } from "@/components/site/sections";

const TITLE = "Our Work — Engagement Scenarios | Evnorix";
const DESC =
  "Representative engagement scenarios showing how Evnorix approaches loan origination, collections operations, and data infrastructure work.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Work,
});

const SCENARIOS = [
  {
    slug: "loan-origination" as const,
    context: "A lender running origination across spreadsheets, email approvals, and a legacy core.",
    approach:
      "Model the real application journey, digitise the stages with explicit ownership, and expose status to every team involved.",
    result: "One tracked application record from submission to decision, with a documented audit trail.",
  },
  {
    slug: "collections" as const,
    context: "A recovery team allocating accounts manually with inconsistent follow-up records.",
    approach:
      "Structure allocation rules, standardise contact and promise-to-pay capture, and surface queue health to supervisors.",
    result: "Consistent follow-up discipline and visibility into which accounts are actually progressing.",
  },
  {
    slug: "data-infrastructure" as const,
    context: "Operational reporting competing with production load on a single database.",
    approach:
      "Introduce a structured repository with mirrored data, defined sync behaviour, and monitored failure paths.",
    result: "Reporting isolated from production, with a continuity position that is understood rather than assumed.",
  },
];

function Work() {
  return (
    <>
      <PageHero
        index="W"
        eyebrow="Our work"
        title="How engagements typically take shape."
        intro="Client details stay confidential, so the scenarios below describe the shape of the work rather than named projects. Each reflects the kind of problem we are brought in to solve."
      />

      <section className="shell section-y">
        <SectionHeader
          index="01"
          eyebrow="Engagement scenarios"
          title="Context, approach, and outcome."
        />
        <div className="mt-12 grid gap-4">
          {SCENARIOS.map((s, i) => {
            const service = SERVICES.find((x) => x.slug === s.slug)!;
            return (
              <Reveal key={s.slug} delay={i * 80} className="panel p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="meta-label text-brand/80">{service.index}</span>
                  <span aria-hidden className="rule-brand h-px w-8 opacity-50" />
                  <span className="eyebrow">{service.shortName}</span>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {[
                    { k: "Context", v: s.context },
                    { k: "Approach", v: s.approach },
                    { k: "Outcome", v: s.result },
                  ].map((b) => (
                    <div key={b.k} className="min-w-0 border-t border-border pt-4">
                      <span className="meta-label">{b.k}</span>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <CtaLink to="/services/$slug" params={{ slug: service.slug }} variant="link" size="none">
                    Explore {service.shortName}
                  </CtaLink>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaSection title="Have a scenario that looks familiar?" />
    </>
  );
}
