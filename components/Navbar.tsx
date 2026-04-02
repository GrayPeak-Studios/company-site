import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";

const siteName = "GrayPeak Studio";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-sm">
      <nav
        className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600"
        >
          {siteName}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <li key={item.href + item.label}>
              <Link
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-2 pl-2">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white"
            >
              Get Started
            </Link>
          </li>
        </ul>

        <MobileNav links={navLinks} />
      </nav>
    </header>
  );
}
