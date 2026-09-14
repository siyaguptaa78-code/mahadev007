import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/siteConfig";

export const metadata: Metadata = generatePageMetadata(
  "Blog – Mahadev Book Playing Insights & Tips",
  "Read the latest cricket playing tips, platform guides, and sports insights on the Mahadev Book Blog.",
  "/blog"
);

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
