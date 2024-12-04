import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes.js";

import Footer from "./components/Footer/index.jsx";
import "./index.css";

const GetRoutes = () => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      render={(params) => <route.component {...params} />}
    />
  ));
};

const App = () => {
  return (
    <div className="app">
      <Switch>
        <GetRoutes />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
