// app.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  test("App fully rendered", async () => {
    render(<App />);
    expect(screen.getByTestId("seat-selector-container")).toBeInTheDocument();
  });
});
