import React from "react";
// import bootstrap form to render
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedShipping } from "../redux/reducers/cartSlice";

function ShippingOptions() {
  const dispatch = useDispatch();
  const selectedShippingOption = useSelector(
    (state) => state.cart.selectedShippingOption
  );

  const handleShippingChange = (event) => {
    dispatch(updateSelectedShipping(event.target.value));
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicRadio">
          <h2 className="heading-text">Shipping Options</h2>

          <div className="radio-container">
            <Form.Check
              type="radio"
              label="Standard Shipping"
              name="shippingOption"
              id="standardShipping"
              value="standardShipping"
              checked={selectedShippingOption === "standardShipping"}
              onChange={handleShippingChange}
              defaultChecked
            />
            <Form.Check
              type="radio"
              label="Speedy Shipping"
              name="shippingOption"
              id="speedyShipping"
              value="speedyShipping"
              checked={selectedShippingOption === "speedyShipping"}
              onChange={handleShippingChange}
            />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ShippingOptions;
