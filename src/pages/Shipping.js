import React from "react";
import ShippingOptions from "../ui-components/ShippingOptions";
import InfoPopup from "../ui-components/InfoPopup";
import { useSelector } from "react-redux";
import ReusableButton from "../components/ReusableButton";
// import useNavigate hook to enable navigation
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const selectedShippingOption = useSelector(
    (state) => state.cart.selectedShippingOption
  );

  const calculateGrandTotal = () => {
    let shippingCost = 0;
    if (selectedShippingOption === "standardShipping") {
      shippingCost = 50;
    } else if (selectedShippingOption === "speedyShipping") {
      shippingCost = 120;
    }
    return totalPrice + shippingCost;
  };

  const grandTotal = calculateGrandTotal();

  // initialise useNavigate for navigation
  const navigate = useNavigate();

  const handleClick = () => {
    alert("Thank-you! Your order has been processed");
    navigate("/");
  };

  return (
    <div>
      <InfoPopup />
      <ShippingOptions />
      <br />
      <h4 className="small-text">Grand Total: R{grandTotal}</h4>
      <ReusableButton onClick={handleClick}>make payment</ReusableButton>
    </div>
  );
};

export default Shipping;
