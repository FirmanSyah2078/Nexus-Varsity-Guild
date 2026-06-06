interface UserProps {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}

export function MahasiswaDashboard({ user }: UserProps) {
  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in-down">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Halo, {user?.name || "Mahasiswa"}! 👋</h1>
        <p className="text-muted-foreground">Fakultas Teknologi Informasi - Nexus Varsity Guild</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 flex flex-col p-6 bg-card border border-border rounded-xl shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:shadow-glow-primary transition-shadow"></div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Pengumuman Komunitas</h2>
          <div className="p-4 rounded-lg bg-background border border-border/50 text-sm text-foreground-muted">
            <p className="mb-2"><strong className="text-info">Info:</strong> Jangan lupa sinkronisasi ulang akun Discord kamu jika ada perubahan kelas atau semester di sistem Sentinal.</p>
          </div>
        </div>

        <div className="col-span-1 flex flex-col p-6 bg-card border border-border rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-4">Aktivitas Hari Ini</h2>
          <div className="flex items-center justify-center h-32 rounded-lg bg-background border-2 border-dashed border-border/50 text-sm text-muted-foreground">
            Tidak ada jadwal aktif
          </div>
        </div>
      </div>
    </div>
  )
}