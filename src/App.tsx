import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container-fluid">
        <Switch>
          <Route path="/about">
            <div>Page à propos de moi :)</div>
          </Route>
          <Route path="/">
            <div>Page principale :D</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
