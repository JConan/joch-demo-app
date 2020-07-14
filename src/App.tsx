import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <ul className="nav justify-center">
            <li className="nav-link item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link item">
              <NavLink to="/about">About me</NavLink>
            </li>
          </ul>
        </div>
        <div className="row content">
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
    </div>
  );
}

export default App;
