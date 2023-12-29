import { FC, useState } from "react";
import "../Seats-style.css";
import axios from "axios";
import Modal from "../../../../common/Modal/Modal";
import TicketInfo from "../../Ticket/TicketInfo";
import { useNavigate } from "react-router-dom";

const Seat: FC<{
  mapId: string;
  location: { x: number; y: number };
  value: 0 | 1;
}> = ({ value, mapId, location }) => {
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
  });
  const seatColor = value === 1 ? "red" : "white";

  const seatSelectorHandler = async () => {
    try {
      const data = await axios.post(`/maps/${mapId}/ticket`, location);
      console.log(data.data.status);
      if (data.data.status === "success") {
        navigate("/confirm");
      }
    } catch (error) {
      console.log(error);
    } finally {
      modalOnClose();
    }
  };
  const modalOpenHandler = () => {
    if (value !== 1) {
      setConfirmationModal({ ...confirmationModal, isOpen: true });
    }
  };

  const modalOnClose = () => {
    setConfirmationModal({ ...confirmationModal, isOpen: false });
  };
  return (
    <>
      <Modal
        children={<TicketInfo location={location} />}
        onConfirm={seatSelectorHandler}
        isOpen={confirmationModal.isOpen}
        onClose={modalOnClose}
        title="Confirm Your Seat"
      />
      <div
        role="button"
        onClick={modalOpenHandler}
        className={`seat ${seatColor}`}
      />
    </>
  );
};

export default Seat;
