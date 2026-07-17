'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../../components/UI/Reveal';
import { 
  Trophy, HelpCircle, Plus, Minus, Calendar, Clock, 
  Tv, Compass, ChevronRight, AlertCircle, ArrowUpRight
} from 'lucide-react';

const standings2025_26 = [
  { pos: 1, name: "Arsenal", p: 38, w: 26, d: 7, l: 5, gd: 42, pts: 85, note: "Champions (UCL)" },
  { pos: 2, name: "Manchester City", p: 38, w: 25, d: 7, l: 6, gd: 48, pts: 82, note: "UCL Qualification" },
  { pos: 3, name: "Liverpool", p: 38, w: 24, d: 7, l: 7, gd: 38, pts: 79, note: "UCL Qualification" },
  { pos: 4, name: "Chelsea", p: 38, w: 21, d: 9, l: 8, gd: 25, pts: 72, note: "UCL Qualification" },
  { pos: 5, name: "Newcastle United", p: 38, w: 20, d: 8, l: 10, gd: 22, pts: 68, note: "UEL Qualification" },
  { pos: 6, name: "Manchester United", p: 38, w: 19, d: 9, l: 10, gd: 15, pts: 66, note: "UEL Qualification" },
  { pos: 7, name: "Tottenham Hotspur", p: 38, w: 19, d: 8, l: 11, gd: 18, pts: 65, note: "UECL Qualification" },
  { pos: 8, name: "Aston Villa", p: 38, w: 18, d: 8, l: 12, gd: 12, pts: 62 },
  { pos: 9, name: "West Ham United", p: 38, w: 15, d: 9, l: 14, gd: 2, pts: 54 },
  { pos: 10, name: "Brighton & Hove Albion", p: 38, w: 14, d: 10, l: 14, gd: -1, pts: 52 },
  { pos: 11, name: "Crystal Palace", p: 38, w: 13, d: 10, l: 15, gd: -4, pts: 49 },
  { pos: 12, name: "Bournemouth", p: 38, w: 12, d: 11, l: 15, gd: -6, pts: 47 },
  { pos: 13, name: "Everton", p: 38, w: 12, d: 10, l: 16, gd: -12, pts: 46 },
  { pos: 14, name: "Brentford", p: 38, w: 11, d: 11, l: 16, gd: -10, pts: 44 },
  { pos: 15, name: "Wolverhampton Wanderers", p: 38, w: 11, d: 9, l: 18, gd: -15, pts: 42 },
  { pos: 16, name: "Fulham", p: 38, w: 10, d: 11, l: 17, gd: -14, pts: 41 },
  { pos: 17, name: "Nottingham Forest", p: 38, w: 9, d: 11, l: 18, gd: -18, pts: 38 },
  { pos: 18, name: "Leicester City", p: 38, w: 8, d: 9, l: 21, gd: -28, pts: 33, note: "Relegated" },
  { pos: 19, name: "Ipswich Town", p: 38, w: 7, d: 9, l: 22, gd: -35, pts: 30, note: "Relegated" },
  { pos: 20, name: "Southampton", p: 38, w: 5, d: 7, l: 26, gd: -49, pts: 22, note: "Relegated" }
];

const faqs = [
  {
    q: "Who won the Premier League in 2025-26?",
    a: "Arsenal, who finished the 2025-26 season on 85 points (26 wins, 7 draws, 5 losses)."
  },
  {
    q: "When does the 2026-27 Premier League season start?",
    a: "The new campaign is due to begin in mid-August 2026; the fixtures will be announced in due course."
  },
  {
    q: "How many teams are there in the Premier League?",
    a: "There are 20 teams in the Premier League, with the bottom three being relegated to the EFL Championship at the end of each season."
  },
  {
    q: "How does the Premier League table work?",
    a: "Clubs earn three points for a win and one point for a draw, with goal difference (then goals scored) used as a tie-breaker."
  },
  {
    q: "What time are Premier League matches in India?",
    a: "Matches are played mainly on Saturday and Sunday, with kick-off times between 5:00 pm and 1:00 am IST. The traditional Saturday 3pm UK kick-off time converts to 7:30 pm IST, while evening matches begin around 10:30 pm IST."
  }
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Table",
      "name": "Premier League 2025-2026 Final Standings",
      "about": "Final standings of the English Premier League 2025-26 season."
    },
    {
      "@type": "SportsEvent",
      "name": "Premier League 2026-2027 Season",
      "sport": "Soccer",
      "description": "The 2026-27 English Premier League season, featuring 20 teams competing for the championship."
    }
  ]
};

