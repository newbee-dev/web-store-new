import React from "react";
// import useSelector to read state and useDispatch to change state
import { useDispatch, useSelector } from "react-redux";
// import actions from reducer
import { showPopup, hidePopup } from "../redux/reducers/popupSlice";
import "../styles/InfoPopup.css";

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
  return (
    <div>
      <button className="info-button" onClick={handleInfoClick}>
        Info
      </button>

      {popupState.isVisible && (
        <div className="info-popup">
          <div className="popup-content">{popupState.content}</div>
          <button className="close-button" onClick={handleCloseClick}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoPopup;
