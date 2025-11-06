import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
// import { IconType } from "react-icons/lib";

interface props {
  icon: ReactNode;
  title: string;
}

export default function DashbordTab({ icon, title }: props) {
  return (
    <nav className="w-full flex justify-center relative group group-active:">
      <span
        className="h-10 w-12 absolute -ml-67 rounded-lg 
        group-hover:bg-[#4880FF] 
        group-hover:text-white
        group-active:bg-[#4880FF] 
        group-active:text-white"
      ></span>

      <Button
        className="h-10 w-3/4 bg-white text-black text-sm justify-start
        hover:bg-[#4880FF]
        group-hover:bg-[#4880FF]
        group-hover:text-white
        group-active:bg-[#4880FF] 
        group-active:text-white"
      >
        {icon} {title}
      </Button>
    </nav>
  );
}
