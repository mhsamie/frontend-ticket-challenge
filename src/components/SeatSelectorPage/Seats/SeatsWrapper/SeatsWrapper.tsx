import React, { FC, useEffect } from "react";
import SeatRow from "../SeatRows/SeatRow";
import Msg from "../../../../common/Empty-states/Msg";

const SeatsWrapper: FC<{ seatsData: number[][]; mapId: string }> = ({
  seatsData,
  mapId,
}) => {
  if (!seatsData.length)
    return (
      <Msg
        type="info"
        msg="To reserve your ticket you need to select one of the sections."
      />
    );
  return seatsData?.map((d, i) => (
    <SeatRow key={i} rowData={d} rowNumber={i} mapId={mapId} />
  ));
};

export default SeatsWrapper;
