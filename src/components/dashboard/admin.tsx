interface UserProps {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}

export function AdminDashboard({ user }: UserProps) {
  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in-down">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Sistem Komando</h1>
        <p className="text-muted-foreground">Selamat datang kembali, Admin {user?.name || "NVI"}. Berikut status jaringan Sentinal hari ini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col p-6 bg-card text-card-foreground border border-border rounded-xl shadow-sm hover:border-primary/50 transition-colors">
          <span className="text-sm font-medium text-muted-foreground">Total Anggota Aktif</span>
          <span className="text-3xl font-bold text-primary mt-2">1,420</span>
        </div>
        <div className="flex flex-col p-6 bg-card text-card-foreground border border-border rounded-xl shadow-sm hover:border-warning/50 transition-colors">
          <span className="text-sm font-medium text-muted-foreground">Menunggu Verifikasi</span>
          <span className="text-3xl font-bold text-warning mt-2">24</span>
        </div>
        <div className="flex flex-col p-6 bg-card text-card-foreground border border-border rounded-xl shadow-sm hover:shadow-glow-primary transition-all duration-300">
          <span className="text-sm font-medium text-muted-foreground">Status Server NVG</span>
          <span className="text-3xl font-bold text-success mt-2">Optimal</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 bg-card border border-border rounded-xl min-h-75">
        <h2 className="text-lg font-semibold text-foreground mb-4">Log Aktivitas Sistem</h2>
        <div className="flex items-center justify-center h-full text-muted-foreground border-2 border-dashed border-border/50 rounded-lg bg-background/50">
          Tabel log akan dimuat di sini...
        </div>
      </div>
    </div>
  )
}