import React from "react";
// import bootstrap form to render
import Form from "react-bootstrap/Form";
// import container and row from react bootstrap
import { Container, Row } from "react-bootstrap";
import "../styles/ShippingOptions.css";

function ShippingOptions() {
  return (
    <Container>
      <Row>
        <div>
          <Form>
            <Form.Group controlId="formBasicRadio">
              <h2 className="heading-text">Shipping Options</h2>

              <div className="radio-checks">
                <Form.Check
                  type="radio"
                  label="Standard Shipping"
                  name="shippingOption"
                  id="standardShipping"
                  defaultChecked
                  className="me-auto"
                />
                <Form.Check
                  type="radio"
                  label="Speedy Shipping"
                  name="shippingOption"
                  id="speedyShipping"
                  className="me-auto"
                />
              </div>
            </Form.Group>
          </Form>
        </div>
      </Row>
    </Container>
  );
}

export default ShippingOptions;
