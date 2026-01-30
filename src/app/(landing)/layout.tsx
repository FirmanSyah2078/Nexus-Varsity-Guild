// src/app/(landing)/layout.tsx
import React from 'react';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar nempel di atas */}
      <Navbar />
      
      {/* Konten Halaman (Home/About) */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer nempel di bawah */}
      <Footer />
    </div>
  );
}