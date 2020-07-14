import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Menu from "./Menu";

describe("component - navigation bar", () => {
  var history = createBrowserHistory();
  beforeEach(() => {
    history.push("/");
    render(
      <Router history={history}>
        <Menu />
      </Router>
    );
  });
  afterEach(cleanup)

  it("should have by default an active link to home page", () => {
    var link = screen.getByRole("link", { name: /home/i });
    expect(link).toHaveClass("active");
    expect(link).toHaveAttribute("href", "/");
  });

  it("should have by default an inactive link to about page and active after navigate to it", () => {
    var link = screen.getByRole("link", { name: /about/i });
    expect(link).not.toHaveClass("active");
    expect(link).toHaveAttribute("href", "/about");
    link.click();
    expect(link).toHaveClass("active");
  });

  it("should be able to navigate with links", () => {
    expect(history.location.pathname).toBe("/");
    screen.getByRole("link", { name: /about/i }).click();
    expect(history.location.pathname).toBe("/about");

    screen.getByRole("link", { name: /home/i }).click();
    expect(history.location.pathname).toBe("/");
  });
});
