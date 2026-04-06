import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { GridPattern } from "@/components/ui/GridPattern";
import { IconWell } from "@/components/ui/IconWell";

const cardBase =
  "flex flex-col rounded-2xl border border-zinc-200/80 bg-white/90 p-7 shadow-sm shadow-zinc-200/40 ring-1 ring-zinc-950/[0.03] transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_24px_48px_-12px_rgb(0_0_0_/0.08)] hover:border-zinc-300/90 sm:p-8";

const cardFeatured =
  "flex flex-col rounded-2xl border border-zinc-900/25 bg-gradient-to-b from-zinc-50/95 to-white p-7 shadow-md shadow-zinc-300/30 ring-1 ring-zinc-900/[0.08] transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_28px_56px_-14px_rgb(0_0_0_/0.12)] hover:border-zinc-900/40 sm:p-8";

const whyChooseUsContent = {
  badge: "Why choose us",
  heading: {
    lineBefore: "Why",
    lineHighlight: "GrayPeak Studio",
    lineAfter: "is The Right Choice for You",
  },
  topLeft: {
    icon: "instructors" as const,
    title: "Built by practicing developers",
    description:
      "Work with engineers who ship production React and Next.js apps every week—not slide-deck consultants. You get code reviews, sensible defaults, and patterns that survive the next redesign.",
  },
  topMiddle: {
    icon: "rocket" as const,
    title: "Predictable delivery",
    description:
      "Milestones, staging previews, and written acceptance criteria keep releases boring in a good way. You stay informed without living in ticket hell, and handoff docs mean your team can own the codebase afterward.",
  },
  bottomWide: {
    icon: "target" as const,
    title: "Modern web, end to end",
    description:
      "From semantic UI and design systems to APIs, caching, and CI/CD, we cover the full path to a fast, accessible site. Performance budgets, SEO basics, and security hygiene are part of the default—not pricey add-ons.",
  },
  tall: {
    icon: "tablet" as const,
    title: "Flexible ways of working",
    paragraphs: [
      "We fit how you operate: fixed-scope projects, phased sprints, or a lightweight retainer for ongoing improvements. Async updates and shared channels keep stakeholders in the loop without drowning everyone in meetings.",
      "Whether you’re a founder chasing a launch date or a product team needing extra capacity, we align calendars and expectations up front so engineering time shows up as shipped features—not surprises.",
    ],
    cta: {
      label: "Start a project",
      href: "/contact" as const,
    },
  },
} as const;

function IconInstructors() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-6 w-6 text-zinc-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="24" cy="18" r="8" />
      <path
        d="M12 40c2-10 8-14 12-14s10 4 12 14"
        strokeLinecap="round"
      />
      <path d="M18 8l2 4M24 6v4M30 8l-2 4" strokeLinecap="round" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-6 w-6 text-zinc-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M24 6l8 16-8 4-8-4 8-16z" />
      <path d="M16 26l-6 8 4 2 2-6M32 26l6 8-4 2-2-6" />
      <path d="M24 34v8" strokeLinecap="round" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-6 w-6 text-zinc-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <path d="M36 12l-8 8" strokeLinecap="round" />
    </svg>
  );
}

function IconTablet() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-6 w-6 text-zinc-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="12" y="8" width="24" height="32" rx="3" />
      <path d="M20 16h12M20 22h8M28 32l4-4" strokeLinecap="round" />
    </svg>
  );
}

const iconComponents = {
  instructors: IconInstructors,
  rocket: IconRocket,
  target: IconTarget,
  tablet: IconTablet,
} as const;

export function WhyChooseUs() {
  const c = whyChooseUsContent;
  const TopLeftIcon = iconComponents[c.topLeft.icon];
  const TopMidIcon = iconComponents[c.topMiddle.icon];
  const WideIcon = iconComponents[c.bottomWide.icon];
  const TallIcon = iconComponents[c.tall.icon];

  return (
    <SectionWrapper
      py="py-20 sm:py-24 lg:py-28"
      className="relative isolate overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-white via-zinc-50/50 to-zinc-100/60"
      innerClassName="relative"
      aria-labelledby="why-choose-heading"
    >
      <GridPattern />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute left-0 top-1/3 h-[min(60vw,24rem)] w-[min(60vw,24rem)] -translate-x-1/3 rounded-full bg-zinc-200/35 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[min(65vw,26rem)] w-[min(65vw,26rem)] translate-x-1/4 translate-y-1/4 rounded-full bg-white/80 blur-3xl" />
      </div>

      <div>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          {c.badge}
        </p>

        <h2
          id="why-choose-heading"
          className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-zinc-900 sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]"
        >
          <span className="block">
            {c.heading.lineBefore}{" "}
            <span className="text-zinc-900">{c.heading.lineHighlight}</span>
          </span>
          <span className="mt-1 block text-zinc-500">{c.heading.lineAfter}</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 md:gap-8">
          <article
            className={`${cardBase} md:col-start-1 md:row-start-1`}
          >
            <IconWell className="mb-5">
              <TopLeftIcon />
            </IconWell>
            <h3 className="text-lg font-semibold leading-snug text-zinc-900 sm:text-xl">
              {c.topLeft.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem]">
              {c.topLeft.description}
            </p>
          </article>

          <article
            className={`${cardBase} md:col-start-2 md:row-start-1`}
          >
            <IconWell className="mb-5">
              <TopMidIcon />
            </IconWell>
            <h3 className="text-lg font-semibold leading-snug text-zinc-900 sm:text-xl">
              {c.topMiddle.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem]">
              {c.topMiddle.description}
            </p>
          </article>

          <article
            className={`${cardBase} md:col-span-2 md:col-start-1 md:row-start-2`}
          >
            <IconWell className="mb-5">
              <WideIcon />
            </IconWell>
            <h3 className="text-lg font-semibold leading-snug text-zinc-900 sm:text-xl">
              {c.bottomWide.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem]">
              {c.bottomWide.description}
            </p>
          </article>

          <article
            className={`${cardFeatured} md:col-start-3 md:row-span-2 md:row-start-1`}
          >
            <IconWell className="mb-5">
              <TallIcon />
            </IconWell>
            <h3 className="text-lg font-semibold leading-snug text-zinc-900 sm:text-xl">
              {c.tall.title}
            </h3>
            {c.tall.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem] ${i === 0 ? "mt-3 flex-1" : "mt-4"}`}
              >
                {paragraph}
              </p>
            ))}
            <Link
              href={c.tall.cta.href}
              className="mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-zinc-950 px-8 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              {c.tall.cta.label}
              <span aria-hidden className="translate-y-px">
                →
              </span>
            </Link>
          </article>
        </div>
      </div>
    </SectionWrapper>
  );
}
