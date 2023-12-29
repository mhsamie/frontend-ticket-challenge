import React, { FC } from "react";
import "../Seats-style.css";
import axios from "axios";

const Seat: FC<{
  mapId: string;
  location: { x: number; y: number };
  value: 0 | 1;
}> = ({ value, mapId, location }) => {
  const seatColor = value === 0 ? "red" : "white";
  const seatSelectorHandler = async (
    type: 0 | 1,
    location: { x: number; y: number }
  ) => {
    if (!!type) {
      try {
        const data = await axios.post(`/maps/${mapId}/ticket`, location);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div
      role="button"
      onClick={() => seatSelectorHandler(value, location)}
      className={`seat ${seatColor}`}
    />
  );
};

export default Seat;
