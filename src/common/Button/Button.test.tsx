// Button.test.js
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders the button with the correct text and responds to click events", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button type="primary" text="Click me" onClick={handleClick} />
  );

  // Check that the button is rendered with the correct text
  const button = getByText("Click me");
  expect(button).toBeInTheDocument();

  // Check that the correct class is applied
  expect(button).toHaveClass("btn primary");

  // Check that the click handler is called when the button is clicked
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
