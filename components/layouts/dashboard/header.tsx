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
import { useSidebar } from "@/context/sidebar-context";

export default function DashboardHeader() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-30 dark:bg-gray-800 bg-white">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-xl cursor-pointer"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </button>
          <InputGroup className="rounded-full">
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <Badge
              className="h-4 min-w-3 rounded-full px-1 font-mono tabular-nums text-sm absolute -top-1 -right-1"
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