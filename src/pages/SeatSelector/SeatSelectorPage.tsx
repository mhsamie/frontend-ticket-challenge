import MapSection from "../../components/SeatSelectorPage/Section/MapSection";
import "./seat-selector.styles.css";
import image from "../../assets/vol-ground.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Msg from "../../common/Empty-states/Msg";
import SeatsWrapper from "../../components/SeatSelectorPage/Seats/SeatsWrapper/SeatsWrapper";
import Modal from "../../common/Modal/Modal";
import TicketInfo from "../../components/SeatSelectorPage/Ticket-Info/TicketInfo";
import { useNavigate } from "react-router-dom";
import { TicketLocation } from "../../../types";

const SeatSelectorPage = () => {
  const navigate = useNavigate();
  const [mapsData, setMapData] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");
  const [seatsData, setSeatsData] = useState<(0 | 1)[][]>([]);
  const [selectedSeat, setSelectedSeat] = useState<TicketLocation>({
    x: 0,
    y: 0,
  });
  const getMapsHandler = async () => {
    setError("");
    try {
      const data = await axios.get("/maps");
      console.log(data);
      if (data.status === 200) setMapData(data.data);
    } catch (error) {
      setError("Can not fetch the map sections, please try again.");
      console.log(error);
    }
  };

  const mapSelectorHandler = async (id: string) => {
    setError("");
    setSelectedId(id);
    try {
      const data = await axios.get(`/maps/${id}`);
      if (data.status === 200) setSeatsData(data.data);
    } catch (error) {
      setError("Can not get the seats information. please try again.");
      console.log(error);
    }
  };
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
  });

  const seatSelectorHandler = async () => {
    setError("");
    try {
      const data = await axios.post(`/maps/${selectedId}/ticket`, selectedSeat);
      console.log(data.data.ticket);
      if (data.data.status === "success") {
        navigate("/confirm");
      }
    } catch (error) {
      setError("Your reservation occured an error, please try again.");
      console.log(error);
    } finally {
      modalOnClose();
    }
  };
  const modalOpenHandler = (location: TicketLocation) => {
    setSelectedSeat(location);
    setConfirmationModal({ ...confirmationModal, isOpen: true });
  };

  const modalOnClose = () => {
    setConfirmationModal({ ...confirmationModal, isOpen: false });
  };

  useEffect(() => {
    getMapsHandler();
  }, []);

  return (
    <main data-testid="seat-selector-container" className="stadium-container">
      <div className="seats-section-container">
        {mapsData.length > 0 &&
          mapsData?.map((map, index) => (
            <MapSection
              active={selectedId}
              key={`map-${index}`}
              name={map}
              mapSelectorHandler={mapSelectorHandler}
            />
          ))}
      </div>
      {!error && (
        <div className="seat-selector">
          <SeatsWrapper
            seatsData={seatsData}
            modalOpenHandler={modalOpenHandler}
          />
        </div>
      )}
      {error && <Msg type="error" msg={error} />}
      <Modal
        children={<TicketInfo location={selectedSeat} />}
        onConfirm={seatSelectorHandler}
        isOpen={confirmationModal.isOpen}
        onClose={modalOnClose}
        title="Confirm Your Seat"
      />
    </main>
  );
};

export default SeatSelectorPage;
