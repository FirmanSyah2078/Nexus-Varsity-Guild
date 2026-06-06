"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  // 1. Variabel 'themes' dihapus karena tidak dipakai
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mencegah Hydration Mismatch
  useEffect(() => {
    // 2. Memberi tahu ESLint untuk mengabaikan aturan khusus di baris bawah ini
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex gap-2 p-2 bg-card border border-border rounded-lg shadow-xl">
      <Button 
        variant={theme === "light" ? "default" : "outline"} 
        size="sm" 
        onClick={() => setTheme("light")}
      >
        Light
      </Button>
      
      <Button 
        variant={theme === "dark" ? "default" : "outline"} 
        size="sm" 
        onClick={() => setTheme("dark")}
      >
        Dark
      </Button>
      
      <Button 
        variant={theme === "navy" ? "default" : "outline"} 
        size="sm" 
        onClick={() => setTheme("navy")}
      >
        Navy
      </Button>

      <Button 
        variant={theme === "system" ? "default" : "outline"} 
        size="sm" 
        onClick={() => setTheme("system")}
      >
        System
      </Button>
    </div>
  );
}