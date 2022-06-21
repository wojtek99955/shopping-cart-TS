import React from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import OrderSummary from "./OrderSummary/OrderSummary";
import Payment from "./Payment";
import ShippingMethod from "./ShippingMethod";
import styled from "styled-components";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
}

const Container = styled.div`
  padding-top: 8rem;
  max-width: 30rem;
  margin: auto;
`;

const FormStep = ({ step, setStep }: Props) => {
  return (
    <Container>
      {step === 1 && <CheckoutForm setStep={setStep} />}
      {step === 2 && <Payment setStep={setStep} />}
      {step === 3 && <ShippingMethod setStep={setStep} />}
      {step === 4 && <OrderSummary />}
    </Container>
  );
};

export default FormStep;
