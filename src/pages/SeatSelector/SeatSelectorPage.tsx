import MapSection from "../../components/SeatSelectorPage/Section/MapSection";
import "./seat-selector.styles.css";
import image from "../../assets/vol-ground.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Msg from "../../common/Empty-states/Msg";
import SeatsWrapper from "../../components/SeatSelectorPage/Seats/SeatsWrapper/SeatsWrapper";
import Modal from "../../common/Modal/Modal";
import TicketInfo from "../../components/SeatSelectorPage/Ticket/TicketInfo";
import { useNavigate } from "react-router-dom";
import { TicketLocation } from "../../../types";

const SeatSelectorPage = () => {
  const [MapsData, setMapData] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [seatsData, setSeatsData] = useState<[][]>([]);
  const [selectedSeat, setSelectedSeat] = useState<TicketLocation>({
    x: 0,
    y: 0,
  });
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
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
  });

  const seatSelectorHandler = async () => {
    try {
      const data = await axios.post(`/maps/${selectedId}/ticket`, selectedSeat);
      console.log(data.data.status);
      if (data.data.status === "success") {
        navigate("/confirm");
      }
    } catch (error) {
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
        <SeatsWrapper
          seatsData={seatsData}
          modalOpenHandler={modalOpenHandler}
        />
      </div>
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
