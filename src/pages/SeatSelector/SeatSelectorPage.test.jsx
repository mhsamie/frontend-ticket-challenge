import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SeatSelectorPage from "./SeatSelectorPage";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("SeatSelectorPage", () => {
  it("renders loading state", () => {
    render(<SeatSelectorPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders error state", async () => {
    const axios = require("axios");
    axios.get.mockImplementationOnce(() =>
      Promise.reject(
        new Error("Can not fetch the map sections, please try again.")
      )
    );

    render(<SeatSelectorPage />);
    await screen.findByText(
      /Can not fetch the map sections, please try again./i
    );
  });
});
