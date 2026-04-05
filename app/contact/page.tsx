import type { Metadata } from "next";
import { ContactUs } from "@/components/Contact/ContactUs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with GrayPeak Studio about your project.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}
