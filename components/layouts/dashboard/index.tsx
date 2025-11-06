import { ReactNode } from "react";
import DashboardSidebar from "./sidebar";
import DashboardHeader from "./header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1 ml-[250px]">
        <DashboardHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
