import { render, screen } from "@testing-library/react";
import Header from ".";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const handleExploreMenu = jest.fn();

const router = (books: any) => {
  return (
    <BrowserRouter>
      <Header
        url="/assets/logo.png"
        name="Blinkist"
        handleExploreMenu={handleExploreMenu}
        exploreOption={false}
      />
    </BrowserRouter>
  );
};

describe("Header", () => {
  let response, books: any;
  beforeAll(async () => {
    response = await axios.get("http://localhost:3333/currentlyReadingBooks");
    books = await response.data;
  });
  test("search-state-button button should be clickable", async () => {
    render(router(books));
    const searchButtonElement = screen.getByTestId("box");
  });
});

jest.setTimeout(30000);
