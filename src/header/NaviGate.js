import React from "react";
// import react bootstrap components
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import link for navigation
import { Link } from "react-router-dom";
// import redux hooks to read and change state
import { useSelector, useDispatch } from "react-redux";
// import relevent reducer action
import { logout } from "../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";

function NaviGate() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
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
            <Link
              className="nav-link 
 my-link"
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link my-link" to="/about">
              About
            </Link>
            {user && (
              <Link className="nav-link my-link" to="/products">
                Store
              </Link>
            )}
          </Nav>
          <Nav>
            {user ? (
              <>
                <Link className="nav-link my-link" to="/cart">
                  Cart
                </Link>
                <button className="nav-link my-link" onClick={handleLogout}>
                  Logout
                </button>
              </>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NaviGate;
