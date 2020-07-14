import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

describe("navigation bar integration", () => {
  var history = createBrowserHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
  });

  it("should display homepage by default", () => {
    screen.getByText(/page principale :D/i);
  });

  it("should display about page on URL /about", () => {
    history.push("/about");
    screen.getByText(/propos de moi/i);
  });

  it("should be able to go to about page from URL /", () => {
    screen.getByRole("link", { name: /about me/i }).click();
    screen.getByText(/propos de moi/i);
  });

  it("should be able to go back to homepage from URL /about", () => {
    history.push("/about");
    screen.getByRole("link", { name: /home/i }).click();
    screen.getByText(/page principale :D/i);
  });
});
