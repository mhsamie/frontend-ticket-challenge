import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Seat from "./Seat";
import axios from "axios";

jest.mock("axios");

describe("Seat", () => {
  it("renders correctly", () => {
    const { getByRole } = render(
      <Seat mapId="1" location={{ x: 1, y: 1 }} value={0} />
    );
    const seat = getByRole("button");
    expect(seat).toBeInTheDocument();
    expect(seat).toHaveClass("seat red");
  });

  it("calls seatSelectorHandler when clicked", async () => {
    const mockResponse = { data: "test" };
    axios.post.mockResolvedValue(mockResponse);

    const { getByRole } = render(
      <Seat mapId="1" location={{ x: 1, y: 1 }} value={1} />
    );
    const seat = getByRole("button");

    fireEvent.click(seat);

    expect(axios.post).toHaveBeenCalledWith("/maps/1/ticket", { x: 1, y: 1 });
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
