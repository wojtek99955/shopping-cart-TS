import styled from "styled-components";
import { CheckoutDataTypes } from "../assets/interfaces/Interfaces";
import { BtnsContainer } from "../assets/atoms/CardsStyles";
type Props = {
  checkoutData: CheckoutDataTypes | undefined;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
const Container = styled.div`
  box-shadow: 0px 0px 24px -15px rgba(66, 68, 90, 1);
  border-radius: 15px;
  padding: 1rem;

  h2 {
    text-align: center;
  }
  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.6rem;
  }
`;

const Data = styled.div``;
const UserData = styled.div``;
const Address = styled.div``;
const Shipping = styled.div``;
const Payment = styled.div``;

const ConfirmCheckoutData = ({ checkoutData, setStep }: Props) => {
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
          <p>Address: {checkoutData?.address}</p>
          <p>Zip Code: {checkoutData?.zip}</p>
          <p>City: {checkoutData?.city}</p>
          <p>Country: {checkoutData?.country}</p>
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
      <BtnsContainer>
        <button onClick={() => setStep((prev) => prev - 1)}>Back</button>
        <button>Place Order</button>
      </BtnsContainer>
    </Container>
  );
};

export default ConfirmCheckoutData;
