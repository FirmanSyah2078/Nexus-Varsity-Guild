"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    const styles = Array.from({ length: number }).map(() => ({
      "--angle": `${angle}deg`,
      // PERBAIKAN 1: Variasi Top agar tidak muncul segaris lurus
      top: Math.floor(Math.random() * -20) + "%", 
      
      // PERBAIKAN 2 (SOLUSI UTAMA):
      // Rentang Left diperluas dari -50% sampai 150%.
      // Ini memastikan meteor menutupi seluruh layar dari ujung ke ujung.
      left: Math.floor(Math.random() * 200 - 50) + "%", 
      
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
      animationDuration: `${Math.random() * (maxDuration - minDuration) + minDuration}s`,
    }))

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style as React.CSSProperties}
          className={cn(
            // Pastikan class rotate dan shadow benar
            "pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          {/* Inner Tail */}
          <div 
            className="animate-meteor pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-linear-to-r from-white to-transparent" 
            style={{
                animationDuration: style.animationDuration as string,
                animationDelay: style.animationDelay as string
            }}
          />
        </span>
      ))}
    </>
  )
}