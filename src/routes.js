import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Uti1 from "./pages/Uti1";
import Uti2 from "./pages/Uti2";
import Uti3 from "./pages/Uti3";
import Utineo from "./pages/Utineo";
import Utiped from "./pages/Utiped";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/uti1" component={Uti1} />
        <Route exact path="/uti2" component={Uti2} />
        <Route exact path="/uti3" component={Uti3} />
        <Route exact path="/utineo" component={Utineo} />
        <Route exact path="/utiped" component={Utiped} />
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

export default Routes;
