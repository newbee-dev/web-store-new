import React from "react";
// import bootstrap form to render
import Form from "react-bootstrap/Form";

function ShippingOptions() {
  return (
    <Form>
      <Form.Group controlId="formBasicRadio">
        <Form.Label>Shipping Options</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Standard Shipping"
            name="shippingOption"
            id="standardShipping"
            defaultChecked
          />
          <Form.Check
            type="radio"
            label="Speedy Shipping"
            name="shippingOption"
            id="speedyShipping"
          />
          <Form.Check
            type="radio"
            label="Free Shipping"
            name="shippingOption"
            id="freeShipping"
          />
        </div>
      </Form.Group>
    </Form>
  );
}

export default ShippingOptions;
