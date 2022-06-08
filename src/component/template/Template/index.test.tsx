import { render, screen } from "@testing-library/react";
import Template from ".";

const router = () => {
  return <Template />;
};

describe("Template", () => {
  test("should render circular bar if data is empty", () => {
    render(router());
    const linkElement = screen.getByTestId("circular-progress");
    expect(linkElement).toBeInTheDocument();
  });

  test("should not render circular bar if data is not empty", async () => {
    render(router());
    await new Promise((r) => setTimeout(r, 5000));
    const linkElement = screen.queryByTestId("main");
    expect(linkElement).toBeInTheDocument();
  });
});

jest.setTimeout(30000);
