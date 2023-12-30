// import component needs
import { FC } from "react";
import SeatRow from "../SeatRows/SeatRow";
import Msg from "../../../../common/Empty-states/Msg";
import { SeatsWrapperProps } from "../../../../../types";

// Defining the SeatsWrapper component
const SeatsWrapper: FC<SeatsWrapperProps> = ({
  seatsData,
  modalOpenHandler,
}) => {
  // show an error in case of no seats data came back as results
  if (!seatsData.length)
    return (
      <Msg
        type="info"
        msg="To reserve your ticket you need to select one of the sections."
      />
    );

  // loop throw seats data to access to each row
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
    // throw an error in case of unwanted results
    <Msg type="error" msg="sth went wrong" />
  );
};

export default SeatsWrapper;
