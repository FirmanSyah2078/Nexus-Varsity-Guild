import {
  BookOpen,
  Frame,
  SquareTerminal,
  Database,
  Users,
  FileText,
  Settings,
  Calendar,
  GraduationCap,
  LifeBuoy,
  Sprout,
  Compass,
  Flame,
  Feather,
  Workflow,
  ShieldAlert,
} from "lucide-react";
import { type NavItemType } from "@/components/dashboard/nav-group";

// TAMBAHAN: Fungsi Pintar Pencari Breadcrumb Otomatis
export function getActiveBreadcrumb(pathname: string, roleName: string) {
  const menus = roleMenus[roleName] || roleMenus["Initiate"];

  for (const group of menus) {
    for (const item of group.items) {
      // Cek apakah menu utama cocok dengan URL
      if (item.url === pathname) {
        return { label: group.label, title: item.title };
      }
      // Cek apakah sub-menu cocok dengan URL
      if (item.items) {
        for (const sub of item.items) {
          if (sub.url === pathname) {
            return {
              label: group.label,
              title: item.title,
              subTitle: sub.title,
            };
          }
        }
      }
    }
  }

  // Jika tidak ada yang cocok (misal 404 atau belum diatur), kembalikan default
  return { label: "Sistem", title: "Menunggu..." };
}

// Export data Role agar seragam dengan Context
export const systemRoles = [
  { name: "Initiate", logo: Sprout, plan: "Unverified" },      // User
  { name: "Vanguard", logo: Flame, plan: "Standard" },         // Mahasiswa
  { name: "Wayfarer", logo: Compass, plan: "Restricted" },     // Tamu
  { name: "Praeceptor", logo: Feather, plan: "Privileged" },   // Dosen
  { name: "Catalyst", logo: Workflow, plan: "Elevated" },      // Staff
  { name: "Sovereign", logo: ShieldAlert, plan: "Absolute" },  // Admin
];

// Mapping Menu berdasarkan Nama Role
export const roleMenus: Record<
  string,
  { label: string; items: NavItemType[] }[]
> = {
  // MENU KHUSUS UNTUK USER BARU
  Initiate: [
    {
      label: "Akun Baru",
      items: [
        {
          title: "Home",
          url: "/dashboard",
          icon: SquareTerminal,
          variant: "default",
        },
      ],
    },
  ],
  Sovereign: [
    {
      label: "Platform",
      items: [
        {
          title: "Home",
          url: "/dashboard",
          icon: SquareTerminal,
          variant: "default",
        },
        {
          title: "Database",
          url: "#",
          icon: Database,
          variant: "collapsible",
          items: [
            { title: "Mahasiswa", url: "#" },
            { title: "Dosen", url: "#" },
            { title: "Staff", url: "#" },
          ],
        },
        { title: "System Logs", url: "#", icon: FileText, variant: "default" },
        { title: "Bot Config", url: "#", icon: Settings, variant: "default" },
      ],
    },
  ],
  Praeceptor: [
    {
      label: "Platform",
      items: [
        {
          title: "Home",
          url: "/dashboard",
          icon: SquareTerminal,
          variant: "default",
        },
        {
          title: "Kelas Online",
          url: "#",
          icon: GraduationCap,
          variant: "default",
        },
        { title: "Penilaian", url: "#", icon: FileText, variant: "default" },
      ],
    },
  ],
  Catalyst: [
    {
      label: "Platform",
      items: [
        {
          title: "Home",
          url: "/dashboard",
          icon: SquareTerminal,
          variant: "default",
        },
        { title: "Verifikasi", url: "#", icon: Users, variant: "default" },
        {
          title: "Data Mahasiswa",
          url: "#",
          icon: Database,
          variant: "default",
        },
      ],
    },
  ],
  Vanguard: [
    {
      label: "Platform",
      items: [
        {
          title: "Home",
          url: "/dashboard",
          icon: SquareTerminal,
          variant: "default",
        },
        { title: "Jadwal", url: "#", icon: Calendar, variant: "default" },
      ],
    },
    {
      label: "Kegiatan",
      items: [
        { title: "Project NVG", url: "#", icon: Frame, variant: "action" },
        { title: "Project NVI", url: "#", icon: Frame, variant: "action" },
      ],
    },
  ],
  Wayfarer: [
    {
      label: "Publik",
      items: [
        {
          title: "Home",
          url: "/dashboard",
          icon: SquareTerminal,
          variant: "default",
        },
        {
          title: "Informasi Kampus",
          url: "#",
          icon: BookOpen,
          variant: "default",
        },
        {
          title: "Pusat Bantuan",
          url: "#",
          icon: LifeBuoy,
          variant: "default",
        },
      ],
    },
  ],
};
