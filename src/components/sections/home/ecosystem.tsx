//src/components/sections/home/ecosystem.tsx

import Image from "next/image";
import SectionTitle from "@/components/landing/title";
import { Cpu, Waypoints, Users, } from "lucide-react";


export default function EcosystemSection() {
  return (
    <section className="relative flex w-full min-h-screen flex-col items-center justify-center py-10 z-10 px-4 sm:px-6">

      {/* HEADER SECTION */}
      <SectionTitle
        badgeIcon={Waypoints}
        badgeText="Architecture"
        title="Integrated Environments"
        description="See how this ecosystem brings together disparate environments into a deep guild experience."
      />

      <div className="flex flex-col gap-16 md:gap-24 w-full max-w-7xl mx-auto">
        {/* ========================================================= */}
        {/* ITEM 1: NVG (Discord)                                     */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row items-stretch md:items-start gap-0 md:gap-6 lg:gap-12">
          {/* 1. IMAGE VISUAL */}
          {/* HP: Banner Tinggi (h-56), Order 1 */}
          {/* Tablet/Desktop: Aspect Video Normal, Order 2 */}
          <div className="relative w-full h-56 md:h-auto md:aspect-video md:w-1/2 lg:w-[60%] order-1 md:order-2">
            <div className="relative w-full h-full rounded-t-2xl rounded-b-none md:rounded-2xl overflow-hidden border border-white/10 border-b-0 md:border-b shadow-[0_0_50px_rgba(79,70,229,0.2)] bg-[#0f1115] group z-0">
              <Image
                src="/images/discord.png"
                alt="NVG Discord"
                fill
                className="object-cover object-top-left opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* GRADIENT FADE EXTREME (HP ONLY) */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#02040a] to-transparent z-10 md:hidden" />

              <div className="absolute inset-0 bg-linear-to-t from-[#02040a] via-transparent to-transparent opacity-40" />
            </div>
          </div>

          {/* 2. TEXT CARD */}
          {/* HP: Order 2, Negative Margin (-mt-12), Transparan Atas */}
          {/* Tablet/Desktop: Order 1, Margin Normal, Card Utuh */}
          <div className="w-full md:w-1/2 lg:w-[40%] order-2 md:order-1 relative z-10 -mt-12 md:mt-0">
            <div className="relative h-full p-5 pt-0 md:pt-5 rounded-b-2xl rounded-t-none md:rounded-2xl border border-white/10 border-t-0 md:border-t bg-transparent md:bg-white/5 md:backdrop-blur-xl md:shadow-[0_0_20px_rgba(79,70,229,0.1)] transition-all duration-500 group">
              {/* Background Tambahan Khusus HP (Biar teks kebaca di bawah) */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#02040a] rounded-b-2xl -z-10 md:hidden" />

              {/* HEADER FLEXIBLE */}
              <div className="flex flex-wrap items-end md:items-center justify-between pb-3 border-b border-white/5 mb-3 gap-2">
                <h3 className="font-space font-bold text-white group-hover:text-indigo-300 transition-colors truncate text-[clamp(1.5rem,5vw,1.25rem)] md:text-[clamp(1rem,1.8vw,1.25rem)] leading-tight drop-shadow-lg md:drop-shadow-none">
                  Nexus Varsity Guild
                </h3>
                <div className="shrink-0 flex items-center gap-1.5 px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
                  <Users className="size-2.5 lg:size-3 text-indigo-400" />
                  <span className="font-mono font-bold text-indigo-300 uppercase tracking-wider text-[clamp(0.5rem,0.8vw,0.625rem)]">
                    Community
                  </span>
                </div>
              </div>

              {/* BODY FLEXIBLE */}
              <p className="font-onest text-zinc-300 md:text-zinc-400 leading-relaxed text-justify mb-4 text-[clamp(0.85rem,1.1vw,0.875rem)] md:text-[clamp(0.75rem,1.1vw,0.875rem)]">
                A verified ecosystem designed for developers. NVG provides a
                structured environment for real-time collaboration, resource
                sharing, and peer-to-peer mentorship. Integrated directly with
                our Sentinel system for seamless verification.
              </p>

              {/* FOOTER BADGES FLEXIBLE */}
              <div className="flex flex-wrap gap-1.5">
                {["Voice Channels", "Role Mgmt", "Forums"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 font-medium text-zinc-400 hover:text-indigo-300 hover:border-indigo-500/30 transition-colors text-[clamp(0.6rem,0.9vw,0.625rem)] whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ITEM 2: NVI SENTINEL (Dashboard)                          */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row-reverse items-stretch md:items-start gap-0 md:gap-6 lg:gap-12">
          {/* 1. IMAGE VISUAL (BANNER MODE di HP) */}
          <div className="relative w-full h-56 md:h-auto md:aspect-video md:w-1/2 lg:w-[60%] order-1 md:order-2">
            <div className="relative w-full h-full rounded-t-2xl rounded-b-none md:rounded-2xl overflow-hidden border border-white/10 border-b-0 md:border-b shadow-[0_0_50px_rgba(6,182,212,0.2)] bg-[#0f1115] group z-0">
              <Image
                src="/images/dashboard.jpg"
                alt="NVI Sentinel"
                fill
                className="object-cover object-top-left opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* GRADIENT FADE EXTREME (HP ONLY) */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#02040a] to-transparent z-10 md:hidden" />

              <div className="absolute inset-0 bg-linear-to-t from-[#02040a] via-transparent to-transparent opacity-40" />
            </div>
          </div>

          {/* 2. TEXT CARD */}
          <div className="w-full md:w-1/2 lg:w-[40%] order-2 md:order-1 relative z-10 -mt-12 md:mt-0">
            <div className="relative h-full p-5 pt-0 md:pt-5 rounded-b-2xl rounded-t-none md:rounded-2xl border border-white/10 border-t-0 md:border-t bg-transparent md:bg-white/5 md:backdrop-blur-xl md:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-500 group">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#02040a] rounded-b-2xl -z-10 md:hidden" />

              {/* HEADER FLEXIBLE */}
              <div className="flex flex-wrap items-end md:items-center justify-between pb-3 border-b border-white/5 mb-3 gap-2">
                <h3 className="font-space font-bold text-white group-hover:text-cyan-300 transition-colors truncate text-[clamp(1.5rem,5vw,1.25rem)] md:text-[clamp(1rem,1.8vw,1.25rem)] leading-tight drop-shadow-lg md:drop-shadow-none">
                  NVI Sentinel
                </h3>
                <div className="shrink-0 flex items-center gap-1.5 px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md">
                  <Cpu className="size-2.5 lg:size-3 text-cyan-400" />
                  <span className="font-mono font-bold text-cyan-300 uppercase tracking-wider text-[clamp(0.5rem,0.8vw,0.625rem)]">
                    System
                  </span>
                </div>
              </div>

              {/* BODY FLEXIBLE */}
              <p className="font-onest text-zinc-300 md:text-zinc-400 leading-relaxed text-justify mb-4 text-[clamp(0.85rem,1.1vw,0.875rem)] md:text-[clamp(0.75rem,1.1vw,0.875rem)]">
                The central intelligence unit of the guild. NVI Sentinel
                automates user verification, tracks community engagement
                analytics, and manages moderation logs through a unified,
                high-performance web dashboard.
              </p>

              {/* FOOTER BADGES FLEXIBLE */}
              <div className="flex flex-wrap gap-1.5">
                {["Analytics", "Verification", "Bot Control"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 font-medium text-zinc-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors text-[clamp(0.6rem,0.9vw,0.625rem)] whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
