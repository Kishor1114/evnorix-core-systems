import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { Logo } from "./Logo";
import { CtaLink } from "./primitives";

const company = [
  { label: "About", to: "/about" },
  { label: "How We Work", to: "/how-we-work" },
  { label: "Capabilities", to: "/technology" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/30">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5 lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A service-based technology company building dependable digital systems across lending
            workflows, collections operations, and data infrastructure.
          </p>
          <div className="mt-6">
            <CtaLink to="/contact" variant="outline" size="sm">
              Start a conversation
            </CtaLink>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="meta-label">Services</h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand"
                >
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="meta-label">Company</h3>
            <ul className="mt-4 space-y-3">
              {company.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="meta-label">Enquiries</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Describe your requirement through the contact form and the relevant team will respond.
            </p>
            <p className="mt-4 font-mono text-[0.6875rem] tracking-wider text-muted-foreground/70 uppercase">
              Contact details to be published
            </p>
          </div>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Evnorix Technologies Pvt Ltd. All rights reserved.</p>
        <p className="font-mono tracking-wider uppercase">Empowering with technology</p>
      </div>
    </footer>
  );
}
