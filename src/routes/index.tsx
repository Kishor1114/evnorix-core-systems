import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, VALUE_PILLARS } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink, GridBackdrop, SectionHeader } from "@/components/site/primitives";
import { HeroSystemDiagram } from "@/components/site/diagrams";
import { CtaSection, ProcessTimeline, ServicesGrid } from "@/components/site/sections";

const TITLE = "Evnorix — Technology Services for Lending, Collections & Data";
const DESC =
  "Evnorix is a service-based technology company. We design, digitise, integrate, and support business-critical workflows across loan origination, collections operations, and data infrastructure.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Home,
});

const POSITIONING = [
  {
    n: "01",
    title: "Business workflow engineering",
    body: "Operational processes modelled, digitised, and made measurable.",
  },
  {
    n: "02",
    title: "Lending & collections technology",
    body: "Origination and recovery operations built around how the business actually runs.",
  },
  {
    n: "03",
    title: "Data infrastructure",
    body: "Repositories, synchronisation, and mirroring designed for continuity.",
  },
  {
    n: "04",
    title: "Integration & continuity",
    body: "Systems connected deliberately, with failure behaviour defined up front.",
  },
];

function Home() {
  return (
    <>
      {/* ---------- 01 HERO ---------- */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <GridBackdrop />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-56 left-1/2 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-brand)" }}
        />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal className="flex items-center gap-3">
              <span aria-hidden className="size-1.5 rounded-full bg-brand node-pulse" />
              <span className="eyebrow">Technology services for business-critical operations</span>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-6 text-4xl leading-[1.04] font-semibold sm:text-5xl xl:text-[3.6rem]">
                Technology services for{" "}
                <span className="text-gradient-brand">lending, collections, and connected data</span>
                .
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Evnorix helps organisations design, digitise, integrate, and improve
                business-critical workflows across loan origination, collections operations, and
                data infrastructure.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CtaLink to="/contact" size="lg" className="w-full sm:w-auto">
                  Talk to Evnorix
                </CtaLink>
                <CtaLink
                  to="/services"
                  variant="outline"
                  size="lg"
                  arrow={false}
                  className="w-full sm:w-auto"
                >
                  Explore services
                </CtaLink>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-10 grid gap-x-6 gap-y-3 border-t border-border pt-6 sm:grid-cols-3">
                {SERVICES.map((s) => (
                  <li key={s.slug} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-brand" />
                    <span className="text-sm text-foreground/75">{s.shortName}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-6 xl:col-span-7">
            <HeroSystemDiagram />
          </Reveal>
        </div>
      </section>

      {/* ---------- 02 POSITIONING STRIP ---------- */}
      <section className="border-y border-border bg-surface/30">
        <div className="shell py-14 md:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl leading-snug font-semibold md:text-[1.75rem]">
              Technology services built around real operational needs.
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {POSITIONING.map((p, i) => (
              <Reveal
                as="li"
                key={p.n}
                delay={i * 70}
                className="bg-surface/70 p-6 transition-colors hover:bg-surface-2/70"
              >
                <span className="meta-label text-brand/80">{p.n}</span>
                <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 03 CORE SERVICES ---------- */}
      <section className="shell section-y">
        <SectionHeader
          index="01"
          eyebrow="Core services"
          title="Technology services for the systems that keep business moving."
          intro="Three focused practices. Each one addresses a specific operational area, delivered with the same engineering discipline and the same delivery process."
        />
        <ServicesGrid className="mt-12" />
      </section>

      {/* ---------- 04 BUSINESS VALUE ---------- */}
      <section className="relative border-y border-border bg-surface/25">
        <div className="shell section-y grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="02"
              eyebrow="Business value"
              title="Technology should make operations clearer, not more complicated."
              intro="Capability only matters when it changes how the business runs. These are the outcomes our engagements are designed around."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {VALUE_PILLARS.map((v, i) => (
                <Reveal
                  key={v.n}
                  delay={i * 80}
                  className="group panel relative overflow-hidden p-6 transition-colors duration-300 hover:border-brand/45"
                >
                  <div className="flex items-center justify-between">
                    <span className="meta-label text-brand/80">{v.n}</span>
                    <span
                      aria-hidden
                      className="h-px w-10 rule-brand opacity-30 transition-opacity group-hover:opacity-80"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 05 HOW WE WORK ---------- */}
      <section className="shell section-y">
        <SectionHeader
          index="03"
          eyebrow="How we work"
          title="A delivery process designed to remove surprises."
          intro="Six stages, applied consistently across every engagement — sized to the requirement rather than to a template."
        />
        <ProcessTimeline compact />
        <Reveal className="mt-8">
          <CtaLink to="/how-we-work" variant="link" size="none">
            See the full delivery process
          </CtaLink>
        </Reveal>
      </section>

      {/* ---------- 06 CTA ---------- */}
      <CtaSection
        title="Let's discuss what you're building."
        body="Share the operational problem you are solving. We will respond with a considered view on approach, scope, and a realistic first delivery."
      />
    </>
  );
}
