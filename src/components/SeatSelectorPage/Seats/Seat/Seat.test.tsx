// Seat.test.js
import { render, fireEvent } from "@testing-library/react";
import Seat from "./Seat";
import "@testing-library/jest-dom";

test("renders the seat with the correct color and responds to click events", () => {
  const mockModalOpenHandler = jest.fn();
  const location = { x: 1, y: 1 };
  const { getByRole } = render(
    <Seat
      location={location}
      modalOpenHandler={mockModalOpenHandler}
      value={0}
    />
  );

  // Check that the seat is rendered with the correct class
  const seat = getByRole("button");
  expect(seat).toHaveClass("seat white");

  // Check that the modalOpenHandler is called with the correct location when the seat is clicked
  fireEvent.click(seat);
  expect(mockModalOpenHandler).toHaveBeenCalledWith(location);
});
