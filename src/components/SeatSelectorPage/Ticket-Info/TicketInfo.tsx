// Importing necessary libraries and types
import { FC } from "react";
import "./Ticket-styles.css";
import { TicketLocation } from "../../../../types";

// Defining the TicketInfo component
const TicketInfo: FC<{
  location: TicketLocation;
}> = ({ location }) => {
  // The TicketInfo component accepts a single prop: location
  // The location prop is of type TicketLocation
  return (
    <div className="selected-ticket">
      <span>
        your selected seat is in the row {location.x + 1} and your seat number
        is {location.y + 1}, are you sure?
      </span>
    </div>
  );
};
// Exporting the TicketInfo component
export default TicketInfo;
