import styled from "styled-components";
import { CheckoutDataTypes } from "../assets/interfaces/Interfaces";
import { BtnsContainer } from "../assets/atoms/CardsStyles";
import { device } from "../../../assets/media";
import { Context } from "../../../ContextProvider";
import { useContext } from "react";

type Props = {
  checkoutData: CheckoutDataTypes | undefined;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
const DataContainer = styled.div`
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

const CartItems = styled.div``;
const ItemContainer = styled.div`
  img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
  }
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const ConfirmCheckoutData = ({ checkoutData, setStep }: Props) => {
  const ctx = useContext(Context);
  const cartItems = ctx?.cartList;

  return (
    <>
      <Title>Order Confirmation</Title>
      <DataContainer>
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
      </DataContainer>
      <CartItems>
        {cartItems?.map((item) => {
          return (
            <ItemContainer key={item.id}>
              <Wrapper>
                <img src={item.image} alt={item.title} />
                <ItemDescription>
                  <h3>{item.title.slice(0, 15)}...</h3>
                  <p>{item.description.slice(0, 15)}...</p>
                </ItemDescription>
                <p>{item.amount}</p>
                <p>$ {item.price}</p>
              </Wrapper>
              <hr />
            </ItemContainer>
          );
        })}
      </CartItems>
    </>
  );
};

export default ConfirmCheckoutData;
