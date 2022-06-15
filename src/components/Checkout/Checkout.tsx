import styled from "styled-components";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import Payment from "./Payment";

const CheckoutContainer = styled.section`
  padding: 6rem 0;
  display: flex;
  justify-content: center;
`;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutForm />
      <Payment />
      <OrderSummary />
    </CheckoutContainer>
  );
};

export default Checkout;
