import MapSection from "../../common/Section/MapSection";
import "./seat-selector.styles.css";
import image from "../../assets/vol-ground.png";
import { useEffect, useState } from "react";
import axios from "axios";

const SeatSelectorPage = () => {
  const [MapsData, setMapData] = useState<string[]>([]);
  const [selectedMap, setSelectedMap] = useState<string>("");
  const getMapsHandler = async () => {
    try {
      const data = await axios.get("/api/maps");
      console.log(data.data.data);
      setMapData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const mapSelectorHandler = (id: string) => {
    setSelectedMap(id);
  };
  useEffect(() => {
    getMapsHandler();
  }, []);

  return (
    <div data-testid="seat-selector-container" className="stadium-container">
      <div className="seats-section-container">
        {MapsData?.map((d) => (
          <MapSection name={d} mapSelectorHandler={mapSelectorHandler} />
        ))}
      </div>
      <div className="seat-selector"></div>

      {/* <img src={image} alt="bg" className="vol-ground-image" /> */}
    </div>
  );
};

export default SeatSelectorPage;
