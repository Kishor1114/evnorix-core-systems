import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/primitives";
import { CtaSection, PageHero, ProcessTimeline, ServicesGrid } from "@/components/site/sections";

const TITLE = "Services — LOS, Collections & Data Infrastructure | Evnorix";
const DESC =
  "Three focused technology service areas from Evnorix: loan origination system services, collections operations technology, and database repositories with data mirroring.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        index="S"
        eyebrow="Services"
        title="Three service areas. One engineering standard."
        intro="Evnorix works where operational workflows meet data. Each service area below solves a specific business problem, and each is delivered through the same discovery-to-support process."
      />

      <section className="shell section-y">
        <ServicesGrid />
      </section>

      <section className="border-y border-border bg-surface/25">
        <div className="shell section-y">
          <SectionHeader
            index="01"
            eyebrow="Choosing a starting point"
            title="Where teams usually begin."
            intro="Engagements rarely start with everything at once. These are the entry points we see most often."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 80} className="list-none bg-surface/70 p-7">
                <span className="meta-label text-brand/80">{s.index}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.shortName}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.outcome}</p>
                <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-foreground/75">
                  <span className="meta-label block">Typical first delivery</span>
                  <span className="mt-2 block">{s.flow[0]!.label} → {s.flow[2]!.label} → {s.flow[5]!.label}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-y">
        <SectionHeader
          index="02"
          eyebrow="Delivery"
          title="Every service follows the same process."
          intro="Consistency in delivery is what makes scope, timelines, and quality expectations discussable up front."
        />
        <ProcessTimeline compact />
      </section>

      <CtaSection />
    </>
  );
}
