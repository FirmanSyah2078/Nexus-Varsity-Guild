"use client"

import * as React from "react"
import { usePathname } from "next/navigation" // <-- IMPORT PEMBACA URL
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

import { useDashboard } from "@/logic/dashboard/system/context"
// IMPORT FUNGSI PINTAR KITA
import { getActiveBreadcrumb } from "@/logic/dashboard/system/navigation"

export function DashboardHeader() {
  const pathname = usePathname(); // Baca URL saat ini (misal: "/database")
  const { activeRole } = useDashboard(); 
  
  // Breadcrumb Dihitung Secara Otomatis & Real-Time!
  const activePath = getActiveBreadcrumb(pathname, activeRole.name);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage className="text-muted-foreground font-medium">
                {activePath.label}
              </BreadcrumbPage>
            </BreadcrumbItem>
            
            <BreadcrumbSeparator className="hidden md:block" />
            
            <BreadcrumbItem>
              <BreadcrumbPage className={activePath.subTitle ? "text-muted-foreground hidden md:block" : "font-semibold"}>
                {activePath.title}
              </BreadcrumbPage>
            </BreadcrumbItem>

            {activePath.subTitle && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">{activePath.subTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  )
}