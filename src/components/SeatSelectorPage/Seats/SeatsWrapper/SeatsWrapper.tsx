import React, { FC, useEffect } from "react";
import SeatRow from "../SeatRows/SeatRow";
import Msg from "../../../../common/Empty-states/Msg";
import { TicketLocation } from "../../../../../types";

const SeatsWrapper: FC<{
  seatsData: number[][];
  modalOpenHandler: (location: TicketLocation) => void;
}> = ({ seatsData, modalOpenHandler }) => {
  if (!seatsData.length)
    return (
      <Msg
        type="info"
        msg="To reserve your ticket you need to select one of the sections."
      />
    );
  return seatsData?.map((d, i) => (
    <SeatRow
      rowNumber={i}
      key={`r${i}`}
      rowData={d}
      modalOpenHandler={modalOpenHandler}
    />
  ));
};

export default SeatsWrapper;
