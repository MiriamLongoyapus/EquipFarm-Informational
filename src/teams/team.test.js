import React from "react";
import { render, screen } from "@testing-library/react";
import Teams from ".";

test("renders the Teams component with content", () => {
  render(<Teams />);

  const teamHeading = screen.getByText(/Our Team/i);
  expect(teamHeading).toBeInTheDocument();

  const items = [
    {
      name: "Leila Ashur",
      title: "Mobile developer",
    },
    {
      name: "Ann Mwang’ombe",
      title: "UX Researcher",
    },
    {
      name: "Mercy cheptoo",
      title: "Backend Engineer",
    },
    {
      name: "Miriam Longonyapus",
      title: "Front-end developer",
    },
    {
      name: "Linah Wainaina",
      title: "Backend Engineer",
    },
  ];

  items.forEach((item) => {
    const nameElements = screen.getAllByText(item.name);
const titleElements = screen.getAllByText(item.title);

expect(nameElements.length).toBeGreaterThan(0);
expect(titleElements.length).toBeGreaterThan(0);

  });

  items.forEach((item) => {
    const image = screen.getByAltText(item.name);
    expect(image).toBeInTheDocument();
  });
});
