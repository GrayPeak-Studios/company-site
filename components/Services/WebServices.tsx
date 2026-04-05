import Link from "next/link";
import type { IconType } from "react-icons";
import {
  HiOutlineArrowPath,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

const services: {
  title: string;
  description: string;
  priceLabel: string;
  Icon: IconType;
}[] = [
  {
    title: "Website Design, Hosting, and Support",
    description:
      "End-to-end sites on modern stacks, reliable hosting options, and proactive support—so your presence stays fast, secure, and easy to evolve as you grow.",
    priceLabel: "$1,499",
    Icon: HiOutlineGlobeAlt,
  },
  {
    title: "Ongoing Maintenance / Updates",
    description:
      "Security patches, dependency refreshes, content tweaks, and scoped improvements on a rhythm that fits your roadmap—clear tickets, predictable outcomes.",
    priceLabel: "$649",
    Icon: HiOutlineArrowPath,
  },
  {
    title: "Custom Internal Tools / Software",
    description:
      "Dashboards, admin workflows, and integrations wired to your real data—built for the people who use them every day, with docs you can hand off.",
    priceLabel: "$2,400",
    Icon: HiOutlineCommandLine,
  },
  {
    title: "Consulting / AI Implementation",
    description:
      "Architecture reviews, stack guidance, and practical AI features where they earn their keep—scoped experiments, guardrails, and no black-box lock-in.",
    priceLabel: "$1,200",
    Icon: HiOutlineCpuChip,
  },
];

function IconRippleFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex h-[7.25rem] w-[7.25rem] shrink-0 items-center justify-center">
      <div
        className="pointer-events-none absolute inset-0 rounded-full opacity-[0.45]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(rgb(24 24 27 / 0.12) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />
      <div className="absolute inset-0 rounded-full border border-zinc-200/80" />
      <div className="absolute inset-[10%] rounded-full border border-zinc-200/70" />
      <div className="absolute inset-[22%] rounded-full border border-zinc-200/60" />
      <div className="absolute inset-[34%] rounded-full border border-zinc-200/50" />
      <div className="relative flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-xl bg-zinc-100 ring-1 ring-zinc-950/[0.05]">
        {children}
      </div>
    </div>
  );
}

export function WebServices() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-zinc-100/70 via-white to-zinc-50/40 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="web-services-heading"
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

      <div className="relative mx-auto max-w-6xl">
        <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          What we offer
        </p>
        <h1
          id="web-services-heading"
          className="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold leading-[1.12] tracking-tight text-zinc-900 sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]"
        >
          <span className="block">Our services</span>
          <span className="mt-1 block text-zinc-500">
            Clear packages, honest starting points
          </span>
        </h1>
        <div className="mx-auto mt-8 max-w-2xl border-l-2 border-zinc-900/10 pl-5">
          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
            Pick a lane that matches where you are today—each engagement is scoped in
            writing so you know what ships, when, and what it costs to start.
          </p>
        </div>

        <ul className="mt-14 grid list-none gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {services.map(({ title, description, priceLabel, Icon }) => (
            <li key={title}>
              <article className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white/90 px-6 py-7 shadow-sm shadow-zinc-200/40 ring-1 ring-zinc-950/[0.03] transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_24px_48px_-12px_rgb(0_0_0_/0.08)] hover:border-zinc-300/90 sm:px-7 sm:py-8">
                <div className="flex justify-center sm:justify-start">
                  <IconRippleFrame>
                    <Icon className="h-5 w-5 text-zinc-700" aria-hidden />
                  </IconRippleFrame>
                </div>
                <h2 className="mt-6 text-lg font-semibold leading-snug text-zinc-900 sm:text-xl">
                  {title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem]">
                  {description}
                </p>
                <div className="mt-8 flex flex-col gap-4 border-t border-zinc-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-zinc-600">
                    Starts at{" "}
                    <span className="font-semibold tabular-nums text-zinc-900">
                      {priceLabel}
                    </span>
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex h-11 w-full items-center justify-center gap-1 rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm shadow-zinc-200/30 sm:w-auto"
                  >
                    Book a call
                    <span aria-hidden className="translate-y-px">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
