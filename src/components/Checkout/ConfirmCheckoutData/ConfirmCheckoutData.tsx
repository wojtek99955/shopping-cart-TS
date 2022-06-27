import styled from "styled-components";
import { CheckoutDataTypes } from "../assets/interfaces/Interfaces";
type Props = {
  checkoutData: CheckoutDataTypes | undefined;
};
const Container = styled.div`
  h2 {
    text-align: center;
  }
`;

const Data = styled.div``;
const UserData = styled.div``;
const Address = styled.div``;
const Shipping = styled.div``;
const Payment = styled.div``;

const ConfirmCheckoutData = ({ checkoutData }: Props) => {
  return (
    <Container>
      <h2>Confirm Data</h2>
      <Data>
        <UserData>
          <h3>Clients Data</h3>
          <p>Name: {checkoutData?.fitstName}</p>
          <p>Surname: {checkoutData?.lastName}</p>
        </UserData>
        <Address>
          <h3>Shipping Address</h3>
          <p>{checkoutData?.address}</p>
          <p>{checkoutData?.zip}</p>
          <p>{checkoutData?.city}</p>
          <p>{checkoutData?.country}</p>
        </Address>
        <Shipping>
          <h3>Shipping Method</h3>
          <p>{checkoutData?.shipping}</p>
        </Shipping>
        <Payment>
          <h3>Payment method</h3>
          <p>{checkoutData?.payment}</p>
        </Payment>
      </Data>
    </Container>
  );
};

export default ConfirmCheckoutData;
