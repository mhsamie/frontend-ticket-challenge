import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ConfirmedId from "./ConfirmedId";

jest.mock("../../services/utils/formatDate", () => ({
  getCurrentTime: () => "12:00:00 01/01/21",
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [new URLSearchParams({ ticketID: "123" })],
}));

describe("ConfirmedId", () => {
  it("renders the correct ticket ID and reservation time", () => {
    render(
      <MemoryRouter>
        <ConfirmedId />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        /Your ticket has been reserved successfully at 12:00:00 01\/01\/21./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/You can track your ticket with this ID: 123/i)
    ).toBeInTheDocument();
  });
});
