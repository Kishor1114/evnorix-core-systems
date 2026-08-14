import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CtaLink } from "./primitives";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.filter((n) => n.to !== "/contact").map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
              <span
                aria-hidden
                className="rule-brand absolute inset-x-3 -bottom-px h-px scale-x-0 opacity-0 transition-all duration-300 data-[on=true]:scale-x-100 data-[on=true]:opacity-100"
                data-on={
                  item.to === "/" ? pathname === "/" : pathname.startsWith(item.to)
                }
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaLink to="/contact" size="sm">
            Talk to Evnorix
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border-strong text-foreground transition-colors hover:border-brand/60 lg:hidden"
        >
          {open ? <Menu className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 top-16 z-40 origin-top bg-background transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <div className="shell flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto pt-6 pb-10">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mb-2 self-end inline-flex size-10 items-center justify-center rounded-md border border-border-strong"
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden />
          </button>
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="hairline-t flex items-baseline gap-4 py-4 text-2xl font-display font-semibold tracking-tight text-foreground/90 transition-colors data-[status=active]:text-brand"
              >
                <span className="meta-label w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <CtaLink to="/contact" size="lg" className="w-full">
              Talk to Evnorix
            </CtaLink>
          </div>
        </div>
      </div>
    </header>
  );
}
