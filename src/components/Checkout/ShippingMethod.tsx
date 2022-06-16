import React from "react";
import { Title } from "./OrderSummary";
import styled from "styled-components";

const Container = styled.div`
  width: 20rem;
  box-shadow: 0px 0px 24px -15px rgba(66, 68, 90, 1);
  border-radius: 15px;
  padding: 1rem;
`;

const ShippingMethod = () => {
  return (
    <Container>
      <Title>
        <span>3</span>
        <h1>Shipping Methods</h1>
      </Title>
    </Container>
  );
};

export default ShippingMethod;
