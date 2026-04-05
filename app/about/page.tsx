import type { Metadata } from "next";
import { CompanyGoals } from "@/components/About Us/CompanyGoals";
import { Founder } from "@/components/About Us/Founder";
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how GrayPeak Studio approaches web design and development for teams.",
};

export default function AboutPage() {
  return (
    <div>
      <CompanyGoals />
      <Founder />
    </div>
  );
}
