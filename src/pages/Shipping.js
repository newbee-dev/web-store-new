import React from "react";
import ShippingOptions from "../ui-components/ShippingOptions";
import InfoPopup from "../ui-components/InfoPopup";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ShippingOptions.css";
import ReusableButton from "../components/ReusableButton";

const Shipping = () => {
  return (
    <div className="shipping-options">
      <Container>
        <Row>
          <InfoPopup />
          <ShippingOptions />
        </Row>
        <Col>
          <ReusableButton>make payment</ReusableButton>
        </Col>
      </Container>
    </div>
  );
};

export default Shipping;
