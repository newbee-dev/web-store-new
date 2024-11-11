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
