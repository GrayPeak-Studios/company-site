import Link from "next/link";

const CARD_BG = "rgb(242, 244, 247)";

const cardHoverLight =
  "transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md motion-safe:hover:shadow-zinc-300/40 hover:border-zinc-400";

const cardHoverFeatured =
  "transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg motion-safe:hover:shadow-zinc-400/35 hover:border-black";

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
      className="h-6 w-6 text-black"
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
      className="h-6 w-6 text-black"
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
      className="h-6 w-6 text-black"
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
      className="h-7 w-7 text-black"
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

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white"
      aria-hidden
    >
      {children}
    </div>
  );
}

export function WhyChooseUs() {
  const c = whyChooseUsContent;
  const TopLeftIcon = iconComponents[c.topLeft.icon];
  const TopMidIcon = iconComponents[c.topMiddle.icon];
  const WideIcon = iconComponents[c.bottomWide.icon];
  const TallIcon = iconComponents[c.tall.icon];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="inline-flex rounded-full border border-zinc-400 bg-zinc-100/80 px-4 py-1.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-black">
            {c.badge}
          </span>
        </div>

        <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.5rem] lg:leading-snug">
          {c.heading.lineBefore}{" "}
          <span className="font-bold text-black">{c.heading.lineHighlight}</span>{" "}
          {c.heading.lineAfter}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
          <article
            className={`flex flex-col rounded-2xl border border-zinc-200 p-8 md:col-start-1 md:row-start-1 ${cardHoverLight}`}
            style={{ backgroundColor: CARD_BG }}
          >
            <IconCircle>
              <TopLeftIcon />
            </IconCircle>
            <h3 className="text-lg font-bold text-black sm:text-xl">
              {c.topLeft.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
              {c.topLeft.description}
            </p>
          </article>

          <article
            className={`flex flex-col rounded-2xl border border-zinc-200 p-8 md:col-start-2 md:row-start-1 ${cardHoverLight}`}
            style={{ backgroundColor: CARD_BG }}
          >
            <IconCircle>
              <TopMidIcon />
            </IconCircle>
            <h3 className="text-lg font-bold text-black sm:text-xl">
              {c.topMiddle.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
              {c.topMiddle.description}
            </p>
          </article>

          <article
            className={`flex flex-col rounded-2xl border border-zinc-200 p-8 md:col-span-2 md:col-start-1 md:row-start-2 ${cardHoverLight}`}
            style={{ backgroundColor: CARD_BG }}
          >
            <IconCircle>
              <WideIcon />
            </IconCircle>
            <h3 className="text-lg font-bold text-black sm:text-xl">
              {c.bottomWide.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
              {c.bottomWide.description}
            </p>
          </article>

          <article
            className={`flex flex-col rounded-2xl border-2 border-black p-8 md:col-start-3 md:row-span-2 md:row-start-1 ${cardHoverFeatured}`}
            style={{ backgroundColor: CARD_BG }}
          >
            <IconCircle>
              <TallIcon />
            </IconCircle>
            <h3 className="text-lg font-bold text-black sm:text-xl">{c.tall.title}</h3>
            {c.tall.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-sm leading-relaxed text-black sm:text-base ${i === 0 ? "mt-3 flex-1" : "mt-4"}`}
              >
                {paragraph}
              </p>
            ))}
            <Link
              href={c.tall.cta.href}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
            >
              {c.tall.cta.label}
              <span aria-hidden className="inline-block">
                →
              </span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
