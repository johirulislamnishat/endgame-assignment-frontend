import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddAdmin from "../AdminFeature/AddAdmin";
import AddBlogs from "../AdminFeature/Blogs/AddBlogs";
import AddDoctor from "../AdminFeature/Doctor/AddDoctor";
import ManageDoctors from "../AdminFeature/Doctor/ManageDoctors";
import AddLabTest from "../AdminFeature/LabTest/AddLabTest";
import ManageTest from "../AdminFeature/LabTest/ManageTest";
import ManagePatients from "../AdminFeature/ManagePatients";
import ClientDash from "../ClientFeature/ClientDash";
import ManageAppointment from "../ClientFeature/ManageAppointment";
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
              <Route path={`${path}/manage-patient`}>
                <ManagePatients />
              </Route>
              <Route path={`${path}/add-doctor`}>
                <AddDoctor />
              </Route>
              <Route path={`${path}/manage-doctor`}>
                <ManageDoctors />
              </Route>
              <Route path={`${path}/manage-test`}>
                <ManageTest />
              </Route>
              <Route path={`${path}/add-blog`}>
                <AddBlogs />
              </Route>
              <Route path={`${path}/add-test`}>
                <AddLabTest />
              </Route>
              <Route path={`${path}/add-admin`}>
                <AddAdmin />
              </Route>

              {/* client */}
              <Route path={`${path}/dashboard`}>
                <ClientDash />
              </Route>
              <Route path={`${path}/manageappointment`}>
                <ManageAppointment />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
