"use client";

import * as React from "react";
import { NavGroup } from "@/components/dashboard/nav-group";
import { NavUser } from "@/components/dashboard/nav-user";
import { NavRole } from "@/components/dashboard/nav-role";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// 1. Import logic dan data
import { useDashboard } from "@/logic/dashboard/system/context";
import { systemRoles, roleMenus } from "@/logic/dashboard/system/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // 2. Ambil activeRole dari Context (Otak Utama)
  const { activeRole } = useDashboard();

  // 3. Dapatkan daftar menu yang spesifik HANYA untuk role yang sedang aktif
  const currentMenus = roleMenus[activeRole.name] || roleMenus["Observer"];

  // Mock user login sementara
  const mockUser = {
    name: "Komandan",
    email: "@nexusvarsity.com",
    avatar: "images/profile2.jpg",
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* NavRole sekarang membaca dari global systemRoles */}
        <NavRole roles={systemRoles} />
      </SidebarHeader>
      
      <SidebarContent>
        {/* Render menu yang sudah difilter sesuai Role */}
        {currentMenus.map((group) => (
          <NavGroup key={group.label} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={mockUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}