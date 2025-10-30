import React from "react";
import DashbordTab from "./tab";

export default function DashboardSidebar({
  sidebarOpen,
  darkMode,
  activeItem,
  setActiveItem,
  menuItems,
}) {
  return (
    <aside
      className={`fixed top-0 z-40 h-screen transition-transform duration-300 ${
        sidebarOpen ? "transition-x-0" : "-transition-x-full"
      } ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white boarder-gray-200'} border-r`}
       style={{width: '250px'}}
    >
      <div className="flex items-center justify-center h-16 w-full border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
            <span className="text-[#4880FF] max-md:text-lg font-bold text-2xl">Dash</span>
          <span className={`font-bold text-2xl max-md:text-lg ${darkMode ? 'text-white' : 'text-black'}`}>Stack</span>
        </div>
      </div>
      <div className="pt-4">
          <DashbordTab/>
      </div>
    </aside>
  );
}
