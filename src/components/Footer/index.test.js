import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./index";
test("Footer component renders correctly", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("Get in touch")).toBeInTheDocument();
  expect(getByText("Contact us")).toBeInTheDocument();
  expect(getByText("Our services")).toBeInTheDocument();
  expect(getByText("Follow us")).toBeInTheDocument();
}); 