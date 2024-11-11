import React from "react";
import NaviGate from "./NaviGate";
import Heading from "../components/Heading";
// // import useSelector (retrieves state from store)
import { useSelector } from "react-redux";

const Header = () => {
  // useSelector function to get the state from the store
  // If the user is logged in, display the heading
  const { user } = useSelector((state) => state.auth);
  const renderContent = () => {
    if (user) {
      return (
        <>
          <NaviGate />
          <Heading />
        </>
      );
    }
    return <NaviGate />;
  };

  return <div>{renderContent()}</div>;
};

export default Header;
