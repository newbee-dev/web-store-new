import React, { useState } from "react";
// import useSelector to read, and useDispatch to change, state
import { useSelector, useDispatch } from "react-redux";
// import formik functions
import { Formik, Form, Field, ErrorMessage } from "formik";
// import yup for validation schema functionality
import * as Yup from "yup";
import ReusableButton from "../components/ReusableButton";
// Import loginSuccess action
import { loginSuccess } from "../redux/reducers/authSlice";
// import navigation functionality
import { useNavigate } from "react-router-dom";

import React from "react";

const Login = () => {
  // initialise imports
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
  });
  // validate userName against username stored in user object
  const handleSubmit = (values) => {
    const user = users.find((user) => user.username === values.username);

    if (user) {
      // Successful login, dispatch the loginSuccess action
      dispatch(loginSuccess(user));
      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(user));
      // Navigate to the homepage upon successful registration
      navigate("/");
    } else {
      // Handle login failure must still add alert
    }
  };

  return (
    <Formik
      initialValues={{ username: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form className="registration-form" onSubmit={handleSubmit}>
          <p>Enter username:</p>
          <Field className="form-control" name="username" type="text" />
          <ErrorMessage name="username" component="div" />

          <ReusableButton onClick={handleSubmit}>Login</ReusableButton>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
