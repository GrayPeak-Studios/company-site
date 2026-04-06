import { CompanyGoals } from "@/components/About Us/CompanyGoals";
import { Founder } from "@/components/About Us/Founder";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  pageTitle: "About",
  description:
    "Meet GrayPeak Studio: our mission, who we work with, how we ship, and the founder behind the work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <CompanyGoals />
      <Founder />
    </main>
  );
}
