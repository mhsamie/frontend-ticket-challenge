import MapSection from "../../components/SeatSelectorPage/Section/MapSection";
import "./seat-selector.styles.css";
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");
  const [seatsData, setSeatsData] = useState<(0 | 1)[][]>([]);
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
  });
  const [selectedSeat, setSelectedSeat] = useState<TicketLocation>({
    x: 0,
    y: 0,
  });
  //all recive and post data to db logic is here due to debuge and access easier
  const getMapsHandler = async () => {
    try {
      const data = await axios.get("/maps");
      if (data.status === 200) setMapData(data.data);
      setError("");
    } catch (error) {
      setError("Can not fetch the map sections, please try again.");
    } finally {
      setIsLoading(false);
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
    }
  };

  const seatSelectorHandler = async () => {
    setError("");
    try {
      const data = await axios.post(`/maps/${selectedId}/ticket`, selectedSeat);
      if (data.data.status === "success") {
        //Pass ticked id with query string as the it isn't a sensetive data
        navigate(`/confirm?ticketID=${data.data.ticket.id}`);
      }
    } catch (error) {
      setError("Your reservation occured an error, please try again.");
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
      {isLoading && <div>loading</div>}
      {error && <Msg type="error" msg={error} />}
      <div className="seats-section-container">
        {mapsData.length > 0 &&
          !isLoading &&
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
