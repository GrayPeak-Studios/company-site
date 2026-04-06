import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { GridPattern } from "@/components/ui/GridPattern";
import { IconWell } from "@/components/ui/IconWell";
import type { IconType } from "react-icons";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const missionBody =
  "We help teams ship websites and internal tools they can trust—fast loads, accessible interfaces, and documentation that survives the next handoff. Less guesswork, more momentum.";

const whoWeHelpIntro =
  "Whether you’re validating an idea or scaling a product, we plug in where it matters—clear scope, steady communication, and work you can maintain after we step back.";

const howWeWorkIntro =
  "A straightforward rhythm from first call to shipped work—no mystery phases, no surprise invoices.";

const howWeWorkSteps: {
  title: string;
  description: string;
  Icon: IconType;
}[] = [
  {
    title: "Discover & align",
    description:
      "We clarify goals, audience, and constraints, then agree on scope, milestones, and how you’ll review progress.",
    Icon: HiOutlineClipboardDocumentList,
  },
  {
    title: "Design & build",
    description:
      "UI and engineering move together in small slices—staging previews, tight feedback loops, and sensible defaults.",
    Icon: HiOutlineCodeBracket,
  },
  {
    title: "Ship & verify",
    description:
      "Performance, accessibility, and cross-browser checks before launch—plus a clean cutover plan when it’s time to go live.",
    Icon: HiOutlineRocketLaunch,
  },
  {
    title: "Hand off & support",
    description:
      "Repo access, runbooks, and walkthroughs so your team can own what we built—or we stay on for steady improvements.",
    Icon: HiOutlineClipboardDocumentCheck,
  },
];

function IllustrationStartups() {
  return (
    <svg
      viewBox="0 0 400 260"
      className="h-full w-full max-h-[220px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        width="400"
        height="260"
        className="fill-zinc-900/0"
      />
      <rect
        x="48"
        y="72"
        width="88"
        height="88"
        rx="18"
        className="stroke-white/25"
        strokeWidth="1.5"
      />
      <rect
        x="64"
        y="96"
        width="40"
        height="8"
        rx="2"
        className="fill-white/35"
      />
      <rect
        x="64"
        y="112"
        width="56"
        height="6"
        rx="2"
        className="fill-white/20"
      />
      <rect
        x="264"
        y="72"
        width="88"
        height="88"
        rx="18"
        className="stroke-white/25"
        strokeWidth="1.5"
      />
      <circle cx="308" cy="116" r="18" className="stroke-white/40" strokeWidth="1.5" />
      <path
        d="M296 116h8M308 108v16"
        className="stroke-white/50"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M148 116h104"
        className="stroke-white/30"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      <path
        d="M228 112l6 4-6 4M172 120l-6-4 6-4"
        className="stroke-white/55"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IllustrationTeams() {
  return (
    <svg
      viewBox="0 0 400 260"
      className="h-full w-full max-h-[220px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M40 200c40-80 120-120 200-100s120 60 140 120"
        className="stroke-zinc-300/90"
        strokeWidth="1"
        strokeDasharray="5 8"
        strokeLinecap="round"
      />
      <path
        d="M60 60c60 40 140 20 200 80s100 100 60 160"
        className="stroke-zinc-200/80"
        strokeWidth="1"
        strokeDasharray="4 7"
        strokeLinecap="round"
      />
      <circle cx="200" cy="118" r="44" className="stroke-zinc-300" strokeWidth="1.25" />
      <circle cx="200" cy="118" r="28" className="fill-zinc-100 stroke-zinc-200" strokeWidth="1.25" />
      <path
        d="M200 102v12M194 108h12"
        className="stroke-zinc-500"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="96" cy="88" r="14" className="fill-white stroke-zinc-200" strokeWidth="1.25" />
      <circle cx="312" cy="96" r="14" className="fill-white stroke-zinc-200" strokeWidth="1.25" />
      <circle cx="124" cy="188" r="14" className="fill-white stroke-zinc-200" strokeWidth="1.25" />
    </svg>
  );
}

export function CompanyGoals() {
  return (
    <>
      <SectionWrapper
        className="relative isolate overflow-hidden border-b border-zinc-200/70"
        aria-labelledby="our-mission-heading"
        py="py-20 sm:py-24 lg:py-28"
        innerClassName="flex flex-col items-center text-center"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-100/80 via-white to-white"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.45]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(rgb(24 24 27 / 0.08) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        />
        <GridPattern opacity={0.3} />
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            About GrayPeak
          </p>
          <h1
            id="our-mission-heading"
            className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-[1.08]"
          >
            Our Mission
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
            {missionBody}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-8 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Get in touch
          </Link>
      </SectionWrapper>

      <SectionWrapper
        className="relative isolate overflow-hidden border-b border-zinc-200/70 bg-white"
        aria-labelledby="who-we-help-heading"
        innerClassName="relative text-center"
      >
        <GridPattern />

        <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              <span className="text-zinc-400">//</span> WHO WE HELP
            </p>
            <h2
              id="who-we-help-heading"
              className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl"
            >
              Partners who want clarity—not chaos
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {whoWeHelpIntro}
            </p>
          </div>

          <div className="mt-14 grid gap-10 text-left lg:mt-16 lg:grid-cols-2 lg:gap-0">
            <article className="lg:border-r lg:border-zinc-200/80 lg:pr-8 xl:pr-12">
              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-700/40 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 shadow-inner shadow-black/20">
                <IllustrationStartups />
              </div>
              <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-amber-800/90">
                Startups &amp; founders
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
                Launch-ready sites and landing experiences with tight scope, sane timelines, and handoff notes so you’re not guessing after go-live.
              </p>
            </article>

            <article className="lg:pl-8 xl:pl-12">
              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-b from-zinc-50 to-white ring-1 ring-zinc-950/[0.03] shadow-sm shadow-zinc-200/40">
                <IllustrationTeams />
              </div>
              <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Product teams &amp; SMBs
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
                Iterations, internal tools, and integrations that match how you work—documented, testable, and easy for your team to extend.
              </p>
            </article>
          </div>
      </SectionWrapper>

      <SectionWrapper
        className="relative isolate overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-zinc-100/70 via-white to-zinc-50/40"
        aria-labelledby="how-we-work-heading"
        innerClassName="relative"
      >
        <GridPattern />
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden
        >
          <div className="absolute left-1/2 top-0 h-[min(75vw,26rem)] w-[min(75vw,26rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[min(50vw,20rem)] w-[min(50vw,20rem)] -translate-x-1/4 translate-y-1/3 rounded-full bg-zinc-200/35 blur-3xl" />
        </div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              <span className="text-zinc-400">//</span> HOW WE WORK
            </p>
            <h2
              id="how-we-work-heading"
              className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl"
            >
              How we work
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {howWeWorkIntro}
            </p>
          </div>

          <ul className="mt-14 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
            {howWeWorkSteps.map(({ title, description, Icon }, index) => (
              <li key={title}>
                <article className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white/90 px-6 py-7 shadow-sm shadow-zinc-200/40 ring-1 ring-zinc-950/[0.03] transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-zinc-300/90 motion-safe:hover:shadow-[0_8px_20px_rgb(0_0_0_/0.05),0_22px_48px_-12px_rgb(0_0_0_/0.11)] sm:px-7 sm:py-8">
                  <span className="font-mono text-[0.65rem] font-medium tabular-nums text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <IconWell className="mt-3">
                    <Icon className="h-6 w-6 text-zinc-700" aria-hidden />
                  </IconWell>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-zinc-900 sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem]">
                    {description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
      </SectionWrapper>
    </>
  );
}
