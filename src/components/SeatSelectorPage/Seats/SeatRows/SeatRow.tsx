import { FC, useEffect, useState } from "react";
import Seat from "../Seat/Seat";
import "../Seats-style.css";
import axios from "axios";

const SeatRow: FC<{ rowData: number[]; rowNumber: number; mapId: string }> = ({
  rowData,
  rowNumber,
  mapId,
}) => {
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
          mapId={mapId}
          key={key}
          value={value}
          location={{ x: rowNumber, y: index }}
        />
      ))}
    </div>
  );
};

export default SeatRow;
