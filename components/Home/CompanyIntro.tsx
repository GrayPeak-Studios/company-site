import Link from "next/link";

const headingLine1 = "Ship sites that feel fast";
const headingLine2 = "and stay reliable.";
const body =
  "We design and build modern web experiences—clean UI, solid performance, and handoffs your team can run with. Less rework, more momentum.";

/** Abstract pipeline — distinct from the Hero browser illustration. */
function ProcessPipelineIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 440 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="intro-pipe-glow" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop stopColor="rgb(255 255 255)" stopOpacity="0.14" />
          <stop offset="1" stopColor="rgb(255 255 255)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Soft backdrop orb */}
      <ellipse
        cx="220"
        cy="200"
        rx="200"
        ry="168"
        className="fill-white/[0.04]"
      />

      <g
        className="hero-illus-drift"
        style={{ transformBox: "fill-box" as const, transformOrigin: "center" }}
      >
        {/* Connector rail */}
        <path
          d="M72 196h296"
          className="stroke-white/20"
          strokeWidth="2"
          strokeDasharray="10 14"
          strokeLinecap="round"
        />
        <path
          d="M72 196h296"
          stroke="url(#intro-pipe-glow)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Step 1 */}
        <rect
          x="48"
          y="132"
          width="112"
          height="128"
          rx="20"
          className="fill-white/[0.06] stroke-white/20"
          strokeWidth="1.25"
        />
        <circle cx="104" cy="176" r="22" className="stroke-white/35" strokeWidth="1.5" />
        <path
          d="M96 176l6 6 14-14"
          className="stroke-white/70"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="68" y="214" width="72" height="5" rx="2" className="fill-white/25" />
        <rect x="68" y="226" width="52" height="5" rx="2" className="fill-white/15" />

        {/* Step 2 */}
        <rect
          x="164"
          y="112"
          width="112"
          height="168"
          rx="20"
          className="fill-white/[0.09] stroke-white/25"
          strokeWidth="1.25"
        />
        <rect x="188" y="144" width="64" height="48" rx="10" className="stroke-white/30" strokeWidth="1.25" />
        <path
          d="M200 168h40M200 176h28"
          className="stroke-white/40"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="188" y="206" width="72" height="5" rx="2" className="fill-white/30" />
        <rect x="188" y="218" width="56" height="5" rx="2" className="fill-white/18" />
        <rect x="188" y="248" width="48" height="14" rx="6" className="fill-white/90" />

        {/* Step 3 */}
        <rect
          x="280"
          y="148"
          width="112"
          height="132"
          rx="20"
          className="fill-white/[0.06] stroke-white/20"
          strokeWidth="1.25"
        />
        <path
          d="M312 200l24-36 20 28 32-44"
          className="stroke-white/55"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="336" cy="248" r="4" className="fill-white/80" />
        <rect x="300" y="262" width="72" height="5" rx="2" className="fill-white/25" />
      </g>

      {/* Floating metric capsule */}
      <g
        className="hero-illus-badge"
        style={{ transformBox: "fill-box" as const, transformOrigin: "center" }}
      >
        <rect
          x="248"
          y="288"
          width="164"
          height="56"
          rx="28"
          className="fill-zinc-900/90 stroke-white/15"
          strokeWidth="1"
        />
        <rect x="264" y="304" width="88" height="6" rx="2" className="fill-white/85" />
        <rect x="264" y="316" width="56" height="5" rx="2" className="fill-white/35" />
        <circle cx="382" cy="316" r="6" className="fill-white/90" />
      </g>
    </svg>
  );
}

export function CompanyIntro() {
  return (
    <section
      className="relative isolate overflow-hidden border-y border-white/10 bg-zinc-950 text-white"
      aria-labelledby="company-intro-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full bg-white/[0.07] blur-3xl" />
        <div className="absolute -right-1/5 bottom-0 h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-zinc-600/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Copy: first on mobile, right column on large screens */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-6 xl:pl-10">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              How we work
            </p>
            <h2
              id="company-intro-heading"
              className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
            >
              <span className="block">{headingLine1}</span>
              <span className="mt-1 block text-zinc-400">{headingLine2}</span>
            </h2>
            <p className="mt-8 max-w-prose border-l-2 border-white/20 pl-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              {body}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Plan a call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm font-medium text-zinc-300 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See what we offer
                <span aria-hidden className="translate-y-px">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Visual: second on mobile, left column on desktop */}
          <div className="order-2 flex justify-center lg:order-1 lg:col-span-5 lg:justify-start">
            <ProcessPipelineIllustration className="h-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
