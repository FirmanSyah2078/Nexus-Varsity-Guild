import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full py-24 md:py-32 lg:py-40 flex flex-col items-center text-center px-4 md:px-6 relative overflow-hidden">
        
        {/* Background Gradient Effect (Hiasan) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-400 bg-indigo-500/20 rounded-full blur-[100px] -z-10 opacity-50 dark:opacity-20" />

        {/* Badge Kecil */}
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
          System Online v1.0
        </div>

        {/* Main Headline */}
        <h1 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70 max-w-4xl">
          Sistem Verifikasi Terpadu <br className="hidden md:block" />
          Untuk Komunitas Digital
        </h1>

        {/* Sub Headline */}
        <p className="font-sans mt-6 max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          NVG Sentinel adalah garda terdepan manajemen data dan validasi anggota. 
          Cepat, aman, dan terintegrasi langsung dengan ekosistem Discord kami.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg" className="rounded-full px-8 font-medium">
              Masuk Dashboard
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Tentang Sistem
            </Button>
          </Link>
        </div>
      </section>

      {/* --- FEATURE SECTION --- */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50/50 dark:bg-zinc-900/20 border-y border-border/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 bg-background hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-500">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Validasi Otomatis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tidak ada lagi pengecekan manual. Sistem Sentinel memverifikasi data anggota secara real-time dengan akurasi tinggi.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 bg-background hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
                <Zap className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Respon Instan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dibangun di atas arsitektur Serverless. Bot Discord dan Web Dashboard merespon permintaan dalam hitungan milidetik.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 bg-background hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                <Globe className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Ekosistem Terpusat</h3>
              <p className="text-muted-foreground leading-relaxed">
                Satu akun untuk semua akses. Terintegrasi penuh dari Discord Role hingga akses Database khusus anggota.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- STATS / BOTTOM SECTION --- */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 className="font-space text-3xl font-bold tracking-tighter md:text-4xl">
              Siap Bergabung?
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Pastikan data kamu sudah terdaftar sebelum melakukan verifikasi di Discord.
            </p>
            <div className="pt-4">
               <Link href="/dashboard" className="text-indigo-500 hover:underline underline-offset-4">
                  Hubungi Admin jika ada kendala &rarr;
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}