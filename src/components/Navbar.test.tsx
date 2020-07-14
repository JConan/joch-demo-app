import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBar from "./NavBar";

describe("component - navigation bar", () => {
  var history = createBrowserHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    );
  });

  it("should have by default an active link to home page", () => {
    var link = screen.getByRole("link", { name: /home/i });
    expect(link).toHaveClass("active");
    expect(link).toHaveAttribute("href", "/");
  });

  it("should have by default an inactive link to about page", () => {
    var link = screen.getByRole("link", { name: /about/i });
    expect(link).not.toHaveClass("active");
    expect(link).toHaveAttribute("href", "/about");
  });
});
