import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminDash from "../AdminFeature/AdminDash";
import ClientDash from "../ClientFeature/ClientDash";
import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";

const DashBoard = () => {
  let { path } = useRouteMatch();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <DashHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div class="pt-12 lg:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div class="w-full h-full p-4 m-8 overflow-y-auto">
          <div class="flex items-center justify-center p-16 mr-8 border-4 border-dotted lg:p-40">
            <Switch>
              <Route path={`${path}/admin-dashboard`}>
                <AdminDash />
              </Route>
              <Route path={`${path}/dashboard`}>
                <ClientDash />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
