import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react" // Pastikan import icon jika perlu

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Tombol Kembali */}
      <Link 
        href="/" 
        className="flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Kembali ke Beranda
      </Link>

      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight font-space">
          Masuk Akun
        </h1>
        <p className="text-sm text-muted-foreground">
          Masukkan email dan password untuk mengakses dashboard.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </label>
          <Input
            id="email"
            placeholder="nama@contoh.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium leading-none">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-indigo-500 hover:underline"
            >
              Lupa password?
            </Link>
          </div>
          <Input id="password" type="password" />
        </div>
        
        <Button className="w-full">
          Masuk
        </Button>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        Belum punya akun?{" "}
        <Link href="/register" className="underline hover:text-primary">
          Daftar sekarang
        </Link>
      </div>
    </div>
  )
}