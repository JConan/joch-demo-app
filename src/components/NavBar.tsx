import * as React from "react";
import { Link, useLocation } from "react-router-dom";

export interface NavBarProps {}

const NavBar: React.SFC<NavBarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <u>DemoApp</u>
      </Link>
      <div className="navbar-collapse" id="navbarNav">
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
  const matchCurrentPath = useLocation().pathname === props.to;
  return (
    <li className="nav-item nav item">
      <Link
        className={matchCurrentPath ? "nav-link active" : "nav-link"}
        to={props.to}
      >
        {props.children}
      </Link>
    </li>
  );
};
