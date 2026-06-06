"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { systemRoles } from "./navigation"; 

export type RoleType = {
  name: string;
  plan: string;
  logo?: React.ElementType; 
};

export const defaultRole: RoleType = { name: "Initiate", plan: "Unverified" };

interface DashboardContextType {
  activeRole: RoleType;
  setActiveRole: (role: RoleType) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  
  // 🔥 PERBAIKAN MUTLAK: LAZY INITIALIZATION 🔥
  // Membaca localStorage langsung ke dalam useState. 
  // Tidak ada lagi render 2 kali, dan ESLint akan langsung diam!
  const [activeRole, setActiveRole] = useState<RoleType>(() => {
    if (typeof window !== "undefined") {
      const savedRoleName = localStorage.getItem("nvi_active_role");
      if (savedRoleName) {
        const foundRole = systemRoles.find(r => r.name === savedRoleName);
        if (foundRole) return foundRole;
      }
    }
    return defaultRole;
  }); 

  // MENYIMPAN INGATAN (Setiap kali role diubah)
  useEffect(() => {
    localStorage.setItem("nvi_active_role", activeRole.name);
  }, [activeRole.name]);

  return (
    <DashboardContext.Provider value={{ activeRole, setActiveRole }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDashboard must be used within DashboardProvider");
  return context;
}