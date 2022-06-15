import styled from "styled-components";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import Payment from "./Payment";
import ShippingMethod from "./ShippingMethod";

const CheckoutContainer = styled.section`
  padding: 6rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const MiddleColumn = styled.div``;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutForm />
      <MiddleColumn>
        <Payment />
        <ShippingMethod />
      </MiddleColumn>
      <OrderSummary />
    </CheckoutContainer>
  );
};

export default Checkout;
