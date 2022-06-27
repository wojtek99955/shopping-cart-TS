import styled from "styled-components";
import { CheckoutDataTypes } from "../assets/interfaces/Interfaces";
import { BtnsContainer } from "../assets/atoms/CardsStyles";
import { device } from "../../../assets/media";

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
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.6rem;
  }
  hr {
    margin-bottom: 1.2rem;
  }
`;

const Data = styled.div`
  padding-top: 2rem;
  margin: auto;
  padding-bottom: 3rem;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
    column-gap: 2rem;
  }
`;
const UserData = styled.div``;
const Address = styled.div``;
const Shipping = styled.div``;
const Payment = styled.div``;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const ConfirmCheckoutData = ({ checkoutData, setStep }: Props) => {
  return (
    <>
      <Title>Order Confirmation</Title>
      <Container>
        <Data>
          <UserData>
            <h3>Clients Data</h3>
            <hr />
            <p>Name: {checkoutData?.fitstName}</p>
            <p>Surname: {checkoutData?.lastName}</p>
          </UserData>
          <Address>
            <h3>Shipping Address</h3>
            <hr />
            <p>Address: {checkoutData?.address}</p>
            <p>Zip Code: {checkoutData?.zip}</p>
            <p>City: {checkoutData?.city}</p>
            <p>Country: {checkoutData?.country}</p>
          </Address>
          <Shipping>
            <h3>Shipping Method</h3>
            <hr />
            <p>{checkoutData?.shipping}</p>
          </Shipping>
          <Payment>
            <h3>Payment method</h3>
            <hr />
            <p>{checkoutData?.payment}</p>
          </Payment>
        </Data>
        <BtnsContainer>
          <button onClick={() => setStep((prev) => prev - 1)}>Back</button>
          <button>Place Order</button>
        </BtnsContainer>
      </Container>
    </>
  );
};

export default ConfirmCheckoutData;
