// Modal.js
import React, { FC } from "react";

import "./Modal.css";
import Button from "../Button/Button";

interface Iprops {
  isOpen: boolean;
  onConfirm: any;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: FC<Iprops> = ({ isOpen, onClose, title, children, onConfirm }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={isOpen ? "modal open" : "modal"}>
      <div className="modal-overlay" role="overlay" onClick={handleClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <svg
            onClick={handleClose}
            className="close-button-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="modal-body">
          <div>{children}</div>
          <div className="action-btn-section">
            <Button type="primary" text="Yes, I do." onClick={onConfirm} />
            <Button type="secondary" text="Cancel" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
