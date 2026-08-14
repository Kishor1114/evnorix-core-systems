import { createFileRoute } from "@tanstack/react-router";
import { CAPABILITY_THEMES } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/primitives";
import { CtaSection, PageHero } from "@/components/site/sections";

const TITLE = "Capabilities — Architecture, Integration & Data | Evnorix";
const DESC =
  "Evnorix capabilities across architecture thinking, integrations, data engineering, security and reliability, and scalability — described without vendor hype.";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Technology,
});

function Technology() {
  return (
    <>
      <PageHero
        index="C"
        eyebrow="Capabilities"
        title="Engineering capability, described plainly."
        intro="We describe how we build rather than listing every tool we have touched. Technology choices are made per engagement, based on the operational requirement and what the client can support long term."
      />

      <section className="shell section-y">
        <SectionHeader
          index="01"
          eyebrow="Capability themes"
          title="Five areas that shape every engagement."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {CAPABILITY_THEMES.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 70}
              className={`panel p-6 transition-colors duration-300 hover:border-brand/45 md:p-8 ${
                i === CAPABILITY_THEMES.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="meta-label text-brand/80">{String(i + 1).padStart(2, "0")}</span>
                <span aria-hidden className="rule-brand h-px flex-1 opacity-25" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{t.label}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {t.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {t.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/25">
        <div className="shell section-y">
          <SectionHeader
            index="02"
            eyebrow="Technology stance"
            title="Fit before fashion."
            intro="We select technology the client's team can operate, staff, and extend. Where an existing platform works, we integrate with it rather than replace it for its own sake."
          />
        </div>
      </section>

      <CtaSection title="Discuss an architecture or integration requirement." />
    </>
  );
}
