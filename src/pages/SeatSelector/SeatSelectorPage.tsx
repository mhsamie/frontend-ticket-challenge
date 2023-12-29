import MapSection from "../../components/SeatSelectorPage/Section/MapSection";
import "./seat-selector.styles.css";
import image from "../../assets/vol-ground.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Msg from "../../common/Empty-states/Msg";
import SeatsWrapper from "../../components/SeatSelectorPage/Seats/SeatsWrapper/SeatsWrapper";

const SeatSelectorPage = () => {
  const [MapsData, setMapData] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [seatsData, setSeatsData] = useState<[][]>([]);
  const getMapsHandler = async () => {
    try {
      const data = await axios.get("/maps");
      console.log(data.data.data);
      setMapData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const mapSelectorHandler = async (id: string) => {
    setSelectedId(id);
    try {
      const data = await axios.get(`/maps/${id}`);
      setSeatsData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMapsHandler();
  }, []);

  return (
    <main data-testid="seat-selector-container" className="stadium-container">
      <div className="seats-section-container">
        {MapsData ? (
          MapsData?.map((d) => (
            <MapSection
              active={selectedId}
              key={d}
              name={d}
              mapSelectorHandler={mapSelectorHandler}
            />
          ))
        ) : (
          <Msg
            type="error"
            msg="Currently there is no Data to show. please Try again later."
          />
        )}
      </div>
      <div className="seat-selector">
        <SeatsWrapper seatsData={seatsData} mapId={selectedId} />
      </div>

      <section className="selected-ticket-viewer">
        <div></div>
      </section>
    </main>
  );
};

export default SeatSelectorPage;
