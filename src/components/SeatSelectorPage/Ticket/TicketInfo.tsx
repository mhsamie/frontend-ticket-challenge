import { FC } from "react";
import Button from "../../../common/Button/Button";
import "./Ticket-styles.css";

const TicketInfo: FC<{
  location: { x: number; y: number };
  //   onConfirm: () => Promise<void>;
  //   onClose: () => void;
}> = ({ location }) => {
  return (
    <div className="selected-ticket">
      <span>
        your selected seat is in the row {location.x + 1} and your seat number
        is {location.y + 1}, are you sure?
      </span>
    </div>
  );
};

export default TicketInfo;
