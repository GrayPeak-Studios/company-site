import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(100%,52rem)]"
        aria-hidden
      >
        <div className="absolute right-[-28%] top-1/2 h-[min(140vw,56rem)] w-[min(140vw,56rem)] -translate-y-1/2 rounded-full bg-gradient-to-l from-white/18 via-white/[0.07] to-transparent" />
        <div className="absolute right-[-8%] top-1/2 h-[min(105vw,42rem)] w-[min(105vw,42rem)] -translate-y-1/2 rounded-full border border-white/12 bg-white/[0.06]" />
        <div className="absolute right-[2%] top-1/2 h-[min(78vw,32rem)] w-[min(78vw,32rem)] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute right-[10%] top-1/2 h-[min(54vw,22rem)] w-[min(54vw,22rem)] -translate-y-1/2 rounded-full border border-white/[0.08] bg-white/[0.04]" />
        <div className="absolute right-[18%] top-1/2 h-[min(34vw,14rem)] w-[min(34vw,14rem)] -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-[52%]">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Let&apos;s Get In Touch.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            Your website should serve your business—not the other way around.
            Whether you need a clean launch, a rebuild, or steady improvements,
            we&apos;re happy to help you ship work you can stand behind.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black sm:w-auto"
            >
              Book a meeting
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black sm:w-auto"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
