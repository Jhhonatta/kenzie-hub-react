import Login from "../pages/login";
import Record from "../pages/record";
import Dashboard from "../pages/dashboard";

import { useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Routes = () => {
  const { localToken, setLocalToken } = useContext(UserContext);
  // const [localToken, setLocalToken] = useState([]);

  useEffect(() => {
    setLocalToken(localStorage);
  }, [localStorage]);

  return (
    <Switch>
      ({localToken.length !== 0}) ?
      <Route
        exact
        path={"/"}
        localToken={localToken}
        setLocalToken={setLocalToken}
      >
        <Login localToken={localToken} setLocalToken={setLocalToken} />
      </Route>
      :
      <Route path={"/dashboard"}>
        <Dashboard localToken={localToken} setLocalToken={setLocalToken} />
      </Route>
      <Route path={"/record"}>
        <Record />
      </Route>
    </Switch>
  );
};

export default Routes;
