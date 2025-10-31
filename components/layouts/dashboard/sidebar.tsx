import React from "react";
import DashbordTab from "./tab";
import { RiDashboard3Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { TbListCheck } from "react-icons/tb";
import { LiaBorderAllSolid } from "react-icons/lia";
import { LuRows3 } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { CiGift } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";



const tabOne = [
  { title: "Dashboard", icon: <RiDashboard3Line /> },
  { title: "Products", icon: <LiaBorderAllSolid /> },
  { title: "favorites", icon: <MdFavoriteBorder /> },
  { title: "inbox", icon: <TiMessages /> },
  { title: "Order Lists", icon: <TbListCheck /> },
  { title: "Product Stock", icon: <LuRows3 /> },
];

const tabTwo = [
  { title: "Pricing", icon: <CiGift /> },
  { title: "Calendar", icon: <IoCalendarOutline /> },
  { title: "To-Do", icon: <MdFavoriteBorder /> },
  { title: "Contact", icon: <TiMessages /> },
  { title: "Invoice", icon: <TbListCheck /> },
  { title: "UI Elements", icon: <LuRows3 /> },
  { title: "Team", icon: <LuRows3 /> },
  { title: "Table", icon: <LuRows3 /> },
];

export default function DashboardSidebar({
  sidebarOpen,
  darkMode,
  activeItem,
  setActiveItem,
  menuItems,
}) {
  return (
    <aside
      className={`fixed top-0 z-40 h-screen transition-transform duration-300 overflow-y-auto ${
        sidebarOpen ? "transition-x-0" : "-transition-x-full"
      } ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white boarder-gray-200"
      } border-r`}
      style={{ width: "250px" }}
    >
      <div className="flex items-center justify-center h-16 w-full border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <span className="text-[#4880FF] max-md:text-lg font-bold text-2xl">
            Dash
          </span>
          <span
            className={`font-bold text-2xl max-md:text-lg ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Stack
          </span>
        </div>
      </div>
      <div className="pt-4 space-y-1">
        {tabOne.map((tab, index) => (
          <DashbordTab key={index} title={tab.title} icon={tab.icon} />
        ))}
      </div>
      <Separator className="my-4 text-[#D8D8D8]" />
      <p className="text-gray-500 font-semibold text-sm text-start">PAGES</p>
      <div className="pt-4 space-y-1">
        {tabTwo.map((tab, index) => (
          <DashbordTab key={index} title={tab.title} icon={tab.icon} />
        ))}
      </div>
    </aside>
  );
}
