import GalaxyBackground from "@/components/galaxy";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[#020617] p-4 md:p-8 overflow-hidden">
      {/* Background utama tetap konsisten dengan landing page */}
      <GalaxyBackground />

      {/* PENTING: max-w diganti ke 5xl agar Split Card (Kiri-Kanan)
          bisa melebar dengan sempurna dan tidak gepeng.
      */}
      <div className="relative z-10 w-full max-w-5xl flex justify-center items-center transition-all duration-500">
        {children}
      </div>

      {/* Dekorasi Tambahan: Noise Texture (Opsional untuk kesan mewah) */}
      <div className="absolute inset-0 z-1 opacity-[0.03] pointer-events-none bg-[url('/images/stardust.png')]" />
    </main>
  );
}