import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Msg from "./Msg";

describe("Msg", () => {
  it('renders correctly with type "info"', () => {
    const { getByText } = render(<Msg type="info" msg="Info message" />);
    const msg = getByText("Info message");
    expect(msg).toBeInTheDocument();
  });

  it('renders correctly with type "error"', () => {
    const { getByText } = render(<Msg type="error" msg="Error message" />);
    const msg = getByText("Error message");
    expect(msg).toBeInTheDocument();
  });

  it('renders correctly with type "success"', () => {
    const { getByText } = render(<Msg type="success" msg="Success message" />);
    const msg = getByText("Success message");
    expect(msg).toBeInTheDocument();
  });
});
