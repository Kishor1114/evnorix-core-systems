import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SERVICES } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/primitives";
import { PageHero } from "@/components/site/sections";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TITLE = "Contact Evnorix — Start a Conversation";
const DESC =
  "Tell Evnorix about the operational problem you are solving across lending, collections, or data infrastructure. We respond with a considered view on approach and scope.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Contact,
});

const EXPECTATIONS = [
  { k: "01", t: "Acknowledged quickly", b: "We confirm receipt and who will pick up the conversation." },
  { k: "02", t: "A short discovery call", b: "Thirty minutes to understand the process, constraints, and timing." },
  { k: "03", t: "A considered response", b: "An outline of approach, scope options, and a realistic first delivery." },
];

function Contact() {
  const [interest, setInterest] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks — your enquiry has been noted.", {
      description: "This demo form does not yet send email. Connect a backend to deliver enquiries.",
    });
    e.currentTarget.reset();
    setInterest("");
  };

  return (
    <>
      <PageHero
        index="X"
        eyebrow="Contact"
        title="Start a conversation."
        intro="Tell us about the workflow, the constraint, or the system that is holding things back. The more operational context you can share, the more useful our first response will be."
      />

      <section className="shell section-y grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <form onSubmit={onSubmit} className="panel grid gap-5 p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Organisation</Label>
                <Input id="company" name="company" placeholder="Company name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="interest">Area of interest</Label>
                <Select value={interest} onValueChange={setInterest}>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Select a service area" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s.slug} value={s.slug}>
                        {s.shortName}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">What are you trying to solve?</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Describe the workflow, the current system, and what needs to change."
              />
            </div>
            <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Your details are used only to respond to this enquiry.
              </p>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send enquiry
              </Button>
            </div>
          </form>
        </Reveal>

        <div className="lg:col-span-5">
          <SectionHeader index="01" eyebrow="What happens next" title="No sales sequence." />
          <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border">
            {EXPECTATIONS.map((x) => (
              <Reveal as="li" key={x.k} className="bg-surface/70 p-6">
                <span className="meta-label text-brand/70">{x.k}</span>
                <h3 className="mt-2 text-base font-semibold">{x.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{x.b}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
