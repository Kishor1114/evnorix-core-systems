import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, PROCESS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { CtaLink, GridBackdrop, SectionHeader } from "./primitives";
import { MiniFlow } from "./diagrams";

/* ---------------- Page hero (inner pages) ---------------- */

export function PageHero({
  index,
  eyebrow,
  title,
  intro,
  children,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-28 pb-16 md:pt-36 md:pb-24">
      <GridBackdrop />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/3 h-80 w-[38rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="shell relative">
        <Reveal className="flex items-center gap-3">
          <span className="meta-label text-brand/70">{index}</span>
          <span aria-hidden className="rule-brand h-px w-8 opacity-60" />
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {intro}
          </p>
        </Reveal>
        {children ? <Reveal delay={180}>{children}</Reveal> : null}
      </div>
    </section>
  );
}

/* ---------------- Service cards grid ---------------- */

const miniNodes: Record<string, { nodes: string[]; variant: 0 | 1 | 2 }> = {
  "loan-origination": { nodes: ["APPLY", "VERIFY", "DOCS", "DECIDE"], variant: 0 },
  collections: { nodes: ["ALLOC", "CONTACT", "FIELD", "PAID"], variant: 1 },
  "data-infrastructure": { nodes: ["SOURCE", "MIRROR", "MONITOR"], variant: 2 },
};

export function ServicesGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 lg:grid-cols-3", className)}>
      {SERVICES.map((s, i) => {
        const mini = miniNodes[s.slug]!;
        return (
          <Reveal key={s.slug} delay={i * 90} as="article" className="h-full">
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group panel relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:border-brand/50 hover:shadow-[var(--glow-brand)] md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="meta-label text-brand/80">{s.index}</span>
                <ArrowUpRight
                  aria-hidden
                  className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                />
              </div>

              <h3 className="mt-5 text-xl leading-tight font-semibold md:text-[1.35rem]">
                {s.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>

              <div className="mt-6 rounded-lg border border-border bg-background/40 p-3">
                <MiniFlow nodes={mini.nodes} variant={mini.variant} />
              </div>

              <ul className="mt-6 grid gap-2">
                {s.capabilities.slice(0, 4).map((c) => (
                  <li key={c.title} className="flex items-center gap-2 text-sm text-foreground/75">
                    <span aria-hidden className="size-1 shrink-0 rounded-full bg-brand" />
                    {c.title}
                  </li>
                ))}
              </ul>

              <span className="mt-7 inline-flex items-center gap-2 pt-4 text-sm font-medium text-brand hairline-t">
                {s.ctaLabel}
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ---------------- Process timeline ---------------- */

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="relative mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
      {PROCESS.map((p, i) => (
        <Reveal
          as="li"
          key={p.step}
          delay={i * 70}
          className="group relative bg-surface/70 p-6 transition-colors duration-300 hover:bg-surface-2/70 md:p-8"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-brand">{p.step}</span>
            <span aria-hidden className="rule-brand h-px flex-1 opacity-25" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          {!compact && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.detail.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase"
                >
                  {d}
                </li>
              ))}
            </ul>
          )}
          <span
            aria-hidden
            className="rule-brand absolute inset-x-0 bottom-0 h-px scale-x-0 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-70"
          />
        </Reveal>
      ))}
    </ol>
  );
}

/* ---------------- Closing CTA ---------------- */

export function CtaSection({
  title = "Have a requirement in this area?",
  body = "Tell us what you are trying to improve. We will come back with a considered view on scope, approach, and what a first delivery could look like.",
  primaryLabel = "Talk to Evnorix",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <GridBackdrop className="grid-fade opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-14rem] left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="shell section-y relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Next step</span>
          <h2 className="mt-4 text-3xl leading-tight font-semibold md:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink to="/contact" size="lg">
              {primaryLabel}
            </CtaLink>
            <CtaLink to="/services" variant="outline" size="lg" arrow={false}>
              Explore services
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { SectionHeader };
