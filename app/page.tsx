const siteName = "GrayPeak Studio";
const siteDescription =
  "Web design and development crafted for clarity, speed, and lasting quality.";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          {siteName}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">{siteDescription}</p>
      </section>
    </main>
  );
}
