interface UserProps {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}

export function UserDashboard({ user }: UserProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center px-4 animate-fade-in-down">
      <div className="flex flex-col items-center max-w-lg gap-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-warning/10 text-warning mb-2 shadow-[0_0_15px_rgba(var(--warning),0.2)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
        
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Akses Dibatasi, {user?.name}</h1>
          <p className="text-muted-foreground">Akun kamu berhasil dibuat, tetapi kami membutuhkan sedikit data tambahan untuk memverifikasi peranmu di dalam sistem NVI Sentinal.</p>
        </div>

        <div className="w-full flex flex-col p-6 bg-card border border-warning/50 rounded-xl shadow-lg mt-4">
          <h2 className="text-sm font-semibold text-warning uppercase tracking-wider mb-4">Status: Menunggu Biodata</h2>
          <button className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-primary transition-all duration-300">
            Lengkapi Profil Sekarang
          </button>
        </div>
      </div>
    </div>
  )
}