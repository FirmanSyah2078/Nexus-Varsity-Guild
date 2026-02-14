"use client";

import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import SectionTitle from "@/components/landing/title";

// --- DATA DUMMY (Disesuaikan dengan Tema NVG) ---
const FAQS = [
  {
    question: "What exactly is Nexus Varsity Guild (NVG)?",
    answer: "NVG is an exclusive, decentralized ecosystem built specifically for developers. It combines real-time collaboration, resource sharing, and peer-to-peer mentorship within a verified environment."
  },
  {
    question: "Is there a fee to join the guild?",
    answer: "No, joining the Nexus is completely free. However, access is strictly regulated through our NVI Sentinel system to maintain a high signal-to-noise ratio in the community."
  },
  {
    question: "How does the NVI Sentinel verification work?",
    answer: "Our Sentinel system uses a 'One Person, One Account' logic. You will need to authenticate using your developer credentials (like GitHub or Discord) to ensure authenticity and prevent botting."
  },
  {
    question: "Do I need to be a senior developer to join?",
    answer: "Not at all. The 'Forge' modules are specifically designed to help junior developers and students build their portfolios through mentorship, code reviews, and open-source contributions."
  },
  {
    question: "Can I contribute to the core NVG architecture?",
    answer: "Absolutely. We encourage active members to contribute to our open-source repositories. High-impact contributors are recognized with special roles, clearance levels, and badges within the ecosystem."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative flex w-full flex-col items-center justify-center py-24 z-10 px-4 md:px-16 lg:px-24 xl:px-32">
      
      {/* GLOW BACKGROUND LOKAL */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl h-[50%] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* HEADER MENGGUNAKAN KOMPONEN SECTION TITLE */}
      <SectionTitle
        badgeIcon={MessageSquare}
        badgeText="FAQ's"
        title="Frequently Asked Questions"
        description="Clear your doubts. Here are the answers to the most common questions about the Nexus ecosystem and initialization process."
      />

      {/* ACCORDION CONTAINER */}
      {/* PERUBAHAN: max-w-2xl (Dipersempit) dan mt-8 (Jarak dijauhkan sedikit dari deskripsi) */}
      <div className="w-full max-w-2xl mx-auto mt-6 md:mt-8">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              // PERUBAHAN: py-4 (Jarak atas bawah dikecilkan agar lebih compact)
              className="group border-b border-white/10 py-4 cursor-pointer transition-colors duration-300 hover:border-indigo-500/50 w-full"
            >
              {/* QUESTION HEADER */}
              <div className="flex items-center justify-between gap-4">
                {/* PERUBAHAN: Ukuran Font dikecilkan jadi text-sm md:text-base */}
                <h3 className={`font-space text-sm md:text-base font-medium transition-colors duration-300 ${
                  isOpen ? "text-indigo-300" : "text-white group-hover:text-indigo-200"
                }`}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`shrink-0 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
                    isOpen ? "rotate-180 text-indigo-400" : "text-zinc-500 group-hover:text-indigo-300"
                  }`}
                  size={18} // Ukuran icon chevron juga sedikit disesuaikan
                />
              </div>

              {/* ANSWER BODY (SMOOTH GRID ANIMATION) */}
              <div
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-3 md:mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  {/* PERUBAHAN: Teks jawaban difix ke text-sm */}
                  <p className="font-onest text-sm text-zinc-400 leading-relaxed pr-8 md:pr-10 pb-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}