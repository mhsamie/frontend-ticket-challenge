// Importing necessary libraries and types
import { useSearchParams } from "react-router-dom";
import { getCurrentTime } from "../../services/utils/formatDate"; // Importing getCurrentTime function from customr format Date module
import Msg from "../../common/Empty-states/Msg";
import "./confirm-styles.css";

// Defining the ConfirmedId component
const ConfirmedId = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // Using the useSearchParams hook to get the current URL search parameters
  //  to access ticket id and show it to the user

  const ticketId = searchParams.get("ticketID");
  const time = getCurrentTime();
  // Getting the current time

  return (
    <>
      <Msg
        type="success"
        msg={`Your ticket has been reserved successfully at ${time}.`}
      />
      {/* displays the ticket ID */}
      <span className="ticket-id">
        You can track your ticket with this ID: {ticketId}
      </span>
      <span className="discription">
        Please notice you need to bring cash in case of finilizing yout ticket.
      </span>
      <span className="discription">Thanks for choosing us.</span>
    </>
  );
};

// Exporting the ConfirmedId component
export default ConfirmedId;
