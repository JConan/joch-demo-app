import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("navigation bar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it("should display homepage", () => {
    screen.getByText(/home/i);
  });

  it("should be able to page About me and back to homepage.", () => {
    screen.getByRole("link", { name: /about me/i }).click();
    screen.getByText("Page à propos de moi :)");

    screen.getByRole("link", { name: /home/i }).click();
    screen.getByText("Page principale :D");
  });
});
