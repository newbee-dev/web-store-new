import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Link from react router to enable navigation
import { Link } from "react-router-dom";
import ReusableButton from "../components/ReusableButton";
// // In the component that displays we...
// // import useSelector (retrieves state from store)
// // import useDispatch (excecutes actions that modify state)
// //Dispatch sends the message to the Redux store.
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authSlice";

function NaviGate() {
  // useSelector function to get the state from the store
  const { user } = useSelector((state) => state.auth);
  //   // dispatch function to execute reducer functions
  //   // the store receives this action and passes it to the reducers, which then executes their code to modify the state
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <Navbar
        bg="light"
        data-bs-theme="light"
        expand="lg"
        className="justify-content-center"
      >
        <Navbar.Brand>D.O.Y </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="nav-link my-link" to="/">
              Home
            </Link>
            <Link className="nav-link my-link" to="/about">
              About
            </Link>
            <Link className="nav-link my-link" to="/products">
              Store
            </Link>
          </Nav>
          <Nav>
            {user ? (
              <ReusableButton
                className="nav-link my-link"
                onClick={handleLogout}
              >
                Logout
              </ReusableButton>
            ) : (
              <>
                <Link className="nav-link my-link" to="/registrationPage">
                  Register
                </Link>

                <Link className="nav-link my-link" to="/loginPage">
                  Login
                </Link>
              </>
            )}
            <Link className="nav-link my-link" to="/cart">
              Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NaviGate;
