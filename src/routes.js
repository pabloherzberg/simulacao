import React, { useState, useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import Setores from "./pages/Setores";
import Login from "./pages/Login";
import Geral from "./pages/Graficos";
import Prontuarios from './pages/Prontuarios'
import Image from './pages/Evolucoes/Image'
import Evolucoes from './pages/Evolucoes'
import Dados from './pages/Mobile/Dados'

import HomeMobile from './pages/Mobile/Home'
import DetailsMobile from './pages/Mobile/Details'
import EditMobile from './pages/Mobile/Edit'
import ContatosMobile from './pages/Mobile/Contatos'
import Atendimentos from './pages/Mobile/Atendimentos'


function Routes() {
  const user = JSON.parse(localStorage.getItem("userFono"));

  return (
    <BrowserRouter>
      <Switch>
        {!user && <Route path="/" component={Login} />}
        {user && (
          window.innerWidth <= 768?
          <Route exact path='/' component={HomeMobile} />:
          <RouteWrapper layout={Layout} exact path="/" component={Prontuarios} />
        )}
         {user &&  
             window.innerWidth <= 768?
             <Route exact path='/evolucoesMobile' component={Evolucoes} />:
            <RouteWrapper layout={Layout} exact path="/evolucoes" component={Evolucoes} />
          }
          {user &&(
          <Route exact path='/atendimentos' component={Atendimentos}/>
        )}
        {user &&(
          <Route exact path='/detalhes' component={DetailsMobile}/>
        )}
        {user &&(
          <Route exact path='/edit' component={EditMobile}/>
        )}
          {user &&(
          <Route exact path='/contatos' component={ContatosMobile}/>
        )}
         {user &&(
          <Route exact path='/image' component={Image}/>
        )}
          {user &&(
          <Route exact path='/dados' component={Dados}/>
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
