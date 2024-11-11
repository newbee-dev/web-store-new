// // To be imported in main parent component or App.js
// Landing.js component
import React from "react";
import "../styles/Landing.css";
// import bootstrap styles functionality
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import link from router-dom to enable navigation
import { Link } from "react-router-dom";
// import logout action functionality from reducer
import { logout } from "../redux/reducers/authSlice";
// import reusable button component
import ReusableButton from "../components/ReusableButton";
// import useSelector and useDispatch to read and change state
import { useSelector, useDispatch } from "react-redux";

const Landing = () => {
  // initialise useSelector and useDispatch
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // dispatch logout action OnClick
  const handleLogout = () => {
    dispatch(logout());
  };
  return <div>Landing</div>;
};

export default Landing;
