interface UserProps {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}

export function StaffDashboard({ user }: UserProps) {
  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in-down">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Ruang Staf</h1>
        <p className="text-muted-foreground">Halo {user?.name}, pantau antrean verifikasi dan kelola data mahasiswa TI hari ini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col p-6 bg-card border border-border rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Verifikasi Tertunda</h2>
            <span className="px-2 py-1 text-xs font-medium rounded-md bg-warning/10 text-warning">Aksi Diperlukan</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Ada 24 pengguna baru yang menunggu verifikasi NIM dan sinkronisasi Discord.</p>
          <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-primary transition-all">Tinjau Antrean</button>
        </div>

        <div className="flex flex-col p-6 bg-card border border-border rounded-xl">
          <h2 className="text-lg font-semibold text-foreground mb-4">Jadwal Terdekat</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center p-3 rounded-lg bg-background border border-border">
              <span className="text-sm font-medium text-foreground">Rapat Evaluasi Himaprodi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}