import React from "react";
import useAuth from "../../../Authentication/Hooks/useAuth";

const DashHeader = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = useAuth();

  return (
    <>
      <div class="fixed z-30 w-full bg-white border-b-2 border-indigo-600">
        <div class="px-6 py-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                class="p-2 text-gray-600 rounded cursor-pointer lg:hidden "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <a href="#" class="flex items-center text-xl font-bold">
                <span class="text-blue-800">Logo</span>
              </a>
            </div>
            <div class="flex items-center">
              <div class="relative inline-block ">
                {/* Dropdown toggle button  */}

                <img
                  className="w-8 h-8 rounded-full"
                  src={user?.photoURL}
                  width="32"
                  height="32"
                  alt="User"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashHeader;