export default function PremierLeagueTablePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-black py-16">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-1.5 text-zinc-500 text-xs">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-zinc-300">Premier League Table</span>
        </div>

        {/* H1 Header */}
        <Reveal>
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-6 leading-tight">
              Premier League Table: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">2026-27 Standings Hub</span>
            </h1>
            
            {/* Table of Contents / Anchors */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs bg-zinc-950/45 p-4 rounded-xl border border-zinc-900 text-zinc-400">
              <span className="font-semibold uppercase tracking-wider text-[10px] text-amber-500">Jump to:</span>
              <a href="#live-table" className="hover:text-amber-400 transition-colors">Live Table</a>
              <span className="text-zinc-800">|</span>
              <a href="#last-season" className="hover:text-amber-400 transition-colors">Last Season</a>
              <span className="text-zinc-800">|</span>
              <a href="#new-season" className="hover:text-amber-400 transition-colors">The New Season</a>
              <span className="text-zinc-800">|</span>
              <a href="#follow-india" className="hover:text-amber-400 transition-colors">How to Follow in India</a>
              <span className="text-zinc-800">|</span>
              <a href="#faqs" className="hover:text-amber-400 transition-colors">FAQs</a>
            </div>
          </div>
        </Reveal>

        {/* Introduction */}
        <Reveal yOffset={30}>
          <div className="prose prose-invert max-w-none prose-p:text-zinc-350 prose-p:leading-relaxed prose-p:font-light prose-p:text-base mb-12">
            <p>
              The wait ended in two senses for Arsenal. The club's twenty-two-year title drought finished in May — and in August they begin defending a Premier League crown for the first time since the Invincibles era. This page updates the live Premier League table throughout the 2026-27 season, bringing you the plots and subplots beyond the numbers.
            </p>
          </div>
        </Reveal>

        {/* Live Table Section */}
        <section id="live-table" className="mb-16 scroll-mt-24">
          <Reveal>
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Premier League Table 2026-27
              </h2>
            </div>
          </Reveal>
          
          <Reveal yOffset={35}>
            <div className="glass-card rounded-2xl p-6 border border-zinc-850 bg-zinc-950/20 mb-6">
              <div className="flex gap-4 items-start">
                <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 p-3 rounded-xl flex-shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-zinc-300 text-sm leading-relaxed font-light">
                    The live table will appear here once the 2026-27 season gets under way in August. It includes all 20 clubs, with positions, number of matches played, wins, draws, losses, goal difference and points up to the most recent gameweek.
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light mt-3">
                    Until then, the section below provides the conclusions of the last campaign, as a reminder of where teams stood before the new season began.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* How 2025-26 Finished Section */}
        <section id="last-season" className="mb-16 scroll-mt-24">
          <Reveal>
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-amber-500" />
                How 2025-26 Finished: Arsenal, At Last
              </h2>
            </div>
          </Reveal>

          <Reveal yOffset={30}>
            <div className="prose prose-invert max-w-none prose-p:text-zinc-350 prose-p:leading-relaxed prose-p:font-light mb-8">
              <p>
                Arsenal were crowned Premier League champions for the first time since 2004, finishing the 2025-26 season on 85 points (26 wins, 7 draws, 5 losses). The Gunners finally ended their long wait for the title after years of being consistently the best team in England without the necessary prize. The full final table, with European qualification and relegation spots, is kept here as a reference for the 2026-27 campaign.
              </p>
            </div>
          </Reveal>

          {/* Standings Table */}
          <Reveal yOffset={40}>
            <div className="glass-card rounded-2xl border border-zinc-850 bg-zinc-950/30 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-zinc-850 bg-zinc-900/50 text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">
                      <th className="py-4 px-4 text-center w-12">Pos</th>
                      <th className="py-4 px-4 min-w-[160px]">Club</th>
                      <th className="py-4 px-3 text-center">P</th>
                      <th className="py-4 px-3 text-center">W</th>
                      <th className="py-4 px-3 text-center">D</th>
                      <th className="py-4 px-3 text-center">L</th>
                      <th className="py-4 px-3 text-center">GD</th>
                      <th className="py-4 px-4 text-center font-bold text-amber-500">Pts</th>
                      <th className="py-4 px-4 hidden md:table-cell text-zinc-500">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900">
                    {standings2025_26.map((row) => {
                      const isCL = row.pos <= 4;
                      const isEL = row.pos === 5 || row.pos === 6;
                      const isECL = row.pos === 7;
                      const isRelegated = row.pos >= 18;

                      return (
                        <tr 
                          key={row.pos} 
                          className={`hover:bg-zinc-900/30 transition-colors ${
                            row.pos === 1 ? 'bg-amber-500/5 font-medium' : ''
                          }`}
                        >
                          <td className={`py-3.5 px-4 text-center font-bold ${
                            isCL ? 'text-amber-500' : isRelegated ? 'text-red-500' : 'text-zinc-400'
                          }`}>
                            {row.pos}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-white">
                            <div className="flex items-center gap-2">
                              {row.pos === 1 && <Trophy className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />}
                              {row.name}
                            </div>
                          </td>
                          <td className="py-3.5 px-3 text-center text-zinc-450">{row.p}</td>
                          <td className="py-3.5 px-3 text-center text-zinc-450">{row.w}</td>
                          <td className="py-3.5 px-3 text-center text-zinc-450">{row.d}</td>
                          <td className="py-3.5 px-3 text-center text-zinc-450">{row.l}</td>
                          <td className={`py-3.5 px-3 text-center font-semibold ${row.gd > 0 ? 'text-emerald-500' : row.gd < 0 ? 'text-red-500' : 'text-zinc-500'}`}>
                            {row.gd > 0 ? `+${row.gd}` : row.gd}
                          </td>
                          <td className="py-3.5 px-4 text-center font-extrabold text-amber-500">{row.pts}</td>
                          <td className="py-3.5 px-4 hidden md:table-cell text-[11px] text-zinc-500">
                            <span className={
                              isCL ? 'text-emerald-500/80 font-medium' :
                              isEL ? 'text-blue-400/80' :
                              isECL ? 'text-amber-500/80' :
                              isRelegated ? 'text-red-500/80' : ''
                            }>
                              {row.note || '-'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </section>

        {/* The New Season Section */}
        <section id="new-season" className="mb-16 scroll-mt-24">
          <Reveal>
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                The 2026-27 Season
              </h2>
            </div>
          </Reveal>

          <Reveal yOffset={30}>
            <div className="prose prose-invert max-w-none prose-p:text-zinc-350 prose-p:leading-relaxed prose-p:font-light">
              <p>
                Defending champions Arsenal return to action in mid-August, seeking back-to-back league titles for the first time since the 1930s. However, it is far from certain that they will manage to do so, with Manchester City and Liverpool also looking to challenge for the top spot. A number of promoted clubs will be aiming to avoid the drop back down to the EFL Championship too. The fixtures, talking points and title race are all detailed here, with updates to follow in the coming months. In addition, the summer transfer window is open now, with the winter window following in January — player arrivals and departures set to further shake up the table.
              </p>
            </div>
          </Reveal>

          {/* Internal Links box styled as Related Guides */}
          <Reveal yOffset={25}>
            <div className="mt-8 p-6 bg-zinc-950/40 rounded-2xl border border-zinc-900">
              <h4 className="text-white font-serif font-semibold text-sm mb-3 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-500" />
                Related Football Analytics & Guides
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/el-clasico/" className="text-amber-500 hover:text-amber-400 hover:underline transition-colors flex items-center gap-1">
                    • El Clasico Historical Matches & Analysis <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/messi-vs-ronaldo/" className="text-amber-500 hover:text-amber-400 hover:underline transition-colors flex items-center gap-1">
                    • Messi vs Ronaldo Career Insights & Stats <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/ballon-dor-winners/" className="text-amber-500 hover:text-amber-400 hover:underline transition-colors flex items-center gap-1">
                    • Ballon d'Or Winners List & Criteria <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Following the Premier League from India Section */}
        <section id="follow-india" className="mb-16 scroll-mt-24">
          <Reveal>
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-2">
                <Tv className="w-6 h-6 text-amber-500" />
                Following the Premier League from India
              </h2>
            </div>
          </Reveal>

          <Reveal yOffset={30}>
            <div className="prose prose-invert max-w-none prose-p:text-zinc-350 prose-p:leading-relaxed prose-p:font-light">
              <p>
                The Premier League fixtures are largely kind to Indian fans, with the majority of matches taking place on Saturdays and Sundays. The traditional Saturday 3pm UK kick-off time converts to 7:30 pm IST, while evening matches begin around 10:30 pm IST and finish between 1:00 am and 2:30 am IST. The Star/JioStar platforms have held Premier League rights in India in recent seasons; check listings again closer to the start of the new season in August, as football rights can change hands.
              </p>
            </div>
          </Reveal>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-16 scroll-mt-24">
          <Reveal>
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Premier League Table FAQs
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={idx} yOffset={25} delay={idx * 0.05}>
                  <div className="glass-card rounded-xl border border-zinc-850 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:text-amber-400 transition-colors"
                    >
                      <span className="font-semibold text-sm sm:text-base font-serif flex items-center gap-2">
                        <HelpCircle className="w-4.5 h-4.5 text-amber-500 flex-shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? <Minus className="w-4 h-4 text-amber-500" /> : <Plus className="w-4 h-4 text-amber-500" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-zinc-400 text-sm font-light leading-relaxed border-t border-zinc-900 bg-zinc-950/20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Last updated footer notes */}
        <Reveal>
          <div className="mt-12 pt-6 border-t border-zinc-900 text-center text-xs text-zinc-500 font-light flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Last updated: 14 July 2026</span>
            </div>
            <p>Live table from the opening matchweek; updated after every round. Standings per official Premier League records.</p>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
