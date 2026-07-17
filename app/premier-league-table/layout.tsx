import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/siteConfig";

export const metadata: Metadata = generatePageMetadata(
  "Premier League Table: 2026-27 Standings Hub",
  "The live Premier League table for 2026-27, Arsenal's title defence, and how last season finished. Standings updated after every matchweek, with India viewing times.",
  "/premier-league-table/"
);

export default function PremierLeagueTableLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
