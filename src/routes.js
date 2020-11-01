import React, { useState, useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tabela from "./pages/Tabela";
import Setores from "./pages/Setores";
import Login from "./pages/Login";
import Geral from "./pages/Geral";
import Prontuarios from './pages/Prontuarios'
import Evolucoes from './pages/Evolucoes'

import HomeMobile from './pages/Mobile/Home'
import DetailsMobile from './pages/Mobile/Details'


function Routes() {
  const user = JSON.parse(sessionStorage.getItem("userFono"));

  return (
    <BrowserRouter>
      <Switch>
        {!user && <Route path="/" component={Login} />}
        {user && (
          window.innerWidth <= 768?
          <Route exact path='/' component={HomeMobile} />:
          <RouteWrapper layout={Layout} exact path="/" component={Prontuarios} />
        )}
         {user && (
          window.innerWidth <= 768?
          <></>:
          <RouteWrapper layout={Layout} exact path="/evolucoes" component={Evolucoes} />
        )}
        {user &&(
          <Route exact path='/detalhes' component={DetailsMobile}/>
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
        {user && (
          <RouteWrapper layout={Layout} exact path="/anual" component={Geral} />
        )}
        {user && (
          <RouteWrapper layout={Layout} exact path="/geral" component={Home} />
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
