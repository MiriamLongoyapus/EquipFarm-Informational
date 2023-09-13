import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";

test("renders Home component", () => {
  render(<Home />);
  
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toEqual(2);

  const welcomeElement = screen.getByText(/Welcome To Equip Farm/i);
  expect(welcomeElement).toBeInTheDocument();

  const shopButtonElement = screen.getByRole("button", { name: /Shop/i });
  expect(shopButtonElement).toBeInTheDocument();
});

