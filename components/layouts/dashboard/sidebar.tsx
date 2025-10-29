import React from "react";

export default function DashboardSidebar({
  sidebarOpen,
  darkMode,
  activeItem,
  setActiveItem,
  menuItems,
}) {
  return (
    <aside
      className={`fixed top-0 left-auto h-screen transition-transform duration-300 ${
        sidebarOpen ? "transition-x-0" : "-transition-x-full"
      } ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white boarder-gray-200'} border-r`}
       style={{width: '280px'}}
    >
      <div className=""></div>
    </aside>
  );
}
