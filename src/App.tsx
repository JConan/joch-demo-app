import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
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
