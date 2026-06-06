"use client"; // <--- JADIKAN CLIENT COMPONENT AGAR BISA BACA CONTEXT

import { useDashboard } from "@/logic/dashboard/system/context"

// Import komponen UI
import { AdminDashboard } from "@/components/dashboard/home/admin"
import { StaffDashboard } from "@/components/dashboard/home/staff"
import { DosenDashboard } from "@/components/dashboard/home/dosen"
import { MahasiswaDashboard } from "@/components/dashboard/home/mahasiswa"
import { TamuDashboard } from "@/components/dashboard/home/tamu"
import { UserDashboard } from "@/components/dashboard/home/user"

export default function DashboardHomePage() {
  // 1. Ambil state role aktif dari Jantung Aplikasi (Context)
  const { activeRole } = useDashboard();

  // 2. Data User Dasar
  const baseUser = {
    id: "usr_12345",
    name: "Komandan NVI",
    email: "komandan@nexusvarsity.com",
  };

  // 3. LOGIKA ROUTING DINAMIS BERDASARKAN NAMA ROLE DARI CONTEXT
  // Kita mapping nama role elegan kita ("Sovereign") ke komponen UI yang sesuai
  switch (activeRole.name) {
    case "Sovereign":
      return <AdminDashboard user={{ ...baseUser, role: "admin" }} />

    case "Catalyst":
      return <StaffDashboard user={{ ...baseUser, role: "staff" }} />

    case "Vanguard":
      return <MahasiswaDashboard user={{ ...baseUser, role: "mahasiswa" }} />

    case "Praeceptor":
      return <DosenDashboard user={{ ...baseUser, role: "dosen" }} />

    case "Wayfarer":
      return <TamuDashboard user={{ ...baseUser, role: "tamu" }} />

    default:
      // Fallback jika belum verifikasi biodata
      return <UserDashboard user={{ ...baseUser, role: "user" }} />
  }
}