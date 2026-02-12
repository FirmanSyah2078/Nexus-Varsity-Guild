"use client";
import React, { useState } from "react";
import SectionTitle from "@/components/landing/title";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  LayoutGrid, Layers, Users, Hammer, Zap, ShieldCheck, ChevronLeft, ChevronRight,
} from "lucide-react";

// ... [BAGIAN DATA FEATURES & TABS TETAP SAMA, JANGAN DIUBAH] ...
const FEATURES = [
  // ASSEMBLY (Social)
  {
    id: 1,
    category: "Assembly",
    title: "The Lounge",
    desc: "A 24/7 always-on voice channel designed for casual hangouts.",
    icon: Users,
  },
  {
    id: 2,
    category: "Assembly",
    title: "Welcoming Committee",
    desc: "Automated warm onboarding system for new members.",
    icon: Users,
  },
  {
    id: 3,
    category: "Assembly",
    title: "Ice Breaker Bot",
    desc: "Daily topic generator to spark conversations in general chat.",
    icon: Users,
  },
  {
    id: 4,
    category: "Assembly",
    title: "Member Spotlight",
    desc: "Weekly features showcasing active community members.",
    icon: Users,
  },
  // FORGE (Dev)
  {
    id: 5,
    category: "Forge",
    title: "Code Forum",
    desc: "Structured threads for debugging and code reviews.",
    icon: Hammer,
  },
  {
    id: 6,
    category: "Forge",
    title: "Career Pathway",
    desc: "Resources and mentorship to help build portfolios.",
    icon: Hammer,
  },
  {
    id: 7,
    category: "Forge",
    title: "Open Source",
    desc: "Contribute to community-led projects and earn badges.",
    icon: Hammer,
  },
  {
    id: 8,
    category: "Forge",
    title: "Snippet Library",
    desc: "A shared repository of useful code snippets.",
    icon: Hammer,
  },
  {
    id: 9,
    category: "Forge",
    title: "Dev Log",
    desc: "Track your progress and share daily updates.",
    icon: Hammer,
  },
  // FUSION (Fun)
  {
    id: 10,
    category: "Fusion",
    title: "Gaming Arena",
    desc: "Organized lobbies for competitive gaming and matchmaking.",
    icon: Zap,
  },
  {
    id: 11,
    category: "Fusion",
    title: "Jam Sessions",
    desc: "High-quality music bots and listening parties.",
    icon: Zap,
  },
  {
    id: 12,
    category: "Fusion",
    title: "Movie Night",
    desc: "Scheduled streaming events for community watch parties.",
    icon: Zap,
  },
  // STABILITY (System)
  {
    id: 13,
    category: "Stability",
    title: "NVI Sentinel",
    desc: "Central nervous system managing user data and permissions.",
    icon: ShieldCheck,
  },
  {
    id: 14,
    category: "Stability",
    title: "Identity Verify",
    desc: "Strict 'One Person, One Account' biometric-level logic.",
    icon: ShieldCheck,
  },
  {
    id: 15,
    category: "Stability",
    title: "Auto-Mod",
    desc: "AI-driven moderation to keep chats clean 24/7.",
    icon: ShieldCheck,
  },
];

const TABS = [
  { id: "All", label: "All Modules", icon: Layers },
  { id: "Assembly", label: "Assembly", icon: Users },
  { id: "Forge", label: "Forge", icon: Hammer },
  { id: "Fusion", label: "Fusion", icon: Zap },
  { id: "Stability", label: "Stability", icon: ShieldCheck },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: "tween", ease: "easeOut", duration: 0.5 } },
  exit: { y: -20, opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const filteredFeatures = activeTab === "All" ? FEATURES : FEATURES.filter((f) => f.category === activeTab);
  const totalPages = Math.ceil(filteredFeatures.length / ITEMS_PER_PAGE);
  const currentFeatures = filteredFeatures.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    // REVISI LAYOUT:
    // 1. Hapus min-h-screen -> Ganti py-24.
    // 2. Padding Pixels: px-4 md:px-16 lg:px-24 xl:px-32.
    <section className="relative flex w-full flex-col items-center justify-center py-24 z-10 px-4 md:px-16 lg:px-24 xl:px-32">

      {/* HEADER SECTION */}
      <SectionTitle
        badgeIcon={LayoutGrid}
        badgeText="System Capabilities"
        title="Engineered for Excellence"
        description="Explore the high-performance modules that power our ecosystem. From social dynamics to automated security, everything is built to elevate your experience."
      />

      {/* TAB NAVIGATION */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 w-full max-w-3xl">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentPage(1);
              }}
              className={`
                  relative group flex items-center justify-center
                  px-4 py-2 md:px-5 md:py-2.5 rounded-full border transition-all duration-300 outline-none
                  ${
                    isActive
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                      : "bg-white/5 border-white/10 text-zinc-400 hover:border-indigo-500/30 hover:bg-white/10 hover:text-white"
                  }
                `}
            >
              <div
                className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${isActive ? "w-auto opacity-100 mr-2" : "w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:mr-2"}`}
              >
                <Icon className="size-3.5 md:size-4" />
              </div>
              <span className="font-space text-xs md:text-sm font-medium tracking-wide">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* GRID CONTAINER */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          >
            {currentFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                className="group relative flex flex-col p-5 h-full min-h-45 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-300">
                    <feature.icon className="size-4 md:size-5" />
                  </div>
                  <span className="font-mono text-[10px] text-white/20 uppercase tracking-wider group-hover:text-indigo-400/50 transition-colors">
                    {feature.category}
                  </span>
                </div>

                <h3 className="font-space text-base md:text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="font-onest text-xs md:text-sm text-zinc-400 leading-relaxed text-justify">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1 text-zinc-600 hover:text-indigo-400 disabled:opacity-30 disabled:hover:text-zinc-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPage;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className="relative flex items-center justify-center h-4 outline-none group/dot"
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        width: isActive ? 32 : 6,
                        backgroundColor: isActive ? "#6366f1" : "#52525b",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="h-1.5 rounded-full group-hover/dot:bg-zinc-400 transition-colors"
                    />
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1 text-zinc-600 hover:text-indigo-400 disabled:opacity-30 disabled:hover:text-zinc-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}