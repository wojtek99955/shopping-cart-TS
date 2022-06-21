import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import ShippingMethod from "./ShippingMethod";
import styled from "styled-components";

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Container = styled.div`
  padding-top: 8rem;
  max-width: 30rem;
  margin: auto;
`;

const FormStep = ({ step, setStep }: Props) => {
  return (
    <Container>
      {step === 1 && <CheckoutForm step={step} setStep={setStep} />}
      {step === 2 && <Payment step={step} setStep={setStep} />}
      {step === 3 && <ShippingMethod step={step} setStep={setStep} />}
      {step === 4 && <OrderSummary />}
    </Container>
  );
};

export default FormStep;
