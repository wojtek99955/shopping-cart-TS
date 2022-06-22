import React from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import OrderSummary from "./OrderSummary/OrderSummary";
import Payment from "./Payment";
import ShippingMethod from "./ShippingMethod";
import styled from "styled-components";
import { useState } from "react";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
}

const Container = styled.div`
  padding-top: 8rem;
  max-width: 30rem;
  margin: auto;
`;

const CurrentStep = styled.div``;

const FormStep = ({ step, setStep }: Props) => {
  const [checkoutData, setCheckoutData] = useState({});
  return (
    <Container>
      <CurrentStep></CurrentStep>

      {step === 1 && (
        <CheckoutForm setStep={setStep} setCheckoutData={setCheckoutData} />
      )}
      {step === 2 && (
        <Payment setStep={setStep} setCheckoutData={setCheckoutData} />
      )}
      {step === 3 && (
        <ShippingMethod setStep={setStep} setCheckoutData={setCheckoutData} />
      )}
      {step === 4 && (
        <OrderSummary
          setCheckoutData={setCheckoutData}
          checkoutData={checkoutData}
        />
      )}
    </Container>
  );
};

export default FormStep;
