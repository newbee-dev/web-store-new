// Inside this slice, define state values and functions (actions), to manage the application's state.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Check for user in local storage
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  // Set loggedIn based on user existence
  isLoggedIn: localStorage.getItem("user") ? true : false,
  users: [], // To store registered users
};

const authSlice = createSlice({
  // name: This property's value will be the name of the slice and is defined as a string.
  name: "auth",
  initialState,
  // reducer functions (actions) that change state
  //  defined as key-value pairs where the key is the function name and the value is a function.
  // A function typically has two arguments, state and action
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      // Redirect the user to the login page after successful registration
    },
    loginSuccess: (state, action) => {
      const { username } = action.payload;
      const user = state.users.find((user) => user.username === username);

      if (user) {
        state.user = user;
        state.isLoggedIn = true;
        // Store user data in local storage
        localStorage.setItem("user", JSON.stringify(user));
      } else {
      }
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});
// TWO TYPES OF EXPORT IN REDUCER SLICES:
// Export the action functions to be used in components
// Actions receive data from the component they are imported into, to make dynamic changes to the state.
// EXPORTED TO RELEVENT COMPONENT
export const { registerUser, loginSuccess, logout } = authSlice.actions;
//Export the reducer function EXPORT TO STORE
export default authSlice.reducer;
