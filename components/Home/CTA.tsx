import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { GridPattern } from "@/components/ui/GridPattern";

export function CTA() {
  return (
    <SectionWrapper
      className="relative isolate overflow-hidden border-t border-white/10 bg-zinc-950 text-white"
      aria-labelledby="cta-heading"
      py="py-20 sm:py-24 lg:py-28"
      innerClassName="relative z-10"
    >
      <GridPattern variant="dark" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-1/2 h-[min(85vw,480px)] w-[min(85vw,480px)] -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute inset-y-0 right-0 w-[min(100%,52rem)]">
          <div className="absolute right-[-28%] top-1/2 h-[min(140vw,56rem)] w-[min(140vw,56rem)] -translate-y-1/2 rounded-full bg-gradient-to-l from-white/14 via-white/[0.05] to-transparent" />
          <div className="absolute right-[-8%] top-1/2 h-[min(105vw,42rem)] w-[min(105vw,42rem)] -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.04]" />
          <div className="absolute right-[2%] top-1/2 h-[min(78vw,32rem)] w-[min(78vw,32rem)] -translate-y-1/2 rounded-full border border-white/[0.08]" />
          <div className="absolute right-[10%] top-1/2 h-[min(54vw,22rem)] w-[min(54vw,22rem)] -translate-y-1/2 rounded-full border border-white/[0.06] bg-white/[0.03]" />
          <div className="absolute right-[18%] top-1/2 h-[min(34vw,14rem)] w-[min(34vw,14rem)] -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
        </div>
      </div>

      <div>
        <div className="max-w-2xl lg:max-w-[55%]">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Next step
          </p>
          <h2
            id="cta-heading"
            className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
          >
            <span className="block">Let&apos;s get in touch</span>
            <span className="mt-1 block text-zinc-400">
              Tell us what you&apos;re building—we&apos;ll keep it practical.
            </span>
          </h2>
          <div className="mt-8 max-w-prose border-l-2 border-white/20 pl-5">
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              Your website should serve your business—not the other way around.
              Whether you need a clean launch, a rebuild, or steady improvements,
              we&apos;re happy to help you ship work you can stand behind.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Book a meeting
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-1 text-sm font-medium text-zinc-300 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:justify-start"
            >
              Explore our services
              <span aria-hidden className="translate-y-px">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
