// src/app/(dashboard)/dashboard/page.tsx

import { AdminDashboard } from "@/components/dashboard/admin"
import { StaffDashboard } from "@/components/dashboard/staff"
import { DosenDashboard } from "@/components/dashboard/dosen"
import { MahasiswaDashboard } from "@/components/dashboard/mahasiswa"
import { TamuDashboard } from "@/components/dashboard/tamu"
import { UserDashboard } from "@/components/dashboard/user"

export default async function DashboardHomePage() {
  // =========================================================================
  // 💡 SIMULASI SESSION (MOCK DATA)
  // Karena backend belum jadi, ubah value "role" di bawah ini secara manual 
  // untuk melihat perubahan halaman.
  // Pilihan role: "admin" | "staff" | "mahasiswa" | "tamu" | "user"
  // =========================================================================
  
  const mockSession = {
    user: {
      id: "usr_12345",
      name: "Komandan NVI", // Ganti nama untuk ngetes sapaan
      email: "komandan@nexusvarsity.com",
      role: "mahasiswa",        // 👈 GANTI VALUE INI UNTUK TESTING UI
    }
  }

  // Tarik data user dari sesi (nanti kalau backend sudah ada,
  // ganti bagian ini dengan fungsi fetch ke database/session)
  const currentUser = mockSession.user

  // =========================================================================
  // 🔀 ROUTING SWITCHER BERDASARKAN ROLE
  // =========================================================================

  switch (currentUser.role) {
    case "admin":
      return <AdminDashboard user={currentUser} />

    case "staff":
      return <StaffDashboard user={currentUser} />

    case "mahasiswa":
      return <MahasiswaDashboard user={currentUser} />

    case "dosen":
      return <DosenDashboard user={currentUser} />

    case "tamu":
      return <TamuDashboard user={currentUser} />

    case "user":
    default:
      // Tampilan default/fallback jika role tidak dikenali atau masih "user" biasa
      // yang belum melengkapi biodata.
      return <UserDashboard user={currentUser} />
  }
}