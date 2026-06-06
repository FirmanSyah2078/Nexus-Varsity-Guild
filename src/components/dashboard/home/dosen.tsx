interface UserProps {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}

export function DosenDashboard({ user }: UserProps) {
  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in-down">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Panel Pengajar</h1>
        <p className="text-muted-foreground">Selamat datang, {user?.name}. Ringkasan jadwal perkuliahan dan bimbingan Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col p-6 bg-card text-card-foreground border border-border rounded-xl shadow-sm hover:border-primary/50 transition-colors">
          <span className="text-sm font-medium text-muted-foreground">Kelas Aktif</span>
          <span className="text-3xl font-bold text-primary mt-2">4</span>
        </div>
        <div className="flex flex-col p-6 bg-card text-card-foreground border border-border rounded-xl shadow-sm hover:border-accent/50 transition-colors">
          <span className="text-sm font-medium text-muted-foreground">Mahasiswa Bimbingan</span>
          <span className="text-3xl font-bold text-accent mt-2">12</span>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col p-6 bg-card border border-border rounded-xl shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-success group-hover:shadow-glow-primary transition-shadow"></div>
          <h2 className="text-lg font-semibold text-foreground mb-1">Kuliah Terdekat</h2>
          <p className="text-sm text-success">Rekayasa Perangkat Lunak (RPL) - Kelas A</p>
          <span className="text-xs text-muted-foreground mt-2">10:00 WIB • Ruang Lab Komputer 2</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 bg-card border border-border rounded-xl min-h-62.5">
        <h2 className="text-lg font-semibold text-foreground mb-4">Pengajuan Bimbingan Terbaru</h2>
        <div className="flex items-center justify-center h-full text-muted-foreground border-2 border-dashed border-border/50 rounded-lg bg-background/50">
          Belum ada jadwal bimbingan yang diajukan.
        </div>
      </div>
    </div>
  )
}