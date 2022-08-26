import Login from "../pages/login";
import Record from "../pages/record";
import Dashboard from "../pages/dashboard";

import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Login />
      </Route>

      <Route path={"/dashboard"}>
        <Dashboard />
      </Route>
      <Route path={"/record"}>
        <Record />
      </Route>
    </Switch>
  );
};

export default Routes;
