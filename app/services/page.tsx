import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Web design, builds, and improvements from GrayPeak Studio.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        Services
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600">
        Design, build, and improve web experiences—tailored to how you actually work.
      </p>
    </div>
  );
}
