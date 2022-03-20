import React, { useState } from "react";
import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";

const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <DashHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div class="pt-12 lg:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div class="w-full h-full p-4 m-8 overflow-y-auto">
          <div class="flex items-center justify-center p-16 mr-8 border-4 border-dotted lg:p-40">
            Content...
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
