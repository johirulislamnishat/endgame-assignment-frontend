import "./App.css";
import DashBoard from "./Components/Admin/Dashboard/DashBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Client/Home/Home";
import Appointment from "./Components/Client/Appointments/Appointment";

function App() {
  return (
    <>
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
