"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = { label: string; href: string };

export function MobileNav({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
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
          className="absolute left-0 right-0 top-full border-b border-zinc-200/80 bg-white/95 px-4 py-4 shadow-lg shadow-zinc-900/5 backdrop-blur-md"
        >
          <ul className="flex flex-col gap-1">
            {links.map((item) => (
              <li key={item.href + item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#contact"
                className="block rounded-lg bg-zinc-900 px-3 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
