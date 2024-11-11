import React from "react";
// import useSelector to read state
import { useSelector } from "react-redux";

const TotalPrice = () => {
  // initialise useSelector
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return <div className="text-cart">TotalPrice: {totalPrice}</div>;
};

export default TotalPrice;
