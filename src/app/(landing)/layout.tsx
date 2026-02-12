// src/app/(landing)/layout.tsx
import React from 'react';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import SmoothScroller from '@/components/smooth-scroller'; // Import wrapper tadi

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroller>
      <div className="flex min-h-screen flex-col bg-background">
        {/* Navbar Fixed di atas */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroller>
  );
}