import React, { FC } from "react";
import "./map-styles.css";
const MapSection: FC<{
  name: string;
  mapSelectorHandler: (id: string) => void;
}> = ({ name, mapSelectorHandler }) => {
  return (
    <div onClick={() => mapSelectorHandler(name)} className="map-container">
      {name}
    </div>
  );
};

export default MapSection;
