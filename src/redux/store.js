// STORE***// entire state tree is stored in single javascroipt object named store.js (lower case s)
// can only be updated by dispatching actions (useDispatch)
// useSelector can only read current state/value
// defined state logic is defined in createSlice/reducer components that is imported to store
// import cofigureStore
import { configureStore } from "@reduxjs/toolkit";
// Import reducers
import authSlice from "./reducers/authSlice";
import cartSlice from "./reducers/cartSlice";
import popupSlice from "./reducers/popupSlice";

// configureStore is exported with a reducer
// The `reducer:` property, is a function that specifies how the state of an application changes in response to actions
const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    popup: popupSlice,
  },
});
export default store;
