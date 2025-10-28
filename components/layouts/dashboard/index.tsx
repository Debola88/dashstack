'use client'
import React, { useState } from "react";
import DashboardHeader from "./header";
import DashboardSidebar from "./sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItems, setActiveItems] = useState("Dashboard");

  return (
    <React.Fragment>
      <DashboardHeader />
      <DashboardSidebar />
    </React.Fragment>
  );
};

export default DashboardLayout;
