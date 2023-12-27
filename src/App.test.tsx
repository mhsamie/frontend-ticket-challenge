// app.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  test("App fully rendered", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("seat-selector-container")).toBeInTheDocument();
  });
});
