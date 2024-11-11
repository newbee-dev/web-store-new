import React from "react";
import { useSelector } from "react-redux";

const Heading = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <p className="text-cart">Welcome, {user.username}! </p>
    </div>
  );
};

export default Heading;
