import styled from "styled-components";
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

const Checkout = () => {
  const [step, setStep] = useState(1);
  return (
    <Wrapper>
      <FormStep step={step} setStep={setStep} />
    </Wrapper>
  );
};

export default Checkout;
