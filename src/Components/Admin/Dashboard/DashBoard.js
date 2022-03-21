import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminDash from "../AdminFeature/AdminDash";
import AddDoctor from "../AdminFeature/Doctor/AddDoctor";
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
        <div class="w-full h-full p-4 overflow-y-auto">
          <div class="flex items-center justify-center p-2 md:p-8">
            <Switch>
              {/* admin */}
              <Route path={`${path}/admin-dashboard`}>
                <AdminDash />
              </Route>
              <Route path={`${path}/add-doctor`}>
                <AddDoctor />
              </Route>

              {/* client */}
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
