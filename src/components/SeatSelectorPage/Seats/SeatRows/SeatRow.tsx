import { FC, useEffect, useState } from "react";
import Seat from "../Seat/Seat";
import "../Seats-style.css";
import { TicketLocation } from "../../../../../types";
import Msg from "../../../../common/Empty-states/Msg";

const SeatRow: FC<{
  rowNumber: number;
  rowData: (0 | 1)[];
  modalOpenHandler: (location: TicketLocation) => void;
}> = ({ rowData, modalOpenHandler, rowNumber }) => {
  return (
    <div className="seat-row-container" role="row">
      <span>{rowNumber + 1}</span>
      {rowData.length > 0 ? (
        rowData?.map((seats, index) => (
          <Seat
            key={`s${index}`}
            value={seats}
            modalOpenHandler={modalOpenHandler}
            location={{ x: rowNumber, y: index }}
          />
        ))
      ) : (
        <Msg type="error" msg="sth went wrong" />
      )}
    </div>
  );
};

export default SeatRow;
