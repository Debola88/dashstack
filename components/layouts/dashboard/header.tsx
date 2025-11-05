'use client'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";

export default function DashboardHeader({
  sidebarOpen,
  setSidebarOpen,
  darkMode,
  setDarkMode,
}) {
  return (
    <header
      className={`sticky top-0 z-30 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } ${sidebarOpen ? 'pl-0' : ''} shadow`}
    >
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-xl cursor-pointer"
          >
            {sidebarOpen ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
          </button>
          <InputGroup className="rounded-full">
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex items-center justify-between h-16 px-6">
          <div className="relative">
            <Badge
              className="h-4 min-w-3 rounded-full px-1 font-mono tabular-nums text-sm absolute -mt-2 ml-2"
              variant="destructive"
            >
              6
            </Badge>
            <IoNotifications className="text-2xl text-[#3D42DF]"/>
          </div>

        </div>
      </div>
    </header>
  );
}
