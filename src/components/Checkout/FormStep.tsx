import React from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import OrderSummary from "./OrderSummary/OrderSummary";
import Payment from "./Payment";
import ShippingMethod from "./ShippingMethod";
import styled from "styled-components";
import { useState } from "react";
import ConfirmCheckoutData from "./ConfirmCheckoutData/ConfirmCheckoutData";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
}

interface StyleProps {
  step: number;
}

const Container = styled.div`
  padding-top: 8rem;
  max-width: 30rem;
  margin: auto;
`;

const Line = styled.div<StyleProps>`
  height: 0.3rem;
  background-color: #e2e2e3;
  width: 4rem;

  &:last-of-type {
    &:last-child {
      background-color: ${({ step }) => step >= 4 && "#00d0a9"};
    }
  }
`;

const CurrentStep = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StepName = styled.div<StyleProps>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #e2e2e3;
  color: #00d0a9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepContainer = styled.div<StyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.2rem;

  &:nth-of-type(1) {
    ${Line} {
      background-color: ${({ step }) => step >= 1 && "#00d0a9"};
    }
    ${StepName} {
      background-color: ${({ step }) => step >= 1 && "#00d0a9"};
      color: ${({ step }) => step >= 1 && "white"};
    }
  }
  &:nth-of-type(2) {
    ${Line} {
      background-color: ${({ step }) => step >= 2 && "#00d0a9"};
    }
    ${StepName} {
      background-color: ${({ step }) => step >= 2 && "#00d0a9"};
      color: ${({ step }) => step >= 2 && "white"};
    }
  }
  &:nth-of-type(3) {
    ${Line} {
      background-color: ${({ step }) => step >= 3 && "#00d0a9"};
    }
    ${StepName} {
      background-color: ${({ step }) => step >= 3 && "#00d0a9"};
      color: ${({ step }) => step >= 3 && "white"};
    }
  }
  &:nth-of-type(4) {
    ${Line} {
      background-color: ${({ step }) => step === 4 && "#00d0a9"};
    }
    ${StepName} {
      background-color: ${({ step }) => step >= 4 && "#00d0a9"};
      color: ${({ step }) => step >= 4 && "white"};
    }
  }
`;

const FormStep = ({ step, setStep }: Props) => {
  const [checkoutData, setCheckoutData] = useState({});
  const stepNumber = [1, 2, 3, 4];
  console.log(step);

  return (
    <Container>
      <CurrentStep>
        {stepNumber.map((stepNumber) => {
          return (
            <StepContainer key={stepNumber} step={step}>
              <Line step={step} />
              <StepName step={step}>{stepNumber}</StepName>
            </StepContainer>
          );
        })}
        <Line step={step} />
      </CurrentStep>

      {step === 1 && (
        <CheckoutForm setStep={setStep} setCheckoutData={setCheckoutData} />
      )}
      {step === 2 && (
        <Payment setStep={setStep} setCheckoutData={setCheckoutData} />
      )}
      {step === 3 && (
        <ShippingMethod setStep={setStep} setCheckoutData={setCheckoutData} />
      )}
      {step === 4 && <OrderSummary setStep={setStep} />}
      {step === 5 && <ConfirmCheckoutData />}
    </Container>
  );
};

export default FormStep;
