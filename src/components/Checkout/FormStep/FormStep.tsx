import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import OrderSummary from "../OrderSummary/OrderSummary";
import Payment from "../Payment/Payment";
import ShippingMethod from "../ShippingMethod";
import { useState } from "react";
import ConfirmCheckoutData from "../ConfirmCheckoutData/ConfirmCheckoutData";
import {
  Container,
  Line,
  CurrentStep,
  StepName,
  StepContainer,
  Wrapper,
} from "./FormStepStyles";
import { CheckoutDataTypes } from "../assets/interfaces/Interfaces";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
}

const FormStep = ({ step, setStep }: Props) => {
  const [checkoutData, setCheckoutData] = useState<CheckoutDataTypes>({});
  const stepNumber = [1, 2, 3, 4];
  console.log(step);

  return (
    <Wrapper>
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
          <CheckoutForm
            setStep={setStep}
            setCheckoutData={setCheckoutData}
            checkoutData={checkoutData}
          />
        )}
        {step === 2 && (
          <Payment
            setStep={setStep}
            setCheckoutData={setCheckoutData}
            checkoutData={checkoutData}
          />
        )}
        {step === 3 && (
          <ShippingMethod
            setStep={setStep}
            checkoutData={checkoutData}
            setCheckoutData={setCheckoutData}
          />
        )}
        {step === 4 && <OrderSummary setStep={setStep} />}
        {step === 5 && (
          <ConfirmCheckoutData checkoutData={checkoutData} setStep={setStep} />
        )}
      </Container>
    </Wrapper>
  );
};

export default FormStep;
