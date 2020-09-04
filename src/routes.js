import React, { useState, useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tabela from "./pages/Tabela";
import Setores from "./pages/Setores";
import Login from "./pages/Login";

function Routes() {
  const user = JSON.parse(localStorage.getItem("userFono"));

  return (
    <BrowserRouter>
      <Switch>
        {!user && <Route path="/" component={Login} />}
        {user && (
          <RouteWrapper layout={Layout} exact path="/" component={Home} />
        )}
        {user && (
          <RouteWrapper
            layout={Layout}
            exact
            path="/tabela"
            component={Tabela}
          />
        )}
        {user && (
          <RouteWrapper
            layout={Layout}
            exact
            path="/setores"
            component={Setores}
          />
        )}
      </Switch>
    </BrowserRouter>
  );
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default Routes;
