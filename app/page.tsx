'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, TrendingUp, Headphones, Zap, Check, Star, Lock, Award, ArrowRight,
  MessageSquare, HelpCircle, Plus, Minus, Trophy, Activity
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Trusted since 2018' },
  { value: '60K+', label: 'Events / Month', desc: 'Live sports & games' },
  { value: '24/7', label: 'Support Speed', desc: 'Average response < 1m' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL, International matches, T20 leagues with competitive odds and real-time markets.", icon: "🏏" },
  { title: "Football Leagues", desc: "Bet on Premier League, Champions League, La Liga, and Indian Super League events.", icon: "⚽" },
  { title: "Live Casino", desc: "Enjoy live dealer streams of Teen Patti, Andar Bahar, Roulette, and Poker from home.", icon: "🃏" },
  { title: "Tennis Matches", desc: "Place real-time bets on Grand Slams, ATP tour, and WTA tour tournaments.", icon: "🎾" },
  { title: "Virtual Sports", desc: "Fast-paced digital cricket, football and racing simulations available 24 hours a day.", icon: "🎮" }
];

const features = [
  { title: "Secure Payments", desc: "UPI, GPay, Paytm, PhonePe, and local bank transfers with 256-bit encryption.", icon: Shield },
  { title: "Fast Payouts", desc: "Direct bank transfer withdrawals processed in 5-10 minutes flat.", icon: Zap },
  { title: "Data Insights", desc: "Free prediction models, player stats, and historical head-to-head analysis.", icon: TrendingUp },
  { title: "24/7 WhatsApp help", desc: "Dedicated personal relationship managers to assist you instantly.", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "Withdrawal credited within 5 minutes! Best platform I've used.", rating: 5 },
  { name: "Priya K.", location: "Delhi", comment: "Got my ID the same day. Super smooth process and amazing support team!", rating: 5 },
  { name: "Vikram M.", location: "Bangalore", comment: "IPL betting experience was incredible. Real-time updates and fast payouts.", rating: 5 },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine platform. I trust Mahadev Book for all my betting.", rating: 5 },
  { name: "Suresh P.", location: "Hyderabad", comment: "Best customer service! They resolved my issue in minutes via WhatsApp.", rating: 5 },
  { name: "Riya N.", location: "Chennai", comment: "Mujhe bahut accha experience mila. Payout fast aur secure hai.", rating: 5 }
];

