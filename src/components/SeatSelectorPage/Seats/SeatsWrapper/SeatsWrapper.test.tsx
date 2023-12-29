import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SeatsWrapper from "./SeatsWrapper";

describe("SeatsWrapper", () => {
  it("renders correctly with seatsData", () => {
    const seatsData = [
      [1, 0, 0],
      [1, 1, 0],
    ];
    const { getAllByRole } = render(
      <SeatsWrapper seatsData={seatsData} mapId="1" />
    );
    const seatRows = getAllByRole("row");
    expect(seatRows).toHaveLength(seatsData.length);
  });

  it("renders Msg component when seatsData is empty", () => {
    const { getByText } = render(<SeatsWrapper seatsData={[]} mapId="1" />);
    expect(
      getByText(
        "To reserve your ticket you need to select one of the sections."
      )
    ).toBeInTheDocument();
  });
});
