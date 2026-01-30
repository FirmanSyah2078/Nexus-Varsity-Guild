import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* --- HERO SECTION --- */}
      {/* Padding DIKURANGI AGAR NAIK KE ATAS: py-12 (HP), md:py-20, lg:py-24 */}
      <section className="relative flex w-full flex-col items-center overflow-hidden px-4 py-12 text-center md:px-6 md:py-20 lg:py-24">
        
        {/* Background Gradient Effect */}
        <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px] opacity-50 dark:opacity-20" />

        {/* Badge Kecil */}
        <div className="mb-6 inline-flex items-center rounded-full border border-transparent bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-indigo-500"></span>
          System Online v1.0
        </div>

        {/* Main Headline (Font Size Tetap Sesuai Pilihanmu) */}
        <h1 className="max-w-4xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text font-space text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Sistem Verifikasi Terpadu <br className="hidden md:block" />
          Untuk Komunitas Digital
        </h1>

        {/* Sub Headline */}
        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8 md:text-xl">
          NVG Sentinel adalah garda terdepan manajemen data dan validasi anggota. 
          Cepat, aman, dan terintegrasi langsung dengan ekosistem Discord kami.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 font-medium">
              Masuk Dashboard
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
          <Link href="/about" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8">
              Tentang Sistem
            </Button>
          </Link>
        </div>
      </section>

      {/* --- FEATURE SECTION --- */}
      <section className="w-full border-y border-border/40 bg-zinc-50/50 py-12 dark:bg-zinc-900/20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="group flex flex-col items-start space-y-4 rounded-xl border bg-background p-6 hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Validasi Otomatis</h3>
              <p className="leading-relaxed text-muted-foreground">
                Tidak ada lagi pengecekan manual. Sistem Sentinel memverifikasi data anggota secara real-time dengan akurasi tinggi.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group flex flex-col items-start space-y-4 rounded-xl border bg-background p-6 hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Zap className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Respon Instan</h3>
              <p className="leading-relaxed text-muted-foreground">
                Dibangun di atas arsitektur Serverless. Bot Discord dan Web Dashboard merespon permintaan dalam hitungan milidetik.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group flex flex-col items-start space-y-4 rounded-xl border bg-background p-6 hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg bg-blue-500/10 p-3 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Globe className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Ekosistem Terpusat</h3>
              <p className="leading-relaxed text-muted-foreground">
                Satu akun untuk semua akses. Terintegrasi penuh dari Discord Role hingga akses Database khusus anggota.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- STATS / BOTTOM SECTION --- */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 className="font-space text-3xl font-bold tracking-tighter md:text-4xl">
              Siap Bergabung?
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Pastikan data kamu sudah terdaftar sebelum melakukan verifikasi di Discord.
            </p>
            <div className="pt-4">
               <Link href="/dashboard" className="text-indigo-500 underline-offset-4 hover:underline">
                  Hubungi Admin jika ada kendala &rarr;
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}