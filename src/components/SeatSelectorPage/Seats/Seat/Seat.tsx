// Importing necessary libraries and types
import { FC } from "react";
import "../Seats-style.css";
import { SeatProps } from "../../../../../types";
// Defining the Seat component
const Seat: FC<SeatProps> = ({ value, modalOpenHandler, location }) => {
  // This functional component  accepts props of type SeatProps
  // The props include: value, modalOpenHandler, and location

  const seatColor = value === 1 ? "occupied" : value === 0 && "available";
  // The seatColor variable is set to "occupied" if value is 1, and "available" otherwise => the only accepted values are 1 or 0

  return (
    <div
      role="button"
      onClick={() => value !== 1 && modalOpenHandler(location)}
      className={`seat ${seatColor}`}
    >
      {/*  The component returns a div with the role "button" for testing purposes
       The div's onClick handler calls the modalOpenHandler function with the location prop as its argument if value is not 1
       The div's class is dynamically set to "seat" followed by the seatColor */}
      {location.y + 1}
      {/*  because array indices start at 0 but seat numbers usually start at 1 */}
    </div>
  );
};
// export Seat
export default Seat;
