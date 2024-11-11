import React from "react";
import { Button } from "react-bootstrap";

const ReusableButton = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ReusableButton;
