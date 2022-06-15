import React from "react";
import styled from "styled-components";
import { Title } from "./OrderSummary";

const Container = styled.div`
  box-shadow: 0px 0px 24px -15px rgba(66, 68, 90, 1);
  border-radius: 15px;
  padding: 1rem;
`;

const Payment = () => {
  return (
    <Container>
      <Title>
        <span>2</span>
        <h1>Payment Method</h1>
      </Title>
    </Container>
  );
};

export default Payment;
