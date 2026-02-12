"use client";

import HeroSection from "@/components/sections/home/hero";
import EcosystemSection from "@/components/sections/home/ecosystem";
import FeaturesSection from "@/components/sections/home/features";
import CodeShowcaseSection from "@/components/sections/home/showcase";
import TechArsenalSection from "@/components/sections/home/tech-arsenal";
import GalaxyBackground from "@/components/galaxy";


export default function LandingPage() {
  return (
    <>
      {/* Container Utama: Hitam Pekat */}
      <div className="relative w-full min-h-screen bg-[#02040a] text-white selection:bg-indigo-500/30 overflow-x-hidden">

        {/* GLOBAL ATMOSPHERE & STARS */}
        <GalaxyBackground />

        {/* SECTION 1: HERO (CONTENT ONLY - BACKGROUND REMOVED) */}
        <HeroSection />

        {/* SECTION 2: THE ECOSYSTEM (NVG & NVI) */}
        <EcosystemSection />

        {/* SECTION 3: FEATURES & CAPABILITIES */}
        <FeaturesSection />

        {/* SECTION 4 */}
        <CodeShowcaseSection />

        {/* SECTION 5 */}
        <TechArsenalSection />

        {/* SECTION 6 */}
        <section className="relative flex w-full h-screen flex-col items-center justify-center z-10">
          <div className="relative z-10 text-center opacity-40">
            <span className="font-space text-xs tracking-[0.5em] text-slate-500 uppercase">
              Section 06
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
