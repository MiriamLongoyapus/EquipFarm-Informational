import { render, screen } from '@testing-library/react';
import ServicesSection from '.';


test("render services section with a title", () => {
  render(
    <ServicesSection />

  );
  const headingElement = screen.getByText(/Our Services/i);
  expect(headingElement).toBeInTheDocument();
});



test("renders three cards into service section", () => {
 
  render(
    <ServicesSection />

  );
  const  cardElements = screen.getAllByRole("contentinfo")
  expect(cardElements).toHaveLength(3);
});


test("services section has  three titles", () => {
  render(
    <ServicesSection />

  );
  const  cardElements = screen.getAllByLabelText("title")
  expect(cardElements).toHaveLength(3);
});
