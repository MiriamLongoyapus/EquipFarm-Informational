import { render, screen } from '@testing-library/react';
import ServicesSection from '.';


test("  services section", () => {
  render(
    <ServicesSection />

  );
  const headingElement = screen.getByText(/Our Services/i);
  expect(headingElement).toBeInTheDocument();
});

