import { createFileRoute } from "@tanstack/react-router";
import { PROCESS } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/primitives";
import { CtaSection, PageHero } from "@/components/site/sections";

const TITLE = "How We Work — Delivery Process | Evnorix";
const DESC =
  "Discovery, design, build, integration, testing, and support. The Evnorix delivery process, applied consistently across lending, collections, and data engagements.";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: HowWeWork,
});

const PRINCIPLES = [
  {
    title: "Scope is agreed, not assumed",
    body: "Every engagement starts with a written understanding of what is in scope, what is not, and what would change that.",
  },
  {
    title: "Working software early",
    body: "Reviewable increments beat status reports. A usable slice of the workflow is available well before final delivery.",
  },
  {
    title: "Failure behaviour is designed",
    body: "Integrations and data movement are specified with their failure paths, not only their happy paths.",
  },
  {
    title: "Handover is part of delivery",
    body: "Documentation and knowledge transfer are delivered with the system, not requested afterwards.",
  },
];

function HowWeWork() {
  return (
    <>
      <PageHero
        index="P"
        eyebrow="How we work"
        title="A delivery process built for business-critical systems."
        intro="Six stages, applied consistently and sized to the requirement. The purpose is not ceremony — it is to make scope, risk, and progress visible to everyone involved."
      />

      {/* Vertical system timeline */}
      <section className="shell section-y">
        <SectionHeader
          index="01"
          eyebrow="Delivery stages"
          title="Discovery through support."
          intro="Each stage has an output the client can review before the next one starts."
        />

        <ol className="relative mt-14">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-brand/60 via-border to-transparent md:left-[19px]"
          />
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 70} className="relative pb-8 pl-12 md:pl-16">
              <span
                aria-hidden
                className="absolute top-1 left-0 grid size-8 place-items-center rounded-full border border-brand/45 bg-surface font-mono text-[0.625rem] text-brand md:size-10 md:text-xs"
              >
                {p.step}
              </span>
              <div className="panel p-6 transition-colors duration-300 hover:border-brand/45 md:p-7">
                <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2 md:justify-end">
                    {p.detail.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-surface/25">
        <div className="shell section-y">
          <SectionHeader
            index="02"
            eyebrow="Delivery principles"
            title="What stays constant across engagements."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="panel p-6 md:p-7">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Want to see how this applies to your requirement?" />
    </>
  );
}
