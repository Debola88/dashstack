"use client"
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
import { IoPeopleOutline } from "react-icons/io5";
import { BsCashStack } from "react-icons/bs";
import { LiaChartBarSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { LiaTableSolid } from "react-icons/lia";
import { LiaClipboard } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { CiPower } from "react-icons/ci";
import { useSidebar } from "@/context/sidebar-context";
import clsx from "clsx";
import { useEffect } from "react";

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
  { title: "To-Do", icon: <LiaClipboard /> },
  { title: "Contact", icon: <IoPeopleOutline /> },
  { title: "Invoice", icon: <BsCashStack /> },
  { title: "UI Elements", icon: <LiaChartBarSolid /> },
  { title: "Team", icon: <AiOutlineUser /> },
  { title: "Table", icon: <LiaTableSolid /> },
];

const tabThree = [
  { title: "Settings", icon: <IoSettingsOutline /> },
  { title: "Logout", icon: <CiPower /> },
];

export default function DashboardSidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeSidebar();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeSidebar]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop/Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed md:static top-0 left-0 z-30 h-screen shrink-0 w-[250px] transform transition-transform duration-300 overflow-y-auto dark:bg-gray-800 dark:border-gray-700 bg-white border-r border-gray-200 dark:border-r-gray-700",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-center h-16 w-full border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <span className="text-[#4880FF] max-md:text-lg font-bold text-2xl">
              Dash
            </span>
            <span className="font-bold text-2xl max-md:text-lg text-black dark:text-white">
              Stack
            </span>
          </div>
        </div>
        <nav className="pt-4 space-y-1">
          {tabOne.map((tab, index) => (
            <DashbordTab key={index} title={tab.title} icon={tab.icon} />
          ))}
        </nav>
        <Separator className="my-4 text-[#D8D8D8]" />
        <div className="flex justify-center">
          <p className="text-gray-500 font-semibold text-sm flex items-end justify-left w-3/4 px-3">
            PAGES
          </p>
        </div>
        <nav className="pt-4 space-y-1">
          {tabTwo.map((tab, index) => (
            <DashbordTab key={index} title={tab.title} icon={tab.icon} />
          ))}
        </nav>
        <Separator className="my-4 text-[#D8D8D8]" />
        <nav className="py-4 space-y-1">
          {tabThree.map((tab, index) => (
            <DashbordTab key={index} title={tab.title} icon={tab.icon} />
          ))}
        </nav>
      </aside>
    </>
  );
}