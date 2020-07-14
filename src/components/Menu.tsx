import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export interface NavBarProps {}

const Menu: React.SFC<NavBarProps> = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Demo-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About me</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;

export interface NavLinkProps {
  href: string;
}

const NavLink: React.SFC<NavLinkProps> = (props) => {
  const matchCurrentPath = useLocation().pathname === props.href;
  return (
    <Link
      className={"nav-link" + (matchCurrentPath ? " active" : "")}
      to={props.href}
    >
      {props.children}
    </Link>
  );
};
