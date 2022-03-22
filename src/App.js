import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Client/Home/Home";
import Appointment from "./Components/Client/Appointments/Appointment";
import Dashboard from "./Components/Admin/Dashboard/DashBoard";
import LabTest from "./Components/Client/LabTest/LabTest";
import About from "./Components/Client/About/About";
import AuthProvider from "./Authentication/Context/AuthProvider";
import Login from "./Authentication/Login/Login";
import Registration from "./Authentication/Registration/Registration";
import NotFound from "./Components/Client/SinglePages/NotFound";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/lab">
              <LabTest />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
