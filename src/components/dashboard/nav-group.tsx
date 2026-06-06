"use client";

import { useState } from "react";
import {
  ChevronRight,
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";


// 1. Definisikan varian ala shadcn menggunakan cva
export const navItemVariants = cva("", {
  variants: {
    variant: {
      default: "",
      collapsible: "",
      action: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// 2. Gabungkan VariantProps dari cva dengan tipe bawaan kita
export interface NavItemType extends VariantProps<typeof navItemVariants> {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
    isActive?: boolean; // <--- (Baru) Supaya anaknya bisa menerima perintah nyala
  }[];
}

// =========================================================================
// KOMPONEN KHUSUS: COLLAPSIBLE ITEM (Untuk logika UX Enterprise)
// =========================================================================
function NavCollapsibleItem({ item }: { item: NavItemType }) {
  // Melacak status apakah menu sedang terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(item.isActive || false);

  return (
    <Collapsible
      asChild
      open={isOpen}
      onOpenChange={setIsOpen}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          {/* LOGIKA UX MAGIS: 
              Parent HANYA menyala jika item.isActive = true 
              DAN kondisinya sedang TERTUTUP (!isOpen) */}
          <SidebarMenuButton 
            tooltip={item.title} 
            isActive={item.isActive && !isOpen}
            className="select-none"
          >
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                {/* Anak menyala sesuai status isActive dari data array */}
                <SidebarMenuSubButton asChild isActive={subItem.isActive} className="select-none">
                  <Link href={subItem.url || "#"}>
                    <span>{subItem.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

// =========================================================================
// KOMPONEN UTAMA: NAV GROUP
// =========================================================================
export function NavGroup({
  label,
  items,
}: {
  label?: string;
  items: NavItemType[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      {label && <SidebarGroupLabel className="select-none">{label}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => {
          const variant = item.variant || "default";

          // ==========================================
          // VARIANT 1: COLLAPSIBLE (Punya Sub-menu)
          // ==========================================
          if (variant === "collapsible") {
            // Kita pisah ke komponen kecil di atas agar bisa pakai useState
            return <NavCollapsibleItem key={item.title} item={item} />;
          }

          // ==========================================
          // VARIANT 2: ACTION (Punya Titik Tiga)
          // ==========================================
          if (variant === "action") {
            return (
              <SidebarMenuItem key={item.title} className="group/action">
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={item.isActive}
                  className="select-none group-hover/action:bg-sidebar-accent group-hover/action:text-sidebar-accent-foreground"
                >
                  <Link href={item.url || "#"}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    {/* TAMBAHKAN focus-visible:ring-0 DI SINI */}
                    <SidebarMenuAction
                      className="select-none text-sidebar-foreground/50 peer-hover/menu-button:text-sidebar-foreground/50 hover:text-sidebar-accent-foreground hover:bg-sidebar-accent focus-visible:ring-0 focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground"
                    >
                      <MoreHorizontal />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    className="w-48 rounded-lg"
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                  >
                    <DropdownMenuItem>
                      <Folder className="text-muted-foreground" />
                      <span>View Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Forward className="text-muted-foreground" />
                      <span>Share Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Trash2 className="text-muted-foreground" />
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            );
          }

          // ==========================================
          // VARIANT 3: DEFAULT (Link Polos)
          // ==========================================
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={item.isActive}
                className="select-none"
              >
                <Link href={item.url || "#"}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}