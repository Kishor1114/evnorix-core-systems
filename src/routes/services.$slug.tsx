import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getService, SERVICES } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink, DiagramFrame, GridBackdrop, SectionHeader } from "@/components/site/primitives";
import { SystemFlow } from "@/components/site/diagrams";
import { CtaSection, ProcessTimeline } from "@/components/site/sections";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — Evnorix" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.service.name} — Evnorix`;
    const desc = loaderData.service.summary;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* 01 HERO */}
      <section className="relative overflow-hidden border-b border-border pt-28 pb-16 md:pt-36 md:pb-24">
        <GridBackdrop />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 right-0 h-[26rem] w-[40rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-brand)" }}
        />
        <div className="shell relative grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-3">
              <span className="meta-label text-brand/70">{service.index}</span>
              <span aria-hidden className="rule-brand h-px w-8 opacity-60" />
              <span className="eyebrow">Service</span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 text-4xl leading-[1.05] font-semibold md:text-5xl lg:text-[3.4rem]">
                {service.name}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85">
                {service.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CtaLink to="/contact" size="lg" className="w-full sm:w-auto">
                  {service.ctaLabel}
                </CtaLink>
                <CtaLink
                  to="/how-we-work"
                  variant="outline"
                  size="lg"
                  arrow={false}
                  className="w-full sm:w-auto"
                >
                  How we deliver
                </CtaLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:col-span-5">
            <div className="panel h-full p-6">
              <span className="meta-label">Business outcome</span>
              <p className="mt-4 font-display text-xl leading-snug font-semibold">
                {service.outcome}
              </p>
              <ul className="mt-6 grid gap-3 border-t border-border pt-6">
                {service.capabilities.slice(0, 5).map((c) => (
                  <li key={c.title} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-brand" />
                    {c.title}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 PROBLEM */}
      <section className="shell section-y grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeader
            index="01"
            eyebrow="The problem"
            title={service.problem.heading}
            intro={service.problem.body}
          />
        </div>
        <Reveal delay={100} className="lg:col-span-6 lg:pt-16">
          <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border">
            {service.problem.points.map((p, i) => (
              <li key={p} className="flex items-start gap-4 bg-surface/70 p-5">
                <span className="meta-label mt-0.5 text-brand/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 03 HOW EVNORIX HELPS */}
      <section className="border-y border-border bg-surface/25">
        <div className="shell section-y">
          <SectionHeader
            index="02"
            eyebrow="How Evnorix helps"
            title="A practical approach, described in business terms."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {service.approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 80} className="panel p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="meta-label text-brand/80">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden className="rule-brand h-px flex-1 opacity-25" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 CAPABILITIES */}
      <section className="shell section-y">
        <SectionHeader
          index="03"
          eyebrow="Capabilities"
          title="What the engagement can include."
          intro="Scope is agreed per engagement. These are the capability modules we deliver in this service area."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((c, i) => (
            <Reveal
              as="article"
              key={c.title}
              delay={i * 50}
              className="group bg-surface/70 p-6 transition-colors hover:bg-surface-2/70"
            >
              <span className="meta-label text-brand/70">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 05 WORKFLOW */}
      <section className="border-y border-border bg-surface/25">
        <div className="shell section-y">
          <SectionHeader
            index="04"
            eyebrow="Workflow & architecture"
            title="How the flow is structured."
            intro="A simplified view of the operating path this service is built around. Each step carries a defined owner, state, and record."
          />
          <Reveal className="mt-12">
            <DiagramFrame label={`${service.shortName} — operating flow`}>
              <SystemFlow steps={service.flow} />
            </DiagramFrame>
          </Reveal>
        </div>
      </section>

      {/* 06 OUTCOMES */}
      <section className="shell section-y grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            index="05"
            eyebrow="Expected outcomes"
            title="What changes for the business."
            intro="Practical operational improvements. We do not publish performance figures we cannot evidence."
          />
        </div>
        <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
          {service.outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 70} className="panel p-6">
              <h3 className="text-base font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 07 DELIVERY */}
      <section className="border-y border-border bg-surface/25">
        <div className="shell section-y">
          <SectionHeader
            index="06"
            eyebrow="Delivery approach"
            title="Connected to the Evnorix delivery process."
            intro={service.delivery}
          />
          <ProcessTimeline compact />
        </div>
      </section>

      {/* 08 FAQ */}
      <section className="shell section-y grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader index="07" eyebrow="FAQ" title="Questions we are usually asked." />
        </div>
        <Reveal delay={80} className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:text-brand hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* Other services */}
      <section className="shell pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/services/$slug"
              params={{ slug: o.slug }}
              className="group panel flex items-center justify-between gap-4 p-6 transition-colors hover:border-brand/50"
            >
              <span>
                <span className="meta-label text-brand/70">{o.index}</span>
                <span className="mt-2 block font-display text-lg font-semibold">{o.shortName}</span>
              </span>
              <span
                aria-hidden
                className="text-brand transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection primaryLabel={service.ctaLabel} />
    </>
  );
}
