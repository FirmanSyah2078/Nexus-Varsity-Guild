"use client";

import HeroSection from "@/components/sections/home/hero";
import EcosystemSection from "@/components/sections/home/ecosystem";
import FeaturesSection from "@/components/sections/home/features";
import CodeShowcaseSection from "@/components/sections/home/showcase";
import TechArsenalSection from "@/components/sections/home/tech-arsenal";
import FaqSection from "@/components/sections/home/faq";
import LaunchSection from "@/components/sections/home/launch";
import GalaxyBackground from "@/components/galaxy";


export default function LandingPage() {
  return (
    <>
      {/* Container Utama: Hitam Pekat */}
      <div className="relative w-full min-h-screen bg-[#02040a] text-white overflow-x-hidden">

        {/* GLOBAL ATMOSPHERE & STARS */}
        <GalaxyBackground />

        {/* SECTION 1          */}
        <HeroSection />

        {/* SECTION 2          */}
        <EcosystemSection />

        {/* SECTION 3          */}
        <FeaturesSection />

        {/* SECTION 4          */}
        <CodeShowcaseSection />

        {/* SECTION 5          */}
        <TechArsenalSection />

        {/* SECTION 6          */}
        <FaqSection />
        
        {/* SECTION 7          */}
        <LaunchSection />
        
      </div>
    </>
  );
}
