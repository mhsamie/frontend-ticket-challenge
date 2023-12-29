import React, { FC } from "react";
import "./Button-styles.css";

const Button: FC<{
  type: "primary" | "secondary";
  text: string;
  onClick: () => void;
}> = ({ type, text, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {text}
    </button>
  );
};

export default Button;
