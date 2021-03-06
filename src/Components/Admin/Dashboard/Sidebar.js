import React, { useEffect, useRef } from "react";
import { useRouteMatch, NavLink } from "react-router-dom";
import useAuth from "../../../Authentication/Hooks/useAuth";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { logOut } = useAuth();

  let { url } = useRouteMatch();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const { admin } = useAuth();

  return (
    <>
      <div className="lg:w-64 bg-gray-800">
        {/* Sidebar backdrop (mobile only) */}
        <div
          className={`fixed inset-0  bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
        ></div>

        {/* Sidebar */}
        <div
          id="sidebar"
          ref={sidebar}
          className={`absolute z-40 left-0 top-0 mt-0 lg:mt-4 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-64"
          }`}
        >
          {/* Sidebar header */}
          <div className="flex justify-between mb-10 pr-3 sm:px-2">
            {/* Close button */}
            <button
              ref={trigger}
              className="lg:hidden text-gray-500 hover:text-gray-400"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            {/* admin  */}
            {admin ? (
              <>
                <NavLink
                  to={`${url}/manage-patient`}
                  className="text-base  font-semibold nav-items"
                >
                  Manage Patient
                </NavLink>
                <NavLink
                  to={`${url}/add-admin`}
                  className="text-base   font-semibold nav-items"
                >
                  Add Admin
                </NavLink>
                <NavLink
                  to={`${url}/add-doctor`}
                  className="text-base   font-semibold nav-items"
                >
                  Add Doctor
                </NavLink>
                <NavLink
                  to={`${url}/manage-doctor`}
                  className="text-base   font-semibold nav-items"
                >
                  Manage Doctors
                </NavLink>
                <NavLink
                  to={`${url}/manage-test`}
                  className="text-base   font-semibold nav-items"
                >
                  Manage Tests
                </NavLink>

                <NavLink
                  to={`${url}/add-blog`}
                  className="text-base   font-semibold nav-items"
                >
                  Add Blog
                </NavLink>
                <NavLink
                  to={`${url}/add-test`}
                  className="text-base   font-semibold nav-items"
                >
                  Add Test
                </NavLink>
              </>
            ) : (
              <>
                {/* client  */}
                <NavLink
                  to={`${url}/dashboard`}
                  className="text-base  font-semibold nav-items"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to={`${url}/manageappointment`}
                  className="text-base  font-semibold nav-items"
                >
                  My Appointment
                </NavLink>
              </>
            )}

            <NavLink
              onClick={logOut}
              to="/"
              className="text-base  font-semibold nav-items"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
