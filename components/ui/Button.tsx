import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "inverse";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-zinc-950 text-white hover:bg-zinc-800 focus-visible:outline-zinc-950",
  inverse:
    "bg-white text-zinc-950 hover:bg-zinc-100 focus-visible:outline-white",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Extra Tailwind classes (e.g. `"w-full sm:w-auto"`, `"mt-10"`). */
  className?: string;
};

/**
 * Solid link-button used for primary CTAs across the site.
 * Renders as a Next.js `<Link>` with consistent height, padding, and focus ring.
 */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANT_CLASSES[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
