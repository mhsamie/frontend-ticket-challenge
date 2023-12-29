import React, { FC } from "react";
import "./map-styles.css";
const MapSection: FC<{
  active: string;
  name: string;
  mapSelectorHandler: (id: string) => void;
}> = ({ name, mapSelectorHandler, active }) => {
  return (
    <div
      style={{ backgroundColor: active === name ? "#e29c4d" : "" }}
      onClick={() => mapSelectorHandler(name)}
      className={`map-container`}
    >
      {name}
    </div>
  );
};

export default MapSection;
