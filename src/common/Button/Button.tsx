// Importing necessary libraries and types
import { FC } from "react";
import "./Button-styles.css";
import { ButtonProps } from "../../../types";

// Defining the Button component
const Button: FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {text}
    </button>
  );
  // onClick: function to be executed when the button is clicked
  // className: dynamically set to "btn" followed by the type of the button
  // text: the text to be displayed inside the button
};

// Exporting the Button component
export default Button;
