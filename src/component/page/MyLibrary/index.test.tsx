import { fireEvent, render, screen } from "@testing-library/react";
import MyLibrary from ".";
import { BrowserRouter } from "react-router-dom";

const router = (
  currentlyReadingBooks: any,
  finishedReadingBooks: any,
  library: any
) => {
  return (
    <BrowserRouter>
      <MyLibrary
        currentlyReadingBooks={currentlyReadingBooks}
        finishedReadingBooks={finishedReadingBooks}
        library={library}
      />
    </BrowserRouter>
  );
};
describe("Library", () => {
  let response: any,
    currentlyReadingBooks: any,
    finishedReadingBooks: any,
    library: any;
  beforeAll(async () => {
    let response = await fetch("http://localhost:3333/currentlyReadingBooks");
    currentlyReadingBooks = await response.json();
    response = await fetch("http://localhost:3333/finishedBooks");
    finishedReadingBooks = await response.json();
    response = await fetch("http://localhost:3333/library");
    library = await response.json();
  });
  test("renders cicular progress bar if books are not available", async () => {
    let currentlyReadingBooks: any = [];

    render(router(currentlyReadingBooks, finishedReadingBooks, library));
    const linkElement = screen.getByTestId("circular-progress");
    expect(linkElement).toBeInTheDocument();
  });
  test("should not render cicular progress bar if books are available", async () => {
    render(router(currentlyReadingBooks, finishedReadingBooks, library));
    const linkElement = screen.queryByTestId("circular-progress");
    expect(linkElement).not.toBeInTheDocument();
  });
  test("should render same no of finished books", async () => {
    render(router(currentlyReadingBooks, finishedReadingBooks, library));
    const tabsElement = screen.getByTestId(/tab-finished/);
    fireEvent.click(tabsElement);
    const progressBarElement = await screen.findAllByRole("progressbar");
    expect(progressBarElement.length).toBe(finishedReadingBooks.length);
  });
  test("should render same no of currently books", async () => {
    render(router(currentlyReadingBooks, finishedReadingBooks, library));
    const tabsElement = screen.getByTestId(/tab-reading/);
    fireEvent.click(tabsElement);
    const progressBarElement = await screen.findAllByRole("progressbar");
    expect(progressBarElement.length).toBe(currentlyReadingBooks.length);
    console.log("currentlyReading.length", currentlyReadingBooks.length);
  });
});
