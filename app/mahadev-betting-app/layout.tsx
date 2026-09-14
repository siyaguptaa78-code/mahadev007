import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/siteConfig";

export const metadata: Metadata = generatePageMetadata(
  "Mahadev Playing App – Download for Android & iOS",
  "Download the Mahadev Playing App for Android and iOS. Live cricket, casino, instant withdrawals and 24/7 support.",
  "/mahadev-playing-app"
);

export default function PlayingAppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
