// SeatsWrapper.test.js
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SeatsWrapper from "./SeatsWrapper";

test("renders correctly with seatsData", () => {
  const mockModalOpenHandler = jest.fn();
  const seatsData = [
    [0, 1, 0],
    [1, 1, 0],
    [1, 1, 0],
  ];
  const { getAllByRole } = render(
    <SeatsWrapper
      seatsData={seatsData}
      modalOpenHandler={mockModalOpenHandler}
    />
  );

  // Check that the correct number of SeatRow components are rendered
  const seatRows = getAllByRole("row");
  expect(seatRows).toHaveLength(seatsData.length);
});

test("renders the Msg component when seatsData is empty", () => {
  const mockModalOpenHandler = jest.fn();
  const { getByText } = render(
    <SeatsWrapper seatsData={[]} modalOpenHandler={mockModalOpenHandler} />
  );

  // Check that the Msg component is rendered with the correct text
  expect(
    getByText("To reserve your ticket you need to select one of the sections.")
  ).toBeInTheDocument();
});
