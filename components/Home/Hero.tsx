import Link from "next/link";

const title = "GrayPeak Studio";
const subtitle =
  "Web design and development crafted for clarity, speed, and lasting quality.";

function HeroWebDevIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-surface" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="rgb(244 244 245)" stopOpacity="0.9" />
          <stop offset="1" stopColor="rgb(255 255 255)" stopOpacity="1" />
        </linearGradient>
      </defs>

      <g
        className="hero-illus-drift"
        style={{ transformBox: "fill-box" as const, transformOrigin: "center" }}
      >
        {/* Soft backdrop card */}
        <rect
          x="24"
          y="36"
          width="472"
          height="348"
          rx="20"
          className="fill-zinc-100/80 stroke-zinc-200/90"
          strokeWidth="1.5"
        />

        {/* Browser chrome */}
        <rect
          x="48"
          y="60"
          width="424"
          height="300"
          rx="14"
          fill="url(#hero-surface)"
          className="stroke-zinc-300"
          strokeWidth="1.5"
        />
        <rect x="48" y="60" width="424" height="44" rx="14" className="fill-zinc-200/60" />
        <path
          d="M48 96h424"
          className="stroke-zinc-300/80"
          strokeWidth="1.5"
        />

        {/* Window controls */}
        <circle
          cx="72"
          cy="82"
          r="5.5"
          className="fill-zinc-300 hero-illus-dot-a"
        />
        <circle
          cx="96"
          cy="82"
          r="5.5"
          className="fill-zinc-300 hero-illus-dot-b"
        />
        <circle
          cx="120"
          cy="82"
          r="5.5"
          className="fill-zinc-300 hero-illus-dot-c"
        />

        {/* URL bar */}
        <rect
          x="152"
          y="72"
          width="288"
          height="22"
          rx="6"
          className="fill-white stroke-zinc-200"
          strokeWidth="1"
        />
        <rect
          x="164"
          y="79"
          width="72"
          height="8"
          rx="2"
          className="fill-zinc-200/90 hero-illus-shimmer"
        />

        {/* "Page" content blocks */}
        <rect
          x="72"
          y="124"
          width="160"
          height="100"
          rx="8"
          className="fill-white stroke-zinc-200/90"
          strokeWidth="1"
        />
        <rect x="88" y="140" width="88" height="10" rx="2" className="fill-zinc-300" />
        <rect x="88" y="158" width="128" height="6" rx="2" className="fill-zinc-200" />
        <rect x="88" y="170" width="112" height="6" rx="2" className="fill-zinc-200" />
        <rect x="88" y="182" width="120" height="6" rx="2" className="fill-zinc-200" />

        <rect
          x="252"
          y="124"
          width="196"
          height="44"
          rx="8"
          className="fill-zinc-900"
        />
        <rect x="268" y="140" width="96" height="8" rx="2" className="fill-zinc-100" />
        <rect x="268" y="152" width="64" height="8" rx="2" className="fill-zinc-400" />

        <rect
          x="252"
          y="180"
          width="196"
          height="72"
          rx="8"
          className="fill-white stroke-zinc-200/90"
          strokeWidth="1"
        />
        <rect x="268" y="196" width="140" height="6" rx="2" className="fill-zinc-200" />
        <rect x="268" y="208" width="164" height="6" rx="2" className="fill-zinc-200" />
        <rect x="268" y="220" width="120" height="6" rx="2" className="fill-zinc-200" />

        {/* Code / markup accent */}
        <path
          d="M380 268l-28 56m28-56l28 56M290 296l28-28-28-28"
          className="hero-illus-brackets stroke-zinc-800"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      {/* Floating badge – layout / component (independent drift) */}
      <g
        className="hero-illus-badge"
        style={{ transformBox: "fill-box" as const, transformOrigin: "center" }}
      >
        <rect
          x="328"
          y="288"
          width="152"
          height="88"
          rx="12"
          className="fill-white stroke-zinc-300 shadow-sm"
          strokeWidth="1.5"
        />
        <rect x="344" y="304" width="48" height="6" rx="2" className="fill-zinc-800" />
        <rect x="344" y="318" width="120" height="5" rx="2" className="fill-zinc-200" />
        <rect x="344" y="330" width="104" height="5" rx="2" className="fill-zinc-200" />
        <rect x="344" y="348" width="56" height="22" rx="6" className="fill-zinc-900" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-zinc-200/80 bg-gradient-to-b from-zinc-50/80 to-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden
      >
        <div className="absolute right-0 top-0 h-[min(70vw,480px)] w-[min(70vw,480px)] translate-x-1/4 -translate-y-1/4 rounded-full bg-zinc-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[min(50vw,320px)] w-[min(50vw,320px)] -translate-x-1/3 translate-y-1/4 rounded-full bg-zinc-100 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Web studio
            </p>
            <h1
              id="hero-heading"
              className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-tight lg:text-6xl"
            >
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                Start a project
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroWebDevIllustration className="h-auto w-full max-w-sm lg:max-w-md xl:max-w-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
