import React from "react";
// import { Button } from "react-bootstrap";
import "../styles/ReusableButton.css";

const ReusableButton = ({ onClick, children }) => {
  return (
    <button className="button-style" onClick={onClick}>
      {children}
    </button>
  );
};

export default ReusableButton;
