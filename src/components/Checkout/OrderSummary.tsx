import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../ContextProvider";
import { Title } from "./assets/atoms/CardsStyles";

const OrderContainer = styled.div`
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
  h4 {
    font-size: 1.5rem;
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
    width: 7.5rem;
  }
`;

const ItemsContainer = styled.div`
  overflow-y: scroll;
  height: 35rem;
  margin-bottom: 1rem;
`;

const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
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
              <ItemDetails>
                <h3>{item.title.slice(0, 15)}...</h3>
                <h3>${item.price}</h3>
              </ItemDetails>
            </Item>
          );
        })}
      </ItemsContainer>
      <h4>Order Total: $ {totalSum?.toFixed(2)}</h4>
      <button>Place Order</button>
    </OrderContainer>
  );
};

export default OrderSummary;
