import DashboardHeader from "@/components/layouts/dashboard/header";
import DashboardSidebar from "@/components/layouts/dashboard/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <DashboardSidebar />

      <div className="flex-1 ml-[250px]">
        <DashboardHeader />
        <main className="p-6 ">{children}</main>
      </div>
    </div>
  );
}
