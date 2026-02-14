import { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  badgeText: string;
  badgeIcon: LucideIcon; // Tipe data khusus untuk Icon Lucide
  title: string;
  description: string;
}

export default function SectionTitle({
  badgeText,
  badgeIcon: Icon, // Rename jadi 'Icon' (huruf besar) agar bisa dipakai sebagai tag JSX
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-14 md:mb-20 text-center max-w-4xl mx-auto px-4">
      {/* 1. BADGE PILL */}
      <div className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md">
        <Icon className="mr-2 size-3 md:size-3.5 text-indigo-400" />
        <span className="font-space text-[10px] md:text-xs font-medium tracking-[0.25em] text-indigo-300 uppercase">
          {badgeText}
        </span>
      </div>

      {/* 2. MAIN TITLE */}
      <h2 className="font-space text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
        {title}
      </h2>

      {/* 3. DESCRIPTION */}
      <p className="font-onest text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}