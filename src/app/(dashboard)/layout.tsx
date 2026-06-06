"use client"

import * as React from "react"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { DashboardHeader } from "@/components/dashboard/header" // <-- IMPORT HEADER BARU
import { ThemeSwitcher } from "@/components/theme-switcher"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

// IMPORT PROVIDER (Tandon Air)
import { DashboardProvider } from "@/logic/dashboard/system/context"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <span className="text-muted-foreground animate-pulse">Memuat antarmuka...</span>
      </div>
    )
  }

  return (
    <DashboardProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          
          {/* Komponen Header dipanggil di sini dengan rapi */}
          <DashboardHeader />
          
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}
          </div>

          <ThemeSwitcher />
        </SidebarInset>
      </SidebarProvider>
    </DashboardProvider>
  )
}