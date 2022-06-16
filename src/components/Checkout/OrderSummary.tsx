import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../ContextProvider";
import { Title } from "./assets/atoms/CardsStyles";

const OrderContainer = styled.div`
  width: 20rem;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
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
    cursor: pointer;

    &:hover {
      background-color: #008970;
    }
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
        <span>4</span>
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
