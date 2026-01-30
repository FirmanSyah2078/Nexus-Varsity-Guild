import React from 'react';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navbar Fixed di atas */}
      <Navbar />
      
      {/* Main Content (Expand to fill space) */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}