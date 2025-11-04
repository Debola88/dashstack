import DashboardHeader from "@/components/layouts/dashboard/header";
import DashboardSidebar from "@/components/layouts/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="p-6 overflow-y-auto bg-[#f8f9fc] dark:bg-black">
          {children}
        </main>
      </div>
    </div>
  );
}