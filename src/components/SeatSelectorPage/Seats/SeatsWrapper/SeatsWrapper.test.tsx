import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SeatsWrapper from "./SeatsWrapper";
import { MemoryRouter } from "react-router-dom";

describe("SeatsWrapper", () => {
  it("renders correctly with seatsData", () => {
    const seatsData = [
      [1, 0, 0],
      [1, 1, 0],
    ];
    const { getAllByRole } = render(
      <MemoryRouter>
        <SeatsWrapper seatsData={seatsData} mapId="1" />
      </MemoryRouter>
    );
    const seatRows = getAllByRole("row");
    expect(seatRows).toHaveLength(seatsData.length);
  });

  it("renders Msg component when seatsData is empty", () => {
    const { getByText } = render(
      <MemoryRouter>
        <SeatsWrapper seatsData={[]} mapId="1" />
      </MemoryRouter>
    );
    expect(
      getByText(
        "To reserve your ticket you need to select one of the sections."
      )
    ).toBeInTheDocument();
  });
});
