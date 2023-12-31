import MapSection from "../../components/SeatSelectorPage/Section/MapSection";
import "./seat-selector.styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Msg from "../../common/EmptyStates/Msg";
import SeatsWrapper from "../../components/SeatSelectorPage/Seats/SeatsWrapper/SeatsWrapper";
import Modal from "../../common/Modal/Modal";
import TicketInfo from "../../components/SeatSelectorPage/Ticket-Info/TicketInfo";
import { useNavigate } from "react-router-dom";
import { TicketLocation } from "../../../types";

// Defining the SeatSelectorPage component
const SeatSelectorPage = () => {
  // navigation hook => navigate to confirm page after payment has successed
  const navigate = useNavigate();

  // defining states to store page data
  const [mapsData, setMapData] = useState<string[]>([]);
  const [seatsData, setSeatsData] = useState<(0 | 1)[][]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [selectedSeat, setSelectedSeat] = useState<TicketLocation>({
    x: 0,
    y: 0,
  });

  //defining loading and error and modal opener states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
  });

  //all recive and post data to db logic is here due to debuge and access easier
  const getMapsHandler = async () => {
    setError("");
    try {
      const data = await axios.get("/maps");
      if (data.status === 200) setMapData(data.data);
    } catch (error) {
      setError("Can not fetch the map sections, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  //get seats of the selected map
  const getSelectedMapSeatsHandler = async (id: string) => {
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
      // close the modal at the end of the execution
      modalOnClose();
    }
  };

  // set seats location and open the modal to confirm user choice
  const modalOpenHandler = (location: TicketLocation) => {
    setSelectedSeat(location);
    setConfirmationModal({ ...confirmationModal, isOpen: true });
  };

  // close modal function
  const modalOnClose = () => {
    setConfirmationModal({ ...confirmationModal, isOpen: false });
  };

  //only fetch the maps data once at mounte time
  useEffect(() => {
    getMapsHandler();
  }, []);

  return (
    <main data-testid="seat-selector-container" className="stadium-container">
      {/* loading and error state */}
      {isLoading && <div>loading...</div>}
      {error && <Msg type="error" msg={error} />}
      {/* in case of zero error and maps data exists=> show maps to the user to select */}
      <div className="seats-section-container">
        {mapsData.length > 0 &&
          !isLoading &&
          mapsData?.map((map, index) => (
            <MapSection
              active={selectedId}
              key={`map-${index}`}
              name={map}
              mapSelectorHandler={getSelectedMapSeatsHandler}
            />
          ))}
      </div>
      {/* if there is no erorr => show seatWrapper */}
      {!error && (
        <div className="seat-selector">
          <SeatsWrapper
            seatsData={seatsData}
            modalOpenHandler={modalOpenHandler}
          />
        </div>
      )}
      {/* confirmation modal */}
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
// export page
export default SeatSelectorPage;
