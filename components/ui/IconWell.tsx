import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function IconWell({ children, className = "" }: Props) {
  return (
    <div
      className={`inline-flex rounded-2xl bg-zinc-100 p-3.5 ring-1 ring-zinc-950/[0.04] ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );
}
