// // component that displays... will trigger reducer functions and also displays the state value
// // To be imported in main parent component or App.js
// ShoppingCart.js component
import React from "react";
// import { Link } from "react-router-dom";
// import useSelector to read and useDispatch to change, state.
import { useDispatch, useSelector } from "react-redux";
// import remove from cart action from reducer
import { removeFromCart } from "../redux/reducers/cartSlice";
// import Reusable button and Total price components
import ReusableButton from "../components/ReusableButton";
import TotalPrice from "../components/TotalPrice";
// import useNavigate for navigation functionality
import { useNavigate } from "react-router-dom";

// import { logout } from "../redux/reducers/authSlice";

const ShoppingCart = () => {
  // initialise useSelector to access and read current state of cart items
  const cartItems = useSelector((state) => state.cart.cartItems);
  // initialise useDispatch for remove from cart action and to change state value
  const dispatch = useDispatch();
  // initialise useNavigate for navigation
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to shipping
    navigate("/shipping");
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div>
      <h2 className="heading-text">Shopping Cart</h2>
      <div>
        <TotalPrice />
      </div>

      {/* <nav>
        <Link to="/">Home</Link>
      </nav> */}
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p className="text-cart">{item.title}</p>
              <img className="cart-pic" src={item.picture} alt={item.title} />
              <p className="text-cart">Price: {item.price}</p>

              <ReusableButton onClick={() => handleRemoveFromCart(item)}>
                remove
              </ReusableButton>
              <br />
              <ReusableButton onClick={() => handleClick()}>
                shipping
              </ReusableButton>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty!</p>
      )}

      {/* <ReusableButton onClick={handleLogout}>Logout</ReusableButton> */}
    </div>
  );
};

export default ShoppingCart;
