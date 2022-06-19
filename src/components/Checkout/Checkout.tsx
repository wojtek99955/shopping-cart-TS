import styled from "styled-components";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import Payment from "./Payment";
import ShippingMethod from "./ShippingMethod";
import { device } from "../../assets/media";

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
`;

const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Checkout = () => {
  return (
    <Wrapper>
      <CheckoutContainer>
        <CheckoutForm />
        <MiddleColumn>
          <Payment />
          <ShippingMethod />
        </MiddleColumn>
        <OrderSummary />
      </CheckoutContainer>
    </Wrapper>
  );
};

export default Checkout;
