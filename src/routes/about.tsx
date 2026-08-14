import { createFileRoute } from "@tanstack/react-router";
import { CULTURE, ETHICS } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/primitives";
import { CtaSection, PageHero } from "@/components/site/sections";

const TITLE = "About Evnorix — A Service-Based Technology Company";
const DESC =
  "Evnorix is a service-based technology company focused on lending, collections, and data infrastructure — built on collaboration, accountability, and disciplined delivery.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        index="A"
        eyebrow="About Evnorix"
        title="A service-based technology company."
        intro="Evnorix designs, digitises, integrates, and supports business-critical workflows. We work with organisations whose operations depend on lending processes, collections activity, and reliable data movement."
      />

      <section className="shell section-y grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader index="01" eyebrow="Who we are" title="Engineering close to the business." />
        </div>
        <Reveal delay={80} className="lg:col-span-7 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Evnorix exists because operational software is rarely a purely technical problem. Loan
            origination, collections, and data movement are business processes first — shaped by
            policy, exceptions, and the people who run them every day.
          </p>
          <p>
            We work as a service partner rather than a product vendor. That means understanding the
            process before proposing a system, agreeing scope in plain language, and delivering in
            increments the business can review as they land.
          </p>
          <p>
            Our engagements are deliberately focused. We would rather do fewer things properly, with
            documented handover and dependable support, than broaden into work we cannot stand
            behind.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface/25">
        <div className="shell section-y">
          <SectionHeader
            index="02"
            eyebrow="Culture"
            title="How we work together."
            intro="Our internal culture directly affects delivery quality, so we treat it as part of the engineering standard."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {CULTURE.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="panel p-6 md:p-7">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-y">
        <SectionHeader
          index="03"
          eyebrow="Ethics"
          title="The standards we hold ourselves to."
          intro="These principles apply to client work, internal work, and everything in between."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {ETHICS.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 50} className="bg-surface/70 p-6">
              <span className="meta-label text-brand/70">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-base font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaSection title="Work with a team that treats delivery as a discipline." />
    </>
  );
}
