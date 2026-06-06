"use client"

import * as React from "react"
import { ChevronUp, ChevronDown, Shield } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

// IMPORT CONTEXT OTAK UTAMA
import { useDashboard } from "@/logic/dashboard/system/context"

export function NavRole({
  roles,
}: {
  roles: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  
  const { activeRole, setActiveRole } = useDashboard()

  const displayRole = activeRole.logo ? activeRole : (roles.find(r => r.name === activeRole.name) || roles[0]);

  if (!displayRole) return null

  // TRIK TYPESCRIPT: Simpan ke variabel dengan Huruf Kapital
  const Logo = displayRole.logo

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="select-none group/trigger data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground transition-all duration-500 ease-(--transition-timing-function-smooth)"
            >
              
              {/* ANAK 1: LOGO (Kembali jadi anak langsung + Animasi) */}
              <div 
                key={`logo-${displayRole.name}`}
                className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg animate-in fade-in slide-in-from-bottom-1 duration-500 ease-(--transition-timing-function-smooth)"
              >
                {/* PERBAIKAN: Gunakan Logo huruf kapital dan pastikan tidak undefined */}
                {Logo && <Logo className="size-4" />}
              </div>
              
              {/* ANAK 2: TEKS (Kembali jadi anak langsung + Animasi) */}
              <div 
                key={`text-${displayRole.name}`}
                className="grid flex-1 text-left text-sm leading-tight animate-in fade-in slide-in-from-bottom-1 duration-500 ease-(--transition-timing-function-smooth)"
              >
                <span className="truncate font-medium">{displayRole.name}</span>
                <span className="truncate text-xs text-muted-foreground">{displayRole.plan}</span>
              </div>

              {/* ANAK 3: WADAH ANTI BADAI & BUG KLIK CEPAT (Kembali ke versi asli) */}
              <div className="ml-auto flex size-6 shrink-0 items-center justify-center">
                <div className="flex flex-col items-center justify-center will-change-transform transition-transform duration-500 ease-(--transition-timing-function-snappy) group-data-[state=open]/trigger:rotate-180">
                  <ChevronUp
                    className="size-3.5 -mb-0.75 text-muted-foreground will-change-transform transition-transform duration-500 ease-(--transition-timing-function-snappy) group-data-[state=open]/trigger:-rotate-180"
                  />
                  <ChevronDown
                    className="size-3.5 -mt-0.75 text-muted-foreground will-change-transform transition-transform duration-500 ease-(--transition-timing-function-snappy) group-data-[state=open]/trigger:-rotate-180"
                  />
                </div>
              </div>

            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Roles
            </DropdownMenuLabel>

            {roles.map((role, index) => {
              // TRIK TYPESCRIPT UNTUK DROPDOWN ITEM
              const DropdownLogo = role.logo;
              return (
                <DropdownMenuItem 
                  key={role.name} 
                  onClick={() => setActiveRole(role)} 
                  className="gap-2 p-2 cursor-pointer"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    {/* PERBAIKAN: Render dari variabel berhuruf kapital */}
                    {DropdownLogo && <DropdownLogo className="size-3.5 shrink-0" />}
                  </div>
                  {role.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              );
            })}

            <DropdownMenuSeparator />

            <div className="flex items-center gap-2 px-2 py-2 mx-1 mt-1.5 mb-0.5 bg-muted/50 rounded-sm">
              <Shield className="size-3.5 text-muted-foreground/70 shrink-0" />
              <span className="text-[11px] text-muted-foreground font-medium leading-none">
                Roles controlled by <strong className="font-medium text-foreground/80">Admin NVI</strong>.
              </span>
            </div>

          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}