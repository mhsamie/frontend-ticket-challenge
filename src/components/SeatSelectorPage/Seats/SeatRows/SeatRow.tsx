import { FC, useEffect, useState } from "react";
import Seat from "../Seat/Seat";
import "../Seats-style.css";
import { TicketLocation } from "../../../../../types";

const SeatRow: FC<{
  rowNumber: number;
  rowData: number[];
  modalOpenHandler: (location: TicketLocation) => void;
}> = ({ rowData, modalOpenHandler, rowNumber }) => {
  const [hashedData, setHashedData] = useState(new Map());

  useEffect(() => {
    if (rowData) {
      const newHashedData = new Map();
      rowData.forEach((r, i) => {
        newHashedData.set(i, r);
      });
      setHashedData(newHashedData);
    }
  }, [rowData]);

  return (
    <div className="seat-row-container" role="row">
      {Array.from(hashedData).map(([key, value], index) => (
        <Seat
          key={`s${index}`}
          value={value}
          modalOpenHandler={modalOpenHandler}
          location={{ x: rowNumber, y: index }}
        />
      ))}
    </div>
  );
};

export default SeatRow;
