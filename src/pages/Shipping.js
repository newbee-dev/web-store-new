import React from "react";
import ShippingOptions from "../ui-components/ShippingOptions";
import InfoPopup from "../ui-components/InfoPopup";
import { useSelector } from "react-redux";
import ReusableButton from "../components/ReusableButton";

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

  return (
    <div>
      <InfoPopup />
      <ShippingOptions />
      <br />
      <h4 className="small-text">Grand Total: R{grandTotal}</h4>
      <ReusableButton>make payment</ReusableButton>
    </div>
  );
};

export default Shipping;
