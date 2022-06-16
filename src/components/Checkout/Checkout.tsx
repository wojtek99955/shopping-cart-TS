import styled from "styled-components";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import Payment from "./Payment";
import ShippingMethod from "./ShippingMethod";

const Wrapper = styled.section`
  max-width: 1200px;
  margin: auto;
`;

const CheckoutContainer = styled.div`
  padding: 6rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
