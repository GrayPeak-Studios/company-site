"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = { label: string; href: string };

export function MobileNav({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 hover:bg-zinc-100/90 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(100vw-2rem,20rem)] rounded-2xl border border-zinc-200/80 bg-white/95 p-2 shadow-[0_24px_48px_-12px_rgb(0_0_0_/0.12)] ring-1 ring-zinc-950/[0.04] backdrop-blur-md"
        >
          <ul className="flex flex-col gap-0.5">
            {links.map((item) => (
              <li key={item.href + item.label}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100/90 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-zinc-100 pt-2 mt-1">
              <Link
                href="/contact"
                className="block rounded-full bg-zinc-950 px-3 py-2.5 text-center text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                onClick={() => setOpen(false)}
              >
                Get started
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
