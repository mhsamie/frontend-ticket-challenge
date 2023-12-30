import React, { FC } from "react";
import "./map-styles.css";
import { Mapprops } from "../../../../types";

const MapSection: FC<Mapprops> = ({ name, mapSelectorHandler, active }) => {
  // The MapSection component accepts props of type Mapprops
  // The props include: each component name, mapSelectorHandler to choose a map section, and active status of selected map
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
