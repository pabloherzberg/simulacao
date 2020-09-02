import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Geral from "./pages/Geral";
import Uti1 from "./pages/Uti1";
import Uti2 from "./pages/Uti2";
import Uti3 from "./pages/Uti3";
import Utineo from "./pages/Utineo";
import Utiped from "./pages/Utiped";
import Tabela from "./pages/Tabela";
import Setores from "./pages/Setores";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper layout={Layout} exact path="/" component={Geral} />
        <RouteWrapper
          layout={Layout}
          exact
          path="/setores"
          component={Setores}
        />
        <RouteWrapper layout={Layout} exact path="/uti1" component={Uti1} />
        <RouteWrapper layout={Layout} exact path="/uti2" component={Uti2} />
        <RouteWrapper layout={Layout} exact path="/uti3" component={Uti3} />
        <RouteWrapper layout={Layout} exact path="/utineo" component={Utineo} />
        <RouteWrapper layout={Layout} exact path="/utiped" component={Utiped} />
        <RouteWrapper layout={Layout} exact path="/tabela" component={Tabela} />
        <RouteWrapper layout={Layout} exact path="/geral" component={Geral} />
        {/*  <Route exact path="/posto2eme" component={Posto2eme} />
        <Route exact path="/emeped" component={Emeped} />
        <Route exact path="/andar4" component={Andar4} />
        <Route exact path="/andar5" component={Andar5} />
        <Route exact path="/andar6" component={Andar6} />
        <Route exact path="/andar7" component={Andar7} />
        <Route exact path="/andar8" component={Andar8} />
        <Route exact path="/andar9" component={Andar9} />
        <Route exact path="/andar10" component={Andar10} />
        <Route exact path="/andar12" component={Andar12} /> */}
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
