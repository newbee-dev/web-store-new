import React from "react";
// import useSelector to read state and useDispatch to change state
import { useDispatch, useSelector } from "react-redux";
// import actions from reducer
import { showPopup, hidePopup } from "../redux/reducers/popupSlice";

const InfoPopup = () => {
  // initialise useSelector to read state and useDispatch to call reducer function actions onClick
  const dispatch = useDispatch();
  const popupState = useSelector((state) => state.popup);

  const handleInfoClick = () => {
    dispatch(
      showPopup(
        "Random text goes here for now. Random text goes here for now .Random text goes here for now  "
      )
    );
  };

  const handleCloseClick = () => {
    dispatch(hidePopup());
  };
  return <div>InfoPopup</div>;
};

export default InfoPopup;
