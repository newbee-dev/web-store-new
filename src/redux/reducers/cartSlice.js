// Inside this slice, define state values and functions (actions), to manage the application's state.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  selectedShippingOption: "standardShipping",
};

const cartSlice = createSlice({
  // name: This property's value will be the name of the slice and is defined as a string.
  name: "cart",
  initialState,
  reducers: {
    // reducer functions (actions) that change state
    //  defined as key-value pairs where the key is the function name and the value is a function.
    // A function typically has two arguments, state and action
    addToCart(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
    },
    updateSelectedShipping(state, action) {
      state.selectedShippingOption = action.payload;
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const itemPrice =
          state.cartItems[itemIndex].price *
          state.cartItems[itemIndex].quantity;
        state.cartItems.splice(itemIndex, 1);
        state.totalPrice -= itemPrice;
      }
    },
  },
});
// TWO TYPES OF EXPORT IN REDUCER SLICES:
// Export the action functions to be used in components
// Actions receive data from the component they are imported into, to make dynamic changes to the state.
// EXPORTED TO RELEVENT COMPONENT

export const { addToCart, updateSelectedShipping, removeFromCart } =
  cartSlice.actions;
//Export the reducer function EXPORT TO STORE
export default cartSlice.reducer;
