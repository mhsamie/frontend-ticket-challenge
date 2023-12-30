// imported indispensable reqiuremnets
import { FC } from "react";
import Seat from "../Seat/Seat";
import "../Seats-style.css";
import { SeatRowProps } from "../../../../../types";
import Msg from "../../../../common/Empty-states/Msg";

// defined the component
const SeatRow: FC<SeatRowProps> = ({
  rowData,
  modalOpenHandler,
  rowNumber,
}) => {
  // The SeatRow component accepts props of type SeatRowProps
  // The props include: rowData, modalOpenHandler, and rowNumber
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
          // The Seat component accepts props: key, value, modalOpenHandler, and location as its props
          // key is a unique identifier for each seat to make the access easy
          // value is the data of the seat=> available or occupied
          // location is an object that represents the location of the seat
        ))
      ) : (
        // show an error in case of unwanted results
        <Msg type="error" msg="sth went wrong" />
      )}
    </div>
  );
};
//export the component
export default SeatRow;
