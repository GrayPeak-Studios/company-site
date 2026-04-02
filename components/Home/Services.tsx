function IconBehavior() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-black" fill="none" aria-hidden>
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
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-black" fill="none" aria-hidden>
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
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-black" fill="none" aria-hidden>
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
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-black" fill="none" aria-hidden>
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
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-black" fill="none" aria-hidden>
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
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-black" fill="none" aria-hidden>
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
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-black" fill="none" aria-hidden>
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
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-black" fill="none" aria-hidden>
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

export function Services() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-4xl text-center text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl md:text-[2rem] md:leading-snug lg:text-4xl">
          What web problems would you like to solve next
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-black sm:text-lg">
          From first landing page to long-term product work, we help teams ship fast,
          reliable sites—clear scope, modern stacks, and documentation you can hand off
          without guesswork.
        </p>

        <ul className="mt-12 grid list-none gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {cards.map(({ title, description, Icon }) => (
            <li key={title}>
              <article className="group flex h-full flex-col rounded-xl border border-zinc-100 bg-white px-6 py-8 text-center shadow-md shadow-zinc-200/60 transition duration-300 ease-out motion-safe:hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-300/45">
                <div className="mb-5 flex justify-center transition-transform duration-300 ease-out motion-safe:group-hover:scale-110">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-black sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-black sm:text-[0.9375rem]">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
