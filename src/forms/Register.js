import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
// Import your registration action
import { registerUser } from "../redux/reducers/authSlice";
// Import your reusable button component
import "../styles/Register.css";

// Import your reusable button component
import ReusableButton from "./ReusableButton";
// import useNavigate hook to enable navigation
import { useNavigate } from "react-router-dom";

const Register = () => {
  // initialise useDispatch for action functionality
  const dispatch = useDispatch();
  // initialise useNavigate for navigation
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      // Dispatch the registration action
      await dispatch(registerUser(values));
      // Navigate to the LoginPage upon successful registration
      navigate("/LoginPage");
    } catch (error) {
      // Handle any potential errors during registration
      console.error("Registration error:", error);
    }
  };
};
