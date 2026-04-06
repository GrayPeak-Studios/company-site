import type { Metadata } from "next";
import { getSiteUrl, siteName } from "@/lib/site";

/**
 * Per-route title, description, and canonical/OG URL.
 * Shared `og:image` comes from `app/opengraph-image.tsx` (no duplicate image tags).
 * Root layout supplies `title.template` so `pageTitle` becomes `pageTitle | GrayPeak Studio`.
 */
export function buildPageMetadata({
  pageTitle,
  description,
  path,
}: {
  pageTitle: string;
  description: string;
  path: `/${string}` | "";
}): Metadata {
  const url = path === "" ? getSiteUrl() : `${getSiteUrl()}${path}`;
  const openGraphTitle = `${pageTitle} | ${siteName}`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: path === "" ? "/" : path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName,
      title: openGraphTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description,
    },
  };
}
