// // component that displays... will trigger reducer functions and also displays the state value
// // To be imported in main parent component or App.js
// ShoppingCart.js component
import React from "react";
// import { Link } from "react-router-dom";
// import useSelector to read and useDispatch to change, state.
import { useDispatch, useSelector } from "react-redux";
// import remove from cart action from reducer
import { removeFromCart } from "../redux/reducers/cartSlice";
// import Reusable button and Total price components
import ReusableButton from "../components/ReusableButton";
import TotalPrice from "../components/TotalPrice";
// import useNavigate for navigation functionality
import { useNavigate } from "react-router-dom";

// import { logout } from "./authSlice";

const ShoppingCart = () => {
  // initialise useSelector to access and read current state of cart items
  const cartItems = useSelector((state) => state.cart.cartItems);
  // initialise useDispatch for remove from cart action and to change state value
  const dispatch = useDispatch();
  // initialise useNavigate for navigation
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to shipping
    navigate("/shipping");
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return <div>ShoppingCart</div>;
};

export default ShoppingCart;
