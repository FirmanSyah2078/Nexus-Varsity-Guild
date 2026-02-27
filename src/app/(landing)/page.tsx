"use client";

import HeroSection from "@/components/landing/sections/home/hero";
import EcosystemSection from "@/components/landing/sections/home/ecosystem";
import FeaturesSection from "@/components/landing/sections/home/features";
import CodeShowcaseSection from "@/components/landing/sections/home/showcase";
import TechArsenalSection from "@/components/landing/sections/home/tech-arsenal";
import FaqSection from "@/components/landing/sections/home/faq";
import LaunchSection from "@/components/landing/sections/home/launch";
import GalaxyBackground from "@/components/galaxy";


export default function LandingPage() {
  return (
    <>
      {/* Container Utama: Hitam Pekat */}
      <div className="relative w-full overflow-x-hidden">

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
