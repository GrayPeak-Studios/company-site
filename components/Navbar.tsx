import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-md backdrop-saturate-150">
      <nav
        className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <Link
          href="/"
          className="flex shrink-0 items-baseline gap-1.5 text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          <span className="text-base font-semibold tracking-tight sm:text-[1.05rem]">
            GrayPeak
          </span>
          <span className="text-base font-medium tracking-tight text-zinc-500 sm:text-[1.05rem]">
            Studio
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((item) => (
            <li key={item.href + item.label}>
              <Link
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100/90 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-3 pl-3 border-l border-zinc-200/80">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Get started
            </Link>
          </li>
        </ul>

        <MobileNav links={navLinks} />
      </nav>
    </header>
  );
}
