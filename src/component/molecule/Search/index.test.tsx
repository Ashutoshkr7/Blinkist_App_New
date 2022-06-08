import { render, screen } from "@testing-library/react";
import Search from ".";
import { BrowserRouter as Router } from "react-router-dom";

const SearchComponent = (books: any) => {
  return (
    <Router>
      <Search books={books} />
    </Router>
  );
};

test("should render input box", () => {
  render(<Search />);
  const linkElement = screen.getByPlaceholderText("Search by title or author");
  expect(linkElement).toBeInTheDocument();
});
