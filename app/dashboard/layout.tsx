import DashboardHeader from "@/components/layouts/dashboard/header";
import DashboardSidebar from "@/components/layouts/dashboard/sidebar";
import { SidebarProvider } from "@/context/sidebar-context";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex flex-col flex-1 transition-all duration-300">
          <DashboardHeader />
          <main className="flex-1 p-4 overflow-y-auto bg-[#F5F6FA] dark:bg-[#1B2431]">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
