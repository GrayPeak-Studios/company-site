import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Extra Tailwind classes, typically for grid placement (e.g. `"md:col-span-2"`). */
  className?: string;
};

/**
 * Standard card shell used for service cards, feature cards, and how-we-work cards.
 * Includes the shared border, shadow, hover lift, and padding pattern.
 */
export function FeatureCard({ children, className = "" }: Props) {
  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white/90 px-6 py-7 shadow-sm shadow-zinc-200/40 ring-1 ring-zinc-950/[0.03] transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_24px_48px_-12px_rgb(0_0_0_/0.08)] hover:border-zinc-300/90 sm:px-7 sm:py-8 ${className}`.trim()}
    >
      {children}
    </article>
  );
}
