import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
// Import your registration action
import { registerUser } from "../redux/reducers/authSlice";
// Import your reusable button component
import "../styles/Register.css";

// Import your reusable button component
import ReusableButton from "../components/ReusableButton";
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
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .max(15, "First name must not exceed 15 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .max(20, "Surname should not exceed 20 characters"),
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*()]/,
        "Password must contain at least one special character"
      ),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
      }) => (
        <Form className="registration-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="form-control"
              type="text"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && (
              <div className="error">{errors.lastName}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              className="form-control"
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && (
              <div className="error">{errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}
          </div>
          <ReusableButton onClick={handleSubmit}>Register</ReusableButton>
        </Form>
      )}
    </Formik>
  );
};
export default Register;
