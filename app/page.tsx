import { CompanyIntro } from "@/components/Home/CompanyIntro";
import { Hero } from "@/components/Home/Hero";
import { Services } from "@/components/Home/Services";
import { WhyChooseUs } from "@/components/Home/WhyChooseUs";
import { CTA } from "@/components/Home/CTA";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  pageTitle: "Home",
  description:
    "GrayPeak Studio builds modern, fast, and maintainable websites and web apps—clear scope, solid engineering, and experiences your team can grow with.",
  path: "",
});

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <CompanyIntro />
      <Services />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