const trustPoints = [
  { title: "Expertise", desc: "Built by sports & gaming veterans with 15+ years of proven innovation.", icon: Award },
  { title: "Experience", desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions.", icon: Check },
  { title: "Authority", desc: "Recognized as India's leading betting platform by top industry awards.", icon: Shield },
  { title: "Trust", desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs.", icon: Lock }
];

const faqs = [
  { q: "What is Mahadev Book Online Betting ID?", a: "The Mahadev Book Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience." },
  { q: "How does Mahadev Book work?", a: "Mahadev Book acts as a trusted aggregator. Once you request an ID via WhatsApp, our support agents set up your credentials. You add funds via UPI or bank transfer, receive your betting chips, and log in to the official exchange site. Your winnings can be requested via WhatsApp and are transferred directly to your bank account." },
  { q: "How do I register for a new Online Betting ID?", a: "Simply click on any 'Get ID' button to open a chat with our verified agent on WhatsApp. Send a request, provide basic details (name, contact), choose your deposit amount, and your ID will be generated in less than 5 minutes." },
  { q: "What games can I play with my Mahadev Book ID?", a: "You can bet on all major sports including Cricket (IPL, World Cup, Test matches), Football (Premier League, UEFA), Tennis, and E-sports. You also get access to classic Indian card games like Teen Patti, Andar Bahar, and live casinos." },
  { q: "How do I deposit money into my Mahadev Book account?", a: "Depositing is quick and secure. Our agents will provide verified UPI IDs, GPay details, or bank accounts. Once you make the payment and send a screenshot, your betting chips will be instantly credited to your ID." },
  { q: "How do I withdraw my winnings?", a: "Withdrawals are available 24/7. Text your WhatsApp agent with your ID username and the amount you want to withdraw. Provide your UPI ID or bank account details, and the funds will be transferred to you in 5 to 10 minutes." },
  { q: "Is Mahadev Book legal in India?", a: "Mahadev Book operates in a legal grey area. Online betting is governed by state-specific laws in India. While there is no federal law banning online betting platforms hosted outside India, some states have their own restrictions. We advise users to check local regulations." },
  { q: "Is Mahadev Book safe and trusted?", a: "Yes. With over 1.2 million active users and millions of completed transactions since 2018, Mahadev Book is widely regarded as India's most stable and secure online betting bookmaker." }
];

const tickerItems = [
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS!"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/918872189471";

  return (
    <div className="relative min-h-screen bg-[#060010] text-fuchsia-50 font-sans selection:bg-fuchsia-500/40">
      {/* Brutalist Top Nav */}
      <nav className="w-full border-b-[3px] border-fuchsia-900 bg-[#060010] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="font-black text-2xl tracking-tighter text-white uppercase">MAHADEV<span className="text-fuchsia-500 bg-fuchsia-500/10 px-2 ml-1 rounded">BOOK</span></div>
        <a href={whatsappUrl} className="bg-fuchsia-600 text-white font-bold px-6 py-2 hover:bg-fuchsia-500 transition-colors uppercase tracking-widest text-sm shadow-[4px_4px_0_0_rgba(217,70,239,0.3)]">Get ID</a>
      </nav>

      {/* Hero - Neo Brutalism & Diagonal Elements */}
      <section className="relative px-6 py-20 lg:py-32 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-fuchsia-600 rounded-full blur-[150px] opacity-20"></div>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-block border-[2px] border-fuchsia-500/50 text-fuchsia-400 font-black px-4 py-1 mb-6 uppercase tracking-widest text-xs">No.1 Betting Platform</div>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              BET <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-600">SMART.</span><br/> WIN BIG.
            </h1>
            <p className="text-zinc-400 text-lg mb-10 max-w-lg border-l-4 border-fuchsia-600 pl-6 py-2">
              The ultimate betting exchange. With instant payouts and 60,000+ live events, the odds are finally in your favor.
            </p>
            <div className="flex gap-4">
              <a href={whatsappUrl} className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black px-8 py-4 uppercase tracking-widest flex items-center gap-3 shadow-[6px_6px_0_0_rgba(107,33,168,0.5)] transition-all active:translate-y-1 active:shadow-[2px_2px_0_0_rgba(107,33,168,0.5)]">
                <MessageSquare className="w-6 h-6"/> Join Now
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 z-10">
            {stats.map((s, i) => (
              <div key={i} className={`border-[3px] border-fuchsia-900/50 bg-[#0c001f] p-6 shadow-[8px_8px_0_0_rgba(217,70,239,0.15)] flex justify-between items-center ${i===1?'md:translate-x-8':''}`}>
                <div>
                  <div className="font-bold text-lg uppercase tracking-wide">{s.label}</div>
                  <div className="text-zinc-500 text-sm">{s.desc}</div>
                </div>
                <div className="text-4xl font-black text-fuchsia-400">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker - Diagonal stripe */}
      <div className="bg-fuchsia-600 text-black py-4 -rotate-1 scale-110 shadow-2xl relative z-20 my-10 border-y-[3px] border-black">
        <div className="flex gap-10 whitespace-nowrap animate-ticker font-black text-lg tracking-widest uppercase">
          {[...tickerItems, ...tickerItems].map((item, idx) => <span key={idx}>{item}</span>)}
        </div>
      </div>

      {/* About & Trust */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-8 border-b-4 border-fuchsia-600 inline-block pb-2">ABOUT MAHADEV</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Mahadev Book operates as a trusted aggregator. With one simple WhatsApp message, you unlock an entire ecosystem of live betting, premium sportsbooks, and high-stakes casino games. We guarantee secure payments and rapid withdrawals.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((tp, i) => (
                <div key={i} className="bg-[#120524] p-5 border-l-4 border-fuchsia-500">
                  <tp.icon className="w-8 h-8 text-fuchsia-400 mb-3" />
                  <div className="font-bold mb-1">{tp.title}</div>
                  <div className="text-xs text-zinc-500">{tp.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#120524] border-[3px] border-fuchsia-900/50 p-8 shadow-[12px_12px_0_0_rgba(217,70,239,0.15)]">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-wide">Platform Features</h2>
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="bg-[#060010] p-3 border border-fuchsia-500/30 text-fuchsia-400 shadow-[4px_4px_0_0_rgba(217,70,239,0.2)]"><f.icon className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                    <p className="text-sm text-zinc-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Games List Format (Horizontal Wide Cards) */}
      <section className="py-24 bg-[#120524] px-6 border-y-[3px] border-fuchsia-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-black mb-16 text-center tracking-tighter">OUR MARKETS</h2>
          <div className="flex flex-col gap-6">
            {games.map((g, i) => (
              <div key={i} className="group flex flex-col md:flex-row items-center gap-6 bg-[#060010] p-6 border-[2px] border-fuchsia-900/40 hover:border-fuchsia-500 transition-colors shadow-[6px_6px_0_0_rgba(0,0,0,0.5)]">
                 <div className="w-24 h-24 bg-fuchsia-900/20 flex items-center justify-center text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                   {g.icon}
                 </div>
                 <div className="flex-grow text-center md:text-left">
                   <h3 className="text-2xl font-bold mb-2 uppercase">{g.title}</h3>
                   <p className="text-zinc-400">{g.desc}</p>
                 </div>
                 <div className="flex-shrink-0 mt-4 md:mt-0">
                   <a href={whatsappUrl} className="font-black text-fuchsia-400 hover:text-fuchsia-300 uppercase tracking-widest text-sm flex items-center gap-2">Play Now <ArrowRight className="w-4 h-4"/></a>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-16 tracking-tighter border-b-4 border-fuchsia-600 inline-block pb-2">THE WINNERS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-[#120524] border border-fuchsia-900/50 p-8 shadow-[6px_6px_0_0_rgba(217,70,239,0.1)] relative">
              <div className="absolute top-6 right-6 text-fuchsia-900 opacity-50"><MessageSquare className="w-12 h-12 fill-current"/></div>
              <div className="flex text-fuchsia-500 mb-6 relative z-10">
                {[...Array(rev.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current"/>)}
              </div>
              <p className="text-zinc-300 text-lg italic mb-6 relative z-10">"{rev.comment}"</p>
              <div className="border-t border-fuchsia-900/50 pt-4 relative z-10">
                <div className="font-bold text-white uppercase tracking-wider">{rev.name}</div>
                <div className="text-sm text-fuchsia-500 font-bold">{rev.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neo Brutalist FAQ */}
      <section className="py-24 px-6 bg-fuchsia-900/10 border-t-[3px] border-fuchsia-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center tracking-tighter">F.A.Q</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-[#060010] border-[2px] border-fuchsia-900/50 shadow-[4px_4px_0_0_rgba(217,70,239,0.2)]">
                <button onClick={() => setOpenFaq(openFaq===i?null:i)} className="w-full p-6 text-left flex justify-between items-center text-white font-bold text-lg hover:bg-fuchsia-900/20">
                  <span className="pr-4">{f.q}</span>
                  {openFaq === i ? <Minus className="w-6 h-6 text-fuchsia-500 flex-shrink-0"/> : <Plus className="w-6 h-6 text-fuchsia-500 flex-shrink-0"/>}
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-zinc-400 text-base leading-relaxed border-t border-fuchsia-900/50 pt-4 bg-[#0a001a]">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
