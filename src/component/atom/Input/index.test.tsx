import { fireEvent, render, screen } from "@testing-library/react";
import Input from ".";

test("should render input element", () => {
  render(<Input placeholder="Search by title or author" />);
  const inputElement = screen.getByPlaceholderText(/Search by title or author/);
  expect(inputElement).toBeInTheDocument();
});

test("should be able to type in input", () => {
  render(<Input placeholder="Search by title or author" />);
  const inputElement = screen.getByPlaceholderText(/Search by title or author/);
  fireEvent.change(inputElement as HTMLInputElement, {
    target: { value: "Book1" },
  });
  expect((inputElement as HTMLInputElement).value).toBe("Book1");
});

// Fire Event is Basically used when we want to trigger any specific event on an object

// below is the list of Valid events

// onchange
// onclick
// ondblclick
// onblur
// onfocus
// onmousedown
// onmouseup
// onmouseover
// onmouseout
// onsubmit
// onreset
// onpropertychange
