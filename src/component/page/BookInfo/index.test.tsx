import { render, screen } from "@testing-library/react";
import BookInfo from ".";
import { BrowserRouter } from "react-router-dom";
const setLibrary = jest.fn();

const router = (library: any) => {
  return (
    <BrowserRouter>
      <BookInfo library={library} setLibrary={setLibrary} />
    </BrowserRouter>
  );
};

describe("Book Info", () => {
  let response, library: any;
  beforeAll(async () => {
    response = await fetch("http://localhost:3333/library");
    library = await response.json();
  });
  test("should render circular bar if data is empty", async () => {
    let library: any = false;
    render(router(library));

    const linkElement = screen.getByTestId("circular-progress");
    console.log("linkElement", linkElement);
    expect(linkElement).toBeInTheDocument();
  });
  test("should not render circular bar if data is not empty", async () => {
    render(router(library));
    await new Promise((r) => setTimeout(r, 2000));
    const linkElement = screen.queryByTestId("circular-progress");
    expect(linkElement).not.toBeInTheDocument();
  });
});
jest.setTimeout(30000);
