import { render, screen } from "@testing-library/react";
import HomePageAdvertisement from ".";

test("HomePageAdvertisement Heading", () => {
  render(
    <HomePageAdvertisement
      label="button"
      heading="Heading"
      description="Description"
    />
  );
  const linkElement = screen.getByTestId("heading");
  expect(linkElement.textContent).toBe("Heading");
});

test("HomePageAdvertisement Description", () => {
  render(
    <HomePageAdvertisement
      label="button"
      heading="Heading"
      description="Description"
    />
  );

  const linkElement = screen.getByTestId("description");
  expect(linkElement.textContent).toBe("Description");
});
