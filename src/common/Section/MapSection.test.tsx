import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MapSection from "./MapSection";

describe("MapSection", () => {
  it("should call the mapSelectorHandler when clicked", () => {
    const mapSelectorHandler = jest.fn();
    render(
      <MapSection name="Test Map" mapSelectorHandler={mapSelectorHandler} />
    );

    fireEvent.click(screen.getByText("Test Map"));

    expect(mapSelectorHandler).toHaveBeenCalledWith("Test Map");
  });

  it("should display the correct map name", () => {
    render(<MapSection name="Test Map" mapSelectorHandler={() => {}} />);

    expect(screen.getByText("Test Map")).toBeInTheDocument();
  });
});
