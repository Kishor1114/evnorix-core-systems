import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/evnorix-logo-light.png.asset.json";
import logoMark from "@/assets/evnorix-mark.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "full",
  linkToHome = true,
}: {
  className?: string;
  variant?: "full" | "mark";
  linkToHome?: boolean;
}) {
  const src = variant === "full" ? logoLight.url : logoMark.url;
  const img = (
    <img
      src={src}
      alt="Evnorix Technologies Pvt Ltd"
      width={variant === "full" ? 1312 : 330}
      height={311}
      className={cn("w-auto object-contain", variant === "full" ? "h-8 md:h-9" : "h-9", className)}
      loading="eager"
      decoding="async"
    />
  );

  if (!linkToHome) return img;

  return (
    <Link
      to="/"
      aria-label="Evnorix — home"
      className="inline-flex shrink-0 items-center rounded-sm transition-opacity hover:opacity-80"
    >
      {img}
    </Link>
  );
}
