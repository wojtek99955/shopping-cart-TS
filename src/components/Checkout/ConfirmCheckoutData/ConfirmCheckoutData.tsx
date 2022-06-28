import { CheckoutDataTypes } from "../assets/interfaces/Interfaces";
import { BtnsContainer } from "../assets/atoms/CardsStyles";
import { Context } from "../../../ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  DataContainer,
  Data,
  UserData,
  Address,
  Shipping,
  Payment,
  Title,
  CartItems,
  ItemContainer,
  ItemDescription,
  Wrapper,
  StyledButton,
  StyledLink,
  TotalCost,
  DataDetails,
  UpdateBtn,
} from "./ConfirmCheckoutDataStyles";

type Props = {
  checkoutData: CheckoutDataTypes | undefined;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const ConfirmCheckoutData = ({ checkoutData, setStep }: Props) => {
  const ctx = useContext(Context);
  const cartItems = ctx?.cartList;

  const itemsCost = ctx?.cartList.reduce((accumulator, object) => {
    return accumulator + object.price * object.amount;
  }, 0);

  return (
    <>
      <Title>Order Confirmation</Title>
      <DataContainer>
        <Data>
          <UserData>
            <h3>Clients Data</h3>
            <hr />
            <DataDetails>
              <div>
                <p>Name: {checkoutData?.fitstName}</p>
                <p>Surname: {checkoutData?.lastName}</p>
                <p>Email: {checkoutData?.email}</p>
              </div>
              <UpdateBtn onClick={() => setStep(1)}>Edit</UpdateBtn>
            </DataDetails>
          </UserData>
          <Address>
            <h3>Shipping Address</h3>
            <hr />
            <DataDetails>
              <div>
                <p>Address: {checkoutData?.address}</p>
                <p>Zip Code: {checkoutData?.zip}</p>
                <p>City: {checkoutData?.city}</p>
                <p>Country: {checkoutData?.country}</p>
              </div>
              <UpdateBtn onClick={() => setStep(1)}>Edit</UpdateBtn>
            </DataDetails>
          </Address>
          <Shipping>
            <h3>Shipping Method</h3>
            <hr />
            <DataDetails>
              <p>{checkoutData?.shipping}</p>
              <UpdateBtn onClick={() => setStep(3)}>Edit</UpdateBtn>
            </DataDetails>
          </Shipping>
          <Payment>
            <h3>Payment method</h3>
            <hr />
            <DataDetails>
              <p>{checkoutData?.payment}</p>
              <UpdateBtn onClick={() => setStep(2)}>Edit</UpdateBtn>
            </DataDetails>
          </Payment>
        </Data>
        <BtnsContainer>
          <button onClick={() => setStep((prev) => prev - 1)}>Back</button>
        </BtnsContainer>
      </DataContainer>
      <CartItems>
        {cartItems?.map((item) => {
          return (
            <ItemContainer key={item.id}>
              <Wrapper>
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
                <StyledLink to={`/product/${item.id}`}>
                  <ItemDescription>
                    <span>{item.title.slice(0, 15)}...</span>
                    <span>{item.description.slice(0, 15)}...</span>
                  </ItemDescription>
                </StyledLink>
                <p>{item.amount}</p>
                <strong>$ {item.price}</strong>
              </Wrapper>
              <hr />
            </ItemContainer>
          );
        })}
      </CartItems>
      <TotalCost>
        <div>
          <span>Subtotal: $</span>
          <span>{itemsCost?.toFixed(2)}</span>
        </div>
        <div>
          <span>Shipping: </span>
          <span>$12</span>
        </div>
        <div>
          <strong>Total:</strong>
          <strong>$ {(itemsCost && itemsCost + 12)?.toFixed(2)} </strong>
        </div>
        <StyledButton>Place Order</StyledButton>
      </TotalCost>
    </>
  );
};

export default ConfirmCheckoutData;
