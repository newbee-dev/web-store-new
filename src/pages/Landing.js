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
  return (
    <div className="background-pic">
      <img
        className="img"
        width={158}
        height={185}
        alt=""
        src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3N8ZW58MHx8MHx8fDA%3D"
      />
      <Container className="heading-container">
        <Row>
          <Col>
            <h1 className="heading-text">
              Designs <hr />
              On <hr />
              You
            </h1>
          </Col>
        </Row>
      </Container>
      {/* if logged out display register and login button, if logged in display logout button */}
      {user ? (
        <div>
          <ReusableButton onClick={handleLogout}>Logout</ReusableButton>
        </div>
      ) : (
        <>
          <p className="small-text"> new member?</p>
          <br />
          <Link to="/registrationPage">
            <ReusableButton>Register</ReusableButton>
          </Link>
          <p className="small-text">member?</p>
          <br />
          <Link to="/loginPage">
            <ReusableButton>Login</ReusableButton>
          </Link>
        </>
      )}
    </div>
  );
};

export default Landing;
