import { WebServices } from "@/components/Services/WebServices";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  pageTitle: "Services",
  description:
    "Web design, development, and ongoing improvements—scoped engagements with clear pricing and timelines from GrayPeak Studio.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <WebServices />
    </main>
  );
}
