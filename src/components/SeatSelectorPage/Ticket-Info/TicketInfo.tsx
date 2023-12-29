import { FC } from "react";
import "./Ticket-styles.css";
import { TicketLocation } from "../../../../types";

const TicketInfo: FC<{
  location: TicketLocation;
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
