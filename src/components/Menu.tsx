import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/js/dist/collapse"


export interface NavBarProps { }

const Menu: React.SFC<NavBarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >DemoApps</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About me</MenuItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

interface MenuItemProps {
  to: string
}

const MenuItem: React.SFC<MenuItemProps> = (props) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={props.to} isActive={(_, { pathname }) => props.to === pathname} >
        {props.children}
      </NavLink>
    </li>
  );
}
