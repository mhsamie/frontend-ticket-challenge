// Modal.test.js
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

test("renders the modal with the correct title and responds to click events", () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();
  const { getByText, getByRole } = render(
    <Modal
      isOpen={true}
      onClose={mockOnClose}
      onConfirm={mockOnConfirm}
      title="Test Modal"
    >
      <div>Test Content</div>
    </Modal>
  );

  // Check that the modal is rendered with the correct title
  const title = getByText("Test Modal");
  expect(title).toBeInTheDocument();

  // Check that the close button and confirm button are rendered
  const closeButton = getByText("Cancel");
  const confirmButton = getByText("Yes, I do.");
  expect(closeButton).toBeInTheDocument();
  expect(confirmButton).toBeInTheDocument();

  // Check that the onClose and onConfirm handlers are called when the buttons are clicked
  fireEvent.click(closeButton);
  expect(mockOnClose).toHaveBeenCalledTimes(1);

  fireEvent.click(confirmButton);
  expect(mockOnConfirm).toHaveBeenCalledTimes(1);

  // Check that the onClose handler is called when the overlay is clicked
  const overlay = getByRole("overlay", { name: "" });
  fireEvent.click(overlay);
  expect(mockOnClose).toHaveBeenCalledTimes(2);
});
