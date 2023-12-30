import { FC } from "react";
import "./msg-styles.css";
const Msg: FC<{ type: "info" | "error" | "success"; msg: string }> = ({
  type,
  msg,
}) => {
  return (
    <div
      style={{
        color:
          type === "info" ? "yellow" : type === "error" ? "darkred" : "green",
      }}
      className="msg-container"
    >
      <span className="msg">{msg}</span>
    </div>
  );
};

export default Msg;
