// // component that displays... will trigger reducer functions and also displays the state value
// // To be imported in main parent component or App.js
import React from "react";

import { useDispatch, useSelector } from "react-redux";
// Import the action creator
import { addToCart } from "../redux/reducers/cartSlice";
// Import Link for navigation
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/ProductPage.css";
import ReusableButton from "../components/ReusableButton";
import TotalPrice from "../components/TotalPrice";

const ProductPage = () => {
  return <div>ProductPage</div>;
};

export default ProductPage;
