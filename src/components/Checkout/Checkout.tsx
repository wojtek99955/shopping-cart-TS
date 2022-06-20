import styled from "styled-components";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import Payment from "./Payment";
import ShippingMethod from "./ShippingMethod";
import { device } from "../../assets/media";
import { useState } from "react";
import FormStep from "./FormStep";

const Wrapper = styled.section`
  max-width: 800px;
  margin: auto;

  @media ${device.laptop} {
    max-width: 1100px;
  }
`;

const CheckoutContainer = styled.div`
  padding: 6rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Checkout = () => {
  const [step, setStep] = useState(1);
  return (
    <Wrapper>
      <FormStep step={step} setStep={setStep} />
    </Wrapper>
  );
};

export default Checkout;
