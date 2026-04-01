import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with GrayPeak Studio about your project.",
};

export default function ContactPage() {
  return (
    <div
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600">
        Get in touch with GrayPeak Studio about your project.
      </p>
    </div>
  );
}
