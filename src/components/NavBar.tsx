import * as React from "react";
import { Link } from "react-router-dom";

export interface NavBarProps {}

const NavBar: React.SFC<NavBarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Joch demo-app
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavBarItem to="/">Home</NavBarItem>
          <NavBarItem to="/about">About me</NavBarItem>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

export interface NavBarItemProps {
  to: string;
}

const NavBarItem: React.SFC<NavBarItemProps> = (props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.to}>
        {props.children}
      </Link>
    </li>
  );
};
