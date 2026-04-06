/**
 * Canonical site name and URL for metadata (Open Graph, Twitter cards, canonical links).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://graypeak.studio).
 */
export const siteName = "GrayPeak Studio";

export const siteDescription =
  "Web design and development crafted for clarity, speed, and lasting quality.";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}
