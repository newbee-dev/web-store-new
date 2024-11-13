import React from "react";
// import useSelector to read state and useDispatch to change state
import { useDispatch, useSelector } from "react-redux";
// import actions from reducer
import { showPopup, hidePopup } from "../redux/reducers/popupSlice";
import "../styles/InfoPopup.css";
import ReusableButton from "../components/ReusableButton";

const InfoPopup = () => {
  // initialise useSelector to read state and useDispatch to call reducer function actions onClick
  const dispatch = useDispatch();
  const popupState = useSelector((state) => state.popup);

  const handleInfoClick = () => {
    dispatch(
      showPopup(
        "standard shipping: 5-7 business days (R50) Fast shipping: 2-3 business days (R120). "
      )
    );
  };

  const handleCloseClick = () => {
    dispatch(hidePopup());
  };
  return (
    <div>
      <ReusableButton onClick={handleInfoClick}>help</ReusableButton>

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
