import { useSearchParams } from "react-router-dom";
import { getCurrentTime } from "../../services/utils/formatDate";
import Msg from "../../common/Empty-states/Msg";
import "./confirm-styles.css";

const ConfirmedId = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ticketId = searchParams.get("ticketID");
  const time = getCurrentTime();
  return (
    <>
      <Msg
        type="success"
        msg={`Your ticket has been reserved successfully at ${time}.`}
      />
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

export default ConfirmedId;
