import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../ContextProvider";

const OrderContainer = styled.div`
  width: 20rem;
  box-shadow: 0px 0px 24px -15px rgba(66, 68, 90, 1);
  border-radius: 15px;
  padding: 1rem;

  h2 {
    font-weight: 400;
    font-size: 0.9rem;
    margin: 1rem 0;
    text-transform: uppercase;
    color: grey;

    &:last-of-type {
      color: black;
    }
  }

  button {
    padding: 0.8rem 1.6rem;
    background-color: #00d0a9;
    border: none;
    border-radius: 15px;
    display: block;
    margin: auto;
    margin-top: 1.5rem;
    color: white;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;

  img {
    width: 4.5rem;
  }
  h3 {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #00d0a9;
  span {
    color: white;
    background-color: #00d0a9;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ItemsContainer = styled.div`
  height: 20rem;
  overflow-y: scroll;
`;

const OrderSummary = () => {
  const ctx = useContext(Context);
  const itemNumber = ctx?.cartList.reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);

  const totalSum = ctx?.cartList.reduce((accumulator, object) => {
    return accumulator + object.price * object.amount;
  }, 0);

  return (
    <OrderContainer>
      <Title>
        <span>1</span>
        <h1>Order Summary</h1>
      </Title>
      <h2>{itemNumber} items in cart</h2>
      <ItemsContainer>
        {ctx?.cartList.map((item) => {
          return (
            <Item>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <h3>${item.price}</h3>
            </Item>
          );
        })}
      </ItemsContainer>
      <h2>Order Total: $ {totalSum?.toFixed(2)} </h2>
      <button>Place Order</button>
    </OrderContainer>
  );
};

export default OrderSummary;
