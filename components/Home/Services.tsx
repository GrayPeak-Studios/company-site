function IconBehavior() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0 text-zinc-600" fill="none" aria-hidden>
      <circle cx="32" cy="38" r="12" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 22c2-4 8-8 16-6 4 1 6 4 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 6v6M26 9l2 2M38 9l-2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconChildDevelopment() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0 text-zinc-600" fill="none" aria-hidden>
      <path
        d="M18 20c4-10 20-10 26 2 4 9-2 18-8 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 26 34 36 38 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDigitalMedia() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0 text-zinc-600" fill="none" aria-hidden>
      <rect
        x="14"
        y="18"
        width="36"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M26 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconEducation() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0 text-zinc-600" fill="none" aria-hidden>
      <path
        d="M32 14 48 22 32 30 16 22 32 14z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M22 26v14M42 26v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 22v6c0 4 16 8 16 8s16-4 16-8v-6"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconNutrition() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0 text-zinc-600" fill="none" aria-hidden>
      <circle cx="22" cy="18" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M22 26v6M18 36c-4 8 2 20 14 22 12-2 18-14 14-22-2-4-6-6-10-6h-8c-4 0-8 2-10 6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M42 22 52 12M48 18l4-6-4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSleep() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0 text-zinc-600" fill="none" aria-hidden>
      <circle cx="32" cy="34" r="16" stroke="currentColor" strokeWidth="2" />
      <path
        d="M32 24v10l8 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 16h6M43 13v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 22l4 2M10 30l4-1M14 38l-3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWeaning() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0 text-zinc-600" fill="none" aria-hidden>
      <path
        d="M18 40c0-8 8-14 18-14s18 6 18 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="32" cy="38" rx="14" ry="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M40 26 48 14M45 20l6-6-6-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLactation() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0 text-zinc-600" fill="none" aria-hidden>
      <circle cx="38" cy="22" r="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M30 30c-6 4-10 12-10 20v6h24v-6c0-6-3-12-8-16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse cx="28" cy="40" rx="10" ry="7" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="34" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const cards = [
  {
    title: "UX & product strategy",
    description:
      "Discovery workshops, sitemaps, and wireframes so your site solves real user problems before a line of code ships.",
    Icon: IconBehavior,
  },
  {
    title: "Frontend development",
    description:
      "Responsive React and Next.js builds with clean components, TypeScript, and a focus on speed and maintainability.",
    Icon: IconChildDevelopment,
  },
  {
    title: "CMS & content modeling",
    description:
      "Headless CMS setup, structured fields, and editor-friendly workflows so marketing can publish without developer bottlenecks.",
    Icon: IconDigitalMedia,
  },
  {
    title: "Performance & Core Web Vitals",
    description:
      "Lazy loading, image optimization, and bundle tuning to hit strong Lighthouse scores and keep pages snappy on real devices.",
    Icon: IconEducation,
  },
  {
    title: "Hosting & DevOps",
    description:
      "CI/CD, preview deployments, SSL, and environment hygiene—so releases are boring in the best way.",
    Icon: IconNutrition,
  },
  {
    title: "Monitoring & SLAs",
    description:
      "Uptime checks, error tracking, and clear runbooks so issues are caught early and recovery is straightforward.",
    Icon: IconSleep,
  },
  {
    title: "APIs & integrations",
    description:
      "REST and webhook bridges to CRMs, payments, analytics, and internal tools—documented and easy to extend later.",
    Icon: IconWeaning,
  },
  {
    title: "Accessibility & QA",
    description:
      "Semantic HTML, keyboard flows, contrast checks, and cross-browser passes so your product works for more people, everywhere.",
    Icon: IconLactation,
  },
];

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { IconWell } from "@/components/ui/IconWell";

export function Services() {
  return (
    <SectionWrapper
      py="py-20 sm:py-24 lg:py-28"
      className="relative isolate overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-zinc-100/70 via-white to-zinc-50/40"
      innerClassName="relative"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(24 24 27 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(24 24 27 / 0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[min(80vw,28rem)] w-[min(80vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[min(55vw,22rem)] w-[min(55vw,22rem)] translate-x-1/4 translate-y-1/3 rounded-full bg-zinc-200/40 blur-3xl" />
      </div>

      <div>
        <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Capabilities
        </p>
        <h2
          id="services-heading"
          className="mx-auto mt-4 max-w-4xl text-center text-3xl font-semibold leading-[1.12] tracking-tight text-zinc-900 sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]"
        >
          <span className="block">What web problems</span>
          <span className="mt-1 block text-zinc-500">
            would you like to solve next?
          </span>
        </h2>
        <div className="mx-auto mt-8 max-w-2xl border-l-2 border-zinc-900/10 pl-5">
          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
            From first landing page to long-term product work, we help teams ship fast,
            reliable sites—clear scope, modern stacks, and documentation you can hand off
            without guesswork.
          </p>
        </div>

        <ul className="mt-14 grid list-none gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {cards.map(({ title, description, Icon }) => (
            <li key={title}>
              <article className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white/90 px-6 py-7 shadow-sm shadow-zinc-200/40 ring-1 ring-zinc-950/[0.03] transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_24px_48px_-12px_rgb(0_0_0_/0.08)] hover:border-zinc-300/90 sm:px-7 sm:py-8">
                <IconWell className="mb-5 transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.03]">
                  <Icon />
                </IconWell>
                <h3 className="text-lg font-semibold leading-snug text-zinc-900 sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem]">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
