import store from "./store";
import { addToCart } from "./cartSlice";

describe("cart reducer", () => {
  it("should add an item to an empty cart", () => {
    const item = { id: 1, price: 10 };
    store.dispatch(addToCart(item));
    const state = store.getState();

    expect(state.cart.cartItems).toEqual([{ id: 1, price: 10, quantity: 1 }]);
    expect(state.cart.totalPrice).toBe(10);
  });
});
