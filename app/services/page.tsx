import type { Metadata } from "next";
import { WebServices } from "@/components/Services/WebServices";


export const metadata: Metadata = {
  title: "Services",
  description: "Web design, builds, and improvements from GrayPeak Studio.",
};

export default function ServicesPage() {
  return (
    <div>
      <WebServices />
    </div>
  );
}
