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

  // Scroll lock that preserves scroll position
  useEffect(() => {
    if (!open) return;
    const y = window.scrollY;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, y);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
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
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border-strong text-foreground transition-colors hover:border-brand/60 lg:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </header>

      {/* Mobile navigation overlay — top-most layer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "fixed inset-0 z-[100] flex flex-col bg-background transition-opacity duration-300 lg:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="shell flex h-16 shrink-0 items-center justify-between border-b border-border">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border-strong text-foreground"
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div
          className={cn(
            "shell flex min-h-0 flex-1 flex-col overflow-y-auto pt-6 pb-10 transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="hairline-t flex items-baseline gap-4 py-4 text-2xl font-display font-semibold tracking-tight text-foreground/90 transition-colors data-[status=active]:text-brand"
              >
                <span className="meta-label w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <CtaLink to="/contact" size="lg" className="w-full" onClick={() => setOpen(false)}>
              Talk to Evnorix
            </CtaLink>
          </div>
        </div>
      </div>
    </>
  );
}
