import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how GrayPeak Studio approaches web design and development for teams.",
};

export default function AboutPage() {
  return (
    <div
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        About
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600">
        GrayPeak Studio is a small team focused on clear, fast websites and products that are easy to maintain.
      </p>
    </div>
  );
}
