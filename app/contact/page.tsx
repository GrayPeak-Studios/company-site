import { ContactUs } from "@/components/Contact/ContactUs";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  pageTitle: "Contact",
  description:
    "Start a conversation with GrayPeak Studio: tell us about your project, timeline, and goals—we’ll follow up from there.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <ContactUs />
    </main>
  );
}
