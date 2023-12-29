import React, { FC, useEffect } from "react";
import SeatRow from "../SeatRows/SeatRow";
import Msg from "../../../../common/Empty-states/Msg";
import { TicketLocation } from "../../../../../types";

const SeatsWrapper: FC<{
  seatsData: (0 | 1)[][];
  modalOpenHandler: (location: TicketLocation) => void;
}> = ({ seatsData, modalOpenHandler }) => {
  if (!seatsData.length)
    return (
      <Msg
        type="info"
        msg="To reserve your ticket you need to select one of the sections."
      />
    );
  return seatsData.length > 0 ? (
    seatsData?.map((seat, index) => (
      <SeatRow
        rowNumber={index}
        key={`r${index}`}
        rowData={seat}
        modalOpenHandler={modalOpenHandler}
      />
    ))
  ) : (
    <Msg type="error" msg="sth went wrong" />
  );
};

export default SeatsWrapper;
