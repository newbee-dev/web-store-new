//  ****** HANDLES pop-up ACTIONS ****
// Action/reducer components need to import createSlice:
import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isVisible: false,
    content: "",
  },
  reducers: {
    showPopup: (state, action) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    hidePopup: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;
export default popupSlice.reducer;
