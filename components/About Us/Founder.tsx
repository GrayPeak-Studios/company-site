import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const founderSocials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@graypeakstudio",
    Icon: IconYouTube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/graypeakstudio",
    Icon: IconInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/graypeak-studio",
    Icon: IconLinkedIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/graypeakstudio",
    Icon: IconGitHub,
  },
] as const;

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Founder() {
  return (
    <SectionWrapper
      className="relative isolate overflow-hidden border-b border-zinc-200/70 bg-white"
      aria-labelledby="founder-heading"
    >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              <span className="text-zinc-400">//</span> FOUNDER
            </p>

            <h2
              id="founder-heading"
              className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.05] lg:text-[3.15rem] lg:leading-[1.04]"
            >
              <span className="block">Crafting digital</span>
              <span className="block">experiences that</span>
              <span className="block text-zinc-500">teams rely on.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-600 sm:text-lg">
               At GrayPeak Studio, we focus on fast, accessible sites and internal tools. Clear communication,
              honest timelines, and work you can maintain long after launch. We help you ship with confidence, not guesswork.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-8 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Get started
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-6">
            <div
              className="flex aspect-[3/4] w-full max-w-[18rem] items-center justify-center sm:max-w-xs lg:max-w-sm"
              role="img"
              aria-label="Founder, initial T"
            >
              <div className="flex aspect-square w-full max-w-full items-center justify-center rounded-full border-2 border-zinc-300 bg-white">
                <span className="select-none text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl" aria-hidden>
                  T
                </span>
              </div>
            </div>
          </div>

          <nav
            className="order-3 flex flex-row justify-center gap-3 lg:col-span-1 lg:flex-col lg:items-center lg:justify-center lg:gap-4"
            aria-label="Founder social links"
          >
            {founderSocials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200/90 text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                aria-label={`GrayPeak Studio on ${label}`}
              >
                <Icon className="h-[1.125rem] w-[1.125rem]" />
              </a>
            ))}
          </nav>
        </div>
    </SectionWrapper>
  );
}
