import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/* ---------------- Buttons / CTA links ---------------- */

export const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-primary-foreground shadow-[0_10px_30px_-14px_oklch(0.72_0.117_195/70%)] hover:brightness-110 hover:shadow-[0_14px_40px_-14px_oklch(0.72_0.117_195/85%)] active:translate-y-px",
        outline:
          "border border-border-strong bg-surface/40 text-foreground hover:border-brand/60 hover:bg-surface active:translate-y-px",
        ghost: "text-foreground/80 hover:text-brand",
        link: "px-0 text-brand hover:text-brand-soft",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-12 px-6 text-base",
        none: "",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CtaProps = VariantProps<typeof ctaVariants> & {
  to: string;
  params?: Record<string, string>;
  hash?: string;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
};

const AnyLink = Link as unknown as (props: Record<string, unknown>) => ReactNode;

export function CtaLink({ to, params, hash, children, className, variant, size, arrow = true }: CtaProps) {
  const linkProps: Record<string, unknown> = { to };
  if (params) linkProps.params = params;
  if (hash) linkProps.hash = hash;
  return (
    <AnyLink {...linkProps} className={cn(ctaVariants({ variant, size }), className)}>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      ) : null}
    </AnyLink>

  );
}

export function CtaButton({
  children,
  className,
  variant,
  size,
  arrow = false,
  ...rest
}: ComponentProps<"button"> & VariantProps<typeof ctaVariants> & { arrow?: boolean }) {
  return (
    <button className={cn(ctaVariants({ variant, size }), className)} {...rest}>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      ) : null}
    </button>
  );
}

/* ---------------- Section header ---------------- */

export function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {(index || eyebrow) && (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          {index ? <span className="meta-label text-brand/70">{index}</span> : null}
          <span aria-hidden className="rule-brand h-px w-8 opacity-60" />
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        </div>
      )}
      <h2 className="mt-4 text-3xl leading-[1.1] font-semibold md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
      ) : null}
    </Reveal>
  );
}

/* ---------------- Small parts ---------------- */

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-2/60 px-3 py-1 font-mono text-[0.6875rem] tracking-wider text-muted-foreground uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 grid-lines grid-fade", className)}
    />
  );
}

export function DiagramFrame({
  label,
  children,
  className,
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("panel relative overflow-hidden p-4 md:p-6", className)}>
      {label ? (
        <figcaption className="meta-label mb-4 flex items-center gap-2">
          <span aria-hidden className="size-1.5 rounded-full bg-brand" />
          {label}
        </figcaption>
      ) : null}
      {children}
    </figure>
  );
}
