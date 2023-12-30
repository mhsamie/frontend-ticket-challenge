// Importing necessary libraries and types
import { FC } from "react";
import "./msg-styles.css";
import { MsgProps } from "../../../types";

// Defining the Msg component
const Msg: FC<MsgProps> = ({ type, msg }) => {
  // The Msg component accepts props of type MsgProps

  return (
    <div className="msg-container">
      <span className={`msg ${type}`}>{msg}</span>
    </div>
  );
  // className: dynamically set to "msg" followed by the type of the message
  // msg: the text to be displayed inside the span
};

// Exporting the Msg component
export default Msg;
