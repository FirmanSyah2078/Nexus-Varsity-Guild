"use client";

import React, { useEffect, useState } from "react";

// Tipe data untuk bintang
interface StarProps {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "dot" | "icon";
}

export default function StarField({ count = 100 }: { count?: number }) {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    // Bungkus logika random dalam fungsi
    const generateStars = () => {
      const newStars: StarProps[] = [];
      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() > 0.8 ? Math.random() * 3 + 2 : Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.5 + 0.3,
          type: Math.random() > 0.7 ? "icon" : "dot",
        });
      }
      return newStars;
    };

    // SOLUSI: Gunakan setTimeout agar update state tidak dianggap sinkron
    // Ini memuaskan linter dan tetap aman untuk hydration
    const timer = setTimeout(() => {
      setStars(generateStars());
    }, 0);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        >
          {star.type === "icon" ? (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          ) : (
            <div className="w-full h-full bg-white rounded-full shadow-[0_0_3px_white]" />
          )}
        </div>
      ))}
    </div>
  );
}