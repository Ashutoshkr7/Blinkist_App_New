import { render, screen } from "@testing-library/react";
import Typography from ".";

test("should render progressbar", () => {
  render(<Typography children="Blinkist" />);
  const textElement = screen.getByText("Blinkist");
  expect(textElement).toBeInTheDocument();
});
