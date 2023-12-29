import { FC } from "react";
import "../Seats-style.css";
import { TicketLocation } from "../../../../../types";

const Seat: FC<{
  location: TicketLocation;
  modalOpenHandler: (location: TicketLocation) => void;
  value: 0 | 1;
}> = ({ value, modalOpenHandler, location }) => {
  const seatColor = value === 1 ? "red" : "white";

  return (
    <div
      role="button"
      onClick={() => value !== 1 && modalOpenHandler(location)}
      className={`seat ${seatColor}`}
    >
      {location.y + 1}
    </div>
  );
};

export default Seat;
