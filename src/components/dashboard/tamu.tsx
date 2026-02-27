interface UserProps {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}

export function TamuDashboard({ user }: UserProps) {
  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in-down">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Selamat Datang, {user?.name || "Tamu"}!</h1>
        <p className="text-muted-foreground">Akses Mahasiswa Tamu (Guest Access)</p>
      </div>

      <div className="flex flex-col p-6 bg-card border border-info/30 rounded-xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-info/10 blur-3xl rounded-full"></div>
        <h2 className="text-lg font-semibold text-info mb-2">Informasi Akses</h2>
        <p className="text-sm text-foreground-muted max-w-2xl leading-relaxed">
          Sebagai mahasiswa tamu dari universitas atau fakultas lain, akses kamu disesuaikan untuk event publik dan ruang diskusi terbuka di komunitas Discord kami. Beberapa fitur internal akademik sistem NVI mungkin tidak tersedia untuk peran ini.
        </p>
      </div>
    </div>
  )
}